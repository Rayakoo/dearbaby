"use client";

import Image from "next/image"; 
import GoogleLoginButton from "@/components/auth/login/google-login";
import FacebookLoginButton from "@/components/auth/login/facebook-login";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

type FormData = {
  email: string;
  password: string;
};

type LoginResponse = {
  token: string;
  api_token?: string;
  user?: {
    username: string;
    family_role: string;
  };
  message?: string;
};

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://dearbaby.gilanghuda.my.id/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email, password: formData.password }),
      });

      const data: LoginResponse = await response.json();

      if (response.ok) {
        if (rememberMe) {
          Cookies.set("token", data.token, { expires: 7 });
        } else {
          sessionStorage.setItem("token", data.token);
        }

        if (data.user?.username) {
          Cookies.set("username", data.user.username);
        }

        if (data.api_token) {
          Cookies.set("api_token", data.api_token, { expires: 7 });
        }
    
        if (data.user?.family_role === "admin") {
          router.push("/admin/dashboard");
        } else {
          router.push("/");
        }
      } else {
        alert("Login gagal: " + (data.message || "Unknown error"));
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

      <div className="max-w-3/5 flex flex-col items-center justify-center p-4 m-4 bg-secondary min-h-full">
        <div className="flex flex-col w-full text-left mb-8">
          <h3 className="text-2xl font-regular mx-4 text-white">Welcome to</h3>
          <h1 className="text-3xl font-bold mx-4 text-white">Dearbaby</h1>
        </div>

        <GoogleLoginButton/>
        <FacebookLoginButton/>
        
        <ul className="flex items-center justify-center p-4">
          <li className="w-[180px] h-[1px] bg-gray-200"></li>
          <li><p className="text-xs font-medium text-black px-1">OR</p></li>
          <li className="w-[180px] h-[1px] bg-gray-200"></li>
        </ul>

        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="flex p-1 bg-gray-100 border rounded-md">
            <Image 
              src="/email.svg" 
              alt="Email Icon" 
              width={36}
              height={36}
              className="w-9 justify-center px-2" 
            />
            
            <div className="px-0.25 py-[1px]">
              <label className="block text-gray-500 text-[10px] font-light" htmlFor="email">
                Email
              </label>
              
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-max text-black font-bold text-sm focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="flex p-1 mt-3 bg-gray-100 border rounded-md">
            <Image 
              src="/password.svg" 
              alt="Password Icon" 
              width={36}
              height={36}
              className="w-9 justify-center px-2" 
            />

            <div className="px-0.25 py-[1px] w-max">  
              <label className="block text-gray-500 text-[10px] font-light" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Masukkan Password"
                value={formData.password}
                onChange={handleChange}
                className="w-max text-black font-bold text-sm focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-sm text-black font-light my-2 mb-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="accent-blue-500"
              />
              Remember Me
            </label>
            <a href="/login/forgot-password" className="text-white hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Sign In Button */}
          <button
            className="w-full bg-primary hover:bg-gray-200 text-white text-sm font-bold py-2 px-4 focus:outline-none focus:shadow-outline rounded-md"
            type="submit"
          >
            Login
          </button>

          {/* Register Link */}
          <p className="text-center text-sm text-black mt-3">
            Don&apos;t have an account?{" "}
            <a href="/register" className="text-white hover:underline">
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}