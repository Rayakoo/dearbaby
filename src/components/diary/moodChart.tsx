"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const emotionsMap: { [key: string]: string } = {
  1: "/emoticon/sangat_senang_1.png",
  2: "/emoticon/senang_1.png",
  3: "/emoticon/biasa_1.png",
  4: "/emoticon/bete_1.png",
  5: "/emoticon/sedih_1.png",
  6: "/emoticon/marah_1.png",
};

export default function MoodChart() {
    const [diaryData, setDiaryData] = useState<{ Tanggal: string; MoodCheck: number }[]>([]);
    const [averageMood, setAverageMood] = useState<number>(0);

    useEffect(() => {
        const fetchDiary = async () => {
            const response = await fetch("/api/saveDiary");
            const data = await response.json();
            setDiaryData(data);

            // Hitung rata-rata mood untuk bulan ini
            if (data.length > 0) {
            // Hitung frekuensi kemunculan setiap MoodCheck
            const moodFrequency: { [key: number]: number } = {};
            
            data.forEach((entry: { MoodCheck: string | number; }) => {
                moodFrequency[Number(entry.MoodCheck)] = (moodFrequency[Number(entry.MoodCheck)] || 0) + 1;
            });

            // Temukan modus (nilai dengan frekuensi tertinggi)
            const mostFrequentMood = Object.keys(moodFrequency)
                .reduce((a, b) => (moodFrequency[Number(a)] > moodFrequency[Number(b)] ? a : b), Object.keys(moodFrequency)[0]);

            // Set state dengan modus
            setAverageMood(Number(mostFrequentMood));
            }

        };fetchDiary();
    }, []);

  return (
    <div className="flex flex-col items-center justify-center p-10">
        {/* Pesan Mood */}
        <div className="w-full max-w-xl text-center rounded-lg p-4 mb-4">
            <h1 className="text-xl font-bold text-purple-600">
            {averageMood <= 3 ? "Selamat, mood bunda bulan ini bahagia loh!!!" : "Ayo Pak Suami, lebih peka lagi!!"}
            </h1>
        </div>

        <div className="flex flex-col items-center relative p-2 max-w-xl w-full">
            {/* Grafik Mood */}
            <div className="flex justify-between items-end w-full h-60 gap-4 rounded-lg p-6 bg-purple-500 max-w-xl">
                {Array.from({ length: 6 }, (_, i) => {
                const moodEntries = diaryData.filter(entry => entry.MoodCheck === i + 1).length;

                // Batas maksimal grafik
                const maxBarHeight = 200; // Nilai tetap untuk batas tertinggi
                const scaleFactor = moodEntries > 0 ? (moodEntries / 30) * maxBarHeight : 0; // Skala tinggi batang grafik

                // Mapping warna sesuai mood
                const moodColors = [
                    "bg-blue-500",  // 1 - Biru
                    "bg-blue-300",  // 2 - Biru Muda
                    "bg-yellow-400", // 3 - Kuning
                    "bg-pink-400",   // 4 - Pink
                    "bg-purple-400", // 5 - Ungu
                    "bg-red-500",    // 6 - Merah
                ];

                return (
                    <div key={i} className="flex flex-col items-center relative">
                    {/* Bagian putih jika mood kurang dari maksimum */}
                    <div 
                        className="w-10 bg-white rounded-t-3xl"
                        style={{ height: `${maxBarHeight - scaleFactor}px` }}
                    ></div>

                    {/* Batang grafik dengan warna sesuai mood */}
                    <div 
                        className={`w-11 ${moodColors[i]} rounded-b-3xl transition-all relative`} 
                        style={{ height: `${scaleFactor}px` }}
                    >
                        {/* Emoticon berada di puncak batang warna, tepat di bawah grafik putih */}
                        {moodEntries > 0 && (
                        <Image 
                            src={emotionsMap[String(i + 1)]} 
                            alt="Mood" 
                            width={100} 
                            height={100} 
                            className="absolute translate-y-[-50%]"
                            style={{ bottom: `${scaleFactor - 40}px` }} // Geser sedikit ke bawah
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
