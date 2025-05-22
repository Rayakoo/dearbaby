import React from "react";
import { useRouter } from "next/navigation";

const minggu = 27; // dummy
const jumlahBenar = 8;
const jumlahSoal = 15;

const CardHasil = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] py-8">
      <div className="bg-white rounded-2xl shadow-lg px-8 py-6 mb-10 max-w-xl w-full flex flex-col items-center">
        <div className="text-[#A78BFA] font-semibold text-lg mb-2 text-center">
          Minggu {minggu}
        </div>
        <div className="text-[#5F22D9] text-center font-bold text-xl md:text-2xl mb-2">
          Selamat anda telah menyelesaikan quiz mingguan dengan score
        </div>
      </div>
      <div className="text-[#5F22D9] font-bold text-[96px] leading-none mb-8">
        {jumlahBenar}/{jumlahSoal}
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
