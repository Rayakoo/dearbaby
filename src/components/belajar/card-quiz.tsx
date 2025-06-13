"use client";
import Link from "next/link";
import React, { useState } from "react";

interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: {
    id: string;
    question: string;
    options: string[];
  }[];
}

interface CardQuizProps {
  quizzes: Quiz[];
}

const CardQuiz: React.FC<CardQuizProps> = ({ quizzes }) => {
  const [index, setIndex] = useState(0);

  if (!quizzes || quizzes.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-4xl mx-auto px-10 py-8 mt-4">
        <h2 className="text-2xl font-bold text-[#7C3AED] mb-4">Quiz Mingguan</h2>
        <div className="text-gray-500">Tidak ada quiz tersedia.</div>
      </div>
    );
  }

  const quiz = quizzes[index];

  return (
    <div className="bg-white rounded-2xl shadow-lg w-full max-w-4xl mx-auto px-10 py-8 mt-4">
      <h2 className="text-2xl font-bold text-[#7C3AED] mb-4">Quiz Mingguan</h2>
      <div className="bg-[#D1B3FF] bg-opacity-60 rounded-lg px-4 py-3 mb-4">
        <span className="text-[#4B2ED5] font-semibold text-base">
          {quiz.title}
        </span>
        <div className="text-gray-700 text-sm mt-2">{quiz.description}</div>
      </div>
      <div className="flex justify-between items-center mb-4">
        <button
          className="px-4 py-2 rounded bg-purple-200 text-purple-700 font-semibold disabled:opacity-50"
          onClick={() => setIndex((prev) => Math.max(0, prev - 1))}
          disabled={index === 0}
        >
          Prev
        </button>
        <span className="text-sm text-gray-500">
          {index + 1} / {quizzes.length}
        </span>
        <button
          className="px-4 py-2 rounded bg-purple-200 text-purple-700 font-semibold disabled:opacity-50"
          onClick={() => setIndex((prev) => Math.min(quizzes.length - 1, prev + 1))}
          disabled={index === quizzes.length - 1}
        >
          Next
        </button>
      </div>
      <Link
        href={`/belajar/${quiz.id}`}
        className="w-full border border-[#7C3AED] text-[#7C3AED] rounded-md py-2 px-4 flex items-center justify-between hover:bg-[#F3E8FF] transition text-sm font-medium"
      >
        <span>Mulai Quiz</span>
        <span className="ml-2 text-lg">&#8594;</span>
      </Link>
    </div>
  );
};

export default CardQuiz;
