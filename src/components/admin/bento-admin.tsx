"use client";
import { useRouter } from "next/navigation";

const items = [
  {
    label: "Fasilitas Kesehatan",
    icon: (
      <svg width="72" height="72" fill="none" viewBox="0 0 72 72">
        <rect width="72" height="72" rx="12" fill="#7B61FF" fillOpacity="0.08"/>
        <path d="M36 22c-7.732 0-14 6.268-14 14v10a2 2 0 002 2h24a2 2 0 002-2V36c0-7.732-6.268-14-14-14zm0 2c6.627 0 12 5.373 12 12v10H24V36c0-6.627 5.373-12 12-12zm-2 6v4h-4v4h4v4h4v-4h4v-4h-4v-4h-4z" fill="#7B61FF"/>
      </svg>
    ),
    href: "/admin/management-data/fasilitas-kesehatan",
  },
  {
    label: "Quiz",
    icon: (
      <svg width="72" height="72" fill="none" viewBox="0 0 72 72">
        <rect width="72" height="72" rx="12" fill="#7B61FF" fillOpacity="0.08"/>
        <path d="M36 22a10 10 0 100 20 10 10 0 000-20zm0 2a8 8 0 110 16 8 8 0 010-16zm-1 18h2v4h-2v-4z" fill="#7B61FF"/>
        <circle cx="36" cy="46" r="2" fill="#7B61FF"/>
      </svg>
    ),
    href: "/admin/management-data/quiz",
  },
  {
    label: "Gejala",
    icon: (
      <svg width="72" height="72" fill="none" viewBox="0 0 72 72">
        <rect width="72" height="72" rx="12" fill="#7B61FF" fillOpacity="0.08"/>
        <path d="M36 22a14 14 0 100 28 14 14 0 000-28zm0 2a12 12 0 110 24 12 12 0 010-24zm0 4a8 8 0 100 16 8 8 0 000-16z" fill="#7B61FF"/>
      </svg>
    ),
    href: "/admin/management-data/gejala",
  },
];

export default function BentoAdmin() {
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:grid-rows-2">
      {/* Atas: Fasilitas Kesehatan & Quiz */}
      <div className="flex flex-col md:flex-row gap-6 md:col-span-2">
        <button
          onClick={() => router.push(items[0].href)}
          className={`
            flex flex-col items-start justify-between h-48 w-full rounded-xl bg-white shadow
            border-2 border-transparent hover:border-purple-700 transition
            p-6
            mb-0
          `}
        >
          <span className="text-lg font-medium mb-2 text-gray-700">{items[0].label}</span>
          <span className="self-end">{items[0].icon}</span>
        </button>
        <button
          onClick={() => router.push(items[1].href)}
          className={`
            flex flex-col items-start justify-between h-48 w-full rounded-xl bg-white shadow
            border-2 border-transparent hover:border-purple-700 transition
            p-6
            mb-0
          `}
        >
          <span className="text-lg font-medium mb-2 text-gray-700">{items[1].label}</span>
          <span className="self-end">{items[1].icon}</span>
        </button>
      </div>
      {/* Bawah: Gejala */}
      <button
        onClick={() => router.push(items[2].href)}
        className={`
          flex flex-col items-start justify-between h-48 w-full rounded-xl bg-white shadow
          border-2 border-transparent hover:border-purple-700 transition
          p-6
          md:col-span-2
        `}
      >
        <span className="text-lg font-medium mb-2 text-gray-700">{items[2].label}</span>
        <span className="self-end">{items[2].icon}</span>
      </button>
    </div>
  );
}
