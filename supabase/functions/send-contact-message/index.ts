import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import React from 'npm:react@18.3.1';
import { renderAsync } from 'npm:@react-email/components@0.0.22';
import { ContactMessageEmail } from './_templates/contact-message.tsx';
import { ThankYouEmail } from './_templates/thank-you-email.tsx';

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactMessageRequest {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

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

    const { name, email, phone, message }: ContactMessageRequest = await req.json();
    
    console.log('Sending contact message notification to support@cbrsgroup.com');

    // Render the React Email templates
    const notificationEmailHtml = await renderAsync(
      React.createElement(ContactMessageEmail, {
        name,
        email,
        phone,
        message
      })
    );

    const thankYouEmailHtml = await renderAsync(
      React.createElement(ThankYouEmail, {
        name
      })
    );

    // Send notification email to CBRS Group support
    const notificationResponse = await fetch('https://api.postmarkapp.com/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Postmark-Server-Token': postmarkApiKey,
      },
      body: JSON.stringify({
        From: 'support@cbrsgroup.com',
        To: 'support@cbrsgroup.com',
        Subject: `New Contact Form Message from ${name}`,
        HtmlBody: notificationEmailHtml,
        TextBody: `New contact form message from ${name} (${email})${phone ? `, Phone: ${phone}` : ''}\n\nMessage:\n${message}`,
        MessageStream: 'outbound'
      }),
    });

    if (!notificationResponse.ok) {
      const errorData = await notificationResponse.text();
      console.error('Postmark API error (notification):', errorData);
      console.error('Response status:', notificationResponse.status);
      throw new Error(`Postmark API error: ${notificationResponse.status} - ${errorData}`);
    }

    const notificationResult = await notificationResponse.json();
    console.log('Notification email sent successfully via Postmark:', notificationResult);

    // Send thank you email to the user
    const thankYouResponse = await fetch('https://api.postmarkapp.com/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Postmark-Server-Token': postmarkApiKey,
      },
      body: JSON.stringify({
        From: 'support@cbrsgroup.com',
        To: email,
        Subject: 'Thank you for contacting CBRS Group',
        HtmlBody: thankYouEmailHtml,
        TextBody: `Dear ${name},\n\nThank you for reaching out to CBRS Group. We have received your message and appreciate you taking the time to contact us.\n\nOur team will review your inquiry and get back to you as soon as possible. We typically respond within 24 hours during business days.\n\nIf you have any urgent questions or need immediate assistance, please don't hesitate to call us at (832) 632-7225.\n\nThank you for choosing CBRS Group for your contractor support needs.\n\nBest regards,\nThe CBRS Group Team`,
        MessageStream: 'outbound'
      }),
    });

    if (!thankYouResponse.ok) {
      const errorData = await thankYouResponse.text();
      console.error('Postmark API error (thank you):', errorData);
      console.error('Response status:', thankYouResponse.status);
      // Don't throw error for thank you email failure, just log it
      console.warn('Thank you email failed to send, but notification email was successful');
    } else {
      const thankYouResult = await thankYouResponse.json();
      console.log('Thank you email sent successfully via Postmark:', thankYouResult);
    }

    return new Response(JSON.stringify({ 
      success: true, 
      messageId: notificationResult.MessageID 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-message function:", error);
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