"use client";

import useOpenBiographyStore from "@/store/useOpenBiographyStore";
import LinkedInLogo from "@/assets/svgs/4_leadership/carrhae-capital-section5-leadership-linkedin.svg";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import Button from "../buttons/Button";
import { useEffect, useState } from "react";

export interface Leader {
	avatar: StaticImageData;
	name: string;
	title: string;
	linkedInUrl: string;
	biography: string;
	layout: "first" | "second" | "third";
}

export default function LeaderElement({
	data,
	index,
	total,
}: {
	data: Leader;
	index: number;
	total: number;
}) {
	const [isMobile, setIsMobile] = useState<boolean>(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};

		handleResize(); // Check on initial render

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const Layout = () => {
		if (isMobile) {
			return <MobileLayout data={data} index={index} />;
		} else {
			switch (data.layout) {
				case "first":
					return <FirstLayout data={data} index={index} />;
				case "second":
					return <SecondLayout data={data} index={index} />;
				case "third":
					return <ThirdLayout data={data} index={index} />;
				default:
					return undefined;
			}
		}
	};

	return (
		<div id={`leader-${index}`}>
			<Layout />
			<BiographyModal data={data} id={index} total={total} />
		</div>
	);
}

/**
 *
 * @heading First Layout
 * @description First layout for the leader element.
 */
