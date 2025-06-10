import Image from "next/image";

interface CardRSProps {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
  rating: number;
}

export default function CardRS({
  imageSrc,
  altText,
  title,
  description,
  rating,
}: CardRSProps) {
  const stars = "★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating));
  const ratingColor = rating >= 4 ? "text-green-600" : "text-red-600";

  return (
    <div className="flex flex-col md:flex-row justify-between items-start bg-white rounded-2xl shadow-md p-6 border border-gray-200 gap-4 md:gap-6">
      <div className="flex-1">
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">{description}</p>
        <div className="flex items-center text-yellow-500 text-sm">
          {stars} <span className={`${ratingColor} ml-2`}>{rating.toFixed(1)}/5.0</span>
        </div>
      </div>
      <div className="w-full md:w-auto">
        <Image
          src={imageSrc}
          alt={altText}
          width={120}
          height={120}
          className="rounded-xl object-cover w-[120px] h-[100px] md:h-[100px]"
        />
      </div>
    </div>
  );
}