import Footer from "@/components/common/main-footer";
import Navbar from "@/components/common/main-navbar";
import CardRS from "@/components/fasilitaskesehatan/card-fasilitas";
import Link from "next/link";

export default function Rekomendasi() {
    return (
    <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
    <main className="flex flex-col items-center w-full px-4 pb-20">
        <section className="w-full max-w-4xl mt-12">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-purple-800 mb-2">
            Rekomendasi Fasilitas Kesehatan
        </h2>
        <p className="text-sm text-gray-600 mb-4">
            Urutkan berdasarkan Rating Tertinggi
        </p>
        <div className="flex gap-3 flex-wrap">
            <button className="bg-purple-700 text-white font-semibold px-6 py-2 rounded-full hover:bg-purple-800 transition">
            Terdekat
        </button>
        <button className="bg-purple-100 text-purple-700 font-semibold px-6 py-2 rounded-full hover:bg-purple-200 transition">
            Rating
        </button>
        </div>
        </div>
        <div className="flex flex-col gap-6">
            
        <Link href="/beranda/fasilitas-kesehatan/detail">
        <CardRS
            imageSrc="/img/RSUDSaifulAnwar.jpg"
            altText="RSUD Dr. Saiful Anwar"
            title="RSUD Dr. Saiful Anwar"
            description="Rumah Sakit Umum Daerah kelas A milik pemerintah Provinsi Jawa Timur yang berfungsi sebagai rumah ..."
            rating={4}
        />
        </Link>
        <CardRS
        imageSrc="/img/RSSoepraoen.jpg"
        altText="RS Tk. II dr. Soepraoen"
        title="RS Tk. II dr. Soepraoen"
        description="Rumah Sakit milik TNI AD yang memberikan pelayanan kesehatan kepada prajurit TNI, aparatur ..."
        rating={2}
        />
        <CardRS
        imageSrc="/img/RSPantiNirmalaMalang.jpg"
        altText="RS Panti Nirmala Malang"
        title="RS Panti Nirmala Malang"
        description="Rumah Sakit swasta yang didirikan pada tahun 1920-an awalnya bernama Tiong Hwa Ie Sia. dan ..."
        rating={4}
        />
        <CardRS
        imageSrc="/img/RSPantiWaluya.jpg"
        altText="RS Panti Waluya Sawahan"
        title="RS Panti Waluya Sawahan"
        description="Rumah Sakit Umum tipe B yang didirikan pada tahun 1928 oleh Gereja Katolik, dikenal juga dengan ..."
        rating={2}
        />
        <CardRS
        imageSrc="/img/RSLavalette.jpg"
        altText="RS Lavalette"
        title="RS Lavalette"
        description="Salah satu rumah sakit tertua di Malang yang dibangun pada era kolonial, menawarkan layanan unggulan ..."
        rating={4}
        />
        </div>
        </section>
    </main>
    <Footer/>
    </div>
    );
}