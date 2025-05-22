"use client";
import CardJawaban from "@/components/belajar/card-jawaban";
import CardSoal from "@/components/belajar/card-soal";

export default function Quiz() {
  return (
    <div className="bg-[#FFE6F7] min-h-screen flex items-center justify-center">
      <div className="items-center ">
        <CardSoal />
        <CardJawaban />
      </div>
    </div>
  );
}
