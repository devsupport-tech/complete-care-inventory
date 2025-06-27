
export const sendChatMessage = async (message: string) => {
  const WEBHOOK_URL = 'https://n8n2.team-workspace.us/webhook/fb0edcb1-b160-4ffc-9997-3f79ccc89a83';

  try {
    console.log('Attempting to send message to n8n webhook:', message);
    
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

    console.log('Response status:', response.status);
    console.log('Response ok:', response.ok);

    // Since we're using no-cors mode, we can't read the actual response
    // Return a generic success message
    return { 
      reply: "Message sent successfully! Our team will get back to you shortly." 
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
    
    return {
      reply: "I'm experiencing technical difficulties connecting to our chat system. Please contact us directly using the phone number on our website or schedule a service through our booking form. Our team is ready to help you!"
    };
  }
};
