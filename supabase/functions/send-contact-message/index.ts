import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import React from 'npm:react@18.3.1';
import { renderAsync } from 'npm:@react-email/components@0.0.22';
import { ContactMessageEmail } from './_templates/contact-message.tsx';

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

    // Render the React Email template
    const emailHtml = await renderAsync(
      React.createElement(ContactMessageEmail, {
        name,
        email,
        phone,
        message
      })
    );

    // Send notification email to CBRS Group support
    const postmarkResponse = await fetch('https://api.postmarkapp.com/email', {
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
        HtmlBody: emailHtml,
        TextBody: `New contact form message from ${name} (${email})${phone ? `, Phone: ${phone}` : ''}\n\nMessage:\n${message}`,
        MessageStream: 'outbound'
      }),
    });

    if (!postmarkResponse.ok) {
      const errorData = await postmarkResponse.text();
      console.error('Postmark API error:', errorData);
      console.error('Response status:', postmarkResponse.status);
      console.error('Response headers:', Object.fromEntries(postmarkResponse.headers.entries()));
      throw new Error(`Postmark API error: ${postmarkResponse.status} - ${errorData}`);
    }

    const result = await postmarkResponse.json();
    console.log('Contact message sent successfully via Postmark:', result);

    return new Response(JSON.stringify({ 
      success: true, 
      messageId: result.MessageID 
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