"use client";
import React from "react";

interface CardSoalProps {
  quiz: {
    title: string;
    questions: {
      id: string;
      question: string;
      options: string[];
    }[];
  };
  current: number;
}

const CardSoal: React.FC<CardSoalProps> = ({ quiz, current }) => {
  const question = quiz.questions[current];

  return (
    <div className="bg-[#FFE6F7] flex justify-center items-center min-h-[100px] py-6 px-2">
      <div className="bg-white rounded-2xl shadow-md px-8 py-5 w-full max-w-2xl">
        <div className="text-[#A78BFA] font-semibold text-base mb-1">
          Question {current + 1}/{quiz.questions.length}
        </div>
        <div className="text-[#5F22D9] font-bold text-xl md:text-2xl">
          {question.question}
        </div>
      </div>
    </div>
  );
};

export default CardSoal;
