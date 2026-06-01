"use client";

import { AboutStorySection } from "@/components/sections/about-story-section";
import { BlogGridSection } from "@/components/sections/blog-grid-section";
import { CaseStudiesSection } from "@/components/sections/case-studies-section";
import { ContactCtaSection } from "@/components/sections/contact-cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ResultsSection } from "@/components/sections/results-section";
import { ScrollShowcase } from "@/components/sections/scroll-showcase";
import { ServicesSection } from "@/components/sections/services-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { TrustSection } from "@/components/sections/trust-section";

export function HomePageContent() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <AboutStorySection />
      <ScrollShowcase />
      <CaseStudiesSection />
      <ResultsSection />
      <TestimonialsSection />
      <BlogGridSection />
      <ContactCtaSection />
    </>
  );
}
