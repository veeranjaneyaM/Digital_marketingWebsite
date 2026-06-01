import { buildMetadata } from "@/lib/seo";
import { ServicesPageContent } from "@/components/services-page-content";

export const metadata = buildMetadata(
  "Services",
  "Explore ELIVATX services including SEO, social media, performance marketing, branding, NGO promotion, and website growth consulting.",
  "/services"
);

export default function ServicesPage() {
  return <ServicesPageContent />;
}
