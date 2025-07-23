import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const postmarkApiKey = Deno.env.get('POSTMARK_API_KEY');
    if (!postmarkApiKey) {
      console.error('POSTMARK_API_KEY is not set');
      throw new Error('POSTMARK_API_KEY is not configured');
    }

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Calculate tomorrow's date range
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    
    // Set to start and end of tomorrow
    const tomorrowStart = new Date(tomorrow);
    tomorrowStart.setHours(0, 0, 0, 0);
    
    const tomorrowEnd = new Date(tomorrow);
    tomorrowEnd.setHours(23, 59, 59, 999);

    console.log('Checking for bookings on:', tomorrow.toDateString());

    // Query packout_services for bookings tomorrow
    const { data: bookings, error } = await supabase
      .from('packout_services')
      .select('*')
      .gte('booking_date', tomorrowStart.toISOString())
      .lte('booking_date', tomorrowEnd.toISOString());

    if (error) {
      console.error('Error fetching bookings:', error);
      throw error;
    }

    console.log(`Found ${bookings?.length || 0} bookings for tomorrow`);

    if (!bookings || bookings.length === 0) {
      return new Response(JSON.stringify({ 
        success: true, 
        message: 'No bookings found for tomorrow',
        reminders_sent: 0
      }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      });
    }

    let remindersSent = 0;

    // Send reminder emails for each booking
    for (const booking of bookings) {
      // Determine which email to use (prioritize claim_email for customer notifications)
      const recipientEmail = booking.claim_email || booking.contractor_email;
      
      console.log(`Processing booking ${booking.id}:`);
      console.log(`- contractor_email: ${booking.contractor_email}`);
      console.log(`- claim_email: ${booking.claim_email}`);
      console.log(`- chosen recipient: ${recipientEmail}`);
      
      if (!recipientEmail) {
        console.log(`No email found for booking ${booking.id}`);
        continue;
      }

      const recipientName = booking.claim_name || booking.contractor_name || 'Customer';
      const bookingDate = new Date(booking.booking_date);
      
      try {
        // Send email using Postmark API
        const postmarkResponse = await fetch('https://api.postmarkapp.com/email', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Postmark-Server-Token': postmarkApiKey,
          },
          body: JSON.stringify({
            From: 'CBRS Group <support@cbrsgroup.com>',
            To: recipientEmail,
            Subject: 'Reminder: Your Packout Service is Tomorrow - CBRS Group',
            HtmlBody: `
              <h2>Booking Reminder</h2>
              <p>Dear ${recipientName},</p>
              <p>This is a friendly reminder that your packout service is scheduled for <strong>tomorrow, ${bookingDate.toLocaleDateString()}</strong>.</p>
              <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
                <h3>Booking Details:</h3>
                <ul>
                  <li><strong>Service:</strong> ${booking.service || 'Packout Service'}</li>
                  <li><strong>Date:</strong> ${bookingDate.toLocaleDateString()}</li>
                  <li><strong>Time:</strong> ${bookingDate.toLocaleTimeString()}</li>
                  <li><strong>City:</strong> ${booking.city || 'N/A'}</li>
                </ul>
              </div>
              <p>Please ensure you're prepared for our team's arrival. If you need to reschedule or have any questions, please contact us as soon as possible.</p>
              <p>Thank you for choosing CBRS Group!</p>
              <p>Best regards,<br>The CBRS Group Team</p>
            `,
            TextBody: `Dear ${recipientName},\n\nThis is a reminder that your packout service is scheduled for tomorrow, ${bookingDate.toLocaleDateString()}.\n\nService: ${booking.service || 'Packout Service'}\nDate: ${bookingDate.toLocaleDateString()}\nTime: ${bookingDate.toLocaleTimeString()}\nCity: ${booking.city || 'N/A'}\n\nPlease contact us if you need to reschedule.\n\nBest regards,\nThe CBRS Group Team`,
            MessageStream: 'outbound'
          }),
        });

        if (!postmarkResponse.ok) {
          const errorData = await postmarkResponse.text();
          console.error(`Failed to send reminder to ${recipientEmail}:`, errorData);
          continue;
        }

        const result = await postmarkResponse.json();
        console.log(`Reminder sent successfully to ${recipientEmail}:`, result.MessageID);
        remindersSent++;

      } catch (emailError) {
        console.error(`Error sending reminder to ${recipientEmail}:`, emailError);
      }
    }

    return new Response(JSON.stringify({ 
      success: true, 
      message: `Processed ${bookings.length} bookings, sent ${remindersSent} reminders`,
      bookings_found: bookings.length,
      reminders_sent: remindersSent
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });

  } catch (error: any) {
    console.error("Error in send-booking-reminders function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);