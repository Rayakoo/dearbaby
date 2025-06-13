import CardDetailGejala from '@/components/gejala/card-detailgejala';
import Image from 'next/image';
import React from 'react';

const DetailPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 pb-8">
            <header className="flex items-center p-4 bg-white shadow-sm sticky top-0 z-10">
                <h1 className="text-xl font-semibold text-gray-800 mx-auto">Sakit Kepala</h1>
            </header>
            <main className="w-full max-w-4xl mx-auto px-4 mt-4">
                {/* Ilustrasi */}
                <div className="flex justify-center mb-6">
                    <Image
                        src="/images/sakit-kepala.jpg"
                        alt="Ilustrasi sakit kepala"
                        width={200}
                        height={200}
                        className="rounded-full bg-blue-50 p-4"
                    />
                </div>

                {/* Teks Pengantar */}
                <section className="mb-6 bg-white p-6 rounded-lg shadow-sm">
                    <p className="text-gray-700 leading-relaxed">
                        Sakit kepala adalah keluhan umum yang dialami ibu hamil, terutama di trimester ketiga. Ini terjadi karena perubahan hormon, dehidrasi, kurang tidur, atau stres yang mempengaruhi tubuh.
                    </p>
                </section>

                {/* Navigasi Tab */}
                <nav className="flex mb-6 border-b border-gray-200">
                    <button className="py-3 px-6 text-center text-purple-600 font-semibold border-b-2 border-blue-600 focus:outline-none">
                        Penyebab
                    </button>
                    <button className="py-3 px-6 text-center text-gray-600 hover:text-gray-800 focus:outline-none">
                        Cara Mengatasi
                    </button>
                </nav>

                {/* Daftar Penyebab */}
                <section>
                    <CardDetailGejala
                        iconSrc="/image/perubahan-hormon.jpg"
                        title="Perubahan hormon"
                        description="Hormon kehamilan yang diproduksi tubuh membuat pembuluh darah melebar, yang dapat menyebabkan suplai darah ke otak berkurang, sehingga menimbulkan rasa pusing atau sakit kepala."
                    />
                    <CardDetailGejala
                        iconSrc="/image/dehidrasi.jpg"
                        title="Dehidrasi"
                        description="Kurangnya asupan cairan dapat menyebabkan dehidrasi dan memicu sakit kepala."
                    />
                    <CardDetailGejala
                        iconSrc="/image/kurnag-tidur.jpg"
                        title="Kurang tidur"
                        description="Kurang tidur dapat menyebabkan ketegangan otot dan memicu sakit kepala."
                    />
                </section>
            </main>
        </div>
    );
};

export default DetailPage;
