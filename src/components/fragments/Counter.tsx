"use client";

import React, { useState, useEffect, useRef } from "react";
import { useInView } from "motion/react";

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(target % 1 !== 0 ? "0.00" : 0);
  const ref = useRef(null);
  // 'once: true' ensures that the hook triggers only the first time the element becomes visible.
  const inView = useInView(ref, { once: false });

  useEffect(() => {
    if (!inView) return; // don't start counting until the element is in view

    const duration = 3000; // total duration in milliseconds
    const startTime = Date.now();

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      if (elapsed < duration) {
        const progress = elapsed / duration;
        let currentCount;
        if (target % 1 !== 0) {
          // If target is a decimal value, update count with two decimals
          currentCount = parseFloat((progress * target).toFixed(2));
        } else {
          // Otherwise, round down to an integer
          currentCount = Math.floor(progress * target);
        }
        setCount(currentCount);
      } else {
        // Ensure we finish exactly at the target value
        setCount(target % 1 !== 0 ? parseFloat(target.toFixed(2)) : target);
        clearInterval(timer);
      }
    }, 30); // update interval in milliseconds

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <div className="inline" ref={ref}>
      {count}
    </div>
  );
}

export default Counter;
