import Link from "next/link";
import React from "react";

const CardQuiz = () => (
  <div className="bg-white rounded-2xl shadow-lg w-full max-w-4xl mx-auto px-10 py-8 mt-4">
    <h2 className="text-2xl font-bold text-[#7C3AED] mb-4">Quiz Mingguan</h2>
    <div className="bg-[#D1B3FF] bg-opacity-60 rounded-lg px-4 py-3 mb-4">
      <span className="text-[#4B2ED5] font-semibold text-base">
        Selesaikan quiz mingguan untuk menambah kemajuan belajar
      </span>
    </div>
    <Link
      href="/belajar/quiz"
      className="w-full border border-[#7C3AED] text-[#7C3AED] rounded-md py-2 px-4 flex items-center justify-between hover:bg-[#F3E8FF] transition text-sm font-medium"
    >
      <span>Mulai Quiz</span>
      <span className="ml-2 text-lg">&#8594;</span>
    </Link>
  </div>
);

export default CardQuiz;
