"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    umur_kandungan: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Validasi password
    if (formData.password !== formData.confirmPassword) {
      alert("Password tidak cocok!");
      return;
    }

    try {
      // Kirim data ke API
      const response = await fetch("https://dearbaby.gilanghuda.my.id/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          umur_kandungan: formData.umur_kandungan,
          password: formData.password,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Registrasi berhasil!");
        router.push("/auth/register/success-register"); // Redirect jika berhasil
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
      alert("Gagal registrasi. Coba lagi nanti!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-bold text-center mb-4">Register</h2>

        <form onSubmit={handleSubmit}>
          {/* Input Nama */}
          <input
            type="text"
            name="username"
            placeholder="Name"
            value={formData.username}
            onChange={handleChange}
            className="w-full p-2 border text-black rounded-md mb-3"
            required
          />

          {/* Input Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 text-black border rounded-md mb-3"
            required
          />

          {/* Input Umur Kandungan */}
          <input
            type="number"
            name="umur_kandungan"
            placeholder="Pregnancy Age (weeks)"
            value={formData.umur_kandungan}
            onChange={handleChange}
            className="w-full p-2 border text-black rounded-md mb-3"
            required
          />

          {/* Input Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border text-black rounded-md mb-3"
            required
          />

          {/* Konfirmasi Password */}
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-2 text-black border rounded-md mb-3"
            required
          />

          {/* Tombol Daftar */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
