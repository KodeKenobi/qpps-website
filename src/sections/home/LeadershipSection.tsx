"use client";

import Image from "next/image";
import type { Leader } from "@/components/leaadership/LeaderElement";
import AliAkayAvatar from "@/assets/images/4_leadership/carrhae_capital_section4_leadership_image_ali_akay.webp";
import PlamenDokovAvatar from "@/assets/images/4_leadership/carrhae_capital_section4_leadership_image_plamen_dokov.webp";
import ShaneBoltonAvatar from "@/assets/images/4_leadership/carrhae_capital_section4_leadership_image_shane_bolton.webp";
import LeadershipBackground from "@/assets/svgs/4_leadership/carrhae-capital-section4-leadership-image-background.svg";
import LeaderElement from "@/components/leaadership/LeaderElement";
import { HandleSectionInView } from "@/utils/handleSectionInView";

const leaders: Leader[] = [
	{
		avatar: AliAkayAvatar,
		name: "Ali Akay",
		title: "Chief Investment Officer & Founding Partner",
		linkedInUrl: "https://www.linkedin.com/in/aliakay/",
		biography: `With 25 years of experience in global long-short equity,
		Ali specializes in emerging markets and financials. He spent much of
		his career at SAC Global and HBK Investments before founding Carrhae
		Capital in 2011, with backing from Blackstone. At SAC Global, he
		managed the emerging markets long/short equity portfolio and served
		on the Investment Committee. Previously, he was a partner at HBK
		Investments, leading emerging market equities and establishing their
		Istanbul office in 2008. Ali began his career at McKinsey & Company
		and later joined Goldman Sachs as an Associate in the Principal
		Strategies Group. He holds a BSc in Economics and a BA in German
		Literature and International Studies from the Wharton School of
		Business.`,
		layout: "first",
	},
	{
		avatar: PlamenDokovAvatar,
		name: "Plamen Dokov",
		title: "Chief Technology Officer & Founding Partner",
		linkedInUrl: "https://www.linkedin.com/in/plamendokov/",
		biography:
			"Plamen is a technology expert with a strong background in software development and data analysis. He has been instrumental in building Carrhae's technology infrastructure and investment platform.",
		layout: "second",
	},
	{
		avatar: ShaneBoltonAvatar,
		name: "Shane Bolton",
		title: "Chief Operating Officer & Founding Partner",
		linkedInUrl: "https://www.linkedin.com/in/shanebolton/",
		biography:
			"Shane is an operations specialist with extensive experience in managing complex financial operations. He ensures that Carrhae's operations run smoothly and efficiently.",
		layout: "third",
	},
];

export default function LeadershipSection() {
	const id = "leadership";
	const [ref, , isVis] = HandleSectionInView(id);

	return (
		<section ref={ref} id={id} className="relative text-navy md:pr-20">
			<div className="absolute bottom-0 right-0 w-20 z-0 h-72 bg-navy"></div>
			<div className="relative overflow-hidden w-full z-10 bg-alt-gray pt-20 md:pt-32">
				<div className="absolute bottom-0 left-0 w-full h-3/4 z-0">
					<Image
						src={LeadershipBackground}
						alt="Background"
						fill
						className="object-contain object-bottom-left opacity-50"
					/>
				</div>
				<div className="px-8 md:pl-24 md:pr-28">
					<h2
						className={`font-sans text-gold uppercase md:text-right text-center md:text-base text-xs font-semibold tracking-[0.25em] delay-100 fade-up ${
							isVis ? "open" : "closed"
						}`}
					>
						LEADERSHIP
					</h2>
					<h3 className="font-serif mt-2 md:mt-8 text-4xl md:text-6xl lg:text-7xl leading-snug md:text-right justify-center md:justify-end text-center lg:leading-24 flex flex-wrap gap-x-3">
						<span
							className={`font-serif-italic delay-200 fade-up ${
								isVis ? "open" : "closed"
							}`}
						>
							Seasoned
						</span>
						<span className={`delay-300 fade-up ${isVis ? "open" : "closed"}`}>
							emerging
						</span>
						<div
							className={`md:ml-12 w-full flex md:justify-end justify-center flex-wrap gap-x-3`}
						>
							<span
								className={`delay-400 fade-up ${isVis ? "open" : "closed"}`}
							>
								market
							</span>
							<span
								className={`delay-500 fade-up ${isVis ? "open" : "closed"}`}
							>
								leaders
							</span>
						</div>
					</h3>
				</div>

				<div
					className={`flex flex-col w-full relative md:mt-0 mt-2 delay-600 fade-up ${
						isVis ? "open" : "closed"
					}`}
				>
					{leaders.map((leader, index) => (
						<LeaderElement
							key={leader.name}
							data={leader}
							index={index}
							total={leaders.length - 1}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
