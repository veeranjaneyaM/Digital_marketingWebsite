import type { MetadataRoute } from "next";
import { blogPosts, navItems, siteConfig } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const basePages = navItems.map((item) => ({
    url: `${siteConfig.url}${item.href}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: item.href === "/" ? 1 : 0.8
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  return [...basePages, ...blogPages];
}
