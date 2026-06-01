"use client";

import { CaseStudiesSection } from "@/components/sections/case-studies-section";
import { PageHero } from "@/components/sections/page-hero";
import { SpecGrid } from "@/components/ui/spec-grid";
import { caseStudies, portfolioSpecs } from "@/lib/data";

export function PortfolioPageContent() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Every engagement is designed to become a transformation story."
        description="Our portfolio is a library of before-and-after momentum across acquisition, perception, and digital experience."
      />
      <section className="pb-14">
        <div className="mx-auto w-[min(1180px,calc(100%-1.5rem))]">
          <SpecGrid title="Portfolio Structure" items={portfolioSpecs} />
        </div>
      </section>
      <CaseStudiesSection />
      <section className="pb-24">
        <div className="mx-auto grid w-[min(1180px,calc(100%-1.5rem))] items-stretch gap-6 md:grid-cols-3">
          {caseStudies.map((study) => (
            <div key={study.slug} className="dashboard-card rounded-[2rem] p-6 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.28em] text-[#2563eb]">{study.category}</p>
              <h3 className="mt-4 font-display text-2xl text-slate-950">{study.client}</h3>
              <p className="mt-4 text-slate-600">{study.outcome}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
