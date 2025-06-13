"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function InfoPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Gambar utama */}
      <Image src="/main-image.jpg" alt="Main" width={300} height={300} className="rounded-lg shadow-lg mb-6" />

      {/* Teks Header */}
      <h1 className="text-3xl font-bold text-center mb-4">Selamat Datang di DearBaby!</h1>

      {/* Subjudul */}
      <h2 className="text-xl font-semibold text-center mb-2">Bagikan Kebahagiaan Anda</h2>

      {/* Paragraf Deskripsi */}
      <p className="text-center text-gray-600 mb-6">
        DearBaby hadir untuk membantu Anda dalam perjalanan kehamilan. Berbagi pengalaman bersama pasangan dan keluarga.
      </p>

      {/* Tombol Bagikan */}
      <button
        className="flex items-center px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition mb-4"
        onClick={() => alert("Bagikan ke Sosial Media")}
      >
        <Image src="/share-icon.png" alt="Bagikan" width={20} height={20} className="mr-2" />
        Bagikan
      </button>

      {/* Tombol Melanjutkan */}
      <button
        className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-700 transition"
        onClick={() => router.push("/login")}
      >
        Selesai
      </button>
    </div>
  );
}
