import type { Metadata } from "next";
import { Inter, Poppins, Sora } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/data";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { JsonLd } from "@/components/seo/json-ld";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"]
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.brand} | Premium Digital Marketing Consultancy`,
    template: `%s | ${siteConfig.brand}`
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  keywords: [
    "digital marketing consultancy",
    "AI marketing agency",
    "SEO growth agency",
    "performance marketing",
    "premium branding studio"
  ],
  openGraph: {
    title: `${siteConfig.brand} | Premium Digital Marketing Consultancy`,
    description: siteConfig.description,
    siteName: siteConfig.brand,
    type: "website",
    url: siteConfig.url
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brand} | Premium Digital Marketing Consultancy`,
    description: siteConfig.description
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${poppins.variable} ${inter.variable}`}>
      <body className="noise-overlay">
        <JsonLd />
        <SmoothScrollProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
