import Image from "next/image";
import { ReactNode } from "react";
import Link from "next/link";

interface CardGejalaProps {
    imageSrc: string;
    altText: string;
    title: string;
    description: ReactNode;
}

export default function CardGejala({
    imageSrc,
    altText,
    title,
    description,
}: CardGejalaProps) {
    return (
      <Link href="/gejala/detail" className="block">
        <div className="flex items-center bg-white rounded-2xl shadow-lg p-4 border border-gray-200 gap-6 cursor-pointer hover:shadow-xl transition">
          <Image
            src={imageSrc}
            alt={altText}
            width={100}
            height={100}
            className="rounded-lg object-cover w-[100px] h-[100px]"
          />
          <div>
            <div className="text-xl font-semibold text-gray-900 mb-1">
              {title}
            </div>
            <div className="text-gray-700 text-sm">
              {description}
            </div>
          </div>
        </div>
      </Link>
    );
}