"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const moodList = [
  { id: 1, label: "Sangat Senang" },
  { id: 2, label: "Senang" },
  { id: 3, label: "Biasa" },
  { id: 4, label: "Bete" },
  { id: 5, label: "Sedih" },
  { id: 6, label: "Marah" }
];

const emotionsMap: { [key: string]: string } = {
  1: "/emoticon/sangat_senang_1.png",
  2: "/emoticon/senang_1.png",
  3: "/emoticon/biasa_1.png",
  4: "/emoticon/bete_1.png",
  5: "/emoticon/sedih_1.png",
  6: "/emoticon/marah_1.png",
};

export default function MoodDisplay() {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [diaryData, setDiaryData] = useState<{ Tanggal: string; MoodCheck: number; Pesan: string }[]>([]);

  useEffect(() => {
    const fetchDiary = async () => {
      try {
        const response = await fetch("/api/saveDiary");
        const data = await response.json();
        setDiaryData(data);
      } catch (error) {
        console.error("Gagal mengambil data diary:", error);
      }
    };

    fetchDiary();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center  p-6">
      {/* teks "1" dan "2" */}
      <div className=" text-white text-center p-6 rounded-lg w-full mb-4">
          <h1 className="text-xl font-bold text-purple-800">Riwayat diary mood Bunda</h1>
          <h2 className="text-lg text-black">Filter berdasarkan mood Bunda</h2>
      </div>
      
      {/* Grid tombol mood */}
      <div className="grid grid-cols-3 grid-rows-2 gap-4 w-full max-w-lg ">
        {moodList.map((mood) => (
          <button 
            key={mood.id}
            className={`p-4  rounded-lg border-2 border-purple-600 bg-gray-200 transition text-black ${
              selectedMood === mood.id ? "bg-purple-600" : "bg-gray-200"
            }`}
            onClick={() => setSelectedMood(mood.id)}
          >
            {mood.label}
          </button>
        ))}
      </div>

      {/* Card tampilan data diary jika mood dipilih */}
      {selectedMood !== null && (
        <div className="w-full max-w-lg mt-6 p-4 m-2">
          {diaryData
            .filter(entry => entry.MoodCheck === selectedMood)
            .sort((a, b) => new Date(b.Tanggal).getTime() - new Date(a.Tanggal).getTime()) // Mengurutkan dari terbaru ke terlama
            .map((entry, index) => (
              <div key={index} className="flex flex-col items-start p-2 m-1 w-full">
                <div className="flex justify-between w-full text-purple-800 text-sm font-bold">
                  <h1>{new Date(entry.Tanggal).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}</h1>
                </div>

                <div className="flex flex-col items-start p-2 border border-purple-600 rounded-lg w-full">
                  <div className="flex justify-between w-full text-sm font-bold text-black">
                    <h1>Cerita Bunda</h1>
                  </div>

                  {/* Pesan dan emoticon */}
                  <div className="flex items-center justify-between w-full mt-2">
                    <span className="w-[70%] text-black p-2">{entry.Pesan}</span>
                    <div className="w-[30%] flex justify-end">
                      <Image src={emotionsMap[String(entry.MoodCheck)]} alt="Mood" width={32} height={32} />
                    </div>
                  </div>
              </div>
              </div>
              
            ))}
        </div>
      )}

    </div>
  );
}
