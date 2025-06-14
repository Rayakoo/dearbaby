"use client";
import { useState, useRef, useEffect } from "react";

export default function VerifyOtpPage() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      
      // Handle paste or multiple digits input
      if (value.length > 1) {
        const digits = value.split("").slice(0, 6 - index); // Limit to remaining boxes
        digits.forEach((digit, i) => {
          if (index + i < newOtp.length) {
            newOtp[index + i] = digit;
          }
        });
      } else {
        newOtp[index] = value;
      }

      setOtp(newOtp);

      // Auto focus to next input if a digit was entered
      if (value.length > 0 && index < otp.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle backspace to move to previous input
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text/plain');
    if (/^\d+$/.test(pasteData)) {
      const digits = pasteData.split("").slice(0, 6); // Limit to OTP length
      const newOtp = [...otp];
      digits.forEach((digit, i) => {
        if (i < newOtp.length) {
          newOtp[i] = digit;
        }
      });
      setOtp(newOtp);
      
      // Focus the last filled input
      const lastFilledIndex = Math.min(digits.length - 1, otp.length - 1);
      inputRefs.current[lastFilledIndex]?.focus();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-bold text-center mb-4 text-black">Enter OTP Code</h2>
        
        <div className="flex justify-center gap-2 mb-4 text-black">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={el => { inputRefs.current[index] = el; }}
              type="text"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              maxLength={6} // Allow paste of full OTP
              className="w-10 h-10 text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoFocus={index === 0}
            />
          ))}
        </div>

        <button
          className="w-full bg-[#5324D7] text-white p-2 rounded-md hover:bg-gray-100 transition"
          onClick={() => window.location.href = "/login/forgot-password/verify-otp/reset-password"}
          disabled={otp.some(digit => digit === "")} // Disable if not all digits filled
        >
          Verify OTP
        </button>
      </div>
    </div>
  );
}