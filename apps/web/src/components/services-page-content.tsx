"use client";

import { ContactCtaSection } from "@/components/sections/contact-cta-section";
import { PageHero } from "@/components/sections/page-hero";
import { ServicesSection } from "@/components/sections/services-section";
import { SpecGrid } from "@/components/ui/spec-grid";
import { serviceSpecs } from "@/lib/data";

export function ServicesPageContent() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Modular growth systems that compound across every important channel."
        description="From search visibility to performance media and brand architecture, each service is designed to feel premium and perform like a machine."
      />
      <section className="pb-14">
        <div className="mx-auto w-[min(1180px,calc(100%-1.5rem))]">
          <SpecGrid title="Service Specifications" items={serviceSpecs} columns="four" />
        </div>
      </section>
      <ServicesSection />
      <ContactCtaSection />
    </>
  );
}
