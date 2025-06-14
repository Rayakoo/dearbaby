"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function InfoPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Teks utama */}
      <h1 className="text-xl font-bold text-center mb-6 text-black">
        Apakah pasangan Anda sudah menggunakan DearBaby sebelumnya?
      </h1>

      {/* Flex untuk 2 gambar berbentuk tombol */}
      <div className="flex gap-6 mb-6">
        <button onClick={() => alert("Yakin?")} className="shadow-lg">
          <Image src="/suami.svg" alt="Ya" width={200} height={200} className="rounded-lg" />
        </button>
        <button onClick={() => alert("Yakin?")} className="shadow-lg">
          <Image src="/istri.svg" alt="Ya" width={200} height={200} className="rounded-lg" />
        </button>
      </div>

      {/* Tombol Lanjutkan */}
      <button
        className="px-6 py-3 bg-[#5324D7] text-white rounded-md hover:bg-gray-100 transition"
        onClick={() => router.push("/register/success-register/peran/bagikan-kode")}
      >
        Lanjutkan
      </button>
    </div>
  );
}
