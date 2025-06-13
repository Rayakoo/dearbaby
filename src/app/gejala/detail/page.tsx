"use client";
import CardDetailGejala from '@/components/gejala/card-detailgejala';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const DetailPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'penyebab' | 'atasi'>('penyebab');
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gray-50 pb-8">
            <header className="flex items-center justify-center p-4 bg-white shadow-sm sticky top-0 z-10 relative">
                <button
                    className="absolute left-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
                    onClick={() => router.push("/gejala")}
                >
                    &larr;
                </button>
                <h1 className="text-xl font-semibold text-gray-800">Sakit Kepala</h1>
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
                    <button
                        className={`py-3 px-6 text-center font-semibold border-b-2 focus:outline-none ${
                            activeTab === 'penyebab'
                                ? 'text-purple-600 border-blue-600'
                                : 'text-gray-600 hover:text-gray-800 border-transparent'
                        }`}
                        onClick={() => setActiveTab('penyebab')}
                    >
                        Penyebab
                    </button>
                    <button
                        className={`py-3 px-6 text-center font-semibold border-b-2 focus:outline-none ${
                            activeTab === 'atasi'
                                ? 'text-purple-600 border-blue-600'
                                : 'text-gray-600 hover:text-gray-800 border-transparent'
                        }`}
                        onClick={() => setActiveTab('atasi')}
                    >
                        Cara Mengatasi
                    </button>
                </nav>

                {/* Konten Dinamis */}
                <section>
                    {activeTab === 'penyebab' ? (
                        <>
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
                        </>
                    ) : (
                        <>
                            <CardDetailGejala
                                iconSrc="/image/istirahat-cukup.jpg"
                                title="Istirahat yang cukup"
                                description="Kurangnya tidur bisa memicu sakit kepala. Usahakan tidur yang cukup dan istirahat yang cukup untuk membantu meredakan sakit kepala."
                            />
                            <CardDetailGejala
                                iconSrc="/image/minum-air.jpg"
                                title="Perbanyak minum air"
                                description="Memastikan tubuh terhidrasi dengan baik dapat membantu mencegah sakit kepala."
                            />
                            <CardDetailGejala
                                iconSrc="/image/pijatan-lembut.jpg"
                                title="Pijatan lembut"
                                description="Pijatan lembut pada kepala, leher, dan bahu dapat membantu meredakan ketegangan otot yang menyebabkan sakit kepala."
                            />
                            <CardDetailGejala
                                iconSrc="/image/kurangi-stres.jpg"
                                title="Kurangi stres"
                                description="Stres dapat memicu sakit kepala. Coba kelola stres dengan baik melalui kegiatan relaksasi, meditasi, atau yoga."
                            />
                        </>
                    )}
                </section>
            </main>
        </div>
    );
};

export default DetailPage;