import Footer from "@/components/common/main-footer";
import Navbar from "@/components/common/main-navbar";
import { fetchAllGejala } from "@/services/gejala-service";
import FilterGejala from "@/components/gejala/filter-gejala";

export default async function Gejala() {
  const gejalaList = await fetchAllGejala();

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
            
 

