import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type BrandLockupProps = {
  compact?: boolean;
  showParent?: boolean;
  className?: string;
};

export function BrandLockup({
  compact = false,
  showParent = true,
  className
}: BrandLockupProps) {
  return (
    <Link href="/" className={cn("group flex items-center gap-4", className)}>
      <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-[1.2rem] border border-slate-200 bg-white shadow-[0_18px_40px_rgba(148,163,184,0.18)]">
        <div className="absolute inset-[1px] rounded-[1.05rem] bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.16),transparent_58%),linear-gradient(180deg,rgba(255,255,255,0.8),rgba(255,255,255,0.35))]" />
        <span className="relative font-display text-lg font-semibold tracking-[0.18em] text-slate-900">EX</span>
      </div>

      <div className="min-w-0">
        <div className={cn("flex items-end gap-1.5", compact ? "gap-1" : "gap-1.5")}>
          <span className={cn("font-display leading-none tracking-[0.18em] text-slate-950", compact ? "text-[1.65rem]" : "text-[2.25rem]")}>
            ELIVAT
          </span>
          <span className={cn("font-display leading-none tracking-[0.08em] text-[#2563eb]", compact ? "text-[1.95rem]" : "text-[2.7rem]")}>
            X
          </span>
        </div>

        {showParent ? (
          <div className="mt-1.5 flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.34em] text-slate-400">by</span>
            <Image
              src="/incuxai-logo.png"
              alt="INCUXAI"
              width={110}
              height={24}
              className="h-5 w-auto object-contain opacity-80 transition duration-300 group-hover:opacity-100"
            />
          </div>
        ) : (
          <p className="mt-1.5 text-[10px] uppercase tracking-[0.28em] text-slate-400">
            Modern digital growth consultancy
          </p>
        )}
      </div>
    </Link>
  );
}
