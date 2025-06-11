import Footer from "@/components/common/main-footer";
import Navbar from "@/components/common/main-navbar";
import CardGejala from "@/components/gejala/card-gejala";

export default function Gejala() {
  return (
    <div className="bg-[#FAEFFF]">
      <Navbar />
      <div className="col items-center justify-center">
        {/* Daftar gejala kehamilan section */}
        <section className="w-full max-w-4xl mx-auto mt-12 px-4">
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">
              Daftar gejala kehamilan
            </h2>
            <p className="text-gray-600 mb-6">Urutkan berdasarkan resiko gejala</p>
            <div className="flex flex-wrap gap-3">
              <button className="bg-purple-100 text-purple-700 font-semibold px-6 py-2 rounded-full hover:bg-purple-200">Semua</button>
              <button className="bg-purple-700 text-white font-semibold px-6 py-2 rounded-full hover:bg-purple-800">Ringan</button>
              <button className="bg-purple-100 text-purple-700 font-semibold px-6 py-2 rounded-full hover:bg-purple-200">Sedang</button>
              <button className="bg-purple-100 text-purple-700 font-semibold px-6 py-2 rounded-full hover:bg-purple-200">Serius</button>
            </div>
          </div>
        </section>

        {/* Gejala ringan section */}
        <section className="w-full max-w-4xl mx-auto px-4 mb-8">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-bold text-purple-700 mb-4">Gejala ringan</h3>
            <div className="bg-purple-300 text-gray-700 rounded-lg py-2 px-4 w-full">Cukup sering terjadi</div>
          </div>
        </section>

        {/* Gejala List */}
        <section className="w-full max-w-4xl mx-auto px-4">
          <div className="flex flex-col gap-6">
            <CardGejala
              imageSrc="/img/symptom-headache.jpg"
              altText="Sakit Kepala"
              title="Sakit Kepala"
              description="Semakin penting untuk memastikan kesehatan Bunda dan buah hati. Kami dapat membantu yang dapat memenuhi kebutuhan Bunda dengan nyaman."
            />
            <CardGejala
              imageSrc="/img/symptom-cramp.jpg"
              altText="Kram Perut"
              title="Kram Perut"
              description="Semakin penting untuk memastikan kesehatan Bunda dan buah hati. Kami dapat membantu yang dapat memenuhi kebutuhan Bunda dengan nyaman."
            />
            <CardGejala
              imageSrc="/img/symptom-swelling.jpg"
              altText="Pembengkakan"
              title="Pembengkakan"
              description="Semakin penting untuk memastikan kesehatan Bunda dan buah hati. Kami dapat membantu yang dapat memenuhi kebutuhan Bunda dengan nyaman."
            />
          </div>
        </section>

        <br className="p-5" />
        <Footer />
      </div>
    </div>
  );
}
