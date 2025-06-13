"use client";
import { useState } from "react";
import CardGejala from "./card-gejala";

const kategoriList = [
  { label: "Semua", value: "semua" },
  { label: "Ringan", value: "ringan" },
  { label: "Sedang", value: "sedang" },
  { label: "Serius", value: "serius" },
];

const kategoriDesc: Record<string, string> = {
  ringan: "Cukup sering terjadi",
  sedang: "Perlu perhatian lebih",
  serius: "Segera konsultasikan ke dokter",
};

interface FilterGejalaProps {
  gejalaList: any[];
}

export default function FilterGejala({ gejalaList }: FilterGejalaProps) {
  const [kategori, setKategori] = useState<string>("semua");
  const [search, setSearch] = useState<string>("");

  const filtered =
    kategori === "semua"
      ? gejalaList
      : gejalaList.filter((g) => g.level?.toLowerCase() === kategori);

  const searched = search.trim()
    ? filtered.filter((g) =>
        g.title.toLowerCase().includes(search.trim().toLowerCase())
      )
    : filtered;

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-6">
        {kategoriList.map((k) => (
          <button
            key={k.value}
            className={
              kategori === k.value
                ? "bg-purple-700 text-white font-semibold px-6 py-2 rounded-full hover:bg-purple-800"
                : "bg-purple-100 text-purple-700 font-semibold px-6 py-2 rounded-full hover:bg-purple-200"
            }
            onClick={() => setKategori(k.value)}
          >
            {k.label}
          </button>
        ))}
      </div>

      <div className="mb-6">
        <input
          type="text"
          className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300 background-white text-black"
          placeholder="Cari gejala berdasarkan judul..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {kategori !== "semua" && (
        <section className="w-full max-w-4xl mx-auto px-4 mb-8">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-bold text-purple-700 mb-4">
              Gejala {kategori}
            </h3>
            <div className="bg-purple-300 text-gray-700 rounded-lg py-2 px-4 w-full">
              {kategoriDesc[kategori]}
            </div>
          </div>
        </section>
      )}

      <div className="flex flex-col gap-6">
        {searched.map((g) => (
          <CardGejala
            key={g.id}
            imageSrc="/img/gejala-dummy.png"
            altText={g.title}
            title={g.title}
            description={
              <>
                <span className="block mb-1">{g.description}</span>
                <span className="inline-block text-xs px-2 py-1 rounded bg-[#F3E8FF] text-[#7C3AED] font-semibold">
                  Kategori: {g.level}
                </span>
              </>
            }
          />
        ))}
        {searched.length === 0 && (
          <div className="text-center text-gray-500 py-8">
            Tidak ada gejala ditemukan.
          </div>
        )}
      </div>
    </div>
  );
}
