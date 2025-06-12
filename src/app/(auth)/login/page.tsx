"use client";

import Image from "next/image"; 
import GoogleLoginButton from "@/components/auth/login/google-login";
import FacebookLoginButton from "@/components/auth/login/facebook-login";
import { useState } from "react";
import { useRouter } from "next/navigation";

import Cookies from "js-cookie"; // Install dengan `npm install js-cookie`



export default function LoginPage() {

  
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const response = await fetch("https://dearbaby.gilanghuda.my.id/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email, password: formData.password }),
      });

      const data = await response.json();

      // Debugging: Periksa isi data dari API
      console.log("Data dari API:", data);

      if (response.ok) {
        alert("Login Berhasil!");

        // Simpan token di cookies jika Remember Me diaktifkan
        if (rememberMe) {
          Cookies.set("token", data.token, { expires: 7 }); // Simpan token 7 hari
        } else {
          sessionStorage.setItem("token", data.token); // Simpan token sementara
        }

        // Periksa apakah API mengirimkan username dengan benar
        if (data.user && data.user.username) {
          Cookies.set("username", data.user.username); // Simpan username untuk navbar
          console.log("Username disimpan:", data.user.username);
        } else {
          console.error("Username tidak ditemukan dalam respons API!");
        }

        if (data.api_token) {
          Cookies.set("api_token", data.api_token, { expires: 7 }); // Simpan token API
        } else {
          console.error("Token tidak ditemukan dalam respons API!");
        }
    
        if (data.user && data.user.family_role === "admin") {
          router.push("/admin/dashboard");
            console.log("Token disimpan:", data.user.family_role);}
        else{
          router.push("/auth/login/welcome");
              console.log("Token disimpan:", data.user.family_role);
        }
        
      } else {
        alert("Login gagal: " + data.message);
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
      alert("Gagal login. Coba lagi nanti!");
    }
  };




  return (
    <div className="flex flex-row items-center justify-center min-h-screen w-full bg-white">
      <div className="w-2/5 flex flex-col items-center justify-center p-4 min-h-full">
        <Image 
          src="/logo.svg" 
          alt="Logo"  
          width={462}
          height={555} 
          className="p1" 
          priority
        />
      </div>

      <div className="w-3/5 flex flex-col items-center justify-center p-4 m-4 bg-[#877DD3] min-h-full">
        <div className="flex flex-col w-full text-left mb-8">
          <h3 className="text-l font-regular text-white">Welcome to</h3>
          <h1 className="text-xl font-bold text-white">Dearbaby</h1>
        </div>

        <GoogleLoginButton/>
        <FacebookLoginButton/>

        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Masukkan Password"
              value={formData.password}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-sm text-white mb-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="accent-blue-500"
              />
              Remember Me
            </label>
            <a href="/auth/login/forgot-password" className="text-white hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Sign In Button */}
          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>

          {/* Register Link */}
          <p className="text-center text-sm text-white mt-3">
            Don't have an account?{" "}
            <a href="/auth/register" className="text-white hover:underline">
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
