"use client";

import Image from "next/image";
import Logo from "../../../public/svgs/_nav-bar/carrhae-capital-nav-logo.svg";
import Link from "next/link";
import Button from "../buttons/Button";
import usePositionStore from "@/store/usePositionStore";
import { handleScrollTo } from "@/utils/handleScrollTo";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const { navs, position } = usePositionStore();
  const [trans, setTrans] = useState<boolean>(true);
  const pathname = usePathname();

  const transStyle = "bg-transparent backdrop-blur-none";
  const nonTransStyle = "bg-white/80 backdrop-blur-md";

  useEffect(() => {
    if (pathname === "/") {
      setTrans(true);

      if (position) {
        if (position !== "hero") {
          setTrans(false);
        } else {
          setTrans(true);
        }
      } else {
        setTrans(true);
      }
    } else if (pathname.includes("disclosures")) {
      setTrans(false);
    }
  }, [trans, position, pathname]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${trans ? transStyle : nonTransStyle}`}
    >
      <div className="flex items-center justify-between border-b border-slate/40 py-0">
        <div className="pl-20">
          <Link href="/#hero">
            <Image
              src={Logo}
              alt="Carrhae Capital Logo"
              width={220}
              height={51}
            />{" "}
          </Link>
        </div>
        <div className="flex items-center justify-end h-full">
          <nav className="border-r border-slate/40 h-full">
            <ul className="flex justify-end items-center h-full pr-[57px] text-xs font-light uppercase tracking-widest text-slate gap-x-[69px]">
              {navs.map((nav) => (
                <li key={nav.url} className="h-full py-[49.6px] relative">
                  <button
                    onMouseDown={() => handleScrollTo(nav.url)}
                    className={`uppercase cursor-pointer ${
                      position === nav.url ? "font-semibold italic" : ""
                    }`}
                  >
                    {nav.label}
                  </button>
                  <span
                    className={`w-2/3 h-0.5 bg-slate absolute bottom-0 left-1/2 -translate-x-1/2 transition-opacity duration-1000 ${
                      position === nav.url ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center justify-end h-full pr-[114px] pl-[57px]">
            <Link href="https://google.com/" target="_blank">
              <Button
                onClick={() => {}}
                color={"var(--color-navy)"}
                label={"Login"}
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
