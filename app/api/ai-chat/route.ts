import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

type ContextDoc = {
  fileContent: string;
  filePath: string;
};

export async function POST(req: NextRequest) {
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
    model: "gpt-4o-mini",
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
