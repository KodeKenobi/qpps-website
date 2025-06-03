"use client";

import type { StaticImageData } from "next/image";
import { ReactNode, useState } from "react";
import Image from "next/image";
import Image1 from "@/assets/images/3_investment-approach/carrhae_capital_section3_investment_approach_image_long_short.webp";
import Image2 from "@/assets/images/3_investment-approach/carrhae_capital_section3_investment_approach_image_long_only.webp";
import ApproachBackground from "@/assets/svgs/3_investment-approach/carrhae-capital-section3-investment-approach-image-background.svg";
import ReadMoreArrow from "@/assets/svgs/3_investment-approach/ReadMoreArrow";
import { AnimatePresence, motion } from "motion/react";
import CImage from "@/assets/svgs/4_leadership/carrhae-capital-section5-c.svg";
import { HandleSectionInView } from "@/utils/handleSectionInView";

export default function ApproachSection() {
	const id = "approach";
	const [ref, , isVis] = HandleSectionInView(id);

	return (
		<section
			ref={ref}
			id={id}
			className="relative min-h-screen pt-20 md:pt-16 lg:mt-28 md:px-20 text-navy"
		>
			<div className="mx-auto w-full relative z-10 px-8 md:px-12 lg:px-24">
				<h2
					className={`font-sans text-gold uppercase text-xs md:text-base text-center md:text-left font-semibold delay-100 fade-up ${
						isVis ? "open" : "closed"
					}`}
				>
					INVESTMENT APPROACH
				</h2>
				<h3 className="font-serif mt-2 md:mt-8 text-4xl md:text-6xl lg:text-7xl leading-snug md:text-left text-center lg:leading-24 flex flex-wrap gap-x-3">
					<span
						className={`font-serif-italic delay-200 fade-up ${
							isVis ? "open" : "closed"
						}`}
					>
						Capturing
					</span>{" "}
					<span className={`delay-300 fade-up ${isVis ? "open" : "closed"}`}>
						emerging
					</span>
					<div
						className={`md:pl-32 w-full delay-400 fade-up ${
							isVis ? "open" : "closed"
						}`}
					>
						market dispersion
					</div>
				</h3>

				<p
					className={`md:font-normal font-light md:text-left text-center mt-5 md:pl-32 md:mt-16 text-lg md:text-xl delay-500 fade-up ${
						isVis ? "open" : "closed"
					}`}
				>
					We leverage granular fundamental analysis, carried out by
					on-the-ground research teams, to uncover latent risk-return asymmetry
					within and across emerging market companies, sectors, and borders.
					Dynamic portfolio and risk management drive optimal capital allocation
					through cycles. Our unified process informs two distinct strategies.
				</p>
			</div>
			<div className="w-full grid md:grid-cols-2 md:px-0 px-8 gap-7 mt-12 md:mt-32 relative z-10 pb-1">
				<div className="md:pt-[14%] relative z-20">
					<Card title={"Long-Short"} image={Image1}>
						<p>
							Launched in December 2011 <br />
							<br />
							Absolute return target
							<br />
							<br />
							Dynamic, low-net approach
							<br />
							<br />
							UCITS version launched March 2022
							<br />
							<br />
						</p>
					</Card>
				</div>
				<div className="z-20 relative">
					<Card title={"Long-Only"} image={Image2}>
						<p>
							Launched in February 2014
							<br />
							<br />
							Alpha-driven return target
							<br />
							<br />
							Concentrated, benchmark-agnostic investing
							<br />
							<br />
							Diversified across 30 - 50 best ideas
						</p>
					</Card>
				</div>
				<div className="absolute bottom-0 left-0 w-full h-1/3 md:h-1/2 z-0 bg-alt-gray" />
				<div className="hidden md:block absolute bottom-0 left-0 -translate-x-full w-44 h-1/2 z-0 bg-alt-gray" />
				<Image
					src={CImage}
					alt="C Image"
					className="absolute bottom-0 left-0 z-10 translate-y-1/2 -translate-x-20"
				/>
			</div>
			<Image
				src={ApproachBackground}
				alt="Approach Background"
				className="absolute top-0 right-0 z-0"
			/>
		</section>
	);
}

const Card = ({
	title,
	children,
	image,
}: {
	title: string;
	children: ReactNode;
	image: StaticImageData;
}) => {
	const [open, setOpen] = useState<boolean>(false);
	return (
		<motion.div
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.7, ease: "easeInOut" }}
			className="w-full xl:aspect-square min-h-[362px] md:min-h-[515px] overflow-hidden relative pb-[84px] flex items-center justify-center text-white"
		>
			<Image
				src={image}
				alt={title}
				quality={100}
				className="absolute top-0 left-0 w-full h-full object-center z-0"
			/>
			<div className="w-full px-4 md:px-0 md:w-3/4 md:max-h-3/4 relative z-20 text-center">
				<AnimatePresence mode="wait">
					{open ? (
						<motion.div
							key={"content"}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 20 }}
							transition={{ duration: 0.5, ease: "easeInOut" }}
							className="md:text-xl text-base md:py-0 py-12"
						>
							{children}
						</motion.div>
					) : (
						<motion.div
							key={"title"}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 20 }}
							transition={{ duration: 0.5, ease: "easeInOut" }}
							className="font-serif text-4xl md:text-6xl"
						>
							<h4>{title}</h4>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
			<button
				onMouseDown={() => setOpen(!open)}
				className="absolute bottom-0 left-0 w-full h-[84px] flex items-center justify-center z-20 cursor-pointer transition-colors duration-100 active:bg-white/5"
			>
				<div className="absolute top-3 left-1/2 -translate-x-1/2 -translate-y-full">
					<ReadMoreArrow open={open} />
				</div>
				<span className="uppercase text-gold text-xs font-semibold tracking-[0.25em]">
					Read {open ? "less" : "more"}
				</span>
			</button>
			<div
				className={`${
					open ? "h-full" : "h-[84px]"
				} transition-all duration-1000 ease-in-out w-full bg-navy opacity-40 mix-blend-multiply z-10 absolute bottom-0 left-0`}
			/>
		</motion.div>
	);
};
