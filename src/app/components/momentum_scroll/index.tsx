"use client";

import {
  motion,
  SpringOptions,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";

interface IMomentumScrollProps {
  children: ReactNode;
}

export default function MomentumScrolling({ children }: IMomentumScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [scrollableHeight, setScrollableHeight] = useState<number>(0);
  const [containerWidth, setContainerWidth] = useState<number>(0);

  const resizeScrollableHeight = useCallback(
    (entries: ResizeObserverEntry[]) => {
      for (const entry of entries) {
        setScrollableHeight(entry.contentRect.height);
      }
    },
    [],
  );

  const resizeContainerWidth = useCallback((entries: ResizeObserverEntry[]) => {
    for (const entry of entries) {
      setContainerWidth(entry.contentRect.width);
    }
  }, []);

  useEffect(() => {
    const resizeScrollObserver = new ResizeObserver((entries) =>
      resizeScrollableHeight(entries),
    );

    const resizeContainerObserver = new ResizeObserver((entries) =>
      resizeContainerWidth(entries),
    );
    scrollRef.current && resizeScrollObserver.observe(scrollRef.current);
    containerRef.current &&
      resizeContainerObserver.observe(containerRef.current);

    return () => {
      resizeScrollObserver.disconnect();
      resizeContainerObserver.disconnect();
    };
  }, []);

  const { scrollY } = useScroll();

  const negativeScrollY = useTransform(
    scrollY,
    [0, scrollableHeight],
    [0, -scrollableHeight],
  );

  const springPhysics: SpringOptions = {
    damping: 22,
    mass: 0.1,
    stiffness: 200,
    bounce: 0.5,
    duration: 0.4,
    velocity: 100,
  };

  const springNegativeScrollY = useSpring(negativeScrollY, springPhysics);

  return (
    <div className="wrapper" ref={containerRef}>
      <motion.div
        ref={scrollRef}
        style={{ y: springNegativeScrollY, width: containerWidth }}
        className="fixed overflow-hidden will-change-transform"
      >
        {children}
      </motion.div>
      <div style={{ height: scrollableHeight }} />
    </div>
  );
}
