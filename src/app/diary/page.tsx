"use client";

import MoodChart from "./moodChart";
import MoodDisplay from "./moodDisplay";
import MoodCalendar from "./moodCalendar";
import InputMood from "./inputMood";
import Navbar from "@/components/common/main-navbar";

export default function DiaryPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-5">
    <Navbar></Navbar>

      {/* Widget InputMood */}
      <InputMood/>

      {/* Widget MoodCalendar */}
      <MoodCalendar/>

      {/* Widget MoodChart */}
      <MoodChart />

      {/* Widget MoodDisplay */}
      <MoodDisplay />
    </div>
  );
}
