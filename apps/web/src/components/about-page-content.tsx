"use client";

import { AboutStorySection } from "@/components/sections/about-story-section";
import { ContactCtaSection } from "@/components/sections/contact-cta-section";
import { PageHero } from "@/components/sections/page-hero";
import { GlassCard } from "@/components/ui/glass-card";
import { SpecGrid } from "@/components/ui/spec-grid";
import { aboutSpecs } from "@/lib/data";

export function AboutPageContent() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A premium growth studio built where AI intelligence meets luxury execution."
        description="We combine the analytical rigor of a performance lab with the visual ambition of a cinematic brand studio."
      />
      <AboutStorySection />
      <section className="pb-24">
        <div className="mx-auto w-[min(1180px,calc(100%-1.5rem))] space-y-8">
          <SpecGrid title="How ELIVATX Operates" items={aboutSpecs} />
          <div className="grid items-stretch gap-6 md:grid-cols-3">
            {[
              "Strategy first, always measurable.",
              "Creative systems that elevate perception and conversion.",
              "Execution that scales across paid, organic, social, and owned channels."
            ].map((item) => (
              <GlassCard key={item} className="dashboard-card rounded-[1.75rem]">
                <p className="text-lg leading-8 text-slate-600">{item}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
      <ContactCtaSection />
    </>
  );
}
