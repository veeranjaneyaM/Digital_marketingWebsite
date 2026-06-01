import { buildMetadata } from "@/lib/seo";
import { ConsultationForm } from "@/components/sections/consultation-form";
import { PageHero } from "@/components/sections/page-hero";
import { SpecGrid } from "@/components/ui/spec-grid";
import { consultationSpecs } from "@/lib/data";

export const metadata = buildMetadata(
  "Consultation Booking",
  "Book a premium consultation with ELIVATX to map your growth, branding, and campaign roadmap.",
  "/consultation"
);

export default function ConsultationPage() {
  return (
    <>
      <PageHero
        eyebrow="Consultation"
        title="Book a strategy session built for serious growth decisions."
        description="Share your goals, roadmap, and timing. We will shape a custom consultation around acquisition, brand lift, and digital transformation."
      />
      <section className="pb-14">
        <div className="mx-auto w-[min(1180px,calc(100%-1.5rem))]">
          <SpecGrid title="Consultation Specs" items={consultationSpecs} />
        </div>
      </section>
      <section className="pb-24">
        <div className="mx-auto w-[min(980px,calc(100%-1.5rem))]">
          <ConsultationForm />
        </div>
      </section>
    </>
  );
}
