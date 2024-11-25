import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateText } from "ai";
import { NextResponse } from "next/server";

// const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || "");
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY || "",
  // custom settings
});

export const runtime = "edge";

export async function POST(req: Request): Promise<NextResponse> {
  const { messages } = await req.json();

  const result = await generateText({
    model: google("gemini-1.5-flash"),
    messages: [
      {
        role: "user",
        content: messages.map((item: { content: string }) => {
          return {
            type: "text",
            text: item.content,
          };
        }),
      },
    ],
  });

  console.log("messages", result.text);

  return NextResponse.json(result.text, {
    status: 200,
  });
}
