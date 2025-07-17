import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { message } = await req.json()
    console.log('Received message:', message)

    // Forward the request to your n8n webhook
    console.log('Calling n8n webhook:', 'https://n8n2.team-workspace.us:5678/webhook/46ea0fc1-9d73-4c5a-9aa6-cd5871878dd6/chat')
    
    const response = await fetch('https://n8n2.team-workspace.us:5678/webhook/46ea0fc1-9d73-4c5a-9aa6-cd5871878dd6/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      })

    console.log('Webhook response status:', response.status)
    console.log('Webhook response headers:', Object.fromEntries(response.headers.entries()))
    
    if (!response.ok) {
      console.error('Webhook returned non-OK status:', response.status, response.statusText)
      
      // Try to get error details
      const errorText = await response.text()
      console.error('Webhook error response:', errorText)
      
      return new Response(
        JSON.stringify({ 
          response: 'Sorry, the chat service is currently unavailable. Please try again later.',
          error: `Webhook returned ${response.status}: ${response.statusText}`
        }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        },
      )
    }
    
    const responseText = await response.text()
    console.log('Webhook raw response:', responseText)

    // If the response is empty, return a default message
    if (!responseText || responseText.trim() === '') {
      console.log('Empty response from webhook')
      return new Response(
        JSON.stringify({ 
          response: 'I received your message but have no response at the moment.' 
        }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        },
      )
    }

    let data
    try {
      data = JSON.parse(responseText)
    } catch (parseError) {
      console.error('Failed to parse webhook response as JSON:', parseError)
      console.log('Response was:', responseText.substring(0, 500))
      
      // If it's not JSON, treat it as plain text response
      return new Response(
        JSON.stringify({ 
          response: responseText 
        }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        },
      )
    }

    return new Response(
      JSON.stringify(data),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      },
    )
  } catch (error) {
    console.error('Error forwarding to webhook:', error)
    console.error('Error details:', error.message, error.stack)
    
    return new Response(
      JSON.stringify({ 
        response: 'Sorry, there was an error processing your request. Please try again later.',
        error: error.message
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      },
    )
  }
})