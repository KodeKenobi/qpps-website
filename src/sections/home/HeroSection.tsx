"use client";

import Image from "next/image";
import HeroBackground from "@/assets/images/1_landing/carrhae_capital_landing_image.webp";
import LandingArrow from "@/assets/svgs/1_landing/LandingArrow";
import { HandleSectionInView } from "@/utils/handleSectionInView";
import { motion } from "motion/react";

export default function HeroSection() {
  const id = "hero";
  const [ref, , isVis] = HandleSectionInView(id);

  return (
    <>
      <section
        ref={ref}
        id={id}
        className="flex flex-col md:min-h-screen overflow-x-clip relative justify-center bg-slate text-white md:mx-0 px-8 md:pb-0 pb-44 pt-44 md:pt-[200px]"
      >
        <Image
          src={HeroBackground}
          alt="Background"
          fill
          className="object-cover object-center absolute top-0 left-0 w-full h-full z-0"
        />

        <div className="relative py-auto w-fit max-w-2xl mx-auto md:ml-auto md:mr-[12%] my-auto">
          <h1 className="text-5xl md:text-left text-center md:text-white text-navy md:text-6xl lg:text-7xl md:justify-start justify-center font-serif font-normal md:pr-24 flex flex-wrap">
            <span
              className={`font-serif-italic relative delay-200 fade-up ${
                isVis ? "open" : "closed"
              }`}
            >
              Precision
            </span>
            <span
              className={`w-3 delay-300 fade-up ${isVis ? "open" : "closed"}`}
            />
            <span className={`delay-400 fade-up ${isVis ? "open" : "closed"}`}>
              in
            </span>
            <span className={`delay-500 fade-up ${isVis ? "open" : "closed"}`}>
              Liquid Emerging
            </span>{" "}
            <br />
            <span className={`delay-600 fade-up ${isVis ? "open" : "closed"}`}>
              Markets
            </span>
          </h1>
          <div
            className={`md:hidden flex justify-center py-20 delay-700 fade-up ${
              isVis ? "open" : "closed"
            }`}
          >
            <LandingArrow />
          </div>
          <p
            className={`w-full md:max-w-[334px] text-lg text-center md:text-left lg:text-xl md:ml-auto delay-700 fade-up ${
              isVis ? "open" : "closed"
            }`}
          >
            We combine localised research and structured portfolio management to
            capture the persistent dispersion in emerging markets.
          </p>
          <div
            className={`pl-14 -mt-10 hidden md:block delay-800 fade-up ${
              isVis ? "open" : "closed"
            }`}
          >
            <LandingArrow />
          </div>
        </div>

        <div
          className={`hidden md:block mx-auto md:mr-0 md:ml-auto w-full md:w-5/6 bg-navy relative z-10 md:min-h-32 md:translate-y-1/2 py-16 md:py-20`}
        >
          <div className="border-b-gold/40 md:border-b flex flex-col md:flex-row justify-between gap-[10%] md:px-14 lg:px-28">
            <TimelineItem
              index={0}
              title="2011"
              description="Firm founded <br> by Ali Akay"
            />
            <TimelineItem
              index={1}
              title="~$2.2bn"
              description="AUM across EM equity strategies, as of 05 June, 2025"
            />
            <TimelineItem
              index={2}
              title="45 years"
              description="Combined EM experience <br> of CIO & deputy CIO"
            />
          </div>
        </div>
      </section>
      <section className="px-8 md:px-0 md:hidden -mt-28 -mb-28">
        <div className="text-white mx-auto md:mr-0 md:ml-auto w-full md:w-5/6 bg-navy relative z-10 md:min-h-32 md:translate-y-1/2 py-16 md:py-20">
          <div className="border-b-gold/40 md:border-b flex flex-col md:flex-row justify-between gap-[10%] md:px-28">
            <TimelineItem
              index={0}
              title="2011"
              description="Firm founded <br> by Ali Akay"
            />
            <TimelineItem
              index={1}
              title="~$2.2bn"
              description="Current AUM across EM <br> equity strategies"
            />
            <TimelineItem
              index={2}
              title="45 years"
              description="Combined EM experience <br> of CIO & deputy CIO"
            />
          </div>
        </div>
      </section>
    </>
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
    <div className="flex flex-col relative pb-8 md:text-left text-center py-8 md:pt-0 first:pt-0 md:border-b border-b border-b-gold/40">
      <motion.h4
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 * index }}
        className={`font-serif text-gold text-5xl lg:text-6xl`}
      >
        {title}
      </motion.h4>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 * index }}
        className={`text-lg lg:text-xl mt-2`}
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      ></motion.p>
      <span
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-0 h-[2px] bg-gold`}
        style={{
          width: 60 + 60 * index,
        }}
      />
    </div>
  );
};
