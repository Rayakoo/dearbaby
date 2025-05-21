import Article from "@/components/common/article";
import Footer from "@/components/common/main-footer";
import Hero from "@/components/home/home-hero";
import HomeTesti from "@/components/home/home-testi";


export default function Home() {
  const data = "";
  return (
    <div className="bg-white">
      <Hero />
      <Article/>
      <HomeTesti />
      <Footer />
    </div>
  );
}