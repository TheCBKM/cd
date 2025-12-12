import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import ProductCatalog from "@/components/landing/ProductCatalog";
import dynamicImport from "next/dynamic";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";
import Script from "next/script";

// Lazy load below-the-fold components
const FarmJourney = dynamicImport(
  () => import("@/components/landing/FarmJourney"),
  {
    ssr: true,
  }
);
const WellnessGuide = dynamicImport(
  () => import("@/components/landing/WellnessGuide"),
  {
    ssr: true,
  }
);
const Footer = dynamicImport(() => import("@/components/landing/Footer"), {
  ssr: true,
});

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Discover pure, Natural products from Chaitanya Dham. Herbal powders, healthy smoothies, premium cold-pressed oils, chutneys, and eco-friendly cow dung products for a healthier lifestyle.",
  keywords: [
    "Natural products",
    "herbal powders",
    "Smoothies",
    "cold pressed oils",
    "Chutneys",
    "Chaitanya Dham",
    "Farm products",
    "natural products India",
  ],
  openGraph: {
    title: `${siteConfig.name} - Pure Natural Products from Nature`,
    description:
      "From our farm at Chaitanya Dham to your kitchen - pure herbal powders, healthy smoothies, chutneys, premium cold-pressed oils and eco-friendly products.",
    url: siteConfig.url,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "The Chaitanya Group - Natural Products",
      },
    ],
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    image: `${siteConfig.url}${siteConfig.logo}`,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.state,
      postalCode: siteConfig.contact.address.postalCode,
      addressCountry: siteConfig.contact.address.country,
    },
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    url: siteConfig.url,
    priceRange: "$$",
    servesCuisine: "Natural Products",
  };

  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Hero />
          <WhyChooseUs />
          <ProductCatalog />
          <FarmJourney />
          <WellnessGuide />
        </main>
        <Footer />
      </div>
    </>
  );
}
