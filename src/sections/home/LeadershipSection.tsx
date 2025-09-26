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
      <div className="overflow-hidden w-full z-10 bg-alt-gray pt-20 lg:pt-32">
        <div className="absolute bottom-0 left-0 w-full h-3/4 z-0">
          <Image
            src={LeadershipBackground}
            alt="Background"
            fill
            className="object-contain object-bottom-left opacity-50"
          />
        </div>
        <div className="px-8 lg:pl-24 lg:pr-28">
          <h2
            className={`font-sans text-gold uppercase lg:text-right text-center lg:text-base text-xs font-semibold tracking-[0.25em] delay-100 fade-up ${
              isVis ? "open" : "closed"
            }`}
          >
            LEADERSHIP
          </h2>
          <h3 className="font-serif mt-2 lg:mt-8 mb-8 lg:mb-0 text-4xl lg:text-7xl leading-tight lg:text-right justify-center lg:justify-end text-center lg:leading-24 flex flex-wrap gap-x-2 lg:gap-x-3">
            <span
              className={`font-serif-italic leading-tight delay-200 fade-up ${
                isVis ? "open" : "closed"
              }`}
            >
              Expert
            </span>
            <span
              className={`delay-300 leading-tight fade-up ${
                isVis ? "open" : "closed"
              }`}
            >
              ICT
            </span>
            <div
              className={`lg:ml-12 leading-tight w-full flex lg:justify-end justify-center flex-wrap gap-x-3`}
            >
              <span
                className={`delay-400 leading-tight fade-up ${
                  isVis ? "open" : "closed"
                }`}
              >
                expertise
              </span>
              <span
                className={`delay-500  leading-tight fade-up ${
                  isVis ? "open" : "closed"
                }`}
              >
                team
              </span>
            </div>
          </h3>
        </div>

        <div className="px-8 lg:pl-24 lg:pr-28 pb-20 lg:pb-32">
          <div className={`delay-600 fade-up ${isVis ? "open" : "closed"}`}>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              <div className="space-y-6 mt-8 lg:mt-0">
                <h4 className="font-serif text-2xl lg:text-3xl text-navy">
                  Our Expertise
                </h4>
                <p className="text-lg text-navy leading-relaxed">
                  QPPS is powered by a highly skilled workforce, with the
                  majority of our professionals holding degrees and
                  internationally recognized certifications including ITIL v3,
                  Cisco, Microsoft Certified Solutions Associate, Fortinet NSE
                  4, VMware, and AWS.
                </p>
                <p className="text-lg text-navy leading-relaxed">
                  Our organizational structure demonstrates a balance of
                  leadership, technical expertise, and operational capacity,
                  ensuring we deliver end-to-end ICT and digital transformation
                  services with professionalism and scalability.
                </p>
              </div>

              <div className="space-y-6 mt-8 lg:mt-0">
                <h4 className="font-serif text-2xl lg:text-3xl text-navy">
                  Our Approach
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gold rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-navy">
                      <strong>Innovation First:</strong> We leverage
                      cutting-edge technology to solve complex challenges and
                      drive digital transformation.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gold rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-navy">
                      <strong>Security Focused:</strong> Every solution is built
                      with cybersecurity and data protection as core principles.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gold rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-navy">
                      <strong>People-Centered:</strong> We design solutions that
                      enhance user experience and improve operational
                      efficiency.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gold rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-navy">
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
