"use client";

import Link from "next/link";
import useOpenLocationStore from "@/store/useOpenLocationStore";
import { AnimatePresence } from "motion/react";
import LocationElement from "@/components/contact/LocationElement";
import ContactMap from "@/components/contact/ContactMap";
import { HandleSectionInView } from "@/utils/handleSectionInView";
import { useRef, useEffect } from "react";

export interface Location {
  city: string;
  title: string;
  address: string;
  googleMapsUrl: string;
}

const locations: Location[] = [
  {
    city: "London",
    title: "Carrhae Capital LLP",
    address: `
    3rd Floor, 112 Jermyn Street,
		London, SW1Y 6LS,
		United Kingdom`,
    googleMapsUrl:
      "https://www.google.com/maps/place/112+Jermyn+St,+London+SW1Y+6LS,+UK/@51.5088023,-0.137681,683m/data=!3m2!1e3!4b1!4m6!3m5!1s0x487604d14cff0f7b:0x1491fc7bfbf15951!8m2!3d51.5088023!4d-0.1351061!16s%2Fg%2F11b8z_f5bw?entry=ttu&g_ep=EgoyMDI1MDYwMy4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    city: "Dubai",
    title: "Carrhae Capital (DIFC) Limited",
    address: `
    Unit 1606, Level 16,
    Index Tower, Dubai
    International Financial Centre,
    Dubai, United Arab Emirates
		`,
    googleMapsUrl:
      "https://www.google.com/maps/place/Index+Tower/@25.2074073,55.2728716,17z/data=!3m2!4b1!5s0x3e5f428f6556ed15:0x7f6a5abc303ae5d1!4m6!3m5!1s0x3e5f42859a4cc907:0x6b271195776928f0!8m2!3d25.2074025!4d55.2777425!16zL20vMGgzaHY0?entry=ttu&g_ep=EgoyMDI1MDYxMC4xIKXMDSoASAFQAw%3D%3D",
  },
];

