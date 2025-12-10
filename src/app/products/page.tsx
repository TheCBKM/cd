import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import ProductsPage from "@/components/products/ProductsPage";
import type { Metadata } from "next";
import {
  siteConfig,
  generateProductSchema,
  generateItemListSchema,
} from "@/lib/seo";
import Script from "next/script";
import { products, detailedProducts } from "@/lib/data";

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
  // Generate Product schemas for all main product categories
  const productSchemas = products.map((product) =>
    generateProductSchema({
      name: product.name,
      description: product.description,
      image: `/images/offerings/${product.image}.png`,
      category: "Organic Products",
    })
  );

  // Generate ItemList schema for all products
  const itemListSchema = generateItemListSchema(
    products.map((product) => ({
      name: product.name,
      description: product.description,
      image: `/images/offerings/${product.image}.png`,
      url: `${siteConfig.url}/products`,
    }))
  );

  // Generate Product schemas for detailed product categories
  const detailedProductSchemas = detailedProducts.map((category) =>
    generateProductSchema({
      name: category.title,
      description: category.description,
      category: "Organic Products",
    })
  );

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
      {productSchemas.map((schema, index) => (
        <Script
          key={`product-schema-${index}`}
          id={`product-schema-${index}`}
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
      {detailedProductSchemas.map((schema, index) => (
        <Script
          key={`detailed-product-schema-${index}`}
          id={`detailed-product-schema-${index}`}
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
          <ProductsPage />
        </main>
        <Footer />
      </div>
    </>
  );
}
