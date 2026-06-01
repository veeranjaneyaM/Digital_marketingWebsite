import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "surface-panel rounded-[2rem] p-6",
        className
      )}
    >
      {children}
    </div>
  );
}
