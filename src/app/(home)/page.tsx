"use client";
import Article from "@/components/common/article";
import Footer from "@/components/common/main-footer";
import Navbar from "@/components/common/main-navbar";
import Hero from "@/components/home/home-hero";
import HomeTesti from "@/components/home/home-testi";


export default function Home() {
  const data = "";
  return (
    <div className="bg-white p-5">
      <Navbar />
      <br />
       <div className="col items-center justify-center ">
     
     
      <Hero />
     
      <Article/>
      
      <HomeTesti />
     
    
      </div>
      <br />
      <br />
        <Footer />
    </div>
  );
}