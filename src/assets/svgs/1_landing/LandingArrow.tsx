import { handleScrollTo } from "@/utils/handleScrollTo";

export default function LandingArrow() {
  return (
    <svg
      width="72"
      height="110"
      viewBox="0 0 72 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="group cursor-pointer"
      onMouseDown={() => handleScrollTo("about")}
    >
      <path
        d="M28 39.9185C12.5252 43.5368 1 57.4224 1 74C1 93.3299 16.67 109 36 109C55.33 109 71 93.3299 71 74C71 57.4224 59.4748 43.5368 44 39.9185"
        stroke="white"
        className="stroke-[0.5px] group-hover:stroke-[1px] transition-all duration-500"
      />
      <g opacity="0.3">
        <circle cx="36.5" cy="74.5" r="25.5" fill="var(--color-navy)" />
        <circle cx="36.5" cy="74.5" r="25.5" fill="var(--color-navy)" />
      </g>
      <path
        d="M36.25 2.07629e-07L36.25 77M36.25 77L41 72.5M36.25 77L31.5 72.5"
        stroke="white"
        strokeWidth="0.5"
        className="group-hover:stroke-[1px] transition-all duration-500 group-hover:translate-y-1"
      />
    </svg>
  );
}
