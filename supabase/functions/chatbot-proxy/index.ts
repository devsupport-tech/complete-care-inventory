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

    // Forward the request to your webhook using GET with query parameter
    const webhookUrl = new URL('https://n8n2.team-workspace.us/webhook-test/CBRS')
    webhookUrl.searchParams.set('message', message)
    
    const response = await fetch(webhookUrl.toString(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    console.log('Webhook response status:', response.status)
    console.log('Webhook response headers:', Object.fromEntries(response.headers.entries()))
    
    const responseText = await response.text()
    console.log('Webhook raw response:', responseText)

    let data
    try {
      data = JSON.parse(responseText)
    } catch (parseError) {
      console.error('Failed to parse webhook response as JSON:', parseError)
      console.log('Response was:', responseText.substring(0, 500))
      
      return new Response(
        JSON.stringify({ 
          response: 'Sorry, there was an error processing your request. The webhook returned an invalid response.' 
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
    return new Response(
      JSON.stringify({ 
        response: 'Sorry, there was an error processing your request.' 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      },
    )
  }
})