import Image from "next/image";
import React from "react";

const Article = () => (
  <section className="w-full max-w-4xl mx-auto px-10 py-8">
    <div className="rounded-full border border-[#7C3AED] px-6 py-2 text-[#4B2ED5] font-semibold text-xl shadow mb-8 w-fit mx-auto">
      Artikel Tentang Ibu hamil
    </div>
    <div className="flex flex-col gap-6">
      {/* Artikel 1 */}
      <div className="flex items-center bg-[#7C3AED] rounded-2xl shadow-lg p-4 gap-6">
        <Image src="/img/artikel1.jpg" alt="Artikel 1" width={90} height={90} className="rounded-lg object-cover w-[90px] h-[90px]" />
        <div className="text-white">
          <div className="text-sm opacity-80 mb-1">Fertilitas</div>
          <div className="text-xl font-semibold leading-snug">10 Tanda Awal Kehamilan yang Perlu Diketahui</div>
        </div>
      </div>
      {/* Artikel 2 */}
      <div className="flex items-center bg-[#7C3AED] rounded-2xl shadow-lg p-4 gap-6">
        <Image src="/img/artikel2.jpg" alt="Artikel 2" width={90} height={90} className="rounded-lg object-cover w-[90px] h-[90px]" />
        <div className="text-white">
          <div className="text-sm opacity-80 mb-1">Parenting</div>
          <div className="text-xl font-semibold leading-snug">Panduan Lengkap Nutrisi untuk Ibu Hamil</div>
        </div>
      </div>
    </div>
  </section>
);

export default Article;
