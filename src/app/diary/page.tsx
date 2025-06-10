"use client";

import MoodChart from "../../components/diary/moodChart";
import MoodDisplay from "../../components/diary/moodDisplay";
import MoodCalendar from "../../components/diary/moodCalendar";
import InputMood from "../../components/diary/inputMood";
import Navbar from "@/components/common/main-navbar";
import Footer from "@/components/common/main-footer";

export default function DiaryPage() {
  return (
    <div className="bg-[#FAEFFF] ">
      <Navbar></Navbar>
    <div className="col items-center justify-center">
    

      {/* Widget InputMood */}
      <InputMood/>

      {/* Widget MoodCalendar */}
      <MoodCalendar/>

      {/* Widget MoodChart */}
      <MoodChart />

      {/* Widget MoodDisplay */}
      <MoodDisplay />

      <Footer />
    </div>
    </div>
  );
}
