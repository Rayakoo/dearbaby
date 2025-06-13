"use client";
import React, { useEffect, useState } from "react";

function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

interface CardJawabanProps {
  quiz: {
    questions: {
      id: string;
      options: string[];
    }[];
  };
  current: number;
  onAnswer: (questionId: string, selectedOption: string) => void;
  onFinish: () => void;
  answers: { [questionId: string]: string };
}

const CardJawaban: React.FC<CardJawabanProps> = ({
  quiz,
  current,
  onAnswer,
  onFinish,
  answers,
}) => {
  const question = quiz.questions[current];
  const [options, setOptions] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(answers[question.id] || null);

  useEffect(() => {
    setOptions(shuffle(question.options));
    setSelected(answers[question.id] || null);
    // eslint-disable-next-line
  }, [question.id]);

  const handleSelect = (opt: string) => {
    setSelected(opt);
    onAnswer(question.id, opt);
  };

  return (
    <div className="bg-[#FFE6F7] min-h-[320px] flex flex-col items-center py-4 px-2">
      <div className="w-full max-w-2xl flex flex-col gap-4">
        {options.map((opt, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => handleSelect(opt)}
            className={`flex items-center px-4 py-4 rounded-xl shadow transition-all text-left ${
              selected === opt
                ? "bg-[#5F22D9] text-white"
                : "bg-white text-black hover:bg-[#EDE7F6]"
            }`}
            style={{ outline: "none" }}
          >
            <span
              className={`flex items-center justify-center w-8 h-8 rounded-full font-bold mr-4 ${
                selected === opt
                  ? "bg-[#7C3AED] text-white"
                  : "bg-[#D1C4E9] text-[#5F22D9]"
              }`}
            >
              {String.fromCharCode(65 + idx)}
            </span>
            <span className="flex-1 text-base">{opt}</span>
          </button>
        ))}
      </div>
      <div className="flex gap-4 mt-8">
        <button
          className={`px-8 py-2 rounded-md font-semibold text-lg transition bg-[#D1C4E9] text-white`}
          disabled
        >
          Prev
        </button>
        {current === quiz.questions.length - 1 ? (
          <button
            className={`px-8 py-2 rounded-md font-semibold text-lg transition ${
              selected
                ? "bg-[#7C3AED] text-white cursor-pointer hover:bg-[#7C3AED]"
                : "bg-[#D1C4E9] text-white cursor-not-allowed"
            }`}
            disabled={!selected}
            onClick={onFinish}
          >
            Selesai
          </button>
        ) : (
          <button
            className={`px-8 py-2 rounded-md font-semibold text-lg transition ${
              selected
                ? "bg-[#7C3AED] text-white cursor-pointer hover:bg-[#7C3AED]"
                : "bg-[#D1C4E9] text-white cursor-not-allowed"
            }`}
            disabled={!selected}
            onClick={onFinish}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default CardJawaban;
