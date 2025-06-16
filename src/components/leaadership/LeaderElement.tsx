"use client";

import useOpenBiographyStore from "@/store/useOpenBiographyStore";
import LinkedInLogo from "@/assets/svgs/5_contact/carrhae-linkedin-logo-v2.svg";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import Button from "../buttons/Button";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

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
      setIsMobile(window.innerWidth < 1024);
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
  const ref = useRef(null);
  const inVis = useInView(ref);

  return (
    <div ref={ref} className="lg:pr-28 lg:-mt-[100px]">
      <div className="relative flex items-end justify-start lg:pl-[108px] overflow-y-hidden">
        <motion.i
          initial={{
            height: 0,
          }}
          animate={inVis ? { height: "75%" } : { height: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="absolute top-1/4 right-0 w-px h-full bg-slate opacity-25 lg:block hidden"
        />
        <motion.i
          initial={{
            width: 0,
          }}
          animate={inVis ? { width: "100%" } : { width: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-0 right-0 origin-right w-full h-px bg-slate opacity-25 lg:block hidden"
        />
        <Image
          src={data.avatar}
          alt={data.name}
          className={`w-1/3 transition-all duration-1000 delay-1000 ${inVis ? "opacity-100" : "opacity-0"}`}
        />
        <div className=" pb-8 lg:pb-12">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5, ease: "easeInOut" }}
            className="text-slate font-serif text-4xl lg:text-6xl"
          >
            {data.name}
          </motion.h4>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.7, ease: "easeInOut" }}
            className="text-navy font-light italic text-lg lg:text-xl mt-3"
            dangerouslySetInnerHTML={{
              __html: data.title,
            }}
          ></motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.9, ease: "easeInOut" }}
            className="pl-20 mt-7 relative z-10"
          >
            <Button
              onClick={() => setIndex(index)}
              label={"Read Bio"}
              color="var(--color-navy)"
            />
          </motion.div>
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
  const ref = useRef(null);
  const inVis = useInView(ref);

  return (
    <div ref={ref} className="relative z-10 pr-8">
      <motion.i
        initial={{
          width: 0,
        }}
        animate={inVis ? { width: "100%" } : { width: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-0 right-0 origin-right w-full h-px bg-slate opacity-25 lg:block hidden"
      />
      <div className="flex items-end justify-end relative ">
        <div className="pb-8 lg:pb-12 text-right pr-16">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            animate={inVis ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 2, ease: "easeInOut" }}
            className="text-slate font-serif text-4xl lg:text-6xl"
          >
            {data.name}
          </motion.h4>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inVis ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 2.2, ease: "easeInOut" }}
            className="text-navy font-light italic text-lg lg:text-xl mt-3"
            dangerouslySetInnerHTML={{
              __html: data.title,
            }}
          ></motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inVis ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 2.3, ease: "easeInOut" }}
            className="mt-7 flex justify-end"
          >
            <Button
              onClick={() => setIndex(index)}
              label={"Read Bio"}
              color="var(--color-navy)"
            />
          </motion.div>
        </div>
        <Image
          src={data.avatar}
          alt={data.name}
          className={`w-1/3 lg:-mt-20 transition-all duration-1000 delay-1000 ${inVis ? "opacity-100" : "opacity-0"}`}
        />
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
  const ref = useRef(null);
  const inVis = useInView(ref);

  return (
    <div
      ref={ref}
      className="flex items-end justify-start lg:pl-[108px] relative z-20"
    >
      <Image
        src={data.avatar}
        alt={data.name}
        className={`w-1/3 lg:-mt-[98px] transition-all duration-1000 delay-1000 ${inVis ? "opacity-100" : "opacity-0"}`}
      />
      <div className="pb-8 lg:pb-12">
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          animate={inVis ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 1.5, ease: "easeInOut" }}
          className="text-slate font-serif text-4xl lg:text-6xl"
        >
          {data.name}
        </motion.h4>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inVis ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 1.7, ease: "easeInOut" }}
          className="text-navy font-light italic text-lg lg:text-xl mt-3"
          dangerouslySetInnerHTML={{
            __html: data.title,
          }}
        ></motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inVis ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 1.9, ease: "easeInOut" }}
          className="pl-20 mt-7 relative z-10"
        >
          <Button
            onClick={() => setIndex(index)}
            label={"Read Bio"}
            color="var(--color-navy)"
          />
        </motion.div>
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
      } fixed z-40 top-[120px] left-1/2 w-11/12 h-auto lg:w-3/4 -translate-x-1/2 bg-slate overflow-y-auto transition-all duration-500 ease-in-out`}
    >
      <article className="relative w-full h-full text-white flex flex-col">
        <header className="lg:p-14 px-16 p-8 lg:pl-32 lg:pb-16 lg:block flex items-center justify-between">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0, ease: "easeInOut" }}
            className="lg:block hidden"
          >
            <Button
              onClick={() => closeBiography()}
              label={"Back to Team"}
              color={"var(--color-white)"}
              layout="left"
            />
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
            className="block lg:hidden"
          >
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
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
            className="block lg:hidden"
          >
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
          </motion.span>
        </header>
        <div className={`lg:pl-32 px-0 lg:pr-28`}>
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
            className="font-serif text-4xl lg:text-left text-center lg:text-6xl"
          >
            {data.name}
          </motion.h4>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }}
            className="flex flex-col lg:flex-row items-center justify-between lg:w-full w-2/3 lg:mx-0 mx-auto"
          >
            <p
              className="font-light italic text-lg lg:text-left text-center lg:text-xl mt-3"
              dangerouslySetInnerHTML={{
                __html: data.title,
              }}
            ></p>
            <Link
              href={data.linkedInUrl}
              target="_blank"
              className="mt-8 lg:mt-0"
            >
              <Image
                src={LinkedInLogo}
                alt="LinkedIn"
                className="w-[28px] h-[28px]"
              />
            </Link>
          </motion.div>

          <div className="py-[38px]">
            <div className="w-full h-px bg-gray"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7, ease: "easeInOut" }}
            className="lg:px-0 px-8"
          >
            <p className="text-lg lg:text-left text-center lg:text-xl leading-[1.40em] font-light">
              {data.biography}
            </p>
          </motion.div>
        </div>
        <footer className="flex items-center justify-center lg:justify-between lg:pl-32 lg:pr-28 pt-3 mt-auto pb-10 lg:pb-12">
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
          <div className="hidden lg:block">
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
        <p
          className="text-navy font-light italic text-lg lg:text-xl mt-3"
          dangerouslySetInnerHTML={{
            __html: data.title,
          }}
        ></p>
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
