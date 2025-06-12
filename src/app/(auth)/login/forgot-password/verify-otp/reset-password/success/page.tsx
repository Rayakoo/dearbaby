"use client";
import Image from "next/image";

export default function SuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96 text-center">
        <Image 
          src="/success.svg" 
          alt="Success"  
          width={100}
          height={100} 
          priority
        />
        <h2 className="text-xl font-bold mb-4">Password Reset Successful!</h2>
        <p className="text-gray-600 mb-6">Your password has been updated successfully.</p>
        
        <button
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 transition"
          onClick={() => window.location.href = "/auth/login"}
        >
          Back to Login
        </button>
      </div>
    </div>
  );
}
