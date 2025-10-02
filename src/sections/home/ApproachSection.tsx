"use client";

import { useState } from "react";
import Image from "next/image";
import ApproachBackground from "@/assets/svgs/3_investment-approach/qpps-section3-services-image-background.svg";
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
      className="relative min-h-screen pt-16 md:pt-20 lg:pt-16 lg:mt-8 lg:px-20 text-navy"
    >
      <div className="mx-auto w-full relative z-10 px-4 md:px-8 lg:px-24">
        <h2
          className={`font-sans text-gold uppercase lg:text-left text-center lg:text-base text-xs font-semibold tracking-[0.25em] delay-100 fade-up ${
            isVis ? "open" : "closed"
          }`}
        >
          OUR SERVICES
        </h2>
        <h3 className="font-satoshi mt-2 lg:mt-8 text-3xl md:text-4xl lg:text-7xl leading-[-0.1em] text-center lg:text-left lg:leading-[-0.1em] flex lg:justify-start justify-center flex-wrap gap-x-2 lg:gap-x-3">
          <span
            className={`font-satoshi italic leading-none delay-200 fade-up ${
              isVis ? "open" : "closed"
            }`}
          >
            Comprehensive
          </span>{" "}
          <span
            className={`delay-300 leading-none fade-up ${
              isVis ? "open" : "closed"
            }`}
          >
            digital
          </span>
          <div
            className={`lg:pl-32 w-full leading-none delay-400 fade-up ${
              isVis ? "open" : "closed"
            }`}
          >
            transformation solutions
          </div>
        </h3>
        <p
          className={`lg:font-normal font-light text-center lg:text-left mt-4 md:mt-6 lg:pl-32 lg:mt-8 text-base md:text-lg lg:text-2xl delay-500 fade-up leading-relaxed ${
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
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-0 px-4 md:px-8 gap-6 md:gap-7 mt-8 md:mt-12 lg:mt-32 relative z-10 pb-1">
        <div className="relative z-20">
          <ServiceCard
            title={"Digital Transformation"}
            description={
              "Driving innovation and efficiency through smarter technology."
            }
            icon1={
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                />
              </svg>
            }
            icon2={
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            }
            icon3={
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            }
          />
        </div>
        <div className="z-20 relative">
          <ServiceCard
            title={"Cybersecurity Services"}
            description={
              "Protecting your business from cyber threats and ensuring data security."
            }
            icon1={
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            }
            icon2={
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            }
            icon3={
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            }
          />
        </div>
        <div className="z-20 relative">
          <ServiceCard
            title={"Digital Consultancy"}
            description={
              "Expert guidance to help you leverage technology effectively."
            }
            icon1={
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            }
            icon2={
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            }
            icon3={
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            }
          />
        </div>
        <div className="z-20 relative">
          <ServiceCard
            title={"Smart Community Projects"}
            description={
              "Innovative technology solutions for connected communities."
            }
            icon1={
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            }
            icon2={
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            }
            icon3={
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            }
          />
        </div>
        <div className="z-20 relative">
          <ServiceCard
            title={"Supply of Goods & Services"}
            description={
              "Providing quality devices, equipment, and services to support your business needs."
            }
            icon1={
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            }
            icon2={
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                />
              </svg>
            }
            icon3={
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            }
          />
        </div>
        <div className="z-20 relative">
          <ServiceCard
            title={"ESG"}
            description={
              "Driving sustainable practices and corporate responsibility."
            }
            icon1={
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
            icon2={
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            }
            icon3={
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            }
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 lg:h-1/2 z-0 bg-alt-gray" />
        <div className="hidden lg:block absolute bottom-0 left-0 -translate-x-full w-44 h-1/2 z-0 bg-alt-gray" />
        <Image
          src={CImage}
          alt="C Image"
          className="absolute bottom-0 left-0 z-10 translate-y-1/2 -translate-x-20"
        />
      </div>

      {/* Trusted Partners Carousel */}
      <div className="w-full mt-16 lg:mt-20 relative z-10">
        <div className="text-center mb-8 lg:mb-12">
          <h3 className="font-satoshi text-2xl md:text-3xl lg:text-4xl font-bold text-navy mb-4">
            Our Trusted Partners
          </h3>
          <p className="text-base md:text-lg lg:text-xl text-slate max-w-3xl mx-auto px-4">
            We collaborate with industry-leading technology partners to deliver
            comprehensive solutions
          </p>
        </div>

        <div className="relative overflow-hidden bg-white py-8 lg:py-12">
          <div className="flex animate-scroll">
            {/* First set of logos */}
            <div className="flex items-center space-x-16 lg:space-x-24 px-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-16 lg:w-40 lg:h-20 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg lg:text-xl">
                    FD
                  </span>
                </div>
                <p className="text-xs lg:text-sm text-center mt-2 text-slate font-semibold">
                  First Distribution
                </p>
              </div>

              <div className="flex-shrink-0">
                <div className="w-32 h-16 lg:w-40 lg:h-20 bg-white border border-gray-200 rounded-lg flex items-center justify-center">
                  <div className="flex items-center space-x-2">
                    <div className="grid grid-cols-2 gap-1">
                      <div className="w-3 h-3 bg-red-500 rounded-sm"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
                      <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-sm"></div>
                    </div>
                    <span className="text-gray-700 font-semibold text-xs lg:text-sm">
                      Microsoft
                    </span>
                  </div>
                </div>
                <p className="text-xs lg:text-sm text-center mt-2 text-slate font-semibold">
                  Solutions Partner
                </p>
              </div>

              <div className="flex-shrink-0">
                <div className="w-32 h-16 lg:w-40 lg:h-20 bg-blue-900 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg lg:text-xl">
                    mimecast
                  </span>
                </div>
                <p className="text-xs lg:text-sm text-center mt-2 text-slate font-semibold">
                  Email Security
                </p>
              </div>

              <div className="flex-shrink-0">
                <div className="w-32 h-16 lg:w-40 lg:h-20 bg-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl lg:text-2xl">
                    acer
                  </span>
                </div>
                <p className="text-xs lg:text-sm text-center mt-2 text-slate font-semibold">
                  Hardware Solutions
                </p>
              </div>

              <div className="flex-shrink-0">
                <div className="w-32 h-16 lg:w-40 lg:h-20 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg lg:text-xl italic">
                    Mustek
                  </span>
                </div>
                <p className="text-xs lg:text-sm text-center mt-2 text-slate font-semibold">
                  LIMITED
                </p>
              </div>

              <div className="flex-shrink-0">
                <div className="w-32 h-16 lg:w-40 lg:h-20 bg-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg lg:text-xl">
                    Veeam
                  </span>
                </div>
                <p className="text-xs lg:text-sm text-center mt-2 text-slate font-semibold">
                  Backup Solutions
                </p>
              </div>

              <div className="flex-shrink-0">
                <div className="w-32 h-16 lg:w-40 lg:h-20 bg-teal-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg lg:text-xl">
                    ESET
                  </span>
                </div>
                <p className="text-xs lg:text-sm text-center mt-2 text-slate font-semibold">
                  Cybersecurity
                </p>
              </div>

              <div className="flex-shrink-0">
                <div className="w-32 h-16 lg:w-40 lg:h-20 bg-red-600 rounded-lg flex items-center justify-center relative">
                  <div className="absolute top-1 left-1/2 transform -translate-x-1/2">
                    <div className="w-6 h-6 bg-red-700 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">H</span>
                    </div>
                  </div>
                  <span className="text-white font-bold text-lg lg:text-xl">
                    HUAWEI
                  </span>
                </div>
                <p className="text-xs lg:text-sm text-center mt-2 text-slate font-semibold">
                  Enterprise Partner
                </p>
              </div>
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="flex items-center space-x-16 lg:space-x-24 px-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-16 lg:w-40 lg:h-20 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg lg:text-xl">
                    FD
                  </span>
                </div>
                <p className="text-xs lg:text-sm text-center mt-2 text-slate font-semibold">
                  First Distribution
                </p>
              </div>

              <div className="flex-shrink-0">
                <div className="w-32 h-16 lg:w-40 lg:h-20 bg-white border border-gray-200 rounded-lg flex items-center justify-center">
                  <div className="flex items-center space-x-2">
                    <div className="grid grid-cols-2 gap-1">
                      <div className="w-3 h-3 bg-red-500 rounded-sm"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
                      <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-sm"></div>
                    </div>
                    <span className="text-gray-700 font-semibold text-xs lg:text-sm">
                      Microsoft
                    </span>
                  </div>
                </div>
                <p className="text-xs lg:text-sm text-center mt-2 text-slate font-semibold">
                  Solutions Partner
                </p>
              </div>

              <div className="flex-shrink-0">
                <div className="w-32 h-16 lg:w-40 lg:h-20 bg-blue-900 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg lg:text-xl">
                    mimecast
                  </span>
                </div>
                <p className="text-xs lg:text-sm text-center mt-2 text-slate font-semibold">
                  Email Security
                </p>
              </div>

              <div className="flex-shrink-0">
                <div className="w-32 h-16 lg:w-40 lg:h-20 bg-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl lg:text-2xl">
                    acer
                  </span>
                </div>
                <p className="text-xs lg:text-sm text-center mt-2 text-slate font-semibold">
                  Hardware Solutions
                </p>
              </div>

              <div className="flex-shrink-0">
                <div className="w-32 h-16 lg:w-40 lg:h-20 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg lg:text-xl italic">
                    Mustek
                  </span>
                </div>
                <p className="text-xs lg:text-sm text-center mt-2 text-slate font-semibold">
                  LIMITED
                </p>
              </div>

              <div className="flex-shrink-0">
                <div className="w-32 h-16 lg:w-40 lg:h-20 bg-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg lg:text-xl">
                    Veeam
                  </span>
                </div>
                <p className="text-xs lg:text-sm text-center mt-2 text-slate font-semibold">
                  Backup Solutions
                </p>
              </div>

              <div className="flex-shrink-0">
                <div className="w-32 h-16 lg:w-40 lg:h-20 bg-teal-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg lg:text-xl">
                    ESET
                  </span>
                </div>
                <p className="text-xs lg:text-sm text-center mt-2 text-slate font-semibold">
                  Cybersecurity
                </p>
              </div>

              <div className="flex-shrink-0">
                <div className="w-32 h-16 lg:w-40 lg:h-20 bg-red-600 rounded-lg flex items-center justify-center relative">
                  <div className="absolute top-1 left-1/2 transform -translate-x-1/2">
                    <div className="w-6 h-6 bg-red-700 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">H</span>
                    </div>
                  </div>
                  <span className="text-white font-bold text-lg lg:text-xl">
                    HUAWEI
                  </span>
                </div>
                <p className="text-xs lg:text-sm text-center mt-2 text-slate font-semibold">
                  Enterprise Partner
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={ApproachBackground}
        alt="Approach Background"
        className="absolute top-0 left-0 lg:right-0 z-0 object-cover lg:w-full lg:h-auto w-auto h-full"
      />
    </section>
  );
}

const ServiceCard = ({
  title,
  description,
  icon1,
  icon2,
  icon3,
}: {
  title: string;
  description: string;
  icon1: React.ReactNode;
  icon2: React.ReactNode;
  icon3: React.ReactNode;
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const getCardContent = () => {
    if (title === "ESG") {
      return (
        <div className="text-white text-base space-y-2">
          <p>• Sustainable technology and resource management</p>
          <p>• Corporate social responsibility initiatives</p>
          <p>• Ethical procurement and supply chain practices</p>
          <p>• Community engagement and development programs</p>
          <p>• Compliance with governance and sustainability standards</p>
        </div>
      );
    }
    return (
      <div className="text-white text-base space-y-2">
        <p>• {description}</p>
        <p>• Comprehensive service delivery</p>
        <p>• Expert implementation support</p>
        <p>• Ongoing maintenance and support</p>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="w-full xl:aspect-square min-h-[320px] md:min-h-[362px] lg:min-h-[515px] overflow-hidden relative bg-navy rounded-lg flex flex-col items-center justify-center text-white p-6 md:p-8"
    >
      <div className="w-full relative z-20 text-center flex flex-col items-center justify-center h-full">
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key={"content"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="lg:text-xl text-base md:text-lg lg:py-0 py-6 md:py-8 space-y-3 md:space-y-4"
            >
              {getCardContent()}
            </motion.div>
          ) : (
            <motion.div
              key={"title"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="space-y-4 md:space-y-6"
            >
              <h4 className="font-satoshi text-2xl md:text-3xl lg:text-4xl font-bold uppercase leading-tight">
                {title}
              </h4>
              <p className="text-base md:text-lg lg:text-xl font-light">
                {description}
              </p>
              <div className="flex justify-center items-center gap-4 md:gap-6 mt-6 md:mt-8 text-white">
                <div className="w-12 h-12 flex items-center justify-center">
                  {icon1}
                </div>
                <div className="w-12 h-12 flex items-center justify-center">
                  {icon2}
                </div>
                <div className="w-12 h-12 flex items-center justify-center">
                  {icon3}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <button
        onMouseDown={() => setOpen(!open)}
        className="absolute bottom-3 md:bottom-5 left-1/2 -translate-x-1/2 bg-gold text-navy px-6 md:px-8 py-2 md:py-3 font-bold uppercase tracking-wider hover:bg-gold/80 transition-colors duration-300 z-30 rounded text-sm md:text-base"
      >
        {open ? "Back" : "Read More"}
      </button>
    </motion.div>
  );
};
