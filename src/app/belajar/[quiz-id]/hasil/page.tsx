import { cookies } from "next/headers";
import { getQuizHistory } from "@/services/quiz-service";
import CardHasil from "@/components/belajar/card-hasil";

export default async function QuizHasilPage({ params }: { params: { "quiz-id": string } }) {
  const cookieStore = cookies();
  const token = (await cookieStore).get("api_token")?.value || "";
  const quizId = params["quiz-id"];
  const history = await getQuizHistory(token);

  // Ambil history terakhir untuk quizId ini
  const quizResult = history.find((h: any) => h.quizId === quizId);

  return (
    <div className="bg-[#FAEFFF] min-h-screen">
      <CardHasil
        result={quizResult}
      />
    </div>
  );
}