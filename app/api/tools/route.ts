"use server";
import { NextResponse } from "next/server";
import mergeJsonFiles from "./mergeJsonFiles";
export async function GET(request: Request) {
  const origin = request.headers.get("origin") || "";

  try {
    // Extract allowed domains from DB (assuming it's a string array)
    const allowedDomains: string[] = ["localhost"];
    const isAllowed =
      allowedDomains.includes(origin) || allowedDomains.includes("*");

    // const data = await jsonfile.readFile("./app/api/tools/data.json");
    const data = mergeJsonFiles("./app/api/tools/data");

    // return withCors(NextResponse.json(data[0]), isAllowed ? origin : "");
    return withCors(NextResponse.json(data), isAllowed ? origin : "*");
  } catch (error) {
    const err = error as Error;

    return withCors(
      NextResponse.json(
        { error: err?.message || "Internal server error" },
        { status: 500 }
      ),
      origin
    );
  }
}

// Helper function to set dynamic CORS headers
function withCors(response: NextResponse, allowedOrigin: string) {
  response.headers.set("Access-Control-Allow-Origin", allowedOrigin || "*");
  response.headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return response;
}
