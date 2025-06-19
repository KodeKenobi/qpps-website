"use client";

import Image from "next/image";
import Logo from "../../../public/svgs/_nav-bar/carrhae-capital-nav-logo.svg";
import Link from "next/link";
import Button from "../buttons/Button";
import usePositionStore, { Nav } from "@/store/usePositionStore";
import { handleScrollTo } from "@/utils/handleScrollTo";
import { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import useMobileNavStore from "@/store/useMobileNavStore";
import LinkedInLogo from "../../../public/svgs/_nav-bar/carrhae-capital-nav-linkedin.svg";

export default function Header() {
  const { navs, position } = usePositionStore();
  const { open, setOpen } = useMobileNavStore();
  const [trans, setTrans] = useState<boolean>(true);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    if (window.scrollY > 0) {
      setTrans(false);
    } else {
      setTrans(true);
    }
  }, [setTrans]);

  useEffect(() => {
    if (pathname === "/") {
      window.addEventListener("scroll", () => handleScroll());
      return () => window.removeEventListener("scroll", () => handleScroll());
    }
  }, [pathname, handleScroll]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${trans ? "bg-transparent" : "bg-white"}`}
    >
      <div className="flex items-center justify-between border-b border-slate/40 py-6 lg:py-0">
        <div className="pl-6 lg:pl-4 lg:pl-20">
          <Link href="/#hero">
            <Image
              src={Logo}
              alt="Carrhae Capital Logo"
              width={220}
              height={51}
              className="max-w-[167px] lg:max-w-[220px]"
            />
          </Link>
        </div>
        <div className="hidden lg:flex items-center justify-end h-full">
          <nav className="border-r border-slate/40 h-full">
            <ul className="justify-end items-center h-full  text-xs font-light uppercase tracking-widest text-slate flex md:pr-8 lg:pr-[57px] md:gap-x-4 lg:gap-x-12 xl:gap-x-[69px]">
              {navs.map((nav) => (
                <NavButton key={nav.url} nav={nav} position={position} />
              ))}
              <div className="rounded-full flex items-center justify-center">
              <Link
                href="https://www.linkedin.com/company/carrhae-capital/"
                target="_blank"
              >
                <Image
                  src={LinkedInLogo}
                  alt="LinkedIn"
                  className="w-full h-full object-cover"
                />
              </Link>
            </div>
            </ul>
            
          </nav>
          {/* <div className="flex items-center justify-end h-full lg:pr-[114px] lg:pl-[57px]">
            <Link href="https://google.com/" target="_blank">
              <Button
                onClick={() => {}}
                color={"var(--color-navy)"}
                label={"Login"}
              />
            </Link>
          </div> */}
        </div>
        <div className="lg:hidden pr-8">
          <button
            onMouseDown={() => setOpen(!open)}
            aria-label="Mobile Menu"
            className={`mobile-nav  ${open ? "active" : ""}`}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      <nav
        className={`mobile-nav-menu pt-14 lg:hidden ${
          open ? "open" : "closed"
        }`}
      >
        <nav className="flex flex-col items-center justify-start h-full gap-y-8">
          <ul className="text-2xl font-light uppercase tracking-widest text-slate flex flex-col min-h-[185px] gap-y-[12%] h-full text-center">
            {navs.map((nav) => (
              <MobileNavButton
                key={nav.url}
                nav={nav}
                position={position}
                setOpen={setOpen}
              />
            ))}
            {/* <MobileNavButton
              nav={{
                label: "Login",
                url: "https://google.com",
                external: true,
              }}
              position={"right"}
              setOpen={() => {}}
            /> */}
          </ul>
        </nav>
        <div className="flex items-center justify-center mt-auto pt-8">
          <Link href="https://linkedin.com/" target="_blank">
            <Image
              src={LinkedInLogo}
              alt="LinkedIn Logo"
              width={28}
              height={28}
            />
          </Link>
        </div>
        <div className="flex items-center justify-center border-t border-t-slate/50 py-7 text-white mt-9">
          <Link
            href={"/disclosures/legal-regulatory"}
            onMouseDown={() => setOpen(false)}
          >
            <Button color={"white"} label={"DISCLOSURES"} />
          </Link>
        </div>
      </nav>
    </header>
  );
}

const NavButton = ({
  nav,
  position,
}: {
  nav: Nav;
  position: string | null;
}) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = () => {
    if (pathname !== "/") {
      router.push(`/?scrollTo=${nav.url}`);
    } else {
      handleScrollTo(nav.url);
    }
  };

  return (
    <li key={nav.url} className="h-full py-[50px] relative group">
      <button
        onMouseDown={() => handleClick()}
        className={`uppercase cursor-pointer ${
          pathname === "/" && position === nav.url ? "font-semibold italic" : ""
        }`}
      >
        {nav.label}
      </button>
      <span
        className={`w-8 h-0.5 bg-slate absolute -bottom-[0.8px] left-1/2 -translate-x-1/2 transition-opacity duration-1000 group-hover:opacity-100 ${
          pathname === "/" && position === nav.url ? "opacity-100" : "opacity-0"
        }`}
      />
    </li>
  );
};

const MobileNavButton = ({
  nav,
  position,
  setOpen,
}: {
  nav: Nav;
  position: string | null;
  setOpen: (index: boolean) => void;
}) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = () => {
    if (pathname !== "/") {
      router.push(`/?scrollTo=${nav.url}`);
    } else {
      handleScrollTo(nav.url);
    }
    setOpen(false);
  };

  return (
    <li key={nav.url} className="relative">
      {nav.external ? (
        <Link
          href={nav.url}
          target="_blank"
          className={`uppercase cursor-pointer tracking-[0.25em]`}
        >
          {nav.label}
        </Link>
      ) : (
        <button
          onMouseDown={() => handleClick()}
          className={`uppercase cursor-pointer ${
            pathname === "/" && position === nav.url
              ? "font-semibold italic text-gray tracking-[0.25em]"
              : ""
          }`}
        >
          {nav.label}
        </button>
      )}
    </li>
  );
};
