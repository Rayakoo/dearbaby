"use client";

import { useState } from "react";
import Image from "next/image";

// Mapping emosi berdasarkan angka
const emotions = {
  1: "sangat_senang",
  2: "senang",
  3: "biasa",
  4: "bete",
  5: "sedih",
  6: "marah",
};

export default function InputMood() {
    const [activeEmotion, setActiveEmotion] = useState<number | null>(null);
    const [inputText, setInputText] = useState("");

    const handleClick = (emotionValue: number) => {
        setActiveEmotion(activeEmotion === emotionValue ? null : emotionValue);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
    };

    const handleSubmit = async () => {
        if (!activeEmotion || !inputText.trim()) {
            alert("Pilih Mood dan masukkan pesan!");
            return;
        }

        try {
            const response = await fetch("/api/saveDiary", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ moodCheck: activeEmotion, message: inputText }),
            });

            const data = await response.json();
            if (data.success) {
            alert("Mood dan pesan berhasil diperbarui!");
            setInputText("");
            } else {
            alert("Terjadi kesalahan, coba lagi.");
            }
        } catch (error) {
            alert("Terjadi kesalahan, coba lagi.");
        }
    };return (
    <div className="flex flex-col items-center justify-center p-5 w-full">
        <div className="flex flex-col items-center justify-center w-full max-w-md bg-purple-500 rounded-lg shadow-lg p-6 mb-6">
            <div className=" text-white text-center p-6 rounded-lg w-full mb-4">
                <h1 className="text-xl font-bold">Mood check hari ini</h1>
                <h2 className="text-lg">Bagaimana perasaan Bunda hari ini?</h2>
            </div>

            {/* Grid dengan 3 kolom, 2 baris */}
            <div className="grid grid-cols-3 grid-rows-2 gap-4 max-w-200">
                {Object.entries(emotions).map(([value, name]) => (
                <div key={value}
                    className="relative w-21 h-20 overflow-hidden cursor-pointer"
                    onClick={() => handleClick(parseInt(value))}>
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
      

      {/* Input dengan tombol kirim berbentuk gambar */}
      <div className="flex items-center w-full max-w-xl max-h-8 border-2 border-purple-500 rounded-xl px-2 py-2 mb-2 bg-white">
        <input 
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Tulis pesan Bunda sesuai mood hari ini"
          className="flex-grow text-black focus:outline-none"
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
