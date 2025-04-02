import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { createClient } from '@supabase/supabase-js';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(request: NextRequest) {
  try {
    const { thought } = await request.json();

    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: thought }],
      model: 'gpt-3.5-turbo', // Staying lean for now
    });

    const aiResponse = completion.choices[0].message.content;

    // Insert loop into Supabase (using table name "loopz")
    const { data, error } = await supabase.from('loopz').insert({
      user_thought: thought,
      ai_reflection: aiResponse,
    });

    if (error) {
      console.error("Supabase Error:", error);
      return NextResponse.json({ error: "Database Error", details: error }, { status: 500 });
    }

    return NextResponse.json({ response: aiResponse });
  } catch (error) {
    console.error("Error calling OpenAI:", error);
    return NextResponse.json({ error: "Internal Server Error", details: error }, { status: 500 });
  }
}