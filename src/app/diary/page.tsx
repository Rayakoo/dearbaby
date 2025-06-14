import MoodChart from "../../components/diary/moodChart";
import MoodDisplay from "../../components/diary/moodDisplay";
import MoodCalendar from "../../components/diary/moodCalendar";
import MoodCheck from "../../components/diary/inputMood";
import Navbar from "@/components/common/main-navbar";
import Footer from "@/components/common/main-footer";

import { cookies } from "next/headers";

export default async function DiaryPage() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("api_token")?.value || "";
    const userId = cookieStore.get("user_id")?.value || "";

    if (!token) {
      console.warn("Token tidak ditemukan, pastikan user sudah login.");
    }
    if (!userId) {
      console.warn("User ID tidak ditemukan, pastikan cookie berisi user_id.");
    }

    return (
      <div className="bg-[#FFFFFF]">
        <Navbar />
        <div className="col items-center justify-center">
          {/* Widget InputMood */}
          <MoodCheck token={token} userId={userId} />

          {/* Widget MoodCalendar */}
          <MoodCalendar token={token}/>

          {/* Widget MoodChart */}
          <MoodChart token={token}/>

          {/* Widget MoodDisplay */}
          <MoodDisplay token={token}/>

          <Footer />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error mengambil token atau user_id dari cookie:", error);
    return (
      <div className="text-red-500 text-center p-5">
        <h2>Gagal memuat halaman diary</h2>
        <p>Silakan coba lagi atau pastikan Anda sudah login.</p>
      </div>
    );
  }
}
