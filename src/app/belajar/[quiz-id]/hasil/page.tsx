
import { cookies } from "next/headers";
import { getQuizHistory } from "@/services/quiz-service";
import CardHasil from "@/components/belajar/card-hasil";

interface QuizHistory {
  quizId: string;
  title: string;
  score: number;
  total: number;
  date: string;
  complete: string;
}

export default async function QuizHasilPage({ 
  params 
}: { 
  params: Promise<{ "quiz-id": string }>
}) {
  // Tunggu params diselesaikan terlebih dahulu
  const resolvedParams = await params;
  const quizId = resolvedParams["quiz-id"];
  
  const cookieStore = cookies();
  const token = (await cookieStore).get("api_token")?.value || "";
  const history: QuizHistory[] = await getQuizHistory(token);

  // Ambil history terakhir untuk quizId ini
  const quizResult = history.find((h) => h.quizId === quizId);

  return (
    <div className="bg-[#FAEFFF] min-h-screen">
      <CardHasil result={quizResult} />
    </div>
  );
}