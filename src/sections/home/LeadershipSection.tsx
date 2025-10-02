"use client";

import Image from "next/image";
import LeadershipBackground from "@/assets/svgs/4_leadership/qpps-section4-leadership-image-background.svg";
import { HandleSectionInView } from "@/utils/handleSectionInView";

export default function LeadershipSection() {
  const id = "leadership";
  const [ref, , isVis] = HandleSectionInView(id);

  return (
    <section ref={ref} id={id} className="text-navy lg:pr-20 z-0">
      <div className="absolute bottom-0 right-0 w-20 z-0 h-72 bg-navy"></div>
      <div className="overflow-hidden w-full z-10 bg-alt-gray pt-16 md:pt-20 lg:pt-32">
        <div className="absolute bottom-0 left-0 w-full h-3/4 z-0">
          <Image
            src={LeadershipBackground}
            alt="Background"
            fill
            className="object-contain object-bottom-left opacity-50"
          />
        </div>
        <div className="px-4 md:px-8 lg:pl-24 lg:pr-28">
          <h2
            className={`font-sans text-gold uppercase lg:text-right text-center lg:text-base text-xs font-semibold tracking-[0.25em] delay-100 fade-up ${
              isVis ? "open" : "closed"
            }`}
          >
            LEADERSHIP
          </h2>
          <h3 className="font-satoshi mt-2 lg:mt-8 mb-6 md:mb-8 lg:mb-0 text-3xl md:text-4xl lg:text-7xl leading-[-0.1em] text-left lg:leading-[-0.1em] flex flex-wrap gap-x-0 lg:gap-x-0">
            <span
              className={`font-satoshi italic leading-none delay-200 fade-up ${
                isVis ? "open" : "closed"
              }`}
            >
              Expert
            </span>
            <span
              className={`delay-300 leading-none fade-up ${
                isVis ? "open" : "closed"
              }`}
            >
              &nbsp;ICT
            </span>
            <div
              className={`lg:ml-12 leading-none w-full flex justify-start flex-wrap gap-x-0`}
            >
              <span
                className={`delay-400 leading-none fade-up ${
                  isVis ? "open" : "closed"
                }`}
              >
                &nbsp;expertise
              </span>
              <span
                className={`delay-500  leading-none fade-up ${
                  isVis ? "open" : "closed"
                }`}
              >
                &nbsp;team
              </span>
            </div>
          </h3>
        </div>

        <div className="px-8 lg:pl-24 lg:pr-28 pb-20 lg:pb-32 mt-0 lg:mt-12">
          <div className={`delay-600 fade-up ${isVis ? "open" : "closed"}`}>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              <div className="space-y-6 mt-8 lg:mt-0">
                <h2 className="font-satoshi text-2xl lg:text-3xl text-navy text-center lg:text-left">
                  Our Expertise
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl text-navy leading-relaxed text-center lg:text-left">
                  QPPS is powered by a highly skilled workforce, with the
                  majority of our professionals holding degrees and
                  internationally recognized certifications including ITIL v3,
                  Cisco, Microsoft Certified Solutions Associate, Fortinet NSE
                  4, VMware, and AWS.
                </p>
                <p className="text-lg md:text-xl lg:text-2xl text-navy leading-relaxed text-center lg:text-left">
                  Our organizational structure demonstrates a balance of
                  leadership, technical expertise, and operational capacity,
                  ensuring we deliver end-to-end ICT and digital transformation
                  services with professionalism and scalability.
                </p>
              </div>

              <div className="space-y-6 mt-8 lg:mt-0">
                <h2 className="font-satoshi text-2xl lg:text-3xl text-navy text-center lg:text-left">
                  Our Approach
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gold rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg md:text-xl lg:text-2xl text-navy text-center lg:text-left">
                      <strong>Innovation First:</strong> We leverage
                      cutting-edge technology to solve complex challenges and
                      drive digital transformation.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gold rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg md:text-xl lg:text-2xl text-navy text-center lg:text-left">
                      <strong>Security Focused:</strong> Every solution is built
                      with cybersecurity and data protection as core principles.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gold rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg md:text-xl lg:text-2xl text-navy text-center lg:text-left">
                      <strong>People-Centered:</strong> We design solutions that
                      enhance user experience and improve operational
                      efficiency.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gold rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg md:text-xl lg:text-2xl text-navy text-center lg:text-left">
                      <strong>Local Impact:</strong> Committed to empowering
                      South African communities through technology and digital
                      inclusion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
