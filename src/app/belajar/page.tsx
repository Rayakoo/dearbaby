import Article from "@/components/common/article";
import Navbar from "@/components/common/main-navbar";
import Footer from "@/components/common/main-footer";
import CardProgres from "@/components/belajar/card-progres";
import CardQuiz from "@/components/belajar/card-quiz";

export default function belajar() {
  const data = "";
  return (
    <div className="bg-[#FAEFFF]">
      <Navbar />
      <CardProgres />
      <CardQuiz />
      <Article/>
      <Footer/>
    </div>
  );
}