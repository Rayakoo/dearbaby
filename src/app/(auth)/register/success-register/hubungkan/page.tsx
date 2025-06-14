"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HubungkanPasangan() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-md w-96 text-center">
        
            <h1 className="text-black mb-6">Hubungkan akun dengan pasangan</h1>

            <Image
              src="/hubungkan.svg" 
              alt="hubungkan"  
              width={100}
              height={100} 
              priority
            />
            
            <h1 className="text-black mb-6">Ciptakan memori indah bersama dalam menyambut buah hati</h1>

            <button
                className="w-full bg-[#5324D7] text-white p-2 rounded-md hover:bg-gray-200 transition"
                onClick={() => router.push("/register/success-register/hubungkan/masukkan-kode")}
                >
                Hubungkan sekarang
            </button>

      </div>
    </div>
  );
}
