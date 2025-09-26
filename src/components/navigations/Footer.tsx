import Image from "next/image";

import Logo from "../../../public/logos/logo-colour.svg";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-white py-14 lg:py-9 px-8 lg:px-20 min-h-28 relative z-10 text-navy font-sans">
      <div className="flex lg:flex-row flex-col items-center justify-between w-full">
        <div className="md:order-1 order-2 lg:pt-0 pt-8">
          <Link href="/#hero">
            <Image
              src={Logo}
              width={221}
              height={51}
              alt="QPPS Logo"
              className="w-[182px] lg:w-[221px] lg:h-auto"
            />
          </Link>
        </div>
        <div className="text-center lg:text-right font-light leading-6 text-xs lg:text-sm lg:order-2 order-1 flex items-center gap-3 flex-col md:flex-row">
          <p>
            ©{year} Quality Projects People and Solutions (QPPS). All Rights
            Reserved.
          </p>{" "}
          <span className="hidden md:flex">|</span>{" "}
          <Link href={"/disclosures/legal-regulatory"}>
            Legal and Regulatory Disclosures
          </Link>
        </div>
      </div>
    </footer>
  );
}
