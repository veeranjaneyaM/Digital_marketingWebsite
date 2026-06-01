"use client";

import { useEffect, useState } from "react";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
};

export function AnimatedCounter({ value, suffix = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame = 0;
    const totalFrames = 48;
    const timer = window.setInterval(() => {
      frame += 1;
      const progress = frame / totalFrames;
      setCount(Math.round(value * progress));
      if (frame >= totalFrames) {
        window.clearInterval(timer);
      }
    }, 28);

    return () => window.clearInterval(timer);
  }, [value]);

  return (
    <span>
      {count.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}
