import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import OurFarmPage from "@/components/our-farm/OurFarmPage";
import type { Metadata } from "next";
import { siteConfig, generateFarmSchema } from "@/lib/seo";
import Script from "next/script";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Our Farm",
  description:
    "Discover Chaitanya Dham - our organic farm in Mandleshwar, Madhya Pradesh. Learn about our organic farming practices, farm-to-product journey, and commitment to sustainable, chemical-free agriculture.",
  keywords: [
    "Chaitanya Dham",
    "organic farm",
    "organic farming practices",
    "farm to table",
    "sustainable farming",
    "organic agriculture",
    "Mandleshwar farm",
    "Khargone organic farm",
  ],
  openGraph: {
    title: `Our Farm - Chaitanya Dham | ${siteConfig.name}`,
    description:
      "Discover our organic farm at Chaitanya Dham and learn about our organic farming practices and farm-to-product journey.",
    url: `${siteConfig.url}/our-farm`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Chaitanya Dham Organic Farm",
      },
    ],
  },
  alternates: {
    canonical: `${siteConfig.url}/our-farm`,
  },
};

export default function OurFarm() {
  const farmSchema = generateFarmSchema();

  return (
    <>
      <Script
        id="farm-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(farmSchema),
        }}
      />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <OurFarmPage />
        </main>
        <Footer />
      </div>
    </>
  );
}
