import Link from "next/link";
import { blogPosts } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

export function BlogGridSection() {
  return (
    <section className="section-band-alt relative py-24">
      <div className="mx-auto w-[min(1180px,calc(100%-1.5rem))] space-y-14">
        <SectionHeading
          eyebrow="08 Journal"
          title="Insight pieces that extend the strategic voice of the brand."
          description="The blog is framed as a premium thinking layer for founders and marketing leaders exploring modern growth systems."
        />

        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="surface-panel rounded-[2rem] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#2563eb]/30"
            >
              <p className="text-sm uppercase tracking-[0.28em] text-[#2563eb]">{post.date}</p>
              <h3 className="mt-5 font-display text-2xl text-slate-950">{post.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
