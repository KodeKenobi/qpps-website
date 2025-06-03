"use client";

import Button from "@/components/buttons/Button";
import Link from "next/link";
import Image from "next/image";
import LinkedInLogo from "@/assets/svgs/4_leadership/carrhae-capital-section5-leadership-linkedin.svg";
import useOpenLocationStore from "@/store/useOpenLocationStore";
import { AnimatePresence } from "motion/react";
import LocationElement from "@/components/contact/LocationElement";
import ContactMap from "@/components/contact/ContactMap";
import { HandleSectionInView } from "@/utils/handleSectionInView";

export interface Location {
	city: string;
	title: string;
	address: string;
	googleMapsUrl: string;
}

const locations: Location[] = [
	{
		city: "London",
		title: "Carrhae Capital UK LLP London, UK",
		address: `3rd Floor, 112 Jermyn Street,
		London, SW1Y 6LS,
		United Kingdom`,
		googleMapsUrl: "https://goo.gl/maps/2v7Y5Z8x1a6g3k4C8",
	},
	{
		city: "Dubai",
		title: "Carrhae Capital UK LLP Dubai, UAE",
		address: `Dubai International
		Financial Centre,
		Dubai, UAE`,
		googleMapsUrl: "https://goo.gl/maps/2v7Y5Z8x1a6g3k4C8",
	},
];

export default function ContactSection() {
	const id = "contact";
	const [ref, , isVis] = HandleSectionInView(id);
	const { index, setIndex } = useOpenLocationStore();

	return (
		<section
			ref={ref}
			id="contact"
			className="relative bg-navy md:pt-20 text-white"
		>
			<div className="w-full pt-16 md:w-[58%] lg:w-1/2 md:pl-24 md:pt-[58px] relative z-10">
				<div className="mx-auto w-full relative z-10 md:px-0 px-8">
					<h2
						className={`font-sans text-gold uppercase md:text-left text-center md:text-base text-xs font-semibold tracking-[0.25em] delay-100 fade-up ${
							isVis ? "open" : "closed"
						}`}
					>
						Contact
					</h2>
					<h3 className="font-serif mt-2 md:mt-8 text-4xl md:text-6xl lg:text-7xl leading-snug md:text-left text-center lg:leading-24 flex justify-center md:justify-start gap-x-3 flex-wrap">
						<span
							className={`md:block inline delay-200 fade-up ${
								isVis ? "open" : "closed"
							}`}
						>
							Get
						</span>
						<span
							className={`md:block inline delay-300 fade-up ${
								isVis ? "open" : "closed"
							}`}
						>
							in
						</span>
						<div
							className={`md:pl-26 font-serif-italic md:block inline md:w-full delay-400 fade-up ${
								isVis ? "open" : "closed"
							}`}
						>
							touch
						</div>
						<div className="absolute hidden md:block bottom-0 left-0 h-14 w-px bg-slate/25" />
					</h3>
				</div>
				<div className="min-w-full min-h-[406px] h-full relative md:hidden mt-8">
					<ContactMap locations={locations} />
				</div>
				<div className="px-8 md:border-l mx-auto w-full relative z-10 md:pl-26 md:pt-[73px] border-slate/25 text-xl">
					<div className="relative flex flex-col">
						<AnimatePresence mode="wait">
							{locations.map((location, id) => {
								if (id === index) {
									return (
										<LocationElement
											key={location.city}
											index={id}
											total={locations.length}
											data={location}
										/>
									);
								}
							})}
						</AnimatePresence>
						<div className="h-4 flex md:justify-start justify-center items-center gap-[6px] mt-7">
							{Array.from({ length: locations.length }, (_, i) => (
								<div
									key={i}
									onMouseDown={() => setIndex(i)}
									className={`w-[6px] h-[6px] aspect-square rounded-full transition-all duration-300 cursor-pointer ${
										i === index ? "bg-gold" : "bg-gold/40"
									}`}
								></div>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="w-full md:pl-24 md:pr-[86px] relative z-10">
				<div className="w-full md:pt-20 md:pl-24 relative z-10 md:border-l md:border-b border-slate/25">
					<div className="mt-12 md:pb-20 md:mt-0 flex items-center md:flex-row flex-col md:items-end md:justify-between text-lg md:text-xl">
						<div className="w-fit">
							<Link
								href={"tel:+442032054850"}
								className="flex items-center gap-2"
							>
								<strong className="mr-0">t</strong>{" "}
								<span>+44 (0) 203 205 4850</span>
							</Link>
							<Link
								href={"mailto:ir@carrhaecap.com"}
								className="flex items-center gap-2 mt-4"
							>
								<strong className="mr-0">e</strong>{" "}
								<span>ir@carrhaecap.com</span>
							</Link>
						</div>
						<div className="md:mt-0 mt-9 md:pb-2">
							<Link
								href="https://www.linkedin.com/company/carrhae-capital/"
								target="_blank"
							>
								<Image
									src={LinkedInLogo}
									alt="LinkedIn"
									className="w-[18px] h-[18px]"
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full md:mt-0 mt-12 md:pl-24 relative z-10">
				<div className="w-full md:pr-[86px] md:pl-24 relative z-10">
					<div className="py-7 md:border-t-0 border-t border-slate/50 md:py-16 flex items-center justify-center md:justify-end md:pr-12">
						<div className="md:mr-0 mr-12">
							<Link href={"/disclosures/legal-regulatory"}>
								<Button
									label={"Legal & Regulatory"}
									color={"var(--color-white)"}
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="hidden md:block absolute top-20 right-0 w-[76%] h-[66%]">
				<div className="w-full h-full relative ">
					<ContactMap locations={locations} />
				</div>
			</div>
		</section>
	);
}
