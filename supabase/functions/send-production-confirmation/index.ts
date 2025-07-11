import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import React from 'npm:react@18.3.1';
import { renderAsync } from 'npm:@react-email/components@0.0.22';
import { ProductionConfirmationEmail } from './_templates/production-confirmation.tsx';

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ProductionEmailRequest {
  name: string;
  email: string;
  service: string;
  city?: string;
  message?: string;
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

    const { name, email, service, city, message }: ProductionEmailRequest = await req.json();
    
    console.log('Sending production confirmation email to:', email);

    // Render the React Email template
    const emailHtml = await renderAsync(
      React.createElement(ProductionConfirmationEmail, {
        name,
        service,
        city,
        message
      })
    );

    // Send email using Postmark API
    const postmarkResponse = await fetch('https://api.postmarkapp.com/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Postmark-Server-Token': postmarkApiKey,
      },
      body: JSON.stringify({
        From: 'noreply@cbrsgroup.com',
        To: email,
        Subject: 'Production Management Service Request Received - CBRS Group',
        HtmlBody: emailHtml,
        TextBody: `Hi ${name},\n\nWe've received your ${service} request and our team will reach out shortly.\n\n— CBRS Group`,
        MessageStream: 'outbound'
      }),
    });

    if (!postmarkResponse.ok) {
      const errorData = await postmarkResponse.text();
      console.error('Postmark API error:', errorData);
      throw new Error(`Postmark API error: ${postmarkResponse.status} ${errorData}`);
    }

    const result = await postmarkResponse.json();
    console.log('Email sent successfully via Postmark:', result);

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
    console.error("Error in send-production-confirmation function:", error);
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