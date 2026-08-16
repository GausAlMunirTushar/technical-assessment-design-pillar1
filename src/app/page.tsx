import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";

export default function Home() {
	return (
		<main
			id="main-content"
			tabIndex={-1}
			className="min-h-screen bg-white text-text-dark flex flex-col justify-between selection:bg-accent-orange selection:text-white outline-hidden"
		>
			<Navbar />
			<HeroSection />
			<ServicesSection />
		</main>
	);
}

