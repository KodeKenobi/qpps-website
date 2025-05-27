"use client";

import Button from "@/components/buttons/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";

interface Props {
  title: string;
  slug: string;
  children: ReactNode | ReactNode[];
}

export default function DisclosureLayout({ title, children, slug }: Props) {
  return (
    <div className="pt-[195px] pl-[90px]">
      <div className="w-full h-full bg-alt-gray pt-[110px] pl-[113px] pr-[90px] pb-[145px]">
        <div className="pl-12">
          <Button
            layout="left"
            label={"Back Home"}
            color={"var(--color-navy)"}
          />
        </div>
        <div className="pt-[67px]">
          <h1 className="font-serif text-7xl">{title}</h1>
        </div>
        <hr className="my-[73px] text-slate/50" />

        <div className="grid grid-cols-3 gap-x-[51px]">
          <div className="col-span-1 flex relative max-h-[644px] w-full overflow-y-auto">
            <ul className="w-full flex flex-col">
              {navs.map((nav, idx) => (
                <NavItem data={nav} key={nav.url} />
              ))}
            </ul>
          </div>
          <div className="col-span-2 max-h-[644px] overflow-y-scroll custom-scrollbar pr-16">
            <article className="min-h-full space-y-8 text-navy font-light text-xl">
              {children}
            </article>
          </div>
        </div>
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
        label: "UK Privacy Policy",
        url: "/disclosures/privacy/uk-privacy-policy",
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
      <Link href={url} className="text-navy text-xl py-3 block">
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
            className={`text-xl ${
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
            {data.sub.map((subItem, idx) => (
              <li key={subItem.url} className="border-b border-slate/50">
                <Link href={subItem.url} className="py-3 block">
                  <span
                    className={`text-xl italic text-slate ${
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
