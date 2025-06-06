"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { handleScrollTo } from "@/utils/handleScrollTo";

const ScrollToHandler = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    const scrollTo = searchParams.get("scrollTo");

    const doScroll = () => {
      setTimeout(() => {
        if (scrollTo) handleScrollTo(scrollTo);
      }, 2400);
    };

    if (document.readyState === "complete") {
      doScroll();
    } else {
      window.addEventListener("load", doScroll);
      return () => window.removeEventListener("load", doScroll);
    }
  }, [searchParams]);

  return null;
};

export default ScrollToHandler;
