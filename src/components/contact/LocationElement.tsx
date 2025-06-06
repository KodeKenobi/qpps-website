"use client";

import { motion } from "motion/react";
import type { Location } from "@/sections/home/ContactSection";
import Link from "next/link";

export default function LocationElement({
  data,
}: {
  index: number;
  data: Location;
  total: number;
}) {
  return (
    <motion.div
      key={data.city}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`lg:max-w-2xs max-w-[230px] text-lg lg:text-xl lg:text-left text-center mx-auto lg:mx-0`}
    >
      <p className="font-medium italic">{data.title}</p>
      <Link href={data.googleMapsUrl} target="_blank">
        <p
          className="mt-6 font-light"
          dangerouslySetInnerHTML={{
            __html: data.address.replace(/\n/g, "<br />"),
          }}
        ></p>
      </Link>
    </motion.div>
  );
}
