"use client";
import Image from "next/image";

export default function SuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col bg-white p-6 rounded-lg items-center shadow-md w-96 text-center">
        <h1 className="text-black font-bold text-xl mb-6">Selamat.</h1>
        <Image 
          src="/welcome.svg" 
          alt="Success"  
          width={100}
          height={100} 
          priority
        />
        <p className="text-black text-md font-medium mb-6">Sandimu berhasil diubah.</p>
        
        <button
          className="w-full bg-[#5324D7] text-white p-2 rounded-md hover:bg-gray-200 transition"
          onClick={() => window.location.href = "/login"}
        >
          Back to Login
        </button>
      </div>
    </div>
  );
}
