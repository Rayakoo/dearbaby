import Image from "next/image";

export default function Gejala() {
  return (
    <div className="flex flex-col items-center bg-white pb-20">
      {/* Daftar gejala kehamilan section */}
      <section className="w-full max-w-4xl mx-auto mt-12 px-4">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-purple-800 mb-4">
            Daftar gejala kehamilan
          </h2>
          <p className="text-gray-600 mb-6">Urutkan berdasarkan resiko gejala</p>
          <div className="flex flex-wrap gap-3">
            <button className="bg-purple-100 text-purple-700 font-semibold px-6 py-2 rounded-full hover:bg-purple-200">
              Semua
            </button>
            <button className="bg-purple-700 text-white font-semibold px-6 py-2 rounded-full hover:bg-purple-800">
              Ringan
            </button>
            <button className="bg-purple-100 text-purple-700 font-semibold px-6 py-2 rounded-full hover:bg-purple-200">
              Sedang
            </button>
            <button className="bg-purple-100 text-purple-700 font-semibold px-6 py-2 rounded-full hover:bg-purple-200">
              Serius
            </button>
          </div>
        </div>
      </section>

     {/* Gejala ringan section */}
     <section className="w-full max-w-4xl mx-auto px-4 mb-8">
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h3 className="text-xl font-bold text-purple-700 mb-4">
          Gejala ringan
          </h3>
          <div className="bg-purple-300 text-gray-700 rounded-lg py-2 px-4 w-full">
            Cukup sering terjadi
            </div>
          </div>
            </section>


      {/* Symptom list */}
      <section className="w-full max-w-4xl mx-auto px-4">
        <div className="flex flex-col gap-6">
          {/* Symptom Card: Sakit Kepala */}
          <div className="flex items-center bg-white rounded-2xl shadow-lg p-4 border border-gray-200 gap-6">
            <Image
              src="/img/symptom-headache.jpg"
              alt="Sakit Kepala"
              width={100}
              height={100}
              className="rounded-lg object-cover w-[100px] h-[100px]"
            />
            <div>
              <div className="text-xl font-semibold text-gray-900 mb-1">
                Sakit Kepala
              </div>
              <div className="text-gray-700 text-sm">
                semakin penting untuk memastikan kesehatan Bunda dan buah hati. Kami dapat membantu yang dapat memenuhi kebutuhan Bunda dengan nyaman.
              </div>
            </div>
          </div>

          {/* Symptom Card: Kram Perut */}
          <div className="flex items-center bg-white rounded-2xl shadow-lg p-4 border border-gray-200 gap-6">
            <Image
              src="/img/symptom-cramp.jpg"
              alt="Kram Perut"
              width={100}
              height={100}
              className="rounded-lg object-cover w-[100px] h-[100px]"
            />
            <div>
              <div className="text-xl font-semibold text-gray-900 mb-1">
                Kram Perut
              </div>
              <div className="text-gray-700 text-sm">
                semakin penting untuk memastikan kesehatan Bunda dan buah hati. Kami dapat membantu yang dapat memenuhi kebutuhan Bunda dengan nyaman.
              </div>
            </div>
          </div>

          {/* Symptom Card: Pembengkakan */}
          <div className="flex items-center bg-white rounded-2xl shadow-lg p-4 border border-gray-200 gap-6">
            <Image
              src="/img/symptom-swelling.jpg"
              alt="Pembengkakan"
              width={100}
              height={100}
              className="rounded-lg object-cover w-[100px] h-[100px]"
            />
            <div>
              <div className="text-xl font-semibold text-gray-900 mb-1">
                Pembengkakan
              </div>
              <div className="text-gray-700 text-sm">
                semakin penting untuk memastikan kesehatan Bunda dan buah hati. Kami dapat membantu yang dapat memenuhi kebutuhan Bunda dengan nyaman.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}