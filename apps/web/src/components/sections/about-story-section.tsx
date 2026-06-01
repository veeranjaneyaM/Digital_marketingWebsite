"use client";

import { GlassCard } from "@/components/ui/glass-card";

const pillars = [
  "AI-informed market intelligence used to sharpen decision quality, not replace human strategy.",
  "Premium brand systems that improve trust, narrative clarity, and perceived value at every touchpoint.",
  "Performance architecture built for repeatable growth across search, paid, social, and owned channels."
];

export function AboutStorySection() {
  return (
    <section className="section-band-alt relative py-24">
      <div className="mx-auto grid w-[min(1180px,calc(100%-1.5rem))] items-start gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="max-w-2xl space-y-5">
          <p className="font-ui text-[11px] uppercase tracking-[0.42em] text-[#2563eb]">
            03 About ELIVATX
          </p>
          <h2 className="max-w-xl font-display text-3xl font-semibold leading-[1.08] tracking-tight text-slate-950 md:text-4xl lg:text-[3.25rem]">
            A modern consultancy built to make digital growth look sharper and perform better.
          </h2>
          <p className="max-w-xl text-base leading-8 text-slate-600 md:text-lg">
            ELIVATX was created under INCUXAI to bring strategic clarity, premium creative execution, and measurable growth systems into one consultancy experience.
          </p>
        </div>

        <div className="space-y-5 animate-fade-up">
          {pillars.map((pillar, index) => (
            <GlassCard key={pillar} className="relative overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#2563eb] via-[#0ea5e9] to-[#7c3aed]" />
              <div className="pl-6">
                <p className="font-ui text-xs uppercase tracking-[0.35em] text-[#2563eb]">0{index + 1}</p>
                <p className="mt-3 text-lg leading-8 text-slate-700">{pillar}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
