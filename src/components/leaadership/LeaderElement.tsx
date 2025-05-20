"use client";

import useOpenBiographyStore from "@/store/useOpenBiographyStore";
import LinkedInLogo from "@/assets/svgs/4_leadership/carrhae-capital-section5-leadership-linkedin.svg";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import Button from "../buttons/Button";

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
	const Layout = () => {
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
		<div className="pr-28 -mt-[100px]">
			<div className="relative flex items-end justify-start border-b border-slate/25 pl-[108px]">
				<div className="absolute right-0 bottom-0 w-px h-4/5 bg-slate/25" />
				<Image src={data.avatar} alt={data.name} className="w-1/3" />
				<div className="pb-12">
					<h4 className="text-slate font-serif text-6xl">{data.name}</h4>
					<p className="text-navy font-light italic text-xl mt-3">
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
		<div className="-mt-20 pr-8 border-b border-slate/25">
			<div className="flex items-end justify-end">
				<div className="pb-12 text-right pr-16">
					<h4 className="text-slate font-serif text-6xl">{data.name}</h4>
					<p className="text-navy font-light italic text-xl mt-3">
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
		<div className="flex items-end justify-start -mt-[98px]">
			<Image src={data.avatar} alt={data.name} className="w-1/3" />
			<div className="pb-12">
				<h4 className="text-slate font-serif text-6xl">{data.name}</h4>
				<p className="text-navy font-light italic text-xl mt-3">{data.title}</p>
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
			} flex fixed z-40 top-1/2 left-1/2 w-3/4 h-8/9 -translate-x-1/2 -translate-y-1/2 bg-slate overflow-y-auto transition-all duration-500 ease-in-out`}
		>
			<article className="relative w-full h-full text-white flex flex-col">
				<header className="p-14 pl-32 pb-16">
					<Button
						onClick={() => closeBiography()}
						label={"Back to Team"}
						color={"var(--color-white)"}
						layout="left"
					/>
				</header>
				<div className={`pl-32 pr-28`}>
					<h4 className="font-serif text-6xl">{data.name}</h4>
					<div className="flex items-center justify-between">
						<p className="font-light italic text-xl mt-3">{data.title}</p>
						<Link href={data.linkedInUrl} target="_blank">
							<Image src={LinkedInLogo} alt="LinkedIn" className="w-5 h-5" />
						</Link>
					</div>

					<div className="py-[38px]">
						<div className="w-full h-px bg-gray"></div>
					</div>

					<div>
						<p className="text-xl font-light">{data.biography}</p>
					</div>
				</div>
				<footer className="flex items-center justify-between pl-32 pr-28 pt-3 mt-auto pb-12">
					<div className="h-4 flex items-center gap-[6px]">
						{Array.from({ length: total + 1 }, (_, i) => (
							<div
								key={i}
								className={`w-[6px] h-[6px] aspect-square rounded-full transition-all duration-300 ${
									i === id ? "bg-gold" : "bg-gold/40"
								}`}
							></div>
						))}
					</div>
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
				</footer>
			</article>
		</div>
	);
};
