"use client";
import Footer from "@/components/common/main-footer";
import CardRSDetail from "@/components/fasilitaskesehatan/card-detailfaskes";
import { useRouter } from "next/navigation";

export default function RSDetailPage() {
    const router = useRouter();
    const detailData = {
        name: "RSUD dr. Saiful Anwar",
        imageSrc: "/img/RSUDSaifulAnwar.jpg",
        tags: ["Rumah Sakit Umum", "BPJS", "Booking Online"],
        distance: "5.6 km",
        address: "Jl. Jaksa Agung Suprapto No.2, Klojen, Kec. Klojen, Kota Malang, Jawa Timur 65112",
        rating: 4,
        recommendedBy: 1345,
        services: [
            "Konsultasi Kehamilan",
            "Konsultasi Laktasi",
            "Konsultasi Program Hamil",
            "Melahirkan Normal",
            "Operasi Caesar",
            "Operasi Kehamilan Ektopik",
            "Senam Nifas",
            "Tes Kehamilan",
            "USG 4 Dimensi",
            "USG Kehamilan",
            "USG Kepala Bayi",
            "USG Panggul",
            "USG Transvaginal",
        ],
        doctors: [
            {
                name: "dr. Abdullah Andi Sp.OG",
                specialization: "Spesialis Kandungan dan Kebidanan",
                schedule: "Senin & Kamis, 07:00 - 10:00",
                patientsHandled: 124,
                tags: ["Komunikatif", "Mudah Dihubungi", "Senior", "Ahli"],
                imageSrc: "/img/dokter1.jpg",
            },
            {
                name: "dr. Heru Nasution Sp.OG",
                specialization: "Spesialis Kandungan dan Kebidanan",
                schedule: "Senin & Rabu, 08:00 - 10:00",
                patientsHandled: 98,
                tags: ["Humoris", "Cekatan", "Edukatif"],
                imageSrc: "/img/dokter2.jpg",
            },
            {
                name: "dr. Hasan Sp.OG",
                specialization: "Spesialis Kandungan dan Kebidanan",
                schedule: "Selasa & Jumat, 09:00 - 13:00",
                patientsHandled: 78,
                tags: ["Komunikatif", "Fast Response", "Profesional"],
                imageSrc: "/img/dokter3.jpg",
            },
        ],
    };

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <main className="flex-grow p-4 bg-gray-50">
                <button
                    className="mb-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
                    onClick={() => router.push("/beranda/fasilitas-kesehatan")}
                >
                    &larr;
                </button>
                <CardRSDetail {...detailData} />
            </main>
            <Footer />
        </div>
    );
}
