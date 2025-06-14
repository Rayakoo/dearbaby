"use client";

import { useState } from "react";
import Image from "next/image";
import { createDiary } from "@/utils/apiClient";
import { ChangeEvent } from "react";

export default function MoodCheck({ token, userId }: { token: string; userId: string }) {
  const [inputText, setInputText] = useState("");
  const [activeEmotion, setActiveEmotion] = useState<number | null>(null);

  const emotions: { [key: number]: string } = { 1: "sangat_senang", 2: "senang", 3: "biasa", 4: "bete", 5: "sedih", 6: "marah" };

  const handleSubmit = async () => {
    if (!inputText || activeEmotion === null) {
      alert("Harap pilih mood dan isi pesan!");
      return;
    }

    const payload = {
      message: inputText,
      moodcheck: activeEmotion.toString(),
      user_id: userId,
      created_at: new Date().toISOString(),
    };
    
    const success = await createDiary(token, payload);
    
    if (success) {
      alert("Diary berhasil disimpan!");
      setInputText("");
      setActiveEmotion(null);
    } else {
      alert("Gagal menyimpan diary.");
    }

  };

  function handleClick(emotionValue: number): void {
    setActiveEmotion(emotionValue);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
    setInputText(event.target.value);
  }

  return (
    <div className="flex flex-col items-center justify-center p-5 w-full">
      <div className="flex flex-col items-center justify-center w-full max-w-3xl h-max max-h-xl bg-[#877DD3] rounded-lg shadow-lg p-6 mb-6">
        <div className="tp-6 rounded-lg w-full mb-4">
          <h1 className="text-3xl font-bold text-gray-200">Mood check hari ini</h1>
          <h2 className="text-l font-medium text-white">Bagaimana perasaan Bunda hari ini?</h2>
        </div>

        <div className="grid grid-cols-3 grid-rows-2 gap-4 max-w-200">
          {Object.entries(emotions).map(([value, name]) => (
            <div 
              key={value}
              className="relative w-21 h-20 overflow-hidden cursor-pointer"
              onClick={() => handleClick(parseInt(value))}
            >
              <Image 
                src={`/emoticon/${name}_${activeEmotion === null ? "1" : activeEmotion === parseInt(value) ? "1" : "0"}.png`}
                alt={name}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center w-full max-w-3xl max-h-12 border-2 border-[#877DD3] rounded-xl px-2 py-2 mb-2 bg-white">
        <input 
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Tulis pesan Bunda sesuai mood hari ini"
          className="flex-grow text-gray-700 focus:outline-none"
        />
        <button onClick={handleSubmit} className="ml-2">
          <Image 
            src="/kirim.png"
            alt="Kirim"
            width={20}
            height={15}
          />
        </button>
      </div>
    </div>
  );
}