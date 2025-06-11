import Image from 'next/image';
import React from 'react';

interface CardDetailGejalaProps {
  iconSrc: string;
  title: string;
  description: string;
}

const CardDetailGejala: React.FC<CardDetailGejalaProps> = ({ iconSrc, title, description }) => {
  return (
    <div className="flex items-start p-4 mb-4 bg-white rounded-lg shadow-sm">
      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 mr-4">
        <Image src={iconSrc} alt={`${title} icon`} width={32} height={32} className="object-contain" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default CardDetailGejala;