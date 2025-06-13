"use client";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-bold text-center mb-4 text-black">Forgot Password</h2>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded-md mb-4 focus:outline-none focus:ring-2 text-black focus:ring-blue-500"
        />

        <button
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 transition"
          onClick={() => window.location.href = "/login/forgot-password/verify-otp"}
        >
          Send OTP
        </button>
      </div>
    </div>
  );
}
