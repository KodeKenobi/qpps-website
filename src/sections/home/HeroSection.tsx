"use client";

import Image from "next/image";
import LandingArrow from "@/assets/svgs/1_landing/LandingArrow";
import { HandleSectionInView } from "@/utils/handleSectionInView";
import { motion } from "motion/react";
import Counter from "@/components/fragments/Counter";

export default function HeroSection() {
  const id = "hero";
  const [ref, , isVis] = HandleSectionInView(id);

  return (
    <>
      <section
        ref={ref}
        id={id}
        className="flex flex-col lg:min-h-screen overflow-x-clip relative justify-center bg-slate text-white lg:mx-0 px-8 lg:pr-0 lg:pb-0 pb-44 pt-44 lg:pt-[200px]"
      >
        <Image
          src="/hero/hero.jpg"
          alt="QPPS Hero Background"
          fill
          className="object-cover object-center absolute top-0 left-0 w-full h-full z-0"
          priority
          quality={100}
          sizes="100vw"
        />

        <div className="relative py-auto w-fit max-w-2xl mx-auto lg:ml-auto lg:mr-[12%] my-auto">
          <h1 className="text-5xl lg:text-left text-center lg:text-white text-navy lg:text-7xl lg:justify-start justify-center font-serif font-normal lg:pr-24 flex flex-wrap lg:gap-x-3 gap-x-2">
            <span
              className={`font-serif-italic relative delay-200 fade-up ${
                isVis ? "open" : "closed"
              }`}
            >
              Digital
            </span>
            <span className={`delay-400 fade-up ${isVis ? "open" : "closed"}`}>
              Transformation
            </span>
            <span className={`delay-500 fade-up ${isVis ? "open" : "closed"}`}>
              for
            </span>{" "}
            <br />
            <span
              className={`mb-8 delay-600 fade-up ${isVis ? "open" : "closed"}`}
            >
              South Africa
            </span>
          </h1>
          <div
            className={`lg:hidden flex justify-center py-20 delay-700 fade-up ${
              isVis ? "open" : "closed"
            }`}
          >
            <LandingArrow />
          </div>
          <p
            className={`w-full lg:max-w-[434px] text-lg text-center lg:text-left lg:text-xl lg:ml-auto delay-700 fade-up ${
              isVis ? "open" : "closed"
            }`}
          >
            Empowering people and institutions through digital transformation.
            We deliver innovative, secure, and user-friendly systems that drive
            transformation across South Africa.
          </p>
          <div
            className={`pl-14 -mt-10 hidden lg:block delay-800 fade-up ${
              isVis ? "open" : "closed"
            }`}
          >
            <LandingArrow />
          </div>
        </div>

        <div
          className={`hidden lg:block mx-auto lg:mr-0 lg:ml-auto w-full lg:w-5/6 bg-navy relative z-10 lg:min-h-32 lg:translate-y-1/2 py-16 lg:py-20`}
        >
          <div className="flex flex-col lg:flex-row justify-between gap-[10%] lg:px-28 relative">
            <TimelineItem
              index={0}
              number={2024}
              description="QPPS founded <br> by Simlindile Bantom"
            />
            <TimelineItem
              index={1}
              number={11}
              suffix="+ years"
              description="Combined ICT experience <br> of our leadership team"
            />
            <TimelineItem
              index={2}
              number={5}
              suffix=" services"
              description="Core service offerings <br> for digital transformation"
            />
            <motion.i
              initial={{
                width: 0,
              }}
              whileInView={{
                width: "100%",
              }}
              transition={{
                duration: 3,
              }}
              className="absolute bottom-0 left-0 w-full h-px bg-gold opacity-40"
            />
          </div>
        </div>
      </section>
      <section className="px-8 lg:px-0 lg:hidden -mt-28 -mb-28">
        <div className="text-white mx-auto lg:mr-0 lg:ml-auto w-full lg:w-5/6 bg-navy relative z-10 lg:min-h-32 lg:translate-y-1/2 py-16 lg:py-20">
          <div className="border-b-gold/40 lg:border-b flex flex-col lg:flex-row justify-between gap-[10%] lg:px-28">
            <TimelineItem
              index={0}
              number={2024}
              description="QPPS founded <br> by Simlindile Bantom"
            />
            <TimelineItem
              index={1}
              number={11}
              suffix="+ years"
              description="Combined ICT experience <br> of our leadership team"
            />
            <TimelineItem
              index={2}
              number={5}
              suffix=" services"
              description="Core service offerings <br> for digital transformation"
            />
          </div>
        </div>
      </section>
    </>
  );
}

const TimelineItem = ({
  prefix,
  suffix,
  number,
  description,
  index,
}: {
  prefix?: string;
  suffix?: string;
  number: number;
  description: string;
  index: number;
}) => {
  return (
    <div className="flex flex-col relative pb-8 lg:text-left text-center py-8 lg:pt-0 first:pt-0 lg:border-b-0 border-b border-b-gold/40">
      <motion.h4
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 * index }}
        className={`font-serif text-gold text-5xl lg:text-6xl`}
      >
        {prefix}
        <Counter target={number} />
        {suffix}
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
      <motion.span
        initial={{
          width: 0,
        }}
        whileInView={{
          width: 60 + 60 * index,
        }}
        transition={{
          duration: 1.2,
          delay: 0.7 * index,
        }}
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-0 h-[2px] bg-gold`}
        style={{
          width: 60 + 60 * index,
        }}
      />
    </div>
  );
};
