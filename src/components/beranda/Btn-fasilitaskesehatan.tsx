import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const BtnFasKes = () => {
  const router = useRouter();

  return (
    <div
      className="bg-white rounded-2xl shadow-lg  flex items-center gap-6 px-10 py-8 cursor-pointer border border-[#D1B3FF] hover:shadow-xl transition-all max-w-4xl mx-auto w-full"
      style={{ minHeight: 120 }}
      onClick={() => router.push("/beranda/fasilitas-kesehatan")}
    >
      <div className="flex-shrink-0">
        <div className="bg-[#EDE7F6] rounded-lg p-3">
          <Image src="/img/hospital.png" alt="Faskes" width={64} height={64} />
        </div>
      </div>
      <div className="flex-1">
        <div className="text-[#5F22D9] font-bold text-xl mb-1">
          Rekomendasi Fasilitas kesehatan bunda
        </div>
        <div className="text-gray-700 text-sm">
          semakin penting untuk memastikan kesehatan Bunda dan buah hati.{" "}
          <span className="font-bold text-black">
            Kami dapat membantu merekomendasikan fasilitas kesehatan terdekat yang
            dapat memenuhi kebutuhan Bunda dengan nyaman.
          </span>
        </div>
      </div>
      <div className="flex-shrink-0 ml-2">
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
          <path
            d="M14 28L24 19L14 10"
            stroke="#5F22D9"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default BtnFasKes;