export default function ContactSection() {
  const id = "contact";
  const [ref, , isVis] = HandleSectionInView(id);
  const { index, setIndex } = useOpenLocationStore();
  const swipableElRef = useRef(null);

  // Handle switch of index when swiped by thumb on mobile
  useEffect(() => {
    let startX = 0;
    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      const diff = e.changedTouches[0].clientX - startX;
      if (diff > 50) {
        // Swipe right
        setIndex(Math.max(index - 1, 0));
      } else if (diff < -50) {
        // Swipe left
        setIndex(Math.min(index + 1, locations.length - 1));
      }
    };
    const el = swipableElRef.current;
    if (el) {
      // @ts-expect-error: We are expecting an error because this function is not defined
      el.addEventListener("touchstart", handleTouchStart);
      // @ts-expect-error: We are expecting an error because this function is not defined
      el.addEventListener("touchend", handleTouchEnd);
    }
    return () => {
      if (el) {
        // @ts-expect-error: We are expecting an error because this function is not defined
        el.removeEventListener("touchstart", handleTouchStart);
        // @ts-expect-error: We are expecting an error because this function is not defined
        el.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [swipableElRef, index, setIndex]);

  return (
    <section
      ref={ref}
      id="contact"
      className="relative bg-navy lg:pt-20 text-white"
    >
      <div className="w-full pt-16 lg:w-1/2 lg:pl-24 lg:pt-[58px] relative z-10">
        <div className="mx-auto w-full relative z-10 lg:px-0 px-8">
          <h2
            className={`font-sans text-gold uppercase lg:text-left text-center lg:text-base text-xs font-semibold tracking-[0.25em] delay-100 fade-up ${
              isVis ? "open" : "closed"
            }`}
          >
            Contact
          </h2>
          <h3 className="font-serif mt-2 lg:mt-8 text-4xl lg:text-7xl leading-tight lg:text-left text-center lg:leading-24 flex justify-center lg:justify-start gap-x-2 lg:gap-x-3 flex-wrap">
            <span
              className={`lg:block inline leading-tight delay-200 fade-up ${
                isVis ? "open" : "closed"
              }`}
            >
              Get
            </span>
            <span
              className={`lg:block inline leading-tight delay-300 fade-up ${
                isVis ? "open" : "closed"
              }`}
            >
              in
            </span>
            <div
              className={`lg:pl-26 leading-tight font-serif-italic lg:block inline lg:w-full delay-400 fade-up ${
                isVis ? "open" : "closed"
              }`}
            >
              touch
            </div>
            <div className="absolute hidden lg:block bottom-0 left-0 h-14 w-px bg-slate/25" />
          </h3>
        </div>
        <div className="min-w-full min-h-[406px] h-full relative lg:hidden mt-8">
          <ContactMap locations={locations} />
        </div>
        <div className="px-8 lg:border-l mx-auto w-full relative z-10 lg:pl-26 lg:pt-[73px] border-slate/25 text-xl">
          <div className="relative flex flex-col">
            <div ref={swipableElRef}>
              <AnimatePresence mode="wait">
                {locations.map((location, id) => {
                  if (id === index) {
                    return (
                      <LocationElement
                        key={location.city}
                        index={id}
                        total={locations.length}
                        data={location}
                      />
                    );
                  }
                })}
              </AnimatePresence>
            </div>
            <div className="h-4 flex lg:justify-start justify-center items-center gap-[6px] mt-7">
              {Array.from({ length: locations.length }, (_, i) => (
                <div
                  key={i}
                  onMouseDown={() => setIndex(i)}
                  className={`w-[6px] h-[6px] aspect-square rounded-full transition-all duration-300 cursor-pointer ${
                    i === index ? "bg-gold" : "bg-gold/40"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:pl-24 lg:pr-[86px] relative z-10">
        <div className="w-full lg:pt-20 lg:pl-26 relative z-10 lg:border-l lg:border-b border-slate/25">
          <div className="mt-12 lg:pb-20 lg:mt-0 flex items-center lg:flex-row flex-col lg:items-end lg:justify-between text-lg lg:text-xl">
            <div className="w-fit flex items-center flex-col justify-center lg:items-start lg:text-left text-center">
              <Link
                href={"tel:+442032054850"}
                className="flex items-center gap-2"
              >
                <strong className="mr-0">t</strong>{" "}
                <span>+44 (0) 203 205 4850</span>
              </Link>
              <Link
                href={"mailto:ir@carrhaecap.com"}
                className="flex items-center gap-2 mt-4"
              >
                <strong className="mr-0">e</strong>{" "}
                <span>ir@carrhaecap.com</span>
              </Link>
            </div>
            {/* <div className="lg:mt-0 mt-9 lg:pb-2">
              <Link
                href="https://www.linkedin.com/company/carrhae-capital/"
                target="_blank"
              >
                <Image
                  src={LinkedInLogo}
                  alt="LinkedIn"
                  className="w-[28px] h-[28px]"
                />
              </Link>
            </div> */}
          </div>
        </div>
      </div>
      <div className="w-full lg:mt-0 mt-12 lg:pl-24 relative z-10">
        <div className="w-full lg:pr-[86px] lg:pl-24 relative z-10">
          <div className="py-7 lg:border-t-0 border-t border-slate/50 lg:py-16 flex items-center justify-center lg:justify-end lg:pr-12">
            {/* <div className="lg:mr-0 mr-12">
              <Link href={"/disclosures/legal-regulatory"}>
                <Button
                  label={"Legal & Regulatory"}
                  color={"var(--color-white)"}
                />
              </Link>
            </div> */}
          </div>
        </div>
      </div>
      <div className="hidden lg:block absolute top-20 right-0 w-[76%] h-[66%]">
        <div className="w-full max-w-7xl h-full relative overflow-hidden">
          <ContactMap locations={locations} />
        </div>
      </div>
    </section>
  );
}
