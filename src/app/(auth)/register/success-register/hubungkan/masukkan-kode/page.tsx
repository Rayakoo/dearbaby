"use client";
import { useState } from "react";

export default function VerifyInvitationKode() {
  const [otp, setOtp] = useState(["", "", "", "", ""]);

  const handleChange = (index: number, value: string) => {
    if (/^\d*$/.test(value) && value.length <= 1) {
      let newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-bold text-center mb-4">Enter OTP Code</h2>
        
        <div className="flex justify-center gap-2 mb-4 text-black">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              maxLength={1}
              className="w-10 h-10 text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ))}
        </div>

        <button
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 transition"
          onClick={() => window.location.href = "/login/forgot-password/verify-otp/reset-password"}
        >
          Verify OTP
        </button>
      </div>
    </div>
  );
}
