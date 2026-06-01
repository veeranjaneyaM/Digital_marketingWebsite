import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";

export function buildMetadata(title: string, description: string, path = ""): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.brand,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}
