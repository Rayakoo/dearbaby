"use client";
import React from "react";
import { logout } from "@/services/user-service";
import Cookies from "js-cookie";

interface LogoutButtonProps {
  token: string;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ }) => {
  const handleLogout = async () => {
    try {
      await logout();
      Cookies.remove("api_token"); // Hapus cookie di client
      window.location.href = "/";
    } catch (error) {
      alert("Logout gagal!");
    }
  };

  return (
    <button
      className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-lg transition"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
