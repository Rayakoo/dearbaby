import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 w-full items-center bg-white pb-20">

            {/* Section 3: Hero & Info */}
      <section className="w-full">
        {/* Hero */}
        <div className="bg-[#4B2ED5] w-full py-32 px-4 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
          <div className="z-10 flex-1">
            <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
              Ambil langkah untuk melindungi si kecil
            </h1>
            <p className="text-white text-lg mb-6">
              Temani setiap detik perjalananmu menanti si kecil dengan penuh cinta!
            </p>
            <button className="bg-white text-[#4B2ED5] font-semibold px-6 py-3 rounded-lg shadow">
              Coba DearBaby
            </button>
          </div>
          <div className="z-10 flex-1 flex justify-end">
            <Image src="/img/hero-couple.png" alt="Couple" width={180} height={220} className="hidden md:block" />
          </div>
          {/* Optional: background wave/shape */}
          <div className="absolute inset-0 pointer-events-none">
            {/* You can add SVG or background shapes here if needed */}
          </div>
        </div>
        {/* Info */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-44 px-4">
          <Image src="/img/baby.png" alt="Baby" width={180} height={180} className="mb-4 md:mb-0" />
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#4B2ED5] mb-2">
              Detik ke detik, Si <span className="relative inline-block">
                Kecil bertumbuh
                <span className="absolute left-0 bottom-0 w-full h-2 bg-[#FFD600] opacity-60 -z-10" style={{height: "0.6em"}}></span>
              </span>
            </h2>
            <p className="text-gray-700 text-lg">
              pantau perkembangannya dan persiapkan dengan penuh kasih sayang
            </p>
          </div>
        </div>
      </section>
  

      {/* Section 2: Artikel */}
      <section className="w-full max-w-3xl mx-auto">
        <div className="rounded-full border border-[#7C3AED] px-6 py-2 text-[#4B2ED5] font-semibold text-xl shadow mb-8 w-fit mx-auto">
          Artikel Tentang Ibu hamil
        </div>
        <div className="flex flex-col gap-6">
          {/* Artikel 1 */}
          <div className="flex items-center bg-[#7C3AED] rounded-2xl shadow-lg p-4 gap-6">
            <Image src="/img/artikel1.jpg" alt="Artikel 1" width={90} height={90} className="rounded-lg object-cover w-[90px] h-[90px]" />
            <div className="text-white">
              <div className="text-sm opacity-80 mb-1">Fertilitas</div>
              <div className="text-xl font-semibold leading-snug">10 Tanda Awal Kehamilan yang Perlu Diketahui</div>
            </div>
          </div>
          {/* Artikel 2 */}
          <div className="flex items-center bg-[#7C3AED] rounded-2xl shadow-lg p-4 gap-6">
            <Image src="/img/artikel2.jpg" alt="Artikel 2" width={90} height={90} className="rounded-lg object-cover w-[90px] h-[90px]" />
            <div className="text-white">
              <div className="text-sm opacity-80 mb-1">Parenting</div>
              <div className="text-xl font-semibold leading-snug">Panduan Lengkap Nutrisi untuk Ibu Hamil</div>
            </div>
          </div>
        </div>
      </section>
    {/* Section 1: Testimoni */}
      <section className="w-full max-w-5xl mx-auto mt-12">
        <h2 className="text-center text-4xl font-bold mb-10 text-[#4B2ED5]">
          Kata Bunda soal <span className="text-[#FFD600] underline decoration-[#FFD600] decoration-wavy">DearBaby</span>
        </h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex-1 flex flex-col justify-between min-w-[300px] max-w-[350px]">
            <div>
              <div className="text-5xl text-[#7C3AED] mb-4">“</div>
              <p className="text-gray-700 mb-8">
                Whitepate is designed as a collaboration tool for businesses that is a full project management solution.
              </p>
            </div>
            <div className="flex items-center gap-4 mt-auto">
              <Image src="/img/testi1.jpg" alt="Oberon Shaw" width={48} height={48} className="rounded-full object-cover" />
              <div>
                <div className="font-bold text-gray-900">Oberon Shaw, MCH</div>
                <div className="text-xs text-gray-500">Head of Talent Acquisition, North America</div>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-[#7C3AED] rounded-2xl shadow-lg p-8 flex-1 flex flex-col justify-between min-w-[300px] max-w-[350px] text-white">
            <div>
              <div className="text-5xl mb-4">“</div>
              <p className="mb-8">
                Whitepate is designed as a collaboration tool for businesses that is a full project management solution.
              </p>
            </div>
            <div className="flex items-center gap-4 mt-auto">
              <Image src="/img/testi2.jpg" alt="Oberon Shaw" width={48} height={48} className="rounded-full object-cover" />
              <div>
                <div className="font-bold">Oberon Shaw, MCH</div>
                <div className="text-xs">Head of Talent Acquisition, North America</div>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-[#7C3AED] rounded-2xl shadow-lg p-8 flex-1 flex flex-col justify-between min-w-[300px] max-w-[350px] text-white">
            <div>
              <div className="text-5xl mb-4">“</div>
              <p className="mb-8">
                Whitepate is designed as a collaboration tool for businesses that is a full project management solution.
              </p>
            </div>
            <div className="flex items-center gap-4 mt-auto">
              <Image src="/img/testi3.jpg" alt="Oberon Shaw" width={48} height={48} className="rounded-full object-cover" />
              <div>
                <div className="font-bold">Oberon Shaw, MCH</div>
                <div className="text-xs">Head of Talent Acquisition, North America</div>
              </div>
            </div>
          </div>
        </div>
        {/* Dots */}
        <div className="flex justify-center mt-6 gap-2">
          <span className="w-3 h-3 rounded-full bg-[#4B2ED5]"></span>
          <span className="w-3 h-3 rounded-full bg-[#D1C4E9]"></span>
          <span className="w-3 h-3 rounded-full bg-[#D1C4E9]"></span>
        </div>
      </section>

    </div>
  );
}
