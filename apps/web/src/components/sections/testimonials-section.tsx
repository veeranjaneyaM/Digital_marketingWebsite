"use client";

import { useEffect, useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/lib/data";

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  const active = testimonials[index];

  return (
    <section className="section-band relative py-24">
      <div className="mx-auto w-[min(1180px,calc(100%-1.5rem))] space-y-14">
        <SectionHeading
          eyebrow="07 Testimonials"
          title="Client confidence built through structure, performance, and market-facing polish."
          description="These testimonials are positioned as proof of trust and execution quality rather than decoration."
          align="center"
        />

        <div className="surface-panel-strong mx-auto max-w-4xl rounded-[2rem] p-8 md:p-12">
          <div key={active.name} className="animate-fade-up">
            <p className="font-display text-2xl leading-10 text-slate-950 md:text-4xl md:leading-[1.35]">
              "{active.quote}"
            </p>
            <div className="mt-8">
              <p className="font-ui text-sm uppercase tracking-[0.32em] text-[#2563eb]">{active.name}</p>
              <p className="mt-2 text-sm text-slate-500">{active.role}</p>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((testimonial, dotIndex) => (
              <button
                key={testimonial.name}
                type="button"
                aria-label={`Show testimonial ${dotIndex + 1}`}
                onClick={() => setIndex(dotIndex)}
                className={`h-2.5 rounded-full transition-all duration-300 ${dotIndex === index ? "w-8 bg-[#2563eb]" : "w-2.5 bg-slate-300"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
