import Image from "next/image";
import React from "react";

const HomeTesti = () => (
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
);

export default HomeTesti;
