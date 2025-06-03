import useIsVisibleStore from "@/store/useIsVisibleStore";
import usePositionStore from "@/store/usePositionStore";
import { useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

export const HandleSectionInView = (id: string,): [
  React.RefObject<HTMLElement | null>,
  boolean,
  boolean,
] => {
  const [isVis, setIsVis] = useState(false);

  const { setPosition } = usePositionStore();
  const { isVisible } = useIsVisibleStore();

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
  }, [inView, setPosition, id]);

  useEffect(() => {
    if (inView && !isVisible) {
      setIsVis(true);
    }
    else {
      setIsVis(false);
    }
  }, [inView, isVisible]);

  return [
    ref, inView, isVis
  ]
}