"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { fetchDiaries } from "@/utils/apiClient";

type DiaryEntry = {
  id: number;
  Tanggal: string;
  MoodCheck: number;
  Pesan: string;
};

const emotionsMap: Record<number, string> = {
  1: "/emoticon/sangat_senang_1.png",
  2: "/emoticon/senang_1.png",
  3: "/emoticon/biasa_1.png",
  4: "/emoticon/bete_1.png",
  5: "/emoticon/sedih_1.png",
  6: "/emoticon/marah_1.png",
};

const moodColors = [
  "bg-blue-500",  // 1 - Biru
  "bg-blue-300",  // 2 - Biru Muda
  "bg-yellow-400", // 3 - Kuning
  "bg-pink-400",   // 4 - Pink
  "bg-purple-400", // 5 - Ungu
  "bg-red-500",    // 6 - Merah
];

export default function MoodChart({ token }: { token: string }) {
  const [diaryData, setDiaryData] = useState<DiaryEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filter data untuk ambil entri dengan ID terbesar per tanggal
  const filteredData = useMemo(() => {
    const latestEntries: Record<string, DiaryEntry> = {};
    
    diaryData.forEach((entry) => {
      const dateKey = entry.Tanggal;
      if (!latestEntries[dateKey] || entry.id > latestEntries[dateKey].id) {
        latestEntries[dateKey] = entry;
      }
    });

    return Object.values(latestEntries);
  }, [diaryData]);

  // Hitung frekuensi mood dari data yang sudah difilter
  const moodFrequency = useMemo(() => {
    const frequency: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
    
    filteredData.forEach((entry) => {
      frequency[entry.MoodCheck] += 1;
    });

    return frequency;
  }, [filteredData]);

  // Hitung mood rata-rata (modus)
  const averageMood = useMemo(() => {
    let maxCount = 0;
    let mostFrequentMood = 3; // Default value
    
    Object.entries(moodFrequency).forEach(([mood, count]) => {
      if (count > maxCount) {
        maxCount = count;
        mostFrequentMood = Number(mood);
      }
    });

    return mostFrequentMood;
  }, [moodFrequency]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const rawData = await fetchDiaries(token);
        
        // Pastikan data memiliki ID
        const dataWithIds = rawData.map((entry: any, index: number) => ({
          ...entry,
          id: entry.id || index, // Fallback ke index jika ID tidak ada
          MoodCheck: Number(entry.MoodCheck), // Pastikan MoodCheck berupa number
        }));

        setDiaryData(dataWithIds);
        setError(null);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Gagal memuat data mood");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);

  if (loading) {
    return <div className="text-center py-4">Memuat data mood...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center py-4">{error}</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center p-10">
      {/* Pesan Mood */}
      <div className="w-full max-w-3xl text-center rounded-lg p-4 mb-4">
        <h1 className="text-3xl font-bold text-[#5324D7]">
          {averageMood <= 3 ? "Selamat, mood bunda bulan ini bahagia loh!!!" : "Ayo Pak Suami, lebih peka lagi!!"}
        </h1>
      </div>

      <div className="flex flex-col items-center relative p-2 max-w-3xl w-full">
        {/* Grafik Mood */}
        <div className="flex justify-between items-end w-full h-80 gap-4 rounded-lg p-3 bg-[#C9B0E7] max-w-xl">
          {Array.from({ length: 6 }, (_, i) => {
            const moodValue = i + 1;
            const count = moodFrequency[moodValue];
            const maxBarHeight = 200;
            const scaleFactor = count > 0 ? (count / filteredData.length) * maxBarHeight : 0;
            const hasData = count > 0;

            return (
              <div key={i} className="flex flex-col items-center relative">
  {/* Bagian putih - dipertahankan seperti kode 2 */}
  <div 
    className="w-10 bg-white rounded-t-3xl"
    style={{ height: `${maxBarHeight - scaleFactor}px` }}
  ></div>

  {/* Batang grafik - dipertahankan seperti kode 2 */}
  <div 
    className={`w-11 ${moodColors[i]} rounded-b-3xl relative`}
    style={{ height: `${scaleFactor}px` }}
  >
    {/* Emoticon - menggunakan logika kode 1 */}
    {moodFrequency[moodValue] > 0 ? (
      <Image 
        src={emotionsMap[moodValue]} 
        alt="Mood" 
        width={100} 
        height={100} 
        className="absolute translate-y-[-50%]"
        style={{ bottom: `${scaleFactor - 40}px` }}
      />
    ) : (
      <Image 
        src={emotionsMap[moodValue]} 
        alt="Mood" 
        width={100} 
        height={100} 
        className="absolute bottom-[-10px] opacity-100"
      />
    )}
  </div>
</div>

            );
          })}
        </div>
      </div>
    </div>
  );
}