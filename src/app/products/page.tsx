import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import ProductsPage from "@/components/products/ProductsPage";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";
import Script from "next/script";
import { products } from "@/lib/data";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore our range of organic products: NutriPowder Vault herbal powders, Vitality Boost smoothies, Chaitanya Cold Pressed Oils, The Zing Collection chutneys and pickles, Chaitanya Blends, and Śuddhāhuti sacred flames.",
  keywords: [
    "organic products",
    "herbal powders",
    "organic smoothies",
    "cold pressed oils",
    "organic chutneys",
    "organic pickles",
    "cow dung products",
    "ayurvedic products",
    "natural products",
  ],
  openGraph: {
    title: `Our Products | ${siteConfig.name}`,
    description:
      "Explore our range of pure, organic products from Chaitanya Dham - herbal powders, smoothies, cold-pressed oils, chutneys, and more.",
    url: `${siteConfig.url}/products`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "The Chaitanya Group Products",
      },
    ],
  },
  alternates: {
    canonical: `${siteConfig.url}/products`,
  },
};

export default function Products() {
  // Generate Product schema for all products
  const productSchemas = products.map((product) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `${siteConfig.url}/images/offerings/${product.image}.png`,
    category: "Organic Products",
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
    },
  }));

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Organic Products from The Chaitanya Group",
    description: "Complete catalog of organic products",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        description: product.description,
        image: `${siteConfig.url}/images/offerings/${product.image}.png`,
      },
    })),
  };

  return (
    <>
      <Script
        id="item-list-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListSchema),
        }}
      />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <ProductsPage />
        </main>
        <Footer />
      </div>
    </>
  );
}
