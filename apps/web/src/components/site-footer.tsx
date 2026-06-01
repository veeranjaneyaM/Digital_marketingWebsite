import Link from "next/link";
import { navItems } from "@/lib/data";
import { NewsletterForm } from "@/components/sections/newsletter-form";
import { BrandLockup } from "@/components/ui/brand-lockup";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-[rgba(255,255,255,0.88)]">
      <div className="mx-auto grid w-[min(1180px,calc(100%-1.5rem))] gap-10 py-14 md:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5">
          <BrandLockup showParent={false} />
          <p className="max-w-xl text-sm leading-7 text-slate-600">
            ELIVATX is the digital marketing consultancy arm of INCUXAI, built for brands that need stronger positioning, cleaner acquisition, and more trustworthy growth systems.
          </p>
          <div className="max-w-md pt-1">
            <NewsletterForm />
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.35em] text-[#2563eb]">Navigation</p>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="block text-sm text-slate-600 transition hover:text-slate-950">
                {item.title}
              </Link>
            ))}
          </div>

          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.35em] text-[#2563eb]">Core Focus</p>
            {["SEO systems", "Performance marketing", "Brand strategy", "Conversion consulting"].map((item) => (
              <p key={item} className="text-sm text-slate-600">
                {item}
              </p>
            ))}
            <div className="pt-3 text-sm text-slate-500">
              <p>hello@elivatx.com</p>
              <p className="mt-1">+91 99999 99999</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
