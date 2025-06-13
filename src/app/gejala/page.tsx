import Footer from "@/components/common/main-footer";
import Navbar from "@/components/common/main-navbar";
import { cookies } from "next/headers";
import { fetchAllGejala } from "@/services/gejala-service";
import FilterGejala from "@/components/gejala/filter-gejala";

export default async function Gejala() {
  const cookieStore = cookies();
  const token = (await cookieStore).get("api_token")?.value || "";
  const gejalaList = await fetchAllGejala(token);

  return (
    <div className="bg-[#FAEFFF]">
      <Navbar />
      <div className="col items-center justify-center">
        <div className="max-w-4xl mx-auto py-8">
          <h2 className="text-2xl font-bold text-purple-800 mb-4">
            Daftar gejala kehamilan
          </h2>
          <FilterGejala gejalaList={gejalaList} />
        </div>
        <Footer />
      </div>
    </div>
  );
}



