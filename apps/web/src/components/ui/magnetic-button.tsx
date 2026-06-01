"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

export function MagneticButton({
  href,
  label,
  variant = "primary"
}: MagneticButtonProps) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  return (
    <div
      style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` }}
      onMouseMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        setOffset({
          x: (event.clientX - (bounds.left + bounds.width / 2)) * 0.12,
          y: (event.clientY - (bounds.top + bounds.height / 2)) * 0.12
        });
      }}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      className="inline-flex transition-transform duration-200 ease-out will-change-transform"
    >
      <Link
        href={href}
        className={cn(
          "group inline-flex items-center gap-2 rounded-full border px-6 py-3 font-ui text-sm font-semibold transition duration-300",
          variant === "primary"
            ? "border-[#7aa8ff]/30 bg-[linear-gradient(135deg,#f4f8ff_0%,#afd2ff_42%,#79acff_78%,#7de0ff_100%)] text-[#07111f] shadow-[0_18px_40px_rgba(71,120,255,0.25)]"
            : "border-slate-200 bg-white text-slate-700 backdrop-blur-xl hover:border-[#7aa8ff]/35 hover:text-slate-950"
        )}
      >
        {label}
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </Link>
    </div>
  );
}
