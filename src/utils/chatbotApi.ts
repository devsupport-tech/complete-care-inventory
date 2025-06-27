
export const sendChatMessage = async (message: string) => {
  const WEBHOOK_URL = 'https://n8n2.team-workspace.us/webhook-test/279dac00-cf5d-4e83-b047-99c8cba9230b';

  try {
    console.log('Attempting to send message to n8n webhook:', message);
    
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: message,
        timestamp: new Date().toISOString(),
        source: "cbrs-chatbot",
        user_id: `user_${Date.now()}`,
      }),
    });

    console.log('Response status:', response.status);
    console.log('Response ok:', response.ok);

    if (!response.ok) {
      console.error('Webhook request failed with status:', response.status);
      throw new Error(`Webhook failed with status ${response.status}`);
    }

    // Try to read the response if possible
    let responseData;
    try {
      responseData = await response.json();
      console.log('Webhook response data:', responseData);
    } catch (e) {
      console.log('Could not parse response as JSON, treating as text');
      responseData = await response.text();
    }

    return { 
      reply: "Thank you for your message! We've received your inquiry and our support team will get back to you shortly. In the meantime, feel free to call us directly or schedule a service through our booking system." 
    };
    
  } catch (error) {
    console.error('[Chatbot API] Error details:', error);
    
    // Handle CORS errors specifically
    if (error instanceof TypeError && error.message.includes('fetch')) {
      console.error('CORS or network error detected');
      return {
        reply: "I'm having trouble connecting to our chat system right now. This might be due to network restrictions. Please contact us directly at our phone number or use our service booking form, and we'll get back to you right away!"
      };
    }
    
    if (error instanceof Error && error.message.includes('404')) {
      return {
        reply: "We're currently updating our chat system. Please contact us directly at our phone number or use our service booking form to get in touch with our team. We apologize for the inconvenience!"
      };
    }
    
    return {
      reply: "I'm experiencing technical difficulties connecting to our chat system. Please contact us directly using the phone number on our website or schedule a service through our booking form. Our team is ready to help you!"
    };
  }
};
