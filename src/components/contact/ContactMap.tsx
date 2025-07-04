"use client";

import type { Location } from "@/sections/home/ContactSection";
import ContactMapMap from "./ContactMapMap";

export default function ContactMap({}: { locations: Location[] }) {
  return (
    <svg
      viewBox="0 0 1117 667"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="lg:h-auto h-full object-contain absolute top-0 left-1/2 lg:translate-x-0 -translate-x-1/2 lg:left-0 w-auto lg:w-[100%]"
    >
      <ContactMapMap />
      <defs>
        <clipPath id="clip0_72_4476">
          <rect width="1117" height="667" fill="white" />
        </clipPath>
      </defs>

      <g id="0" transform="translate(525, 227)">
        <circle cx="10.5" cy="14.5" r="10.37" fill="#CFAA72" />
      </g>
      <g id="1" transform="translate(715, 340)">
        <circle cx="10.5" cy="14.5" r="10.37" fill="#CFAA72" />
      </g>
    </svg>
  );
}
