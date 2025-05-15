import Image from "next/image";
import HeroBackground from "@/assets/images/1_landing/carrhae_capital_landing_image.webp";
import LandingArrow from "@/assets/svgs/1_landing/LandingArrow";

export default function HeroSection() {
	return (
		<section className="flex flex-col min-h-screen overflow-x-clip relative justify-center bg-slate text-white pt-[119px]">
			<Image
				src={HeroBackground}
				alt="Background"
				fill
				className="object-cover object-center absolute top-0 left-0 w-full h-full z-0"
			/>

			<div className="relative py-auto w-fit max-w-2xl ml-auto mr-[12%] my-auto">
				<h1 className="text-7xl font-serif font-normal pr-24">
					<span className="font-serif-italic">Precision</span> in <br />
					Liquid Emerging <br />
					Markets
				</h1>
				<p className="max-w-[334px] text-xl ml-auto">
					We combine localised research and structured portfolio management to
					capture the persistent dispersion in emerging markets.
				</p>

				<div className="pl-14 -mt-10">
					<LandingArrow />
				</div>
			</div>
			<div className="ml-auto w-5/6 bg-navy relative z-10 min-h-32 translate-y-1/2 py-20">
				<div className="border-b-gold/40 border-b flex justify-between gap-[10%] px-28">
					<TimelineItem
						index={0}
						title="2011"
						description="Firm founded by Ali Akay"
					/>
					<TimelineItem
						index={1}
						title="~$2.2bn"
						description="Current AUM across EM equity strategies"
					/>
					<TimelineItem
						index={2}
						title="45 years"
						description="Combined EM experience of CIO & deputy CIO"
					/>
				</div>
			</div>
		</section>
	);
}

const TimelineItem = ({
	title,
	description,
	index,
}: {
	title: string;
	description: string;
	index: number;
}) => {
	return (
		<div className="flex flex-col relative pb-8">
			<h4 className="font-serif text-gold text-6xl">{title}</h4>
			<p className="text-xl mt-2">{description}</p>
			<span
				className={`absolute bottom-0 left-0 h-[2px] bg-gold`}
				style={{
					width: 60 + 60 * index,
				}}
			/>
		</div>
	);
};
