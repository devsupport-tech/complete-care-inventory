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

    // Test if we can reach the n8n webhook
    console.log('Testing n8n webhook connectivity...')
    
    try {
      const response = await fetch('https://n8n2.team-workspace.us:5678/webhook/46ea0fc1-9d73-4c5a-9aa6-cd5871878dd6/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'Supabase-Edge-Function/1.0',
        },
        body: JSON.stringify({ message }),
      })

      console.log('Webhook response status:', response.status)
      console.log('Webhook response ok:', response.ok)
      
      const responseText = await response.text()
      console.log('Webhook response text:', responseText)

      // Return the response regardless of status for debugging
      return new Response(
        JSON.stringify({ 
          debug: {
            status: response.status,
            statusText: response.statusText,
            headers: Object.fromEntries(response.headers.entries()),
            body: responseText
          },
          response: responseText || 'No response from webhook'
        }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        },
      )
      
    } catch (fetchError) {
      console.error('Fetch error:', fetchError)
      
      return new Response(
        JSON.stringify({ 
          response: 'Connection failed to n8n webhook',
          error: fetchError.message,
          errorType: 'network'
        }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        },
      )
    }
    
  } catch (error) {
    console.error('General error:', error)
    
    return new Response(
      JSON.stringify({ 
        response: 'Server error occurred',
        error: error.message,
        errorType: 'server'
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      },
    )
  }
})