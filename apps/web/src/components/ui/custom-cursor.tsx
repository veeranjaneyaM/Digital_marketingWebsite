"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { stiffness: 180, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 180, damping: 20 });

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      x.set(event.clientX - 12);
      y.set(event.clientY - 12);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [x, y]);

  return (
    <motion.div
      style={{ x: smoothX, y: smoothY }}
      className="pointer-events-none fixed left-0 top-0 z-[70] hidden h-6 w-6 rounded-full border border-cyan/50 bg-cyan/15 backdrop-blur-sm md:block"
    />
  );
}
