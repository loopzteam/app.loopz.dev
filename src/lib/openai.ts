// src/lib/openai.ts
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true, // required for client-side calls (or use server-side API routes later)
});

export async function getAIResponse(prompt: string) {
  const response = await openai.chat.completions.create({
    model: "gpt-4-turbo",
    messages: [
      { role: "system", content: "You are Loopz, an AI-powered cognitive coach. Provide helpful, structured, actionable guidance." },
      { role: "user", content: prompt },
    ],
  });

  return response.choices[0].message.content;
}