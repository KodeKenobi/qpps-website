"use client";

import Link from "next/link";
import { HandleSectionInView } from "@/utils/handleSectionInView";
import { motion } from "motion/react";

export default function ContactSection() {
  const id = "contact";
  const [ref, , isVis] = HandleSectionInView(id);

  return (
    <section
      ref={ref}
      id="contact"
      className="relative bg-navy lg:pt-20 text-white"
    >
      <div className="w-full pt-12 md:pt-16 lg:w-1/2 lg:pl-24 lg:pt-[58px] relative z-10">
        <div className="mx-auto w-full relative z-10 lg:px-0 px-4 md:px-8">
          <h2
            className={`font-sans text-gold uppercase lg:text-left text-center lg:text-base text-xs font-semibold tracking-[0.25em] delay-100 fade-up ${
              isVis ? "open" : "closed"
            }`}
          >
            Contact
          </h2>
          <h3 className="font-satoshi mt-2 lg:mt-8 mb-8 lg:mb-0 text-3xl md:text-4xl lg:text-7xl leading-tight text-center lg:text-left lg:leading-24">
            <div className="flex flex-col lg:flex-row lg:items-start items-center justify-center lg:justify-start gap-0 lg:gap-x-2">
              <span
                className={`leading-tight delay-200 fade-up ${
                  isVis ? "open" : "closed"
                }`}
              >
                Let&apos;s
              </span>
              <span
                className={`leading-tight delay-300 fade-up ${
                  isVis ? "open" : "closed"
                }`}
              >
                transform
              </span>
              <span
                className={`font-satoshi italic leading-tight delay-400 fade-up ${
                  isVis ? "open" : "closed"
                }`}
              >
                together
              </span>
            </div>
            <div className="absolute hidden lg:block bottom-0 left-0 h-14 w-px bg-slate/25" />
          </h3>
        </div>

        <div className="px-4 md:px-8 lg:border-l mx-auto w-full relative z-10 lg:pl-26 lg:pt-[32px] border-slate/25 text-lg md:text-xl">
          <div className="relative flex flex-col gap-10 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="space-y-6 mt-8 lg:mt-0"
            >
              <div className="space-y-4">
                <h4 className="font-satoshi text-xl md:text-2xl lg:text-3xl text-gold">
                  Quality Projects People and Solutions (QPPS)
                </h4>
                <div className="space-y-2 text-base md:text-lg lg:text-xl">
                  <p>Unit 03 Fernwick close</p>
                  <p>4th avenue, Gonubie</p>
                  <p>East London, 5201</p>
                  <p>South Africa</p>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-3">
                  <span className="text-gold font-semibold">Phone:</span>
                  <Link
                    href={"tel:+27768629222"}
                    className="hover:text-gold transition-colors"
                  >
                    076 8629 222
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gold font-semibold">Email:</span>
                  <Link
                    href={"mailto:abongile@qpp.co.za"}
                    className="hover:text-gold transition-colors"
                  >
                    abongile@qpp.co.za
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="w-full lg:pl-24 lg:pr-[86px] relative z-10">
        <div className="w-full lg:pt-2 lg:pl-26 relative z-10 lg:border-l lg:border-b border-slate/25">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-12 md:mt-16 lg:pb-20 lg:mt-8 flex items-center lg:flex-row flex-col lg:items-end lg:justify-between text-base md:text-lg lg:text-xl"
          >
            <div className="w-fit flex items-center flex-col justify-center lg:items-start lg:text-left text-center space-y-4">
              <div className="space-y-2">
                <h5 className="font-satoshi text-lg md:text-xl text-gold">
                  Ready to start your digital transformation?
                </h5>
                <p className="text-sm md:text-base lg:text-base opacity-80">
                  Contact us today to discuss how QPPS can help your
                  organization leverage technology for growth.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 mt-6 lg:mt-0">
              <Link
                href={"tel:+27768629222"}
                className="flex items-center gap-2 px-6 py-3 border border-gold text-gold hover:bg-gold hover:text-navy transition-all duration-300"
              >
                <strong>Call Now</strong>
              </Link>
              <Link
                href={"mailto:abongile@qpp.co.za"}
                className="flex items-center gap-2 px-6 py-3 bg-gold text-navy hover:bg-gold/80 transition-all duration-300"
              >
                <strong>Send Email</strong>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="w-full lg:mt-0 mt-12 lg:pl-24 relative z-10">
        <div className="w-full lg:pr-[86px] lg:pl-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="py-7 lg:border-t-0 border-t border-slate/50 lg:py-16 flex items-center justify-center lg:justify-end lg:pr-12"
          >
            <div className="text-center lg:text-right">
              <p className="text-sm opacity-60">
                Empowering South Africa through digital innovation
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
