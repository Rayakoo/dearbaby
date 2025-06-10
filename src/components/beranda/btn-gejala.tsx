import Link from "next/link";

const BtnGejala = () => (
  <div className="bg-white rounded-2xl shadow-lg p-6 items-center  max-w-3xl mx-auto mt-4 px-10 py-8 w-full">
    <h2 className="text-2xl font-bold text-[#7C3AED] mb-4">Kenali Gejala Kehamilan</h2>
    <div className="bg-[#D1B3FF] bg-opacity-60 rounded-lg px-4 py-3 mb-4">
      <span className="text-[#4B2ED5] font-semibold text-base">
       Pada kehamilan trimester 3, semakin banyak perubahan yang terjadi pada tubuh Bunda. DearBaby dapat membantu mendeteksi awal keluhan yang mungkin Bunda alami
      </span>
    </div>
    <Link href="/gejala" passHref>
      <button className="w-full border border-[#7C3AED] text-[#7C3AED] rounded-md py-2 px-4 flex items-center justify-between hover:bg-[#F3E8FF] transition">
        <span className="text-sm font-medium">Cari tau lebih lanjut</span>
        <span className="ml-2 text-lg">&#8594;</span>
      </button>
    </Link>
  </div>
);

export default BtnGejala;
