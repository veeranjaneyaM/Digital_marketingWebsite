import { buildMetadata } from "@/lib/seo";
import { BlogGridSection } from "@/components/sections/blog-grid-section";
import { PageHero } from "@/components/sections/page-hero";
import { GlassCard } from "@/components/ui/glass-card";

export const metadata = buildMetadata(
  "Blog",
  "Read ELIVATX insights on AI-powered marketing, digital growth systems, and premium brand storytelling.",
  "/blog"
);

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Ideas, systems, and creative strategy for modern growth teams."
        description="A journal for founders and marketers building high-signal digital ecosystems."
      />
      <section className="pb-14">
        <div className="mx-auto grid w-[min(1180px,calc(100%-1.5rem))] gap-5 md:grid-cols-3">
          {["Growth psychology", "SEO and content systems", "Brand positioning for conversion", "practise"].map((item) => (
            <GlassCard key={item} className="dashboard-card rounded-[1.75rem]">
              <p className="text-xs uppercase tracking-[0.32em] text-[#2563eb]">Editorial Focus</p>
              <p className="mt-4 text-lg text-slate-600">{item}</p>
            </GlassCard>
          ))}
        </div>
      </section>
      <BlogGridSection />
    </>
  );
}
