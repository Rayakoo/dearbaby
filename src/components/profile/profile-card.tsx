import Image from "next/image";
import React from "react";
import CardUmur from "../beranda/card-umur";

const ProfileCard = () => (
  <div className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow p-0 md:p-0 overflow-hidden">
    {/* Header */}
    <div className="w-full h-24 bg-[#5F22D9] rounded-t-2xl"></div>
    {/* Profile Info */}
    <div className="relative flex flex-col md:flex-row items-center md:items-start px-8 -mt-12">
      <div className="flex flex-col items-center md:items-start w-full md:w-1/2">
        <Image
          src="/img/profile.jpg"
          alt="Profile"
          width={96}
          height={96}
          className="rounded-full border-4 border-white object-cover"
        />
        <div className="mt-2 text-lg font-semibold">Clara</div>
        <div className="text-gray-500 text-sm mb-4">alexarawles@gmail.com</div>
      </div>
      <div className="w-full md:w-1/2 flex justify-end mt-4 md:mt-0">

        <button className="bg-[#5F22D9] hover:bg-[#4B2ED5] text-white font-semibold px-6 py-2 rounded-lg transition">

          Edit
        </button>
      </div>
    </div>
    {/* Form */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-8">
      <div>
        <label className="block text-gray-700 mb-2">Username</label>
        <input
          type="text"
          className="w-full bg-[#FAFAFA] border-none rounded-lg px-4 py-3 mb-4 text-gray-700"
          placeholder="Your First Name"
          disabled
        />
        <label className="block text-gray-700 mb-2">Peran</label>
        <select
          className="w-full bg-[#FAFAFA] border-none rounded-lg px-4 py-3 text-gray-700"
          disabled
        >
          <option>Ibu/Ayah</option>
        </select>
      </div>
      <div>
        <label className="block text-gray-700 mb-2">Email</label>
        <input
          type="email"
          className="w-full bg-[#FAFAFA] border-none rounded-lg px-4 py-3 mb-4 text-gray-700"
          placeholder="Your  email"
          disabled
        />
        <label className="block text-gray-700 mb-2">Umur Kandungan</label>
        <select
          className="w-full bg-[#FAFAFA] border-none rounded-lg px-4 py-3 text-gray-700"
          disabled
        >
          <option>Umur kandungan anda</option>
        </select>
        
      </div>
      
    </div>
    <CardUmur />
    <br className="p-5"/>
  </div>
);

export default ProfileCard;
