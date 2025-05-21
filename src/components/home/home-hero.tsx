"use client";
import Image from "next/image";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="w-full">
      {/* Hero */}
      <div className="bg-[#4B2ED5] w-full py-32 px-4 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
        <div className="z-10 flex-1">
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
            Ambil langkah untuk melindungi si kecil
          </h1>
          <p className="text-white text-lg mb-6">
            Temani setiap detik perjalananmu menanti si kecil dengan penuh cinta!
          </p>
          <button className="bg-white text-[#4B2ED5] font-semibold px-6 py-3 rounded-lg shadow">
            Coba DearBaby
          </button>
        </div>
        <div className="z-10 flex-1 flex justify-end">
          <Image src="/img/hero-couple.png" alt="Couple" width={180} height={220} className="hidden md:block" />
        </div>
        {/* Optional: background wave/shape */}
        <div className="absolute inset-0 pointer-events-none">
          {/* You can add SVG or background shapes here if needed */}
        </div>
      </div>
      {/* Info */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-44 px-4">
        <Image src="/img/baby.png" alt="Baby" width={180} height={180} className="mb-4 md:mb-0" />
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#4B2ED5] mb-2">
            Detik ke detik, Si{" "}
            <span className="relative inline-block">
              Kecil bertumbuh
              <span
                className="absolute left-0 bottom-0 w-full h-2 bg-[#FFD600] opacity-60 -z-10"
                style={{ height: "0.6em" }}
              ></span>
            </span>
          </h2>
          <p className="text-gray-700 text-lg">
            pantau perkembangannya dan persiapkan dengan penuh kasih sayang
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;