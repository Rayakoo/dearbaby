"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { fetchDiaries } from "@/utils/apiClient";

const emotionsMap: Record<number, string> = {
  1: "/emoticon/sangat_senang_1.png",
  2: "/emoticon/senang_1.png",
  3: "/emoticon/biasa_1.png",
  4: "/emoticon/bete_1.png",
  5: "/emoticon/sedih_1.png",
  6: "/emoticon/marah_1.png",
};

type DiaryEntry = { Tanggal: string; MoodCheck: number; Pesan: string; id: number };
type RawDiaryEntry = {
  Tanggal: string;
  MoodCheck: number | string;
  Pesan: string;
  id?: number;
};

export default function MoodCalendar({ token }: { token: string }) {
  const [diaryData, setDiaryData] = useState<DiaryEntry[]>([]);
  const [averageMood, setAverageMood] = useState<number>(3);
  const [currentDate] = useState(new Date());
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Generate calendar days
  const getDaysInMonth = (year: number, month: number) => {
    const date = new Date(year, month, 1);
    const days = [];
    
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    
    return days;
  };

  const getCalendarDays = () => {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const lastDayOfPrevMonth = new Date(year, month, 0).getDate();
    
    // Add days from previous month
    const calendarDays = [];
    for (let i = firstDayOfMonth; i > 0; i--) {
      calendarDays.push({
        date: lastDayOfPrevMonth - i + 1,
        currentMonth: false
      });
    }
    
    // Add days from current month
    daysInMonth.forEach(day => {
      calendarDays.push({
        date: day.getDate(),
        currentMonth: true
      });
    });
    
    // Add days from next month to complete the grid
    const daysToAdd = 35 - calendarDays.length;
    for (let i = 1; i <= daysToAdd; i++) {
      calendarDays.push({
        date: i,
        currentMonth: false
      });
    }
    
    return calendarDays;
  };

  const calendarDays = getCalendarDays();

  useEffect(() => {
    const fetchDiary = async () => {
      const rawData = await fetchDiaries(token);
      const data: DiaryEntry[] = rawData.map((entry: RawDiaryEntry, idx: number) => ({
        Tanggal: entry.Tanggal,
        MoodCheck: Number(entry.MoodCheck),
        Pesan: entry.Pesan,
        id: entry.id !== undefined ? entry.id : idx,
      }));

      if (data.length > 0) {
        const latestEntries: { [key: string]: DiaryEntry } = {};

        data.forEach((entry) => {
          const dateKey = entry.Tanggal;
          if (!latestEntries[dateKey] || entry.id > latestEntries[dateKey].id) {
            latestEntries[dateKey] = entry;
          }
        });

        setDiaryData(Object.values(latestEntries));

        const latestMoodEntry = Object.values(latestEntries)
          .sort((a, b) => b.id - a.id)[0];

        if (latestMoodEntry) {
          setAverageMood(Number(latestMoodEntry.MoodCheck));
        }
      }
    };

    fetchDiary();
  }, [token]);

  return (
    <div className="flex flex-col items-center justify-center p-5 w-full">
      {/* Header bulan dan tahun */}
      <div className="flex justify-between w-full max-w-3xl text-center bg-gray-100 shadow-lg rounded-2xl p-4 mb-4">
        <div>
          <h5 className="font-normal text-xl text-[#877DD3]">Kalender Mood Bunda</h5>
          <h1 className="text-3xl font-bold text-[#5324D7]">
            {new Date(year, month).toLocaleString("id-ID", { month: "long", year: "numeric" })}
          </h1>
        </div>
        <div>
          <Image 
            src={emotionsMap[averageMood] || "/emoticon/senang_1.png"}
            alt="Mood"
            width={60}
            height={60}
            className="p-1"
          />
        </div>
      </div>

      {/* Grid kalender */}
      <div className="grid grid-cols-7 w-max max-w-3xl shadow-xl rounded-2xl">
        {calendarDays.map((day, index) => {
          const fullDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(day.date).padStart(2, "0")}`;
          const diaryEntry = diaryData.find((entry) => entry.Tanggal === fullDate);

          return (
            <div 
              key={index}
              className={`p-2 h-25 w-25 border-[0.25px] ${day.currentMonth ? "bg-gray-100" : "bg-gray-200"} flex relative items-center justify-center`}
            >
              <span className={`${day.currentMonth ? "absolute left-1 text-xs text-black" : "text-xs text-gray-600 absolute top-1 left-1"}`}>
                {day.date}
              </span>

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