"use client";

import Image from "next/image";
import CImage from "@/assets/svgs/2_about/carrhae-capital-section2-about-background-c-cropped.svg";
import { HandleSectionInView } from "@/utils/handleSectionInView";

export default function AboutSection() {
	const id = "about";
	const [ref, , isVis] = HandleSectionInView(id);

	return (
		<section
			ref={ref}
			id={id}
			className="relative w-screen overflow-x-clip md:pt-20 md:pl-20 text-navy"
		>
			<Image src={CImage} alt="C" className="absolute top-20 right-0 z-0" />
			<div className="w-full px-8 md:px-12 lg:px-24 pt-44 pb-20 lg:pb-44 bg-gray/25">
				<h2
					className={`font-sans text-gold uppercase md:text-left text-center md:text-base text-xs font-semibold tracking-[0.25em] delay-100 fade-up ${
						isVis ? "open" : "closed"
					}`}
				>
					About
				</h2>
				<h3 className="font-serif mt-2 md:mt-8 text-4xl md:text-6xl lg:text-7xl leading-snug md:text-left text-center lg:leading-24 flex flex-wrap md:justify-start justify-center gap-x-3">
					<span
						className={`font-serif-italic delay-200 fade-up ${
							isVis ? "open" : "closed"
						}`}
					>
						Global
					</span>
					<span className={`delay-300 fade-up ${isVis ? "open" : "closed"}`}>
						perspective.
					</span>
					<div className="md:ml-32 w-full flex md:justify-start justify-center flex-wrap gap-x-3">
						<span
							className={`font-serif-italic delay-400 fade-up ${
								isVis ? "open" : "closed"
							}`}
						>
							Local
						</span>{" "}
						<span
							className={`md:pl-3 delay-500 fade-up ${
								isVis ? "open" : "closed"
							}`}
						>
							clarity.
						</span>
					</div>
				</h3>
				<div className="lg:grid md:grid-cols-2 md:gap-16 md:-mt-12 mt-7">
					<div className="lg:border-l-[0.5px] lg:border-b-[0.5px] border-slate/50"></div>
					<div className="md:pt-16 md:border-l-[0.5px] lg:border-l-0 lg:border-b-0 md:border-b-[0.5px] border-slate/50 md:pl-8 md:pb-8 lg:pl-0 lg:pb-0">
						<p
							className={`text-lg md:text-left text-center md:font-normal font-light md:text-xl delay-700 fade-up ${
								isVis ? "open" : "closed"
							}`}
						>
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
