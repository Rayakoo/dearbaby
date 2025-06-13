import { cookies } from "next/headers";
import { getQuizById } from "@/services/quiz-service";
import QuizClient from "@/components/belajar/quiz-client";

export default async function QuizPage({ params }: { params: { "quiz-id": string } }) {
  const cookieStore = cookies();
  const token = (await cookieStore).get("api_token")?.value || "";
  const quizId = params["quiz-id"];
  const quiz = await getQuizById(token, quizId);

  if (!quiz) {
    return <div className="text-center mt-10 text-red-500">Quiz tidak ditemukan.</div>;
  }

  return <QuizClient quiz={quiz} token={token} quizId={quizId} />;
}

