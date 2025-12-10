import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import AboutPage from "@/components/about/AboutPage";
import type { Metadata } from "next";
import { siteConfig, generatePersonSchema } from "@/lib/seo";
import Script from "next/script";
import { teamMembers } from "@/lib/data";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about The Chaitanya Group and our mission to provide pure, organic products from Chaitanya Dham. Discover our team, values, and commitment to organic farming and sustainable living.",
  keywords: [
    "about Chaitanya Group",
    "organic farming",
    "sustainable living",
    "organic products team",
    "Chaitanya Dham",
    "organic farm story",
  ],
  openGraph: {
    title: `About Us | ${siteConfig.name}`,
    description:
      "Learn about The Chaitanya Group and our mission to provide pure, organic products from Chaitanya Dham.",
    url: `${siteConfig.url}/about`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "About The Chaitanya Group",
      },
    ],
  },
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
};

export default function About() {
  // Generate Person schemas for team members
  const personSchemas = teamMembers.map((member, index) => {
    const imagePath = `/images/profile/${index + 1}.png`;
    return generatePersonSchema({
      name: member.name,
      jobTitle: member.role,
      description: member.bio,
      image: imagePath,
      url: `${siteConfig.url}/about`,
    });
  });

  return (
    <>
      {personSchemas.map((schema, index) => (
        <Script
          key={`person-schema-${index}`}
          id={`person-schema-${index}`}
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <AboutPage />
        </main>
        <Footer />
      </div>
    </>
  );
}
