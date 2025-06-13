import { NextRequest, NextResponse } from "next/server";
import { submitQuizAnswers } from "@/services/quiz-service";

export async function POST(req: NextRequest) {
  const { token, quizId, answers } = await req.json();
  const result = await submitQuizAnswers(token, quizId, { answers });
  return NextResponse.json(result);
}
