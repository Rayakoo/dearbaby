"use client";
import CardQuiz from "@/components/belajar/card-quiz";
import BtnFasKes from "@/components/beranda/Btn-fasilitaskesehatan";
import BtnGejala from "@/components/beranda/btn-gejala";
import BtnMood from "@/components/beranda/btn-mood";
import CardUmur from "@/components/beranda/card-umur";
import Footer from "@/components/common/main-footer";
import Navbar from "@/components/common/main-navbar";

export default function beranda() {
  const data = "";
  return (
    <div className="bg-[#FAEFFF] p-5 ">
      <Navbar/>
      <br />
      <div className="flex flex-col items-center justify-center gap-8">
        
      <CardUmur/>
      <BtnMood/>
      <BtnGejala/>
      <BtnFasKes/>
      <CardQuiz/>
      
      </div>
      <br />
      <Footer/>
    </div>
  );
}