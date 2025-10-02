"use client";

import Image from "next/image";
import CImage from "@/assets/svgs/2_about/qpps-section2-about-background-c-cropped.svg";
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
        <h3 className="font-satoshi mt-1 lg:mt-2 text-4xl lg:text-7xl lg:text-left text-center lg:leading-[-0.1em] flex flex-wrap lg:justify-start justify-center gap-x-1 lg:gap-x-1">
          <span
            className={`font-satoshi italic leading-tight delay-200 fade-up ${
              isVis ? "open" : "closed"
            }`}
          >
            Digital
          </span>
          <span
            className={`delay-300 leading-tight fade-up ${
              isVis ? "open" : "closed"
            }`}
          >
            {" "}
            &nbsp;innovation.
          </span>
          <div className="lg:ml-32 w-full leading-none flex lg:justify-start justify-center flex-wrap gap-x-1 lg:gap-x-1">
            <span
              className={`font-satoshi leading-none delay-400 fade-up ${
                isVis ? "open" : "closed"
              }`}
            >
              Local
            </span>{" "}
            <span
              className={`lg:pl-3 delay-500 fade-up leading-none ${
                isVis ? "open" : "closed"
              }`}
            >
              impact.
            </span>
          </div>
        </h3>
        <div className="lg:grid lg:grid-cols-2 lg:gap-0 lg:-mt-20 mt-0">
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
              animate={isVis ? { width: "50%" } : { width: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute bottom-0 left-0 w-1/2 h-px bg-slate opacity-50 lg:block hidden"
            />
          </div>
          <div className="relative lg:pt-16 lg:pl-0 lg:pb-0">
            <p
              className={`text-lg lg:text-left text-center lg:font-normal font-light lg:text-xl delay-1000 fade-up ${
                isVis ? "open" : "closed"
              }`}
            >
              Quality Projects People and Solutions (QPPS) is a newly
              established company proudly founded by a previously disadvantaged
              candidate and is based in East London, South Africa.
              <br />
              Our core objective is to play a meaningful and significant role in
              government, municipal, and private sector projects by leveraging
              technology to improve lives and simplify operations. We are
              committed to protecting and enhancing service delivery through
              tailored digital solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
