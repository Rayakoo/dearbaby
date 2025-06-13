"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";

const trimesterImages: Record<number, string> = {
  1: "/img/trimester1.png",
  2: "/img/trimester2.png",
  3: "/janin.png",
  4: "/img/trimester4.png",
};

function getTrimester(umur: number) {
  if (umur >= 1 && umur <= 9) return 1;
  if (umur >= 10 && umur <= 18) return 2;
  if (umur >= 19 && umur <= 27) return 3;
  if (umur >= 28 && umur <= 36) return 4;
  return 1;
}

interface CardUmurProps {
  userUmurKandungan?: string;
}

const CardUmur: React.FC<CardUmurProps> = ({ userUmurKandungan }) => {
  const [umur, setUmur] = useState<number | null>(null);

  useEffect(() => {
    if (userUmurKandungan !== undefined) {
      setUmur(Number(userUmurKandungan));
    } else {
      // opsional: fallback fetch jika tidak ada prop
    }
  }, [userUmurKandungan]);

  if (umur === null) return <div>Loading...</div>;

  const trimester = getTrimester(umur);
  const hariMenujuHPL = Math.max(0, 280 - umur * 7);

  return (
    <div
      className="bg-white rounded-2xl shadow-lg flex items-center px-10 py-8 w-full max-w-4xl mx-auto"
      style={{ minHeight: 160 }}
    >
      <div className="flex-1">
        <div className="text-[#A78BFA] font-semibold text-base mb-1">
          Usia Buah Hati Dalam Kandungan
        </div>
        <div className="text-[#5F22D9] font-bold text-3xl md:text-4xl mb-2">
          Minggu ke-{umur}
        </div>
        <div className="text-gray-600 text-base mb-2">
          {hariMenujuHPL} Hari menuju HPL
        </div>
      </div>
      <div className="border-2 border-[#5F22D9] rounded-lg px-8 py-4 text-[#5F22D9] font-semibold text-xl mb-2">
        Trimester {trimester}
      </div>
      <div className="flex flex-col items-center gap-3 min-w-[170px]">
        <div className="bg-[#EDE7F6] rounded-full p-2">
          <Image
            src={trimesterImages[trimester] || trimesterImages[1]}
            alt={`Trimester ${trimester}`}
            width={90}
            height={90}
          />
        </div>
      </div>
    </div>
  );
};

export default CardUmur;
