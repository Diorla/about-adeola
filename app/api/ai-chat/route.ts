import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: NextRequest) {
  const { profile, document, messages } = await req.json();

  const systemPrompt = `
You are acting as ${profile.name}.
${profile.description}

Rules:
- Analyze ONLY the document provided
- Do not assume information outside it
- If something is missing, say so explicitly
`;

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: systemPrompt },
      {
        role: "system",
        content: `DOCUMENT:\n${document.fileContent}`,
      },
      ...messages,
    ],
    temperature: 0.4,
  });

  return NextResponse.json({
    content: completion.choices[0].message.content,
  });
}
