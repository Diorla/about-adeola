import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

// Allowed origins
const ALLOWED_ORIGINS = [
  "https://adeolaade.com",
  "http://localhost:5173",
  "plugin://",
];

function corsHeaders(origin: string | null) {
  const allowed = origin && ALLOWED_ORIGINS.some((o) => origin.startsWith(o));

  return {
    "Access-Control-Allow-Origin": allowed ? origin : "https://adeolaade.com",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Credentials": "true",
  };
}

export async function OPTIONS(req: NextRequest) {
  const origin = req.headers.get("origin");

  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders(origin),
  });
}

export async function POST(req: NextRequest) {
  const origin = req.headers.get("origin");
  const headers = corsHeaders(origin);

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

  return NextResponse.json(
    { content: completion.choices[0].message.content },
    { headers }
  );
}
