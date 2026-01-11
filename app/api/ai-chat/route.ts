import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

function isAllowedOrigin(origin: string | null): boolean {
  if (!origin) return false; // not your case
  if (origin.startsWith("plugin://")) return true;
  if (origin === "https://adeolaade.com") return true;
  if (origin === "http://localhost:5173") return true;
  return false;
}

function corsHeaders(origin: string | null): {
  "Access-Control-Allow-Origin"?: string;
  Vary: string;
  "Access-Control-Allow-Methods"?: string;
  "Access-Control-Allow-Headers"?: string;
} {
  if (!isAllowedOrigin(origin))
    return {
      Vary: "Origin",
    };

  if (!origin)
    return {
      Vary: "Origin",
    };

  return {
    "Access-Control-Allow-Origin": origin,
    Vary: "Origin",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
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

  if (!headers["Access-Control-Allow-Origin"]) {
    return new NextResponse("CORS blocked", { status: 403 });
  }

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
