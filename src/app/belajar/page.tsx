import Article from "@/components/common/article";
import Navbar from "@/components/common/main-navbar";
import Footer from "@/components/common/main-footer";
import CardProgres from "@/components/belajar/card-progres";
import CardQuiz from "@/components/belajar/card-quiz";
import { cookies } from "next/headers";
import { fetchQuizzes, getQuizHistory } from "@/services/quiz-service";

export default async function belajar() {
  const cookieStore = cookies();
  const token = (await cookieStore).get("api_token")?.value || "";
  const quizzes = await fetchQuizzes(token);
  const history = await getQuizHistory(token);

  return (
    <div className="bg-[#FAEFFF] ">
      <Navbar />
      <br />
      <div className="col items-center justify-center ">
        <CardProgres quizzes={quizzes} history={history} />
        <CardQuiz quizzes={quizzes} />
        <br />
        <Article />
        <br />
        <Footer />
      </div>
    </div>
  );
}