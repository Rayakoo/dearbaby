"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const options = [
  { key: "A", text: "Seukuran Selada" },
  { key: "B", text: "Seukuran Salak" },
  { key: "C", text: "Seukuran Semangka" },
  { key: "D", text: "Seukuran Kuda" },
];

const CardJawaban = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();

  const handleNext = () => {
    if (selected) {
      router.push("/belajar/quiz/hasil");
    }
  };

  return (
    <div className="bg-[#FFE6F7] min-h-[320px] flex flex-col items-center py-4 px-2">
      <div className="w-full max-w-2xl flex flex-col gap-4">
        {options.map((opt) => (
          <button
            key={opt.key}
            type="button"
            onClick={() => setSelected(opt.key)}
            className={`flex items-center px-4 py-4 rounded-xl shadow transition-all text-left ${
              selected === opt.key
                ? "bg-[#5F22D9] text-white"
                : "bg-white text-black hover:bg-[#EDE7F6]"
            }`}
            style={{ outline: "none" }}
          >
            <span
              className={`flex items-center justify-center w-8 h-8 rounded-full font-bold mr-4 ${
                selected === opt.key
                  ? "bg-[#7C3AED] text-white"
                  : "bg-[#D1C4E9] text-[#5F22D9]"
              }`}
            >
              {opt.key}
            </span>
            <span className="flex-1 text-base">{opt.text}</span>
          </button>
        ))}
      </div>
      <button
        className={`mt-8 px-8 py-2 rounded-md font-semibold text-lg transition ${
          selected
            ? "bg-[#7C3AED] text-white cursor-pointer hover:bg-[#7C3AED]"
            : "bg-[#D1C4E9] text-white cursor-not-allowed"
        }`}
        disabled={!selected}
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default CardJawaban;
