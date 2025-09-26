"use client";

import HeroBackground from "@/assets/images/1_landing/qpps_landing_image.webp";
import Background from "@/assets/svgs/4_leadership/qpps-section4-leadership-image-background.svg";
import Button from "@/components/buttons/Button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <Image
          src={HeroBackground}
          alt="Background"
          fill
          className="object-cover object-center absolute top-0 left-0 w-full h-full z-0"
        />
      </div>
      <section className="min-h-screen pt-[116px] relative w-full overflow-hidden flex">
        <div className="relative w-full min-h-full bg-white flex items-center justify-center z-10">
          <div className="w-11/12 max-w-3xl mx-auto my-auto flex flex-col relative z-20">
            <h1 className="font-serif leading-none text-slate text-[314px]">
              404
            </h1>
            <h2 className="ml-auto font-serif-italic text-7xl text-navy -translate-y-[40px] pr-[48px]">
              Page not found
            </h2>
            <p className="ml-auto text-xl mt-10 text-navy font-light">
              The page you are looking for was moved or removed
            </p>
            <div className="flex items-center justify-end pr-[48px] mt-10">
              <Link href="/" className="w-fit ml-auto">
                <Button
                  onClick={() => {}}
                  label={"Back Home"}
                  color={"var(--color-navy)"}
                />
              </Link>
            </div>
          </div>
          <Image
            src={Background}
            alt="Background"
            className="absolute top-0 left-0 w-full h-full object-cover z-10 overflow-hidden opacity-30"
          />
        </div>
      </section>
    </>
  );
}
