
import Article from "@/components/common/article";
import Navbar from "@/components/common/main-navbar";
import Footer from "@/components/common/main-footer";
import CardProgres from "@/components/belajar/card-progres";
import CardQuiz from "@/components/belajar/card-quiz";

export default function belajar() {
  const data = "";
  return (
    <div className="bg-[#FAEFFF] p-5">
        
      <Navbar />
      <br />
       <div className="col items-center justify-center ">
      <CardProgres />
     
      <CardQuiz />
      <br />
      <Article/>
      <br />
      <Footer/>
      </div>
    </div>
  );
}