"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/data";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { BrandLockup } from "@/components/ui/brand-lockup";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-4 w-[min(1240px,calc(100%-1.5rem))]">
        <div className="flex items-center justify-between rounded-[1.75rem] border border-slate-200/80 bg-[rgba(255,255,255,0.82)] px-5 py-3 shadow-[0_18px_60px_rgba(148,163,184,0.18)] backdrop-blur-2xl">
          <BrandLockup compact />

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.slice(0, 6).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3 py-2 text-sm transition duration-300",
                  pathname === item.href
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <MagneticButton href="/consultation" label="Book Consultation" />
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((current) => !current)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open ? (
          <div className="animate-fade-down mt-3 rounded-[1.75rem] border border-slate-200 bg-[rgba(255,255,255,0.94)] p-4 shadow-[0_18px_60px_rgba(148,163,184,0.18)] backdrop-blur-2xl md:hidden">
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-2xl px-4 py-3 text-sm transition duration-300",
                      pathname === item.href
                        ? "bg-slate-900 text-white"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                    )}
                  >
                    {item.title}
                  </Link>
                ))}
                <div className="pt-2">
                  <MagneticButton href="/consultation" label="Book Consultation" />
                </div>
              </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
