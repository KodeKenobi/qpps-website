"use client";

import Image from "next/image";
import CImage from "@/assets/svgs/2_about/carrhae-capital-section2-about-background-c-cropped.svg";
import { HandleSectionInView } from "@/utils/handleSectionInView";
import { motion } from "motion/react";

export default function AboutSection() {
  const id = "about";
  const [ref, , isVis] = HandleSectionInView(id);

  return (
    <section
      ref={ref}
      id={id}
      className="relative w-screen overflow-x-clip lg:pt-20 lg:pl-20 text-navy"
    >
      <Image src={CImage} alt="C" className="absolute top-20 right-0 z-0" />
      <div className="w-full px-8 lg:px-24 pt-44 pb-20 lg:pb-44 bg-gray/25">
        <h2
          className={`font-sans text-gold uppercase lg:text-left text-center lg:text-base text-xs font-semibold tracking-[0.25em] delay-100 fade-up ${
            isVis ? "open" : "closed"
          }`}
        >
          About
        </h2>
        <h3 className="font-serif mt-2 lg:mt-8 text-4xl lg:text-7xl lg:text-left text-center lg:leading-24 flex flex-wrap lg:justify-start justify-center gap-x-2 lg:gap-x-3">
          <span
            className={`font-serif-italic leading-tight delay-200 fade-up ${
              isVis ? "open" : "closed"
            }`}
          >
            Global
          </span>
          <span
            className={`delay-300 leading-tight fade-up ${isVis ? "open" : "closed"}`}
          >
            perspective.
          </span>
          <div className="lg:ml-32 w-full leading-tight flex lg:justify-start justify-center flex-wrap gap-x-2 lg:gap-x-3">
            <span
              className={`font-serif-italic leading-tight delay-400 fade-up ${
                isVis ? "open" : "closed"
              }`}
            >
              Local
            </span>{" "}
            <span
              className={`lg:pl-3 delay-500 fade-up leading-tight ${
                isVis ? "open" : "closed"
              }`}
            >
              clarity.
            </span>
          </div>
        </h3>
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:-mt-12 mt-7">
          <div className="relative">
            <motion.i
              initial={{
                height: 0,
              }}
              animate={isVis ? { height: "100%" } : { height: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute top-0 left-0 w-px h-full bg-slate opacity-50 lg:block hidden"
            />
            <motion.i
              initial={{
                width: 0,
              }}
              animate={isVis ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute bottom-0 left-0 w-full h-px bg-slate opacity-50 lg:block hidden"
            />
          </div>
          <div className="relative lg:pt-16 lg:pl-0 lg:pb-0">
            <p
              className={`text-lg lg:text-left text-center lg:font-normal font-light lg:text-xl delay-1000 fade-up ${
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
