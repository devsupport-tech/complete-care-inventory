
export const sendChatMessage = async (message: string) => {
  const WEBHOOK_URL = 'https://n8n2.team-workspace.us/webhook-test/279dac00-cf5d-4e83-b047-99c8cba9230b';

  try {
    console.log('Attempting to send message to n8n webhook:', message);
    
    // Try the fetch request with no-cors mode
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'no-cors',
      body: JSON.stringify({
        message: message,
        timestamp: new Date().toISOString(),
        source: "cbrs-chatbot",
        user_id: `user_${Date.now()}`,
      }),
    });

    console.log('Fetch request completed');
    
    // Since no-cors mode doesn't allow reading the response,
    // we'll assume success and return a helpful message
    return { 
      reply: "Thank you for your message! We've received your inquiry and our support team will get back to you shortly. In the meantime, feel free to call us directly or schedule a service through our booking system." 
    };
    
  } catch (error) {
    console.error('[Chatbot API] Network error:', error);
    
    // If the fetch fails due to CSP or network issues,
    // we'll still provide a helpful response to the user
    return {
      reply: "We're currently experiencing technical difficulties with our chat system. Please contact us directly at your phone number or use our service booking form to get in touch with our team."
    };
  }
};
