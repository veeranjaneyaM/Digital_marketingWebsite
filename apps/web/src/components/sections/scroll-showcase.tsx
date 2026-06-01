"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  {
    title: "Audit",
    description: "We map the market, acquisition stack, website journey, and trust gaps before changing anything."
  },
  {
    title: "Architect",
    description: "Strategy, creative direction, channel priorities, and analytics structure are aligned into one growth plan."
  },
  {
    title: "Launch",
    description: "Campaigns and reporting go live with smoother iteration, better signal quality, and clear executive visibility."
  }
];

export function ScrollShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".showcase-rail",
        { scaleX: 0.3, opacity: 0.3 },
        {
          scaleX: 1,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 55%",
            scrub: true
          }
        }
      );

      gsap.utils.toArray<HTMLElement>(".showcase-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 48 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            delay: index * 0.08,
            scrollTrigger: {
              trigger: card,
              start: "top 82%"
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24">
      <div className="mx-auto w-[min(1180px,calc(100%-1.5rem))] space-y-14">
        <SectionHeading
          eyebrow="04 Process"
          title="A controlled engagement flow that feels deliberate from discovery through deployment."
          description="The scroll rhythm here mirrors how ELIVATX operates: diagnose clearly, shape the right growth system, then execute with measurable confidence."
        />

        <div className="relative">
          <div className="showcase-rail absolute left-6 right-6 top-7 hidden h-px origin-left bg-gradient-to-r from-transparent via-[#2563eb]/60 to-transparent lg:block" />
          <div className="grid items-stretch gap-6 lg:grid-cols-3">
            {steps.map((step) => (
              <GlassCard key={step.title} className="showcase-card relative overflow-hidden">
                <div className="absolute right-5 top-5 text-[10px] uppercase tracking-[0.34em] text-slate-400">
                  Stage
                </div>
                <p className="font-ui text-xs uppercase tracking-[0.35em] text-[#2563eb]">{step.title}</p>
                <p className="mt-5 font-display text-3xl text-slate-950">{step.title} Layer</p>
                <p className="mt-4 text-base leading-7 text-slate-600">{step.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
