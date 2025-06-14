"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SuccessRegister() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96 text-center">
        
        <h1 className="text-black mb-6 font-xl">Apakah pasangan Anda sudah menggunakan DearBaby sebelumnya?</h1>

        <button
          className="w-full bg-[#5324D7] text-white p-2 rounded-md hover:bg-gray-200 transition"
          onClick={() => router.push("/register/success-register/hubungkan")}
        >
          Iya, saya memiliki kode undangan
        </button>

        <button
          className="w-full bg-[#5324D7] text-white p-2 mt-2 rounded-md hover:bg-gray-200 transition"
          onClick={() => router.push("/register/success-register/peran")}
        >
          Belum
        </button>
      </div>
    </div>
  );
}
