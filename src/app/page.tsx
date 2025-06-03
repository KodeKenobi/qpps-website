import Preloader from "@/components/Preloader";
import AboutSection from "@/sections/home/AboutSection";
import ApproachSection from "@/sections/home/ApproachSection";
import ContactSection from "@/sections/home/ContactSection";
import HeroSection from "@/sections/home/HeroSection";
import LeadershipSection from "@/sections/home/LeadershipSection";

export default function Home() {
	return (
		<main className="flex flex-col min-h-screen overflow-x-clip relative bg-white">
			<Preloader />
			<HeroSection />
			<AboutSection />
			<ApproachSection />
			<LeadershipSection />
			<ContactSection />
		</main>
	);
}
