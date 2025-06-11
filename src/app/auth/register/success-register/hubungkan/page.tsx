"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HubungkanPasangan() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96 text-center">
        
            <h1 className="text-black mb-6">Apakah pasangan Anda sudah menggunakan DearBaby sebelumnya?</h1>

            <Image 
                src="/success.svg" 
                alt="Success"  
                width={100}
                height={100} 
                priority
            />
            
            <h1 className="text-black mb-6">Apakah pasangan Anda sudah menggunakan DearBaby sebelumnya?</h1>

            <button
                className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
                onClick={() => router.push("/login")}
                >
                Iya, saya memiliki kode undangan
            </button>

      </div>
    </div>
  );
}
