import Image from "next/image";
import CImage from "@/assets/svgs/2_about/carrhae-capital-section2-about-background-c-cropped.svg";

export default function AboutSection() {
	return (
		<section className="relative w-screen overflow-x-clip pt-20 pl-20 text-navy">
			<Image src={CImage} alt="C" className="absolute top-20 right-0 z-0" />
			<div className="w-full px-24 pt-44 pb-44 bg-gray/25">
				<h2 className="font-sans text-gold uppercase font-semibold tracking-[0.25em]">
					About
				</h2>
				<h3 className="font-serif mt-8 text-7xl leading-24">
					<span className="font-serif-italic">Global</span> perspective. <br />
					<div className="ml-32">
						<span className="font-serif-italic ">Local</span> clarity.
					</div>
				</h3>
				<div className="grid grid-cols-2 gap-16 -mt-12">
					<div className="border-l-[0.5px] border-b-[0.5px] border-slate/50"></div>
					<div className="pt-16">
						<p className="text-xl">
							Carrhae is a London-based investment partnership specialising in
							emerging market equity strategies.
							<br />
							<br />
							Our research teams in Brazil, China, India and the UAE generate
							esoteric insights, monetised via a cycle-tested investment
							process. We offer absolute return and alpha-driven solutions that
							enhance global equity and multi-asset investor portfolios.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
