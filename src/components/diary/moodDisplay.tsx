"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { fetchDiaries } from "@/utils/apiClient"; // Menggunakan fungsi fetch yang sama

type DiaryEntry = {
  id: number;
  Tanggal: string;
  MoodCheck: number;
  Pesan: string;
};

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

export default function MoodDisplay({ token }: { token: string }) {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [diaryData, setDiaryData] = useState<DiaryEntry[]>([]);
  const [filteredData, setFilteredData] = useState<DiaryEntry[]>([]);

  useEffect(() => {
    const fetchDiary = async () => {
      try {
        const rawData = await fetchDiaries(token);
        
        // Pastikan data memiliki ID dan format yang konsisten
        const dataWithIds = rawData.map((entry: any, index: number) => ({
          ...entry,
          id: entry.id || index, // Fallback ke index jika ID tidak ada
          MoodCheck: Number(entry.MoodCheck), // Pastikan MoodCheck berupa number
          Tanggal: entry.Tanggal.split('T')[0] // Format tanggal YYYY-MM-DD
        }));

        // Filter untuk ambil entri dengan ID terbesar per tanggal
        const latestEntries: Record<string, DiaryEntry> = {};
        dataWithIds.forEach((entry) => {
          const dateKey = entry.Tanggal;
          if (!latestEntries[dateKey] || entry.id > latestEntries[dateKey].id) {
            latestEntries[dateKey] = entry;
          }
        });

        setDiaryData(Object.values(latestEntries));
      } catch (error) {
        console.error("Gagal mengambil data diary:", error);
      }
    };

    fetchDiary();
  }, [token]);

  // Filter data berdasarkan mood yang dipilih
  useEffect(() => {
    if (selectedMood !== null) {
      const filtered = diaryData.filter(entry => entry.MoodCheck === selectedMood);
      setFilteredData(filtered);
    }
  }, [selectedMood, diaryData]);

  return (
    <div className=" flex flex-col items-center justify-center p-6 ">
      <div className="flex flex-col items-center justify-center w-3xl h-2xl bg-gray-100 rounded-2xl border-[1px] p-8 border-[#5324D7]">
          {/* teks "1" dan "2" */}
          <div className="text-white text-center p-6 rounded-lg w-full mb-4">
            <h1 className="text-xl font-bold text-[#5324D7]">Riwayat diary mood Bunda</h1>
            <h2 className="text-lg text-black">Filter berdasarkan mood Bunda</h2>
          </div>
          
          {/* Grid tombol mood */}
          <div className="grid grid-cols-3 grid-rows-2 gap-4 w-full max-w-lg">
            {moodList.map((mood) => (
              <button 
                key={mood.id}
                className={`p-4 rounded-lg border-2 border-[#5324D7] transition text-black ${
                  selectedMood === mood.id ? "bg-[#5324D7] text-white" : "bg-gray-50"
                }`}
                onClick={() => setSelectedMood(mood.id)}
              >
                {mood.label}
              </button>
            ))}
          </div>

          
        </div>

        {/* Card tampilan data diary jika mood dipilih */}
          {selectedMood !== null && (
            <div className="w-3xl mt-6 rounded-3xl  items-center justify-center">
              {filteredData
                .sort((a, b) => new Date(b.Tanggal).getTime() - new Date(a.Tanggal).getTime())
                .map((entry, index) => (
                  <div key={index} className="flex flex-col items-start p-2 m-1 w-full ">
                    <div className="flex justify-between w-full text-[#877DD3] text-2xl p-2 font-bold">
                      <h1>{new Date(entry.Tanggal).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "long",
                        year: "numeric"
                      })}</h1>
                    </div>

                    <div className="flex flex-col items-start border border-[#5324D7] w-3xl rounded-lg bg-gray-50 p-5">
                      <div className="flex justify-between w-full ">
                        <h1 className="flex justify-between w-full text-md p-2 font-bold text-[#5324D7]" >Cerita Bunda</h1>
                      </div>

                      {/* Pesan dan emoticon */}
                      <div className="flex items-center justify-between w-full mt-2 ">
                        <span className="w-[70%] text-black font-bold p-2 text-3xl">{entry.Pesan}</span>
                        <div className="w-[30%] flex justify-end">
                          <Image 
                            src={emotionsMap[String(entry.MoodCheck)]} 
                            alt="Mood" 
                            width={96} 
                            height={96} 
                          />
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