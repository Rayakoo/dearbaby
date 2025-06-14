"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function InfoPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Gambar utama */}
      <Image src="/couple.png" alt="Main" width={100} height={200} className="rounded-lg shadow-lg mb-6" />

      {/* Teks Header */}
      <h1 className="text-3xl font-bold text-center text-[#5324D7] mb-4">Akun DearBaby Anda berhasil dibuat.</h1>

      {/* Subjudul */}
      <h2 className="text-xl font-semibold text-center text-gray-300 mb-2">Untuk terhubung dengan akun DearBaby pasangan Anda, kirim invitation berikut kepada pasangan Anda</h2>


      {/* Tombol Bagikan */}
      <button
        className="flex items-center px-6 py-3 bg-transparent font-extrabold text-black rounded-md hover:bg-gray-100 transition mb-4"
        onClick={() => alert("Bagikan ke Sosial Media")}
      >
        <Image src="/salin.svg" alt="Bagikan" width={20} height={20} className="mr-2" />
        76549
      </button>

      {/* Tombol Melanjutkan */}
      <button
        className="px-6 py-3 bg-[#5324D7] text-white rounded-md hover:bg-gray-100 transition"
        onClick={() => router.push("/login")}
      >
        Selesai
      </button>
    </div>
  );
}
