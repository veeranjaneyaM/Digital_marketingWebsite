import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    return buildMetadata("Post Not Found", "This article could not be found.", `/blog/${slug}`);
  }

  return buildMetadata(post.title, post.excerpt, `/blog/${slug}`);
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="pt-32">
      <article className="mx-auto w-[min(880px,calc(100%-1.5rem))] rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_24px_70px_rgba(148,163,184,0.14)] backdrop-blur-2xl md:p-12">
        <p className="text-sm uppercase tracking-[0.35em] text-[#2563eb]">{post.date}</p>
        <h1 className="mt-5 font-display text-4xl text-slate-950 md:text-6xl">{post.title}</h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">{post.excerpt}</p>
        <div className="mt-10 space-y-6 text-base leading-8 text-slate-600">
          <p>
            ELIVATX approaches digital growth as a directed experience rather than a stack of disconnected tactics. That means narrative sequencing, media precision, and high-signal visual language all work together.
          </p>
          <p>
            The strongest growth systems create clarity at every stage of the journey, from the first impression through conversion and retention. That clarity is what makes a premium digital brand feel inevitable.
          </p>
        </div>
      </article>
    </section>
  );
}
