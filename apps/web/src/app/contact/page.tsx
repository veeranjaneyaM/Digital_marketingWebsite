import { buildMetadata } from "@/lib/seo";
import { ContactForm } from "@/components/sections/contact-form";
import { PageHero } from "@/components/sections/page-hero";
import { SpecGrid } from "@/components/ui/spec-grid";
import { GlassCard } from "@/components/ui/glass-card";
import { contactSpecs } from "@/lib/data";

export const metadata = buildMetadata(
  "Contact",
  "Contact ELIVATX for digital marketing strategy, performance growth, branding, and consultation requests.",
  "/contact"
);

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start the conversation that reshapes your digital presence."
        description="Reach ELIVATX for strategy, campaign execution, partnerships, or executive-level growth consulting."
      />
      <section className="pb-14">
        <div className="mx-auto w-[min(1180px,calc(100%-1.5rem))]">
          <SpecGrid title="Engagement Snapshot" items={contactSpecs} />
        </div>
      </section>
      <section className="pb-24">
        <div className="mx-auto grid w-[min(1180px,calc(100%-1.5rem))] items-start gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <GlassCard className="dashboard-card rounded-[1.75rem]">
              <p className="font-display text-2xl text-slate-950">WhatsApp</p>
              <p className="mt-3 text-slate-600">+91 99999 99999</p>
            </GlassCard>
            <GlassCard className="dashboard-card rounded-[1.75rem]">
              <p className="font-display text-2xl text-slate-950">Email</p>
              <p className="mt-3 text-slate-600">hello@elivatx.com</p>
            </GlassCard>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
