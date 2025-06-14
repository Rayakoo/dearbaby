"use client";
import { useState, useEffect } from "react";

export default function VerifyInvitationKode() {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const [message, setMessage] = useState(""); // Pesan validasi
  const [isConnected, setIsConnected] = useState(false); // Menampilkan alert otomatis

  const handleChange = (index: number, value: string) => {
    if (/^\d*$/.test(value)) {
      let newOtp = [...otp];

      // Jika lebih dari 1 angka diketik, pindahkan ke kolom berikutnya
      if (value.length > 1) {
        const digits = value.split("");
        digits.forEach((digit, i) => {
          if (index + i < newOtp.length) {
            newOtp[index + i] = digit;
          }
        });
      } else {
        newOtp[index] = value;
      }

      setOtp(newOtp);

      // Pindahkan cursor ke kolom berikutnya jika angka diketik
      if (value.length > 0 && index < otp.length - 1) {
        document.getElementById(`otp-${index + 1}`)?.focus();
      }
    }
  };

  useEffect(() => {
    // Cek apakah semua angka sudah diisi
    if (otp.every((digit) => digit !== "")) {
      setMessage("");
      setIsConnected(true);

      // **Hapus pesan alert otomatis setelah 3 detik**
      setTimeout(() => setIsConnected(false), 3000);
    } else {
      setMessage("Tolong masukkan semua nomor");
      setIsConnected(false);
    }
  }, [otp]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-bold text-center mb-4 text-black">Masukkan kode undangan</h2>
        
        <div className="flex justify-center gap-2 mb-4 text-black">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              maxLength={1}
              className="w-10 h-10 text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ))}
        </div>

        {message && <p className="text-red-500 text-center mb-4">{message}</p>}

        {isConnected && (
          <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-2 rounded-md text-center transition-opacity duration-500">
            Selamat, Anda berhasil terhubung!
          </div>
        )}

        <button
          className="w-full bg-[#5324D7] text-white p-2 rounded-md hover:bg-gray-200 transition"
          onClick={() => window.location.href = "/login"}
        >
          Hubungkan
        </button>
      </div>
    </div>
  );
}
