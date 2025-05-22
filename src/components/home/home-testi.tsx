import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    img: "/img/testi1.jpg",
    name: "Bunda A",
    role: "Ibu Rumah Tangga",
    text: "DearBaby sangat membantu saya memahami perkembangan janin setiap minggu!",
  },
  {
    img: "/img/testi2.jpg",
    name: "Bunda B",
    role: "Guru",
    text: "Fitur diary-nya bikin saya lebih tenang dan terpantau selama kehamilan.",
  },
  {
    img: "/img/testi3.jpg",
    name: "Bunda C",
    role: "Karyawan Swasta",
    text: "Artikel dan quiznya informatif, saya jadi lebih siap menghadapi persalinan.",
  },
  {
    img: "/img/testi1.jpg",
    name: "Bunda D",
    role: "Ibu 2 Anak",
    text: "Reminder dan tips harian dari DearBaby sangat bermanfaat untuk saya.",
  },
  {
    img: "/img/testi2.jpg",
    name: "Bunda E",
    role: "Wiraswasta",
    text: "Saya suka fitur mood check, jadi lebih aware dengan kondisi diri sendiri.",
  },
  {
    img: "/img/testi3.jpg",
    name: "Bunda F",
    role: "Dokter",
    text: "DearBaby membantu saya memberikan edukasi ke pasien dengan mudah.",
  },
];

function getCardsPerView(width: number) {
  if (width < 640) return 1; // mobile
  if (width < 1024) return 2; // tablet
  return 3; // desktop
}

const HomeTesti = () => {
  const [current, setCurrent] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Responsive cards per view
  useEffect(() => {
    function handleResize() {
      setCardsPerView(getCardsPerView(window.innerWidth));
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto slide
  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) =>
        (prev + cardsPerView) % testimonials.length
      );
    }, 3000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [cardsPerView]);

  // Calculate visible cards
  const visibleCards = [];
  for (let i = 0; i < cardsPerView; i++) {
    const idx = (current + i) % testimonials.length;
    visibleCards.push(testimonials[idx]);
  }

  // Dots
  const totalDots = testimonials.length;
  const activeDot = current % totalDots;

  return (
    <section className="w-full max-w-5xl mx-auto mt-12">
      <h2 className="text-center text-4xl font-bold mb-10 text-[#4B2ED5]">
        Kata Bunda soal <span className="text-[#FFD600] underline decoration-[#FFD600] decoration-wavy">DearBaby</span>
      </h2>
      <div className="overflow-hidden">
        <div className="flex transition-all duration-500 ease-in-out gap-6">
          {visibleCards.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-8 flex-1 flex flex-col justify-between min-w-[300px] max-w-[350px] text-[#222] transition-all"
              style={{
                background: i % 2 === 1 ? "#7C3AED" : "#fff",
                color: i % 2 === 1 ? "#fff" : "#222",
              }}
            >
              <div>
                <div className={`text-5xl mb-4 ${i % 2 === 1 ? "" : "text-[#7C3AED]"}`}>“</div>
                <p className={`mb-8 ${i % 2 === 1 ? "" : "text-gray-700"}`}>{t.text}</p>
              </div>
              <div className="flex items-center gap-4 mt-auto">
                <Image src={t.img} alt={t.name} width={48} height={48} className="rounded-full object-cover" />
                <div>
                  <div className={`font-bold ${i % 2 === 1 ? "" : "text-gray-900"}`}>{t.name}</div>
                  <div className={`text-xs ${i % 2 === 1 ? "" : "text-gray-500"}`}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: totalDots }).map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full transition-all duration-300
              ${activeDot === idx ? "bg-[#4B2ED5] scale-125" : "bg-[#D1C4E9]"}
            `}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default HomeTesti;
