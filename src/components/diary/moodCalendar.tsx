"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const emotionsMap: Record<number, string> = {
  1: "/emoticon/sangat_senang_1.png",
  2: "/emoticon/senang_1.png",
  3: "/emoticon/biasa_1.png",
  4: "/emoticon/bete_1.png",
  5: "/emoticon/sedih_1.png",
  6: "/emoticon/marah_1.png",
};

const getCalendar = (year: number, month: number) => {
  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();
  const prevMonthLastDate = new Date(year, month, 0).getDate();
  
  let days = [];

  // Tambahkan tanggal dari bulan sebelumnya
  for (let i = firstDay - 1; i >= 0; i--) {
    days.push({ date: prevMonthLastDate - i, currentMonth: false });
  }

  // Tambahkan tanggal bulan ini
  for (let i = 1; i <= lastDate; i++) {
    days.push({ date: i, currentMonth: true });
  }

  // Tambahkan tanggal dari bulan berikutnya untuk memenuhi grid 7x5
  while (days.length < 35) {
    days.push({ date: days.length - lastDate - firstDay + 1, currentMonth: false });
  }

  return days;
};

export default function MoodCalendar() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  const [diaryData, setDiaryData] = useState<{ Tanggal: string; MoodCheck: number; Pesan: string }[]>([]);
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
    };
    fetchDiary();
  }, []);

  const calendarDays = getCalendar(year, month);

  return (
    <div className="flex flex-col items-center justify-center p-7 bg-transparent">
      {/* Header bulan dan tahun */}
      <div className=" flex justify-between w-full max-w-lg text-center bg-gray-100 shadow-lg rounded-2xl p-4 mb-4">
        <div>
          <h5 className="font-normal text-purple-400"> Kalender Mood Bunda</h5>
          <h1 className="text-3xl font-bold text-purple-600">{new Date(year, month).toLocaleString("id-ID", { month: "long", year: "numeric" })}</h1>
        </div>
        <div>
          <Image 
                  src={emotionsMap[averageMood]}
                  alt="Mood"
                  width={60}
                  height={60}
                  className="p-1"
                />
        </div>
      </div>

      {/* Grid kalender */}
      <div className="grid grid-cols-7 max-w-lg shadow-lg">
        {calendarDays.map((day, index) => {
          // Format tanggal YYYY-MM-DD
          const fullDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(day.date).padStart(2, "0")}`;
          
          // Cari mood berdasarkan tanggal
          const diaryEntry = diaryData.find((entry) => entry.Tanggal === fullDate);

          return (
            <div key={index}
                className={`p-2 h-14 w-16 ${day.currentMonth ? "bg-gray-100" : "bg-gray-200"} flex relative items-center justify-center`}>
              {/* Tanggal di pojok kiri atas jika bukan bulan yang ditampilkan */}
              <span className={`${day.currentMonth ? "absolute left-1 text-xs text-black" : "text-xs text-gray-600 absolute top-1 left-1"}`}>
                {day.date}
              </span>

              {/* Menampilkan gambar jika ada entri mood */}
              {diaryEntry && (
                <Image 
                  src={emotionsMap[diaryEntry.MoodCheck]}
                  alt="Mood"
                  width={32}
                  height={32}
                  className="p-1"
                />
              )}
            </div>
          );
        })}
      </div>



    </div>
  );
}


