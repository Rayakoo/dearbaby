"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();


  //cookies
  const [username, setUsername] = useState<string | null>(null);
  const [isLoggedIn, setToken] = useState<string | null>(null);

  // Mengambil token dan username setelah login
  useEffect(() => {
    const storedToken = Cookies.get("api_token") || sessionStorage.getItem("api_token");
    const storedUsername = Cookies.get("username");

    setToken(storedToken);
    setUsername(storedUsername ?? null);

    console.log("Token:", storedToken);
    console.log("Username:", storedUsername);
  }, []);

  // Dummy login state, ganti dengan state/auth context sesuai kebutuhan
  //const isLoggedIn = false;


  // Menu config
  const menus = [
    { label: "Homepage", href: "/", match: ["/", "/home"] },
    { label: "Diary", href: "/diary", match: ["/diary"] },
    { label: "Belajar", href: "/belajar", match: ["/belajar"] },
    { label: "Gejala", href: "/gejala", match: ["/gejala"] },
    { label: "Beranda", href: "/beranda", match: ["/beranda"] },
  ];

  const isProfileActive = pathname === "/profile";

  return (
    <nav className="bg-white shadow-lg w-full sticky top-0 z-50">
      <div className="container mx-auto px-1 py-3">
        <div className="flex items-center justify-start">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Image src="/logo.png" width={48} height={48} alt="Logo" className="w-12 h-12" />
            <span className="ml-2 font-bold text-2xl text-[#5F22D9]">
              Dear<span className="text-[#D1C4E9]">baby</span>
            </span>
          </div>
          {/* Spacer */}
          <div className="flex-grow"></div>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 items-center">
            {menus.map((menu) => {
              // Aktif jika pathname diawali salah satu match
              const isActive = menu.match.some((m) => pathname && (pathname === m || pathname.startsWith(m + "/")));
              return (
                <Link
                  key={menu.href}
                  href={menu.href}
                  className={`px-2 py-2 text-sm font-medium transition
                    ${isActive
                      ? "text-pink-500 border-b-2 border-pink-500"
                      : "text-purple-700 hover:text-pink-600 border-b-2 border-transparent"}
                  `}
                >
                  {menu.label}
                </Link>
              );
            })}
            {/* Bu Clara Button */}
            {isLoggedIn ? (
              <Link href="/profile">
                <button
                  className={`ml-2 px-8 py-2 rounded-lg font-semibold transition
                    ${isProfileActive
                      ? "bg-[#FF1FE1] text-white border-b-2 border-pink-500"
                      : "bg-[#5F22D9] hover:bg-[#7C3AED] text-white"}
                  `}
                  style={{ minWidth: 120 }}
                >

                  {username}

                </button>
              </Link>
            ) : null}
            {/* Profile Image or Login */}
            {isLoggedIn ? (
              <Link href="/profile">
                <Image
                  src="/testi1.jpg"
                  alt="Profile"
                  width={40}
                  height={40}
                  className={`ml-3 rounded-full object-cover border-2 w-10 h-10
                    ${isProfileActive ? "border-pink-500" : "border-[#EDE7F6]"}
                  `}
                />
              </Link>
            ) : (

              <Link href="/login">

                <button className="ml-3 bg-purple-700 hover:bg-pink-500 text-white font-semibold px-6 py-2 rounded-lg transition">
                  Masuk
                </button>
              </Link>
            )}
          </div>
          {/* Mobile Menu Button */}
          <button className="md:hidden focus:outline-none ml-2" onClick={() => setIsOpen(!isOpen)} id="mobile-menu-button">
            <svg className="w-6 h-6 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        <div className={`md:hidden mt-4 ${isOpen ? "" : "hidden"}`} id="mobile-menu">
          <div className="flex flex-col space-y-2">
            {menus.map((menu) => {
              const isActive = menu.match.some((m) => pathname === m || (pathname && pathname.startsWith(m + "/")));
              return (
                <Link
                  key={menu.href}
                  href={menu.href}
                  className={`px-4 py-2 rounded text-sm font-medium transition
                    ${isActive
                      ? "bg-pink-100 text-pink-600"
                      : "text-purple-700 hover:text-pink-600"}
                  `}
                >
                  {menu.label}
                </Link>
              );
            })}
            {isLoggedIn ? (
              <>
                <Link href="/profile">
                  <button
                    className={`mt-2 px-8 py-2 rounded-lg font-semibold w-full text-left transition
                      ${isProfileActive
                        ? "bg-[#FF1FE1] text-white border-b-2 border-pink-500"
                        : "bg-[#5F22D9] hover:bg-[#7C3AED] text-white"}
                    `}
                  >
                       {username}

                  </button>
                </Link>
                <Link href="/profile" className="flex items-center mt-2">
                  <Image
                    src="/testi1.jpg"
                    alt="Profile"
                    width={40}
                    height={40}
                    className={`rounded-full object-cover border-2 w-10 h-10
                      ${isProfileActive ? "border-pink-500" : "border-[#EDE7F6]"}
                    `}
                  />
                </Link>
              </>
            ) : (
              <Link href="/login">
                <button className="mt-2 bg-[#FF1FE1] hover:bg-pink-500 text-white font-semibold px-6 py-2 rounded-lg transition w-full text-left">
                  Masuk
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}