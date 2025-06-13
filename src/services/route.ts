import { NextResponse } from "next/server";

export async function DELETE() {
  const response = NextResponse.json({ message: "Cookie deleted" });
  response.headers.set(
    "Set-Cookie",
    "api_token=deleted; Max-Age=0; Path=/;"
  );
  return response;
}
