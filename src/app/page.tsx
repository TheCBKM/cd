import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import ProductCatalog from "@/components/landing/ProductCatalog";
import FarmJourney from "@/components/landing/FarmJourney";
import WellnessGuide from "@/components/landing/WellnessGuide";
import Footer from "@/components/landing/Footer";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Discover pure, organic products from Chaitanya Dham. Organic herbal powders, healthy smoothies, premium cold-pressed oils, chutneys, and eco-friendly cow dung products for a healthier lifestyle.",
  keywords: [
    "organic products",
    "herbal powders",
    "organic smoothies",
    "cold pressed oils",
    "organic chutneys",
    "Chaitanya Dham",
    "organic farm products",
    "natural products India",
  ],
  openGraph: {
    title: `${siteConfig.name} - Pure Organic Products from Nature`,
    description:
      "From our organic farm at Chaitanya Dham to your kitchen - pure herbal powders, healthy smoothies, chutneys, premium cold-pressed oils and eco-friendly products.",
    url: siteConfig.url,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "The Chaitanya Group - Organic Products",
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
    servesCuisine: "Organic & Natural Products",
  };

  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
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
