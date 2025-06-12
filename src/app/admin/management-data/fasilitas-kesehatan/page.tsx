import React from "react";

export default function FasilitasKesehatanPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Fasilitas Kesehatan</h1>
      <div className="bg-white rounded-xl p-8 shadow flex flex-col items-center justify-center" style={{ minHeight: 280 }}>
        <svg width="96" height="96" fill="#7B61FF" viewBox="0 0 72 72">
          <rect width="72" height="72" rx="12" fill="#7B61FF" fillOpacity="0.08"/>
          <path d="M36 22c-7.732 0-14 6.268-14 14v10a2 2 0 002 2h24a2 2 0 002-2V36c0-7.732-6.268-14-14-14zm0 2c6.627 0 12 5.373 12 12v10H24V36c0-6.627 5.373-12 12-12zm-2 6v4h-4v4h4v4h4v-4h4v-4h-4v-4h-4z" fill="#7B61FF"/>
        </svg>
      </div>
    </div>
  );
}