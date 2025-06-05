import Image from "next/image";

export default function Rekomendasi() {
    return (
        
        <div className="flex flex-col items-center bg-white pb-20">
            {/* Daftar rekomendasi fasilitas kesehatan */}
            <section className="w-full max-w-4xl mx-auto mt-12 px-4">
                <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-200">
                    <h2 className="text-2xl font-bold text-purple-800 mb-4">
                        Daftar rekomendasi fasilitas kesehatan
                    </h2>
                    <p className="text-gray-600 mb-6">Urutkan berdasarkan rating tertinggi</p>
                    <div className="flex flex-wrap gap-3">
                        <button className="bg-purple-700 text-white font-semibold px-6 py-2 rounded-full hover:bg-purple-800">
                            Terdekat
                        </button>
                        <button className="bg-purple-100 text-purple-700 font-semibold px-6 py-2 rounded-full hover:bg-purple-200">
                            Rating
                        </button>
                    </div>
                </div>
            </section>

            {/* Daftar fasilitas kesehatan */}
            <section className="w-full max-w-4xl mx-auto px-4">
                <div className="flex flex-col gap-6">
                    {/* Card 1 */}
                    <div className="flex items-center bg-white rounded-2xl shadow-lg p-4 border border-gray-200 gap-6">
                        <div>
                            <div className="text-xl font-semibold text-gray-900 mb-1">
                                RSUD Dr. Saiful Anwar
                            </div>
                            <div className="text-gray-700 text-sm">
                                Rumah Sakit Umum Daerah kelas A milik pemerintah Provinsi Jawa Timur yang berfungsi sebagai rumah ...
                            </div>
                            <div className="flex items-center mt-2 text-yellow-500 text-sm">
                                ★★★★☆ <span className="text-green-600 ml-2">4.0/5.0</span>
                            </div>
                        </div>
                        <Image
                            src="/img/RSUDSaifulAnwar.jpg"
                            alt="RSUD Dr. Saiful Anwar"
                            width={100}
                            height={100}
                            className="rounded-lg object-cover w-[100px] h-[100px]"
                        />
                    </div>

                    {/* Card 2 */}
                    <div className="flex items-center bg-white rounded-2xl shadow-lg p-4 border border-gray-200 gap-6">
                        <div>
                            <div className="text-xl font-semibold text-gray-900 mb-1">
                                RS Tk. II dr. Soepraoen
                            </div>
                            <div className="text-gray-700 text-sm">
                                Rumah Sakit milik TNI AD yang memberikan pelayanan kesehatan kepada prajurit TNI, aparatur ...
                            </div>
                            <div className="flex items-center mt-2 text-yellow-500 text-sm">
                                ★★☆☆☆ <span className="text-red-600 ml-2">2.0/5.0</span>
                            </div>
                        </div>
                        <Image
                            src="/img/RSSoepraoen.jpg"
                            alt="RS Tk. II dr. Soepraoen"
                            width={100}
                            height={100}
                            className="rounded-lg object-cover w-[100px] h-[100px]"
                        />
                    </div>

                    {/* Card 3 */}
                    <div className="flex items-center bg-white rounded-2xl shadow-lg p-4 border border-gray-200 gap-6">
                        <div>
                            <div className="text-xl font-semibold text-gray-900 mb-1">
                                RS Panti Nirmala Malang
                            </div>
                            <div className="text-gray-700 text-sm">
                                Rumah Sakit swasta yang didirikan pada tahun 1920-an awalnya bernama Tiong Hwa Ie Sia. dan ...
                            </div>
                            <div className="flex items-center mt-2 text-yellow-500 text-sm">
                                ★★★★☆ <span className="text-green-600 ml-2">4.0/5.0</span>
                            </div>
                        </div>
                        <Image
                            src="/img/RSPantiNirmalaMalang.jpg"
                            alt="RS Panti Nirmala Malang"
                            width={100}
                            height={100}
                            className="rounded-lg object-cover w-[100px] h-[100px]"
                        />
                    </div>

                    {/* Card 4 */}
                    <div className="flex items-center bg-white rounded-2xl shadow-lg p-4 border border-gray-200 gap-6">
                        <div>
                            <div className="text-xl font-semibold text-gray-900 mb-1">
                                RS Panti Waluya Sawahan
                            </div>
                            <div className="text-gray-700 text-sm">
                                Rumah Sakit Umum tipe B yang didirikan pada tahun 1928 oleh Gereja Katolik, dikenal juga dengan ...
                            </div>
                            <div className="flex items-center mt-2 text-yellow-500 text-sm">
                                ★★☆☆☆ <span className="text-red-600 ml-2">2.0/5.0</span>
                            </div>
                        </div>
                        <Image
                            src="/img/RSPantiWaluya.jpg"
                            alt="RS Panti Waluya Sawahan"
                            width={100}
                            height={100}
                            className="rounded-lg object-cover w-[100px] h-[100px]"
                        />
                    </div>

                    {/* Card 5 */}
                    <div className="flex items-center bg-white rounded-2xl shadow-lg p-4 border border-gray-200 gap-6">
                        <div>
                            <div className="text-xl font-semibold text-gray-900 mb-1">
                                RS Lavalette
                            </div>
                            <div className="text-gray-700 text-sm">
                                Salah satu rumah sakit tertua di Malang yang dibangun pada era kolonial, menawarkan layanan unggulan ...
                            </div>
                            <div className="flex items-center mt-2 text-yellow-500 text-sm">
                                ★★★★☆ <span className="text-green-600 ml-2">4.0/5.0</span>
                            </div>
                        </div>
                        <Image
                            src="/img/RSLavalette.jpg"
                            alt="RS Lavalette"
                            width={100}
                            height={100}
                            className="rounded-lg object-cover w-[100px] h-[100px]"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}