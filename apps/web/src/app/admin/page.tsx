import { buildMetadata } from "@/lib/seo";
import { GlassCard } from "@/components/ui/glass-card";
import { PageHero } from "@/components/sections/page-hero";

const panels = [
  "Manage blogs and publishing pipeline",
  "Track leads and consultation requests",
  "Update portfolio stories and testimonials",
  "Review newsletter subscribers and campaign demand"
];

export const metadata = buildMetadata(
  "Admin Dashboard",
  "A modern ELIVATX admin dashboard for blogs, leads, consultations, portfolio updates, and testimonials.",
  "/admin"
);

export default function AdminPage() {
  return (
    <>
      <PageHero
        eyebrow="Admin"
        title="A focused command center for content, leads, and consulting demand."
        description="This dashboard is ready to connect to protected API routes for editorial control, CRM visibility, and operational oversight."
      />
      <section className="pb-24">
        <div className="mx-auto grid w-[min(1180px,calc(100%-1.5rem))] items-stretch gap-6 md:grid-cols-2">
          {panels.map((panel) => (
            <GlassCard key={panel}>
              <p className="font-display text-2xl text-slate-950">{panel}</p>
              <p className="mt-4 text-slate-500">
                Connect this module to the authenticated Express admin API for real-time management.
              </p>
            </GlassCard>
          ))}
        </div>
      </section>
    </>
  );
}
