"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { caseStudies } from "@/lib/data";

export function CaseStudiesSection() {
  return (
    <section className="section-band relative py-24">
      <div className="mx-auto w-[min(1180px,calc(100%-1.5rem))] space-y-14">
        <SectionHeading
          eyebrow="05 Case Studies"
          title="Transformation stories presented with the clarity of a strategy review."
          description="Each case study focuses on what changed before and after ELIVATX entered the picture, making the commercial value feel concrete rather than decorative."
        />

        <div className="space-y-6">
          {caseStudies.map((study, index) => (
            <article
              key={study.slug}
              className="surface-panel animate-fade-up grid items-start gap-8 rounded-[2rem] p-8 lg:grid-cols-[1.02fr_0.98fr]"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="space-y-5">
                <p className="font-ui text-xs uppercase tracking-[0.4em] text-[#2563eb]">{study.category}</p>
                <h3 className="font-display text-3xl text-slate-950">{study.client}</h3>
                <p className="text-slate-600">
                  <span className="font-medium text-slate-950">Challenge:</span> {study.challenge}
                </p>
                <p className="text-slate-600">
                  <span className="font-medium text-slate-950">Outcome:</span> {study.outcome}
                </p>

                <div className="grid gap-4 pt-3 md:grid-cols-2">
                  <div className="rounded-[1.4rem] border border-slate-200 bg-slate-50/80 p-5">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">Before</p>
                    <p className="mt-3 text-sm leading-6 text-slate-700">{study.before}</p>
                  </div>
                  <div className="rounded-[1.4rem] border border-slate-200 bg-slate-50/80 p-5">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">After</p>
                    <p className="mt-3 text-sm leading-6 text-slate-700">{study.after}</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
                {study.metrics.map((metric) => (
                  <div key={metric} className="dashboard-card rounded-[1.5rem] p-5">
                    <p className="font-display text-2xl text-slate-950">{metric}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.35em] text-[#2563eb]">Measured lift</p>
                    <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-200">
                      <div className="data-line h-full rounded-full" style={{ width: "78%" }} />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
