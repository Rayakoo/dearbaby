import React from "react";

const pregnancyWeek = 28; // dummy data
const progress = 34; // dummy data (percent)

const CardProgres = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-xl mx-auto mt-4">
      {/* Card */}
      <div className="bg-white rounded-2xl shadow flex flex-col px-6 py-4 mb-8">
        <span className="text-sm text-[#7C3AED] font-semibold mb-1">Kemajuan Belajar</span>
        <span className="text-2xl md:text-3xl font-bold text-[#4B2ED5]">Minggu ke-{pregnancyWeek}</span>
      </div>
      {/* Progress Bar */}
      <div className="flex flex-col gap-2">
        {/* Labels */}
        <div className="flex justify-between items-center px-1 mb-1">
          <span className="text-gray-700 text-sm">0%</span>
          <span className="text-[#7C3AED] text-base font-semibold" style={{ marginLeft: `${progress/100*70}%` }}>{progress}%</span>
          <span className="text-gray-700 text-sm" style={{ marginLeft: "auto", marginRight: "auto" }}>50%</span>
          <span className="text-gray-700 text-sm">100%</span>
        </div>
        {/* Slider */}
        <div className="relative w-full h-6 flex items-center">
          {/* Track */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-2 rounded-full bg-[#D1B3FF]"></div>
          {/* Progress */}
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 h-2 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#4B2ED5]"
            style={{ width: `${progress}%` }}
          ></div>
          {/* Thumb */}
          <div
            className="absolute top-1/2 -translate-y-1/2"
            style={{ left: `calc(${progress}% - 14px)` }}
          >
            <div className="w-7 h-7 bg-white border-4 border-[#7C3AED] rounded-full shadow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProgres;
