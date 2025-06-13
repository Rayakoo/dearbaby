"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface CardHasilProps {
  result?: {
    quizId: string;
    title: string;
    score: number;
    total: number;
    date: string;
    complete: string;
  };
}

const CardHasil: React.FC<CardHasilProps> = ({ result: initialResult }) => {
  const router = useRouter();
  const [result, setResult] = useState(initialResult);

  useEffect(() => {
    if (!result) {
      // Coba ambil dari localStorage jika belum ada dari SSR
      const local = localStorage.getItem("quizResult");
      if (local) setResult(JSON.parse(local));
    }
  }, [result]);

  if (!result) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] py-8">
        <div className="bg-white rounded-2xl shadow-lg px-8 py-6 mb-10 max-w-xl w-full flex flex-col items-center">
          <div className="text-[#5F22D9] text-center font-bold text-xl md:text-2xl mb-2">
            Hasil quiz tidak ditemukan.
          </div>
        </div>
        <button
          className="bg-[#5F22D9] hover:bg-[#4B2ED5] text-white font-semibold text-lg rounded-lg px-16 py-4 shadow"
          onClick={() => router.push("/belajar")}
        >
          Kembali
        </button>
      </div>
    );
  }

  const lulus = result.complete === "yes";
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] py-8">
      <div className="bg-white rounded-2xl shadow-lg px-8 py-6 mb-10 max-w-xl w-full flex flex-col items-center">
        <div className="text-[#A78BFA] font-semibold text-lg mb-2 text-center">
          {result.title}
        </div>
        <div className="text-[#5F22D9] text-center font-bold text-xl md:text-2xl mb-2">
          Selamat anda telah menyelesaikan quiz dengan score
        </div>
      </div>
      <div className="text-[#5F22D9] font-bold text-[96px] leading-none mb-8">
        {result.score}/{result.total}
      </div>
      <div
        className={`mb-8 text-lg font-semibold ${
          lulus ? "text-green-600" : "text-red-600"
        }`}
      >
        {lulus
          ? `Yeeay kamu lulus quiz (${result.title})`
          : `Yahhh kamu belum lulus quiz (${result.title})`}
      </div>
      <button
        className="bg-[#5F22D9] hover:bg-[#4B2ED5] text-white font-semibold text-lg rounded-lg px-16 py-4 shadow"
        onClick={() => router.push("/belajar")}
      >
        Kembali
      </button>
    </div>
  );
};

export default CardHasil;
