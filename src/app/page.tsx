import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#111111] flex flex-col justify-between selection:bg-accent-orange selection:text-white">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <Footer />
    </main>
  );
}