const FirstLayout = ({ data, index }: { data: Leader; index: number }) => {
	const { setIndex } = useOpenBiographyStore();

	return (
		<div className="md:pr-28 lg:-mt-[100px]">
			<div className="relative flex items-end justify-start border-b border-slate/25 lg:pl-[108px]">
				<div className="absolute right-0 bottom-0 w-px h-4/5 bg-slate/25" />
				<Image src={data.avatar} alt={data.name} className="w-1/3" />
				<div className=" pb-8 lg:pb-12">
					<h4 className="text-slate font-serif text-4xl lg:text-6xl">
						{data.name}
					</h4>
					<p className="text-navy font-light italic text-lg lg:text-xl mt-3">
						{data.title}
					</p>
					<div className="pl-20 mt-7 relative z-10">
						<Button
							onClick={() => setIndex(index)}
							label={"Read Bio"}
							color="var(--color-navy)"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

/**
 *
 * @heading Second Layout
 * @description Second layout for the leader element.
 */
const SecondLayout = ({ data, index }: { data: Leader; index: number }) => {
	const { setIndex } = useOpenBiographyStore();

	return (
		<div className="md:-mt-12 lg:-mt-20 pr-8 border-b border-slate/25">
			<div className="flex items-end justify-end">
				<div className="pb-8 lg:pb-12 text-right pr-16">
					<h4 className="text-slate font-serif text-4xl lg:text-6xl">
						{data.name}
					</h4>
					<p className="text-navy font-light italic text-lg lg:text-xl mt-3">
						{data.title}
					</p>
					<div className="mt-7 flex justify-end">
						<Button
							onClick={() => setIndex(index)}
							label={"Read Bio"}
							color="var(--color-navy)"
						/>
					</div>
				</div>
				<Image src={data.avatar} alt={data.name} className="w-1/3" />
			</div>
		</div>
	);
};

/**
 *
 * @heading Third Layout
 * @description Third layout for the leader element.
 */
const ThirdLayout = ({ data, index }: { data: Leader; index: number }) => {
	const { setIndex } = useOpenBiographyStore();

	return (
		<div className="flex items-end justify-start md:-mt-16 lg:-mt-[98px] lg:pl-[108px]">
			<Image src={data.avatar} alt={data.name} className="w-1/3" />
			<div className="pb-8 lg:pb-12">
				<h4 className="text-slate font-serif text-4xl lg:text-6xl">
					{data.name}
				</h4>
				<p className="text-navy font-light italic text-lg lg:text-xl mt-3">
					{data.title}
				</p>
				<div className="pl-20 mt-7 relative z-10">
					<Button
						onClick={() => setIndex(index)}
						label={"Read Bio"}
						color="var(--color-navy)"
					/>
				</div>
			</div>
		</div>
	);
};

/**
 *
 * @heading Biography Modal
 * @description Modal used to view the biography of a leader.
 */
const BiographyModal = ({
	data,
	id,
	total,
}: {
	data: Leader;
	id: number;
	total: number;
}) => {
	const { index, setIndex, closeBiography } = useOpenBiographyStore();

	return (
		<div
			className={`${
				index === id ? "flex" : "hidden"
			} flex fixed z-40 top-[120px] left-1/2 w-11/12 h-5/6 md:w-3/4 md:h-4/5 -translate-x-1/2 bg-slate overflow-y-auto transition-all duration-500 ease-in-out`}
		>
			<article className="relative w-full h-full text-white flex flex-col">
				<header className="md:p-14 px-16 p-8 md:pl-32 md:pb-16 md:block flex items-center justify-between">
					<span className="md:block hidden">
						<Button
							onClick={() => closeBiography()}
							label={"Back to Team"}
							color={"var(--color-white)"}
							layout="left"
						/>
					</span>
					<span className="block md:hidden">
						<Button
							onClick={() => {
								if (id > 0) {
									setIndex(id - 1);
								} else {
									closeBiography();
								}
							}}
							label={id > 0 ? "Back" : "Close"}
							color="white"
							layout="left"
						/>
					</span>
					<span className="block md:hidden">
						<Button
							onClick={() => {
								if (id < total) {
									setIndex(id + 1);
								} else {
									closeBiography();
								}
							}}
							label={id < total ? "Next" : "Close"}
							color="white"
						/>
					</span>
				</header>
				<div className={`md:pl-32 px-0 md:pr-28`}>
					<h4 className="font-serif text-4xl md:text-left text-center md:text-6xl">
						{data.name}
					</h4>
					<div className="flex flex-col md:flex-row items-center justify-between md:w-full w-2/3 md:mx-0 mx-auto">
						<p className="font-light italic text-lg md:text-left text-center md:text-xl mt-3">
							{data.title}
						</p>
						<Link
							href={data.linkedInUrl}
							target="_blank"
							className="mt-8 md:mt-0"
						>
							<Image
								src={LinkedInLogo}
								alt="LinkedIn"
								className="md:w-5 md:h-5 w-3.5 h-3.5"
							/>
						</Link>
					</div>

					<div className="py-[38px]">
						<div className="w-full h-px bg-gray"></div>
					</div>

					<div className="md:px-0 px-8">
						<p className="text-lg md:text-left text-center md:text-xl font-light">
							{data.biography}
						</p>
					</div>
				</div>
				<footer className="flex items-center justify-center md:justify-between md:pl-32 md:pr-28 pt-3 mt-auto pb-10 md:pb-12">
					<div className="h-4 flex items-center gap-[6px]">
						{Array.from({ length: total + 1 }, (_, i) => (
							<div
								key={i}
								onMouseDown={() => setIndex(i)}
								className={`w-[6px] h-[6px] aspect-square rounded-full transition-all duration-300 cursor-pointer ${
									i === id ? "bg-gold" : "bg-gold/40"
								}`}
							></div>
						))}
					</div>
					<div className="hidden md:block">
						<Button
							onClick={() => {
								if (id < total) {
									setIndex(id + 1);
								} else {
									closeBiography();
								}
							}}
							label={id < total ? "Next" : "Close"}
							color="white"
						/>
					</div>
				</footer>
			</article>
		</div>
	);
};

const MobileLayout = ({ data, index }: { data: Leader; index: number }) => {
	const { setIndex } = useOpenBiographyStore();

	return (
		<div className="flex flex-col items-center">
			<div className="w-full border-b border-b-slate/50 flex justify-center overflow-hidden">
				<span className="w-2/3 h-fit mx-auto">
					<Image
						src={data.avatar}
						alt={data.name}
						className="w-full mx-auto max-w-[258px]"
					/>
				</span>
			</div>
			<div className="pb-12 pt-6 text-center px-8">
				<h4 className="text-slate font-serif text-4xl">{data.name}</h4>
				<p className="text-navy font-light italic text-lg md:text-xl mt-3">
					{data.title}
				</p>
				<div className="flex items-center justify-center mt-7">
					<span className="w-fit pr-12">
						<Button
							onClick={() => setIndex(index)}
							label={"Read Bio"}
							color="var(--color-navy)"
						/>
					</span>
				</div>
			</div>
		</div>
	);
};
