import { siteConfig } from "@/lib/data";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.brand,
    brand: siteConfig.brand,
    parentOrganization: {
      "@type": "Organization",
      name: siteConfig.parentBrand
    },
    description: siteConfig.description,
    url: siteConfig.url,
    areaServed: "Global",
    serviceType: [
      "SEO",
      "Social Media Marketing",
      "Performance Marketing",
      "Branding",
      "NGO Promotion",
      "Website Growth Consulting"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
