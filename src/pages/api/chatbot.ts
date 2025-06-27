import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const WEBHOOK_URL = "https://n8n2.team-workspace.us/webhook-test/279dac00-cf5d-4e83-b047-99c8cba9230b";

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    const data = await response.text(); // or response.json() if webhook returns JSON
    res.status(200).send(data);
  } catch (error) {
    console.error("[Chatbot API] Error:", error);
    res.status(500).json({ error: "Failed to contact support bot" });
  }
}
