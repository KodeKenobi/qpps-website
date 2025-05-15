import AboutSection from "@/sections/home/AboutSection";
import ApproachSection from "@/sections/home/ApproachSection";
import HeroSection from "@/sections/home/HeroSection";
import LeadershipSection from "@/sections/home/LeadershipSection";

export default function Home() {
	return (
		<main className="flex flex-col min-h-screen overflow-x-clip relative bg-white">
			<HeroSection />
			<AboutSection />
			<ApproachSection />
			<LeadershipSection />
		</main>
	);
}
