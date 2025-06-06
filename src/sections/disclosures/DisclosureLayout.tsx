"use client";

import ReadMoreArrow from "@/assets/svgs/3_investment-approach/ReadMoreArrow";
import Button from "@/components/buttons/Button";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CImage from "@/assets/svgs/8_disclosures/carrhae-capital-disclosures-background-c-cropped.svg";

interface Props {
  title: string;
  slug: string;
  children: ReactNode | ReactNode[];
}

export default function DisclosureLayout({ title, children }: Props) {
  const [showNav, setShowNav] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="lg:pt-[195px] lg:pl-[90px] relative z-10">
      <div className="w-full h-full bg-alt-gray pt-32 pb-12 lg:pt-[110px] lg:pl-[113px] lg:pr-[90px] lg:pb-[145px]">
        <div className="pl-21 lg:pl-12">
          <Link href={"/"}>
            <Button
              layout="left"
              label={"Back Home"}
              color={"var(--color-navy)"}
            />
          </Link>
        </div>
        <div className="lg:px-0 px-9 pt-[67px]">
          <h1 className="font-serif text-4xl lg:text-7xl">{title}</h1>
        </div>
        <hr className="my-[73px] text-slate/50" />
        <div
          className={`lg:hidden fixed top-1/2 -translate-y-1/2 transition-all duration-700 ${
            showNav ? "translate-x-[285px]" : "translate-x-0"
          } left-0 z-10`}
        >
          <button
            onClick={() => setShowNav(!showNav)}
            aria-label="show-nav"
            className="aspect-square bg-white flex flex-col items-start justify-center p-2 space-y-[3px]"
          >
            <span className="w-3 h-px bg-slate" />
            <span
              className={`${
                showNav ? "w-3" : "w-2"
              } transition-all duration-300 h-px bg-slate`}
            />
            <span
              className={`${
                showNav ? "w-3" : "w-1"
              } transition-all duration-300 h-px bg-slate`}
            />
          </button>
        </div>
        <div className="grid lg:grid-cols-3 gap-x-[51px] lg:px-0 px-9">
          <div
            className={`col-span-1 ${
              showNav
                ? "translate-x-0 lg:translate-x-0"
                : "-translate-x-full lg:translate-x-0"
            } transition-all w-[285px] duration-700 fixed lg:bg-transparent bg-white top-1/2 lg:pt-0 pt-28 lg:px-0 px-8 left-0 -translate-y-1/2 lg:translate-y-0 lg:top-auto lg:left-auto lg:relative flex h-full max-h-full lg:max-h-[644px] lg:w-full overflow-y-auto overflow-x-visible`}
          >
            <ul className="w-full flex flex-col">
              {navs.map((nav) => (
                <NavItem data={nav} key={nav.url} />
              ))}
            </ul>
          </div>
          <div
            className={`lg:col-span-2 lg:max-h-[644px] lg:overflow-y-scroll overflow-x-auto custom-scrollbar lg:pr-16`}
          >
            <article className="min-h-full space-y-8 text-navy font-light lg:text-xl article">
              {children}
            </article>
          </div>
        </div>
        <div className="flex items-center justify-end px-9 pt-12 lg:hidden">
          <button onMouseDown={() => scrollToTop()}>
            <ReadMoreArrow strokeColor="var(--color-navy)" open={true} />
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 max-w-[291px] w-1/3 lg:block hidden h-[220px]">
        <Image src={CImage} alt="C-Image" />
      </div>
    </div>
  );
}

type DisclosureNavItem = {
  label: string;
  url: string;
  sub?: DisclosureNavItem[];
};

const navs: DisclosureNavItem[] = [
  {
    label: "Legal & Regulatory",
    url: "/disclosures/legal-regulatory",
  },
  {
    label: "MIFIDPRU 8 Disclosure",
    url: "/disclosures/mifidpru-8-disclosure",
  },
  {
    label: "UK Stewardship Code",
    url: "/disclosures/uk-stewardship-code",
  },
  {
    label: "Privacy",
    url: "/disclosures/privacy",
    sub: [
      {
        label: "Dubai Privacy Statement",
        url: "/disclosures/privacy/dubai-privacy-statement",
      },
      {
        label: "UK Privacy Statement",
        url: "/disclosures/privacy/uk-privacy-statement",
      },
    ],
  },
  {
    label: "Shareholder Rights Directive II",
    url: "/disclosures/shareholder-rights-directive-ii",
  },
  {
    label: "Disclaimer",
    url: "/disclosures/disclaimer",
  },
  {
    label: "Complaints",
    url: "/disclosures/complaints",
  },
  {
    label: "Cookies Policy",
    url: "/disclosures/cookies-policy",
  },
];

const NavItem = ({ data }: { data: DisclosureNavItem }) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(pathname.includes(data.url));

  const NavLink = ({ label, url }: { label: string; url: string }) => (
    <li>
      <Link href={url} className="text-navy lg:text-xl py-3 block">
        <span
          className={`${
            pathname.includes(data.url) ? "font-bold" : "font-light"
          }`}
        >
          {label}
        </span>
      </Link>
    </li>
  );

  if (data.sub) {
    return (
      <li>
        <button
          onMouseDown={() => setOpen(!open)}
          className="cursor-pointer py-3 border-b border-b-slate/50 w-full flex items-center justify-between"
        >
          <p
            className={`lg:text-xl ${
              pathname.includes(data.url) ? "font-semibold" : "font-light"
            }`}
          >
            {data.label}
          </p>
          <span
            className={`w-2 h-2 aspect-square border-l border-t border-gold transition-all duration-700 -translate-x-1/2 ${
              open ? "rotate-45" : "-rotate-[135deg]"
            }`}
          ></span>
        </button>
        <div
          className={`grid min-h-0 overflow-hidden transition-all ease-in-out duration-700 ${
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <ul className="min-h-0">
            {data.sub.map((subItem) => (
              <li key={subItem.url} className="border-b border-slate/50">
                <Link href={subItem.url} className="py-3 block">
                  <span
                    className={`lg:text-xl italic text-slate ${
                      pathname.includes(subItem.url)
                        ? "font-bold"
                        : "font-light"
                    }`}
                  >
                    {subItem.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </li>
    );
  }

  return <NavLink label={data.label} url={data.url} />;
};
