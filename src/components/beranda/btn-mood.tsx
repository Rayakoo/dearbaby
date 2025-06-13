import React from "react";
import Link from "next/link";

const BtnMood = () => {
  return (
    <Link href="/diary" passHref>
      <button
        className="w-full max-w-3xl flex items-center justify-between bg-[#9487DB] rounded-[32px] px-8 py-7 shadow transition hover:brightness-95"
        style={{ minHeight: 120 }}
      >
        <div className="flex flex-col text-left">
          <span className="text-white text-3xl md:text-4xl font-bold mb-1">
            Mood check hari ini
          </span>
          <span className="text-white text-lg md:text-xl font-semibold">
            Bagaimana Perasaan Bunda Saat ini
          </span>
        </div>
        <span className="ml-4">
          <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
            <circle cx="45" cy="45" r="40" fill="#FFE600" />
            <ellipse cx="32" cy="28" rx="4" ry="2" fill="#fff" opacity="0.8"/>
            <ellipse cx="60" cy="28" rx="2" ry="1" fill="#fff" opacity="0.7"/>
            <ellipse cx="30" cy="40" rx="3" ry="3" fill="#222"/>
            <ellipse cx="60" cy="40" rx="3" ry="3" fill="#222"/>
            <path d="M36 54c2 4 8 6 18 0" stroke="#222" strokeWidth="3" strokeLinecap="round" fill="none"/>
            <path d="M48 59c2 2 6 2 8 0" stroke="#fff" strokeWidth="2" strokeLinecap="round" fill="none"/>
          </svg>
        </span>
      </button>
    </Link>
  );
};

export default BtnMood;
