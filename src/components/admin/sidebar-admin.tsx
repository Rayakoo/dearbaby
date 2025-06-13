"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoutButton from "@/components/profile/logout-button";

const menu = [
  { label: "Dashboard", href: "/admin/dashboard", icon: "🏠" },
  { label: "Management Data", href: "/admin/management-data", icon: "📁" },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Sidebar content
  const sidebarContent = (
    <aside className="h-screen w-64 bg-white border-r flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 px-6 py-6">
          <span className="text-3xl">🍼</span>
          <span className="font-bold text-xl text-[#7B61FF]">Dearbaby</span>
        </div>
        <nav className="mt-4">
          {menu.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              <div
                className={`flex items-center gap-3 px-6 py-3 cursor-pointer rounded-lg mx-2 mb-2 ${
                  pathname === item.href
                    ? "bg-[#F5F3FF] text-[#7B61FF] font-semibold"
                    : "hover:bg-[#F5F3FF] text-gray-700"
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </div>
            </Link>
          ))}
        </nav>
      </div>
      <div className="mb-8">
        <Link href="#">
          <div className="flex items-center gap-2 px-6 py-2 text-gray-500 hover:text-black cursor-pointer">
            <span>⚙️</span>
            <span>Settings</span>
          </div>
        </Link>
        <div className="flex items-center gap-2 px-6 py-2">
          <span>⏻</span>
          <LogoutButton token="" />
        </div>
      </div>
    </aside>
  );

  return (
    <>
      {/* Burger button for mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-white rounded-full p-2 shadow"
        onClick={() => setOpen(true)}
        aria-label="Open sidebar"
        type="button"
      >
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
          <rect y="4" width="24" height="2" rx="1" fill="#7B61FF" />
          <rect y="11" width="24" height="2" rx="1" fill="#7B61FF" />
          <rect y="18" width="24" height="2" rx="1" fill="#7B61FF" />
        </svg>
      </button>
      {/* Sidebar overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity md:hidden"
          onClick={() => setOpen(false)}
          aria-hidden={!open}
        />
      )}
      {/* Sidebar drawer for mobile */}
      <div
        className={`
          fixed top-0 left-0 z-50 h-full w-64 bg-white border-r shadow-lg transform transition-transform
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:hidden
        `}
        style={{ transitionProperty: "transform" }}
      >
        {/* Close button for mobile */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setOpen(false)}
            aria-label="Close sidebar"
            className="text-gray-500 hover:text-black"
            type="button"
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <line x1="6" y1="6" x2="18" y2="18" stroke="#7B61FF" strokeWidth="2" strokeLinecap="round" />
              <line x1="6" y1="18" x2="18" y2="6" stroke="#7B61FF" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        {sidebarContent}
      </div>
      {/* Sidebar for desktop only */}
      <div className="hidden md:block">{sidebarContent}</div>
    </>
  );
}

