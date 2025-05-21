"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Dummy active route for demonstration, replace with actual route logic if needed
  const activeRoute = "/home";

  return (
    <nav className="bg-white shadow-lg w-full">
      <div className="container mx-auto px-1 py-3">
        <div className="flex items-center justify-start">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image src="/images/logo.png" width={150} height={50} alt="Logo" className="w-[150px] h-[50px]" />
          </div>
          {/* Spacer */}
          <div className="flex-grow"></div>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 justify-end flex-grow max-w-[400px]">
            <Link href="/" className={`text-purple-700 hover:text-pink-600 px-1 py-2 text-sm font-medium ${activeRoute === "/home" ? "text-pink-600 border-b-2 border-pink-600" : ""}`}>
              Homepage
            </Link>
            <Link href="/diary" className={`text-purple-700 hover:text-pink-600 px-1 py-2 text-sm font-medium ${activeRoute === "/home" ? "text-pink-600 border-b-2 border-pink-600" : ""}`}>
              Diary
            </Link>
            <Link href="/belajar" className={`text-purple-700 hover:text-pink-600 px-1 py-2 text-sm font-medium ${activeRoute === "/home" ? "text-pink-600 border-b-2 border-pink-600" : ""}`}>
              Belajar
            </Link>
            <Link href="/gejala" className={`text-purple-700 hover:text-pink-600 px-1 py-2 text-sm font-medium ${activeRoute === "/home" ? "text-pink-600 border-b-2 border-pink-600" : ""}`}>
              Gejala
            </Link>
            <Link href="/beranda" className={`text-purple-700 hover:text-pink-600 px-1 py-2 text-sm font-medium ${activeRoute === "/home" ? "text-pink-600 border-b-2 border-pink-600" : ""}`}>
              About Us
            </Link>
            <Link href="/bu-clara" className={`text-purple-700 hover:text-pink-600 px-1 py-2 text-sm font-medium ${activeRoute === "/home" ? "text-pink-600 border-b-2 border-pink-600" : ""}`}>
              Bu Clara
            </Link>
            <Link href="/contact" className={`text-purple-700 hover:text-pink-600 px-3 py-2 text-sm font-medium ${activeRoute === "/home" ? "text-pink-600 border-b-2 border-pink-600" : ""}`}>
              Contact
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <button className="md:hidden focus:outline-none ml-2" onClick={() => setIsOpen(!isOpen)} id="mobile-menu-button">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        <div className={`md:hidden mt-4 ${isOpen ? "" : "hidden"}`} id="mobile-menu">
          <div className="flex flex-col space-y-2">
            <Link href="/home" className={`px-4 py-2 rounded text-purple-00 hover:text-pink-600 ${activeRoute === "/home" ? "bg-pink-100 text-pink-600" : ""}`}>
              Homepage
            </Link>
            {/* Add other mobile menu items as needed */}
            <Link href="/diary" className={`px-4 py-2 rounded text-purple-700 hover:text-pink-600 ${activeRoute === "/home" ? "bg-pink-100 text-pink-600" : ""}`}>
              Diary
            </Link>
            <Link href="/belajar" className={`px-4 py-2 rounded text-purple-700 hover:text-pink-600 ${activeRoute === "/home" ? "bg-pink-100 text-pink-600" : ""}`}>
              Belajar
            </Link>
            <Link href="/gejala" className={`px-4 py-2 rounded text-purple-700 hover:text-pink-600 ${activeRoute === "/home" ? "bg-pink-100 text-pink-600" : ""}`}>
              Gejala
            </Link>
            <Link href="/about" className={`px-4 py-2 rounded text-purple-700 hover:text-pink-600 ${activeRoute === "/home" ? "bg-pink-100 text-pink-600" : ""}`}>
              About Us
            </Link>
            <Link href="/bu-clara" className={`px-4 py-2 rounded text-purple-700 hover:text-pink-600 ${activeRoute === "/home" ? "bg-pink-100 text-pink-600" : ""}`}>
              Bu Clara
            </Link>
            <Link href="/contact" className={`px-4 py-2 rounded text-purple-700 hover:text-pink-600 ${activeRoute === "/home" ? "bg-pink-100 text-pink-600" : ""}`}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}