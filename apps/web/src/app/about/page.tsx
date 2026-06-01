import { buildMetadata } from "@/lib/seo";
import { AboutPageContent } from "@/components/about-page-content";

export const metadata = buildMetadata(
  "About",
  "Learn how ELIVATX, the premium digital consultancy by INCUXAI, combines AI, brand strategy, and cinematic storytelling.",
  "/about"
);

export default function AboutPage() {
  return <AboutPageContent />;
}
