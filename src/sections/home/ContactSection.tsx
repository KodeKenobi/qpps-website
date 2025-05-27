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
	const [ref] = HandleSectionInView(id);
	const { index, setIndex } = useOpenLocationStore();

	return (
		<section
			ref={ref}
			id="contact"
			className="relative bg-navy pt-20 text-white"
		>
			<div className="w-full pr-[89px] pl-24 pt-[58px] relative z-0">
				<div className="mx-auto w-full relative z-10">
					<h2 className="font-sans text-gold uppercase font-semibold tracking-[0.25em]">
						Contact
					</h2>
					<h3 className="font-serif mt-8 text-7xl leading-20 relative">
						<div className="">Get in</div>
						<div className="pl-26 font-serif-italic">touch</div>
						<div className="absolute bottom-0 left-0 h-14 w-px bg-slate/25" />
					</h3>
				</div>
				<div className="border-l mx-auto w-full relative z-10 pl-26 pt-[73px] pb-16 border-b border-slate/25 text-xl">
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
						<div className="h-4 flex items-center gap-[6px] mt-7">
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

					<div className="mt-20 flex items-end justify-between text-xl">
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
						<div className="pb-2">
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
				<div className="py-16 flex items-center justify-end pr-12">
					<div>
						<Link href={"/disclosures/legal-regulatory"}>
							<Button
								label={"Legal & Regulatory"}
								color={"var(--color-white)"}
							/>
						</Link>
					</div>
				</div>
			</div>
			<div className="absolute top-20 right-0 w-[76%] h-[66%]">
				<div className="w-full h-full relative ">
					<ContactMap locations={locations} />
				</div>
			</div>
		</section>
	);
}
