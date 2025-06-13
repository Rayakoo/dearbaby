"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function InfoPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Teks utama */}
      <h1 className="text-3xl font-bold text-center mb-6">
        Apakah pasangan Anda sudah menggunakan DearBaby sebelumnya?
      </h1>

      {/* Flex untuk 2 gambar berbentuk tombol */}
      <div className="flex gap-6 mb-6">
        <button onClick={() => alert("Pilihan Ya")} className="shadow-lg">
          <Image src="/yes-button.jpg" alt="Ya" width={200} height={200} className="rounded-lg" />
        </button>
        <button onClick={() => alert("Pilihan Tidak")} className="shadow-lg">
          <Image src="/no-button.jpg" alt="Tidak" width={200} height={200} className="rounded-lg" />
        </button>
      </div>

      {/* Tombol Lanjutkan */}
      <button
        className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-700 transition"
        onClick={() => router.push("/register/success-register/peran/bagikan-kode")}
      >
        Lanjutkan
      </button>
    </div>
  );
}
