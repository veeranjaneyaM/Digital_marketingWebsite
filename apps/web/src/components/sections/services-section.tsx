"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/lib/data";

export function ServicesSection() {
  return (
    <section className="section-band relative py-24">
      <div className="mx-auto w-[min(1180px,calc(100%-1.5rem))] space-y-14">
        <SectionHeading
          eyebrow="02 Services"
          title="Specialized growth services shaped like clear consulting products."
          description="Each engagement area is designed to feel strategic, measurable, and operationally mature, so clients understand both the craft and the business outcome."
        />

        <div className="grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group animate-fade-up relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-[1px] transition-transform duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-35 transition duration-500 group-hover:opacity-50`} />
              <div className="relative flex h-full min-h-[24rem] flex-col rounded-[2rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,251,255,0.98))] p-7 backdrop-blur-2xl">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-sm font-semibold text-slate-900 transition duration-500 group-hover:scale-110">
                    0{index + 1}
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.28em] text-slate-400">Consulting Layer</span>
                </div>

                <h3 className="mt-8 font-display text-2xl text-slate-950">{service.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{service.description}</p>

                <div className="mt-auto space-y-3 border-t border-slate-200 pt-6">
                  {service.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-slate-700">
                      <span className="h-2 w-2 rounded-full bg-[#2563eb]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
