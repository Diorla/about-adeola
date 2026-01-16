import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

if (!process.env.OPENAI_API_KEY) {
  console.error(
    "OpenAI API key is missing. Please add OPENAI_API_KEY to your environment variables."
  );
}

type ContextDoc = {
  fileContent: string;
  filePath: string;
};

export async function POST(req: NextRequest) {
  if (!process.env.OPENAI_API_KEY) {
    return Response.json(
      {
        error:
          "OpenAI API key is not configured. Please add OPENAI_API_KEY to your environment variables in Project Settings.",
      },
      { status: 500 }
    );
  }

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const {
    profile,
    document,
    contextDocs = [],
    messages,
  }: {
    profile: { name: string; description: string };
    document: { fileContent: string; filePath?: string };
    contextDocs?: ContextDoc[];
    messages: { role: "user" | "assistant" | "system"; content: string }[];
  } = await req.json();

  const systemPrompt = `
You are acting as ${profile.name}.
${profile.description}

Rules:
- Analyze ONLY the documents provided below
- Do not assume information outside them
- If something is missing or unclear, say so explicitly
`;

  const contextMessages = contextDocs.map((doc) => ({
    role: "system" as const,
    content: `CONTEXT DOCUMENT (${doc.filePath}):\n${doc.fileContent}`,
  }));

  const completion = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      { role: "system", content: systemPrompt },
      {
        role: "system",
        content: `PRIMARY DOCUMENT${
          document.filePath ? ` (${document.filePath})` : ""
        }:\n${document.fileContent}`,
      },
      ...contextMessages,
      ...messages,
    ],
    temperature: 0.4,
  });

  return NextResponse.json({
    content: completion.choices[0].message.content,
  });
}
