import CardQuiz from "@/components/belajar/card-quiz";
import BtnFasKes from "@/components/beranda/Btn-fasilitaskesehatan";
import BtnGejala from "@/components/beranda/btn-gejala";
import BtnMood from "@/components/beranda/btn-mood";
import CardUmur from "@/components/beranda/card-umur";
import Footer from "@/components/common/main-footer";
import Navbar from "@/components/common/main-navbar";
import { fetchQuizzes } from "@/services/quiz-service";
import { cookies } from "next/headers";

export default async function beranda() {
  const cookieStore = cookies();
    const token = (await cookieStore).get("api_token")?.value || "";
    const quizzes = await fetchQuizzes(token);
  return (
    
    <div className="bg-[#FAEFFF]  ">
      <Navbar/>
      <br />
      <div className="flex flex-col items-center justify-center gap-8">
        
      <CardUmur/>
      <BtnMood/>
      <BtnGejala/>
      <BtnFasKes/>
      <CardQuiz quizzes={quizzes} />
      
      </div>
      <br />
      <Footer/>
    </div>
  );
}