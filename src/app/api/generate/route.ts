import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { from, to, message } = await req.json();

    // if content missing or not string, return error
    if (!message || typeof message !== 'string' || !from || typeof from !== 'string' || !to || typeof to !== 'string') {
      return NextResponse.json({ error: 'Invalid message content' }, { status: 400 });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'Missing OPENAI_API_KEY' }, { status: 500 });
    }

    const prompt = `Write a short friendly postcard message from ${from || 'Someone'} to ${to || 'a friend'} based on the message content: "${message}". Keep it personal, concise (few sentences, no more than 500 characters), and warm.`;

    // Try OpenAI API first
    const resp = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a helpful assistant that writes short postcard messages.' },
          { role: 'user', content: prompt },
        ],
      }),
    });

    // OpeanAI API error => Switch to Gemini API
    if (!resp.ok) {
      console.error('OpenAI API error', await resp.text());

      // Try Gemini API
      const gemini_key = process.env.GEMINI_API_KEY;
      if (!gemini_key) {
        return NextResponse.json({ error: 'Failed to generate message via OpenAI API and missing GEMINI_API_KEY for fallback' }, { status: 500 });
      }

      const geminiResp = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=' + gemini_key, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                { text: prompt }
              ]
            }
          ],
        }),
      });

      // Gemini API error
      if (!geminiResp.ok) {
        console.error('Gemini API error', await geminiResp.text());
        return NextResponse.json({ error: 'Failed to generate message via both OpenAI and Gemini APIs' }, { status: 500 });
      }
      
      // Gemini API success
      const geminiData = await geminiResp.json();
      const message_gemini = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ?? '';
      return NextResponse.json({ message: message_gemini });
    } else {
      // OpeanAI API success
      const data = await resp.json();
      const message_ai = data?.choices?.[0]?.message?.content?.trim() ?? '';
      return NextResponse.json({ message: message_ai });
    }

  } catch (err: any) {
    return NextResponse.json({ error: err.message || String(err) }, { status: 500 });
  }
}
