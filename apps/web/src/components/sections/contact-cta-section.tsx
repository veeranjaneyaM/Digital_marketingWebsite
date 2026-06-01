import { MagneticButton } from "@/components/ui/magnetic-button";
import { SectionHeading } from "@/components/ui/section-heading";

export function ContactCtaSection() {
  return (
    <section className="relative py-24">
      <div className="surface-panel-strong mx-auto w-[min(1180px,calc(100%-1.5rem))] rounded-[2.5rem] bg-[radial-gradient(circle_at_top_left,rgba(125,211,252,0.2),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.96),rgba(246,250,255,0.98))] p-8 md:p-14">
        <SectionHeading
          eyebrow="Consultation"
          title="Ready to turn your digital presence into something clearer, stronger, and easier to trust?"
          description="Bring the problem, the channel mix, and the growth target. We will bring the structure, narrative, and performance system."
        />
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <MagneticButton href="/contact" label="Talk To ELIVATX" />
          <MagneticButton href="https://wa.me/919999999999" label="WhatsApp Us" variant="secondary" />
        </div>
      </div>
    </section>
  );
}
