"use client";
import CardQuiz from "@/components/belajar/card-quiz";
import BtnFasKes from "@/components/beranda/Btn-fasilitaskesehatan";
import BtnGejala from "@/components/beranda/btn-gejala";
import BtnMood from "@/components/beranda/btn-mood";
import CardUmur from "@/components/beranda/card-umur";
import Footer from "@/components/common/main-footer";
import Navbar from "@/components/common/main-navbar";
import ProfileCard from "@/components/profile/profile-card";

export default function profile() {
  const data = "";
  return (
    <div className="bg-[#FAEFFF]  ">
      <Navbar/>
      <br />
      <div className="flex flex-col items-center justify-center gap-8">
    <ProfileCard/>
      
      
      
      </div>
      <br />
      <Footer/>
    </div>
  );
}