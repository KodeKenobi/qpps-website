"use client";

import type { StaticImageData } from "next/image";
import { ReactNode, useState } from "react";
import Image from "next/image";
import Image1 from "@/assets/images/3_investment-approach/qpps_section3_services_image_long_short.webp";
import Image2 from "@/assets/images/3_investment-approach/qpps_section3_services_image_long_only.webp";
import MobileImage1 from "@/assets/images/3_investment-approach/qpps_section3_services_mobile-image_long_short.webp";
import MobileImage2 from "@/assets/images/3_investment-approach/qpps_section3_services_mobile-image_long_only.webp";
import ApproachBackground from "@/assets/svgs/3_investment-approach/qpps-section3-services-image-background.svg";
import ReadMoreArrow from "@/assets/svgs/3_investment-approach/ReadMoreArrow";
import { AnimatePresence, motion } from "motion/react";
import CImage from "@/assets/svgs/4_leadership/qpps-section5-c.svg";
import { HandleSectionInView } from "@/utils/handleSectionInView";

export default function ApproachSection() {
  const id = "services";
  const [ref, , isVis] = HandleSectionInView(id);

  return (
    <section
      ref={ref}
      id={id}
      className="relative min-h-screen pt-20 lg:pt-16 lg:mt-28 lg:px-20 text-navy"
    >
      <div className="mx-auto w-full relative z-10 px-8 lg:px-24">
        <h2
          className={`font-sans text-gold uppercase lg:text-left text-center lg:text-base text-xs font-semibold tracking-[0.25em] delay-100 fade-up ${
            isVis ? "open" : "closed"
          }`}
        >
          OUR SERVICES
        </h2>
        <h3 className="font-serif mt-2 lg:mt-8 text-4xl lg:text-7xl leading-tight lg:text-left text-center lg:leading-24 flex lg:justify-start justify-center flex-wrap gap-x-2 lg:gap-x-3">
          <span
            className={`font-serif-italic leading-tight delay-200 fade-up ${
              isVis ? "open" : "closed"
            }`}
          >
            Comprehensive
          </span>{" "}
          <span
            className={`delay-300 leading-tight fade-up ${
              isVis ? "open" : "closed"
            }`}
          >
            digital
          </span>
          <div
            className={`lg:pl-32 w-full leading-tight delay-400 fade-up ${
              isVis ? "open" : "closed"
            }`}
          >
            transformation solutions
          </div>
        </h3>
        <p
          className={`lg:font-normal font-light lg:text-left text-center mt-5 lg:pl-32 lg:mt-16 text-lg lg:text-xl delay-500 fade-up ${
            isVis ? "open" : "closed"
          }`}
        >
          We deliver comprehensive digital transformation services that empower
          government, municipal, and private sector organizations. Our expertise
          spans cybersecurity, digital consultancy, smart community projects,
          and supply of goods and services to drive meaningful change across
          South Africa.
        </p>
      </div>
      <div className="w-full grid lg:grid-cols-3 lg:px-0 px-8 gap-7 mt-12 lg:mt-32 relative z-10 pb-1">
        <div className="relative z-20">
          <Card
            title={"Digital Transformation"}
            image={Image1}
            mobileImage={MobileImage1}
          >
            <p>
              E-government solutions development <br />
              <br />
              Custom software and application development
              <br />
              <br />
              Digital transformation roadmap formulation
              <br />
              <br />
              System integration and legacy digitisation
            </p>
          </Card>
        </div>
        <div className="z-20 relative">
          <Card
            title={"Cybersecurity Services"}
            image={Image2}
            mobileImage={MobileImage2}
          >
            <p>
              Cybersecurity awareness campaigns
              <br />
              <br />
              Risk assessment and incident response
              <br />
              <br />
              Implementation of security policies
              <br />
              <br />
              Security audits and compliance support
              <br />
              <br />
              Staff training and capacity building
            </p>
          </Card>
        </div>
        <div className="z-20 relative">
          <Card
            title={"Digital Consultancy"}
            image={Image1}
            mobileImage={MobileImage1}
          >
            <p>
              Digital strategy and roadmap development
              <br />
              <br />
              Change management and digital adoption
              <br />
              <br />
              Digital skills training and capacity building
              <br />
              <br />
              Technology audits and governance assessments
            </p>
          </Card>
        </div>
        <div className="z-20 relative">
          <Card
            title={"Smart Community Projects"}
            image={Image2}
            mobileImage={MobileImage2}
          >
            <p>
              Digital inclusion initiatives for rural communities
              <br />
              <br />
              Tech-enabled education and e-learning platforms
              <br />
              <br />
              Public service access through mobile platforms
              <br />
              <br />
              Collaboration tools for municipalities
            </p>
          </Card>
        </div>
        <div className="z-20 relative">
          <Card
            title={"Supply of Goods & Services"}
            image={Image1}
            mobileImage={MobileImage1}
          >
            <p>
              ICT hardware and software supply
              <br />
              <br />
              Office and networking hardware supply
              <br />
              <br />
              Procurement and logistics coordination
              <br />
              <br />
              General supplies for public and private sectors
              <br />
              <br />
              Technology infrastructure solutions
            </p>
          </Card>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 lg:h-1/2 z-0 bg-alt-gray" />
        <div className="hidden lg:block absolute bottom-0 left-0 -translate-x-full w-44 h-1/2 z-0 bg-alt-gray" />
        <Image
          src={CImage}
          alt="C Image"
          className="absolute bottom-0 left-0 z-10 translate-y-1/2 -translate-x-20"
        />
      </div>
      <Image
        src={ApproachBackground}
        alt="Approach Background"
        className="absolute top-0 left-0 lg:right-0 z-0 object-cover lg:w-full lg:h-auto w-auto h-full"
      />
    </section>
  );
}

const Card = ({
  title,
  children,
  image,
  mobileImage,
}: {
  title: string;
  children: ReactNode;
  image: StaticImageData;
  mobileImage: StaticImageData;
}) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="w-full xl:aspect-square min-h-[362px] lg:min-h-[515px] overflow-hidden relative pb-[84px] flex items-center justify-center text-white"
    >
      <Image
        src={image}
        alt={title}
        quality={100}
        className="absolute top-0 left-0 object-cover w-full h-full object-center z-0 lg:block hidden"
      />
      <Image
        src={mobileImage}
        alt={title}
        quality={100}
        className="absolute object-cover top-0 left-0 w-full h-full object-center z-0 block lg:hidden"
      />
      <div className="w-full lg:w-3/4 lg:max-h-3/4 relative z-20 text-center">
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key={"content"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="lg:text-xl text-base lg:py-0 py-12"
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
              className="font-serif text-4xl lg:text-6xl"
            >
              <h4>{title}</h4>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <button
        onMouseDown={() => setOpen(!open)}
        type="button"
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
