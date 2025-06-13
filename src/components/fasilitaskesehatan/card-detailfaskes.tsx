import Image from "next/image";

interface Doctor {
    name: string;
    specialization: string;
    schedule: string;
    patientsHandled: number;
    tags: string[];
    imageSrc: string;
}

interface CardRSDetailProps {
    name: string;
    imageSrc: string;
    tags: string[];
    distance: string;
    address: string;
    rating: number;
    recommendedBy: number;
    services: string[];
    doctors: Doctor[];
}

export default function CardRSDetail({
    name,
    imageSrc,
    tags,
    distance,
    address,
    rating,
    recommendedBy,
    services,
    doctors,
}: CardRSDetailProps) {
    const stars = "★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating));

    return (
    <div className="bg-white rounded-2xl shadow-md px-6 py-10 max-w-6xl mx-auto space-y-10 w-full">
        {/* Header */}
        <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
        <Image
        src={imageSrc}
        alt={name}
        width={1200}
        height={500}
        className="w-full h-auto rounded-xl object-cover"
        />

        {/* Tags */}
        <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
            <span
            key={tag}
            className="px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
            >
            {tag}
            </span>
        ))}
        </div>

      {/* Jarak & Alamat */}
        <div>
        <p className="text-sm text-gray-800 font-medium">
            Jarak dari lokasi anda: <span className="font-semibold">{distance}</span>
        </p>
        <p className="text-sm text-gray-600">{address}</p>
        </div>

        {/* Rating */}
        <div>
        <p className="font-semibold text-gray-800 mb-1">Rating Faskes</p>
        <div className="flex items-center gap-3">
            <span className="text-yellow-500 text-lg">{stars}</span>
            <span className="text-purple-700 font-semibold text-sm">
                {recommendedBy.toLocaleString()}
            </span>
            <span className="text-sm text-gray-500">Pasien merekomendasikan</span>
            </div>
        </div>

      {/* Layanan */}
        <div>
        <h3 className="text-base font-semibold text-gray-800 mb-3">Layanan</h3>
        <ul className="list-disc pl-6 space-y-1 text-base text-gray-700">
            {services.map((service) => (
            <li key={service}>{service}</li>
            ))}
        </ul>
        </div>

      {/* Dokter Kandungan */}
        <div>
        <h3 className="text-base font-semibold text-gray-800 mb-4">Dokter Kandungan</h3>
        <div className="flex flex-col gap-6">
            {doctors.map((doc) => (
            <div
                key={doc.name}
                className="bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition"
            >
                <div className="flex items-start gap-4">
                <Image
                src={doc.imageSrc}
                alt={doc.name}
                width={80}
                height={80}
                className="rounded-lg object-cover w-[80px] h-[80px]"
                />
                <div>
                    <h4 className="font-semibold text-gray-800">{doc.name}</h4>
                    <p className="text-xs text-gray-500">{doc.specialization}</p>
                    <p className="text-xs bg-gray-100 px-2 py-1 rounded mt-1 inline-block">
                        {doc.schedule}
                    </p>
                    <p className="text-xs text-blue-700 mt-1">
                        {doc.patientsHandled} Pasien telah ditangani
                    </p>
                </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                {doc.tags.map((tag) => (
                    <span
                    key={tag}
                    className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full"
                    >
                    {tag}
                    </span>
                ))}
                </div>
            </div>
            ))}
        </div>
        </div>
    </div>);
}
