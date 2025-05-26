import usePositionStore from "@/store/usePositionStore";
import { useInView } from "motion/react";
import { useEffect, useRef } from "react";

export const HandleSectionInView = (id: string,): [
  React.RefObject<HTMLElement | null>,
  boolean
] => {
  const { setPosition } = usePositionStore();

  const ref = useRef<HTMLElement | null>(null);

  const inView = useInView(ref, {
    amount: 0.1,
    margin: "-40% 0px -20% 0px",
    // initial: false,
  });

  useEffect(() => {
    if (inView) {
      setPosition(id);
    }
  }, [inView, setPosition]);


  return [
    ref, inView,
  ]
}