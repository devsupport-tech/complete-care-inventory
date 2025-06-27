
export const sendChatMessage = async (message: string) => {
  const WEBHOOK_URL = 'https://n8n2.team-workspace.us/webhook-test/279dac00-cf5d-4e83-b047-99c8cba9230b';

  try {
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

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.text();
    return { reply: data };
  } catch (error) {
    console.error('[Chatbot API] Error:', error);
    throw new Error('Failed to contact support bot');
  }
};
