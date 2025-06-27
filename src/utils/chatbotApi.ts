
export const sendChatMessage = async (message: string) => {
  const WEBHOOK_URL = 'https://n8n2.team-workspace.us/webhook-test/279dac00-cf5d-4e83-b047-99c8cba9230b';

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'no-cors', // This handles CORS issues
      body: JSON.stringify({
        message: message,
        timestamp: new Date().toISOString(),
        source: "cbrs-chatbot",
        user_id: `user_${Date.now()}`,
      }),
    });

    // With no-cors mode, we can't read the response, so we assume success
    // and return a default response
    return { 
      reply: "Thank you for your message. Our support team will get back to you shortly." 
    };
  } catch (error) {
    console.error('[Chatbot API] Error:', error);
    throw new Error('Failed to contact support bot');
  }
};
