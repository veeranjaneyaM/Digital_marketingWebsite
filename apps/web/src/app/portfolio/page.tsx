import { buildMetadata } from "@/lib/seo";
import { PortfolioPageContent } from "@/components/portfolio-page-content";

export const metadata = buildMetadata(
  "Portfolio",
  "Review ELIVATX case studies and portfolio stories across performance, branding, SEO, and NGO promotion.",
  "/portfolio"
);

export default function PortfolioPage() {
  return <PortfolioPageContent />;
}
