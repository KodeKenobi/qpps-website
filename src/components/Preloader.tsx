"use client";
import Image from "next/image";
import Shimmer from "../../public/shimmer.svg";
import { useEffect, useState } from "react";
import useIsVisibleStore from "@/store/useIsVisibleStore";

export default function Preloader() {
  const { isVisible, setIsVisible } = useIsVisibleStore();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(true);
      }, 1000);
      setTimeout(() => {
        setIsVisible(false);
        if (isVisible) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "";
        }
      }, 2300);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, [isVisible, setIsVisible]);

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
      window.scrollTo({ top: 0 });
    } else {
      document.body.style.overflow = "";
      document.body.style.height = "auto";
    }
  }, [isVisible]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-navy z-[9999] overflow-hidden ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-full pointer-events-none"
      } transition-all duration-1000 ease-in-out`}
    >
      <Image
        src="/hero/hero.jpg"
        alt="QPPS Preloader Background"
        fill
        className={`absolute top-0 left-0 w-full h-full object-cover origin-top z-0 transition-transform duration-[1800ms] ${
          isLoading ? "scale-100" : "scale-110"
        }`}
        quality={100}
        priority
        placeholder="blur"
        blurDataURL={Shimmer.src}
        sizes="100vw"
      />
      <div className="flex relative z-10 lg:flex-row flex-col items-center w-fit max-w-11/12">
        <Icon isVisible={isVisible} isLoading={isLoading} />
        <span
          className={`lg:ml-5 mt-5 lg:mt-0 grid overflow-hidden transition-all duration-1000 ${
            isLoading
              ? "grid-rows-[1fr] lg:grid-rows-[1fr] lg:grid-cols-[1fr]"
              : "grid-rows-[0fr] lg:grid-rows-[1fr] lg:grid-cols-[0fr]"
          }`}
        >
          <span className="min-w-0 min-h-0">
            <Text isVisible={isVisible} isLoading={isLoading} />
          </span>
        </span>
      </div>
    </div>
  );
}

const Icon = ({ isLoading }: { isVisible: boolean; isLoading: boolean }) => {
  return (
    <svg
      width="87"
      height="98"
      viewBox="0 0 87 98"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${isLoading ? "" : "animate-pulse"}`}
    >
      <path
        d="M28.5123 21.3398C28.2886 21.5593 28.6505 22.4214 28.9596 22.4214C29.0978 22.4214 29.2076 22.336 29.2076 22.2262C29.2076 21.8358 28.679 21.169 28.5123 21.3357V21.3398Z"
        fill="white"
      />
    </svg>
  );
};

const Text = ({}: { isVisible: boolean; isLoading: boolean }) => {
  return <div className="text-white text-2xl font-satoshi font-bold">QPPS</div>;
};
