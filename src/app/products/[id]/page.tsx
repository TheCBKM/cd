import { notFound } from "next/navigation";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { ImageCarousel } from "@/components/products/ImageCarousel";
import { ProductRecommendations } from "@/components/products/ProductRecommendations";
import { OrderNowButton } from "@/components/ui/order-now-button";
import {
  getProductById,
  getCategoryForProduct,
  getSubcategoryForProduct,
  getRecommendedProducts,
} from "@/lib/products";
import { CheckCircle, ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";
import Script from "next/script";
import { generateProductSchema, generateBreadcrumbSchema } from "@/lib/seo";
import { Badge } from "@/components/ui/badge";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  const category = getCategoryForProduct(id);
  const subcategory = getSubcategoryForProduct(id);
  const firstImage = product.images[0]
    ? `/images/products/${product.images[0]}`
    : siteConfig.ogImage;

  return {
    title: product.title,
    description: product.description,
    keywords: [
      product.title,
      category?.title || "",
      subcategory?.title || "",
      "organic products",
      "natural products",
    ].filter(Boolean),
    openGraph: {
      title: `${product.title} | ${siteConfig.name}`,
      description: product.description,
      url: `${siteConfig.url}/products/${id}`,
      images: [
        {
          url: firstImage,
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
    },
    alternates: {
      canonical: `${siteConfig.url}/products/${id}`,
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const category = getCategoryForProduct(id);
  const subcategory = getSubcategoryForProduct(id);
  const recommendedProducts = getRecommendedProducts(id);

  // Generate breadcrumb schema
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Products", url: "/products" },
  ];

  if (category) {
    breadcrumbItems.push({
      name: category.title,
      url: `/products#${category.id}`,
    });
  }

  if (subcategory) {
    breadcrumbItems.push({
      name: subcategory.title,
      url: `/products#${subcategory.id}`,
    });
  }

  breadcrumbItems.push({ name: product.title, url: `/products/${id}` });

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

  // Generate product schema
  const firstImage = product.images[0]
    ? `${siteConfig.url}/images/products/${product.images[0]}`
    : siteConfig.ogImage;

  const productSchema = generateProductSchema({
    name: product.title,
    description: product.description,
    image: firstImage,
    category: category?.title || "Organic Products",
  });

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Script
        id="product-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 bg-white">
          {/* Breadcrumbs */}
          <section className="py-4 border-b bg-muted/30">
            <div className="container px-4 md:px-6">
              <nav className="flex items-center gap-2 text-sm text-muted-foreground">
                <Link
                  href="/"
                  className="flex items-center gap-1 hover:text-foreground transition-colors"
                >
                  <Home className="w-4 h-4" />
                  <span>Home</span>
                </Link>
                <ChevronRight className="w-4 h-4" />
                <Link
                  href="/products"
                  className="hover:text-foreground transition-colors"
                >
                  Products
                </Link>
                {category && (
                  <>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-foreground">{category.title}</span>
                  </>
                )}
                {subcategory && (
                  <>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-foreground">{subcategory.title}</span>
                  </>
                )}
                <ChevronRight className="w-4 h-4" />
                <span className="text-foreground font-medium">
                  {product.title}
                </span>
              </nav>
            </div>
          </section>

          {/* Product Details */}
          <section className="py-12 md:py-16 lg:py-24">
            <div className="container px-4 md:px-6">
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                {/* Product Images */}
                <div>
                  <ImageCarousel
                    images={product.images}
                    productTitle={product.title}
                  />
                </div>

                {/* Product Information */}
                <div className="space-y-6">
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <h1 className="text-3xl md:text-4xl font-headline font-bold mb-2">
                          {product.title}
                        </h1>
                        {category && (
                          <p className="text-muted-foreground text-lg mb-2">
                            {category.title}
                            {subcategory && ` • ${subcategory.title}`}
                          </p>
                        )}
                      </div>
                      {product.variants &&
                        product.variants.every((v) => v.outOfStock) && (
                          <Badge variant="destructive" className="shrink-0">
                            Out of Stock
                          </Badge>
                        )}
                    </div>
                    {product.variants && product.variants.length > 0 && (
                      <div className="mb-6">
                        <h2 className="text-xl font-headline font-semibold mb-4">
                          Available Sizes
                        </h2>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                          {product.variants.map((variant, index) => (
                            <div
                              key={index}
                              className={`border rounded-lg p-4 ${
                                variant.outOfStock
                                  ? "opacity-60 border-muted bg-muted/30"
                                  : "border-border hover:border-primary transition-colors"
                              }`}
                            >
                              <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold text-lg">
                                  {variant.title}
                                </h3>
                                {variant.outOfStock && (
                                  <Badge
                                    variant="destructive"
                                    className="text-xs"
                                  >
                                    Out of Stock
                                  </Badge>
                                )}
                              </div>
                              <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                  {variant.discount && variant.discount > 0 ? (
                                    <>
                                      <span className="text-muted-foreground line-through text-sm">
                                        ₹{variant.price.toLocaleString("en-IN")}
                                      </span>
                                      <span className="text-2xl font-bold text-primary">
                                        ₹
                                        {variant.discountedPrice.toLocaleString(
                                          "en-IN"
                                        )}
                                      </span>
                                      <Badge className="bg-green-500 text-white">
                                        {variant.discount}% OFF
                                      </Badge>
                                    </>
                                  ) : (
                                    <span className="text-2xl font-bold text-primary">
                                      ₹{variant.price.toLocaleString("en-IN")}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {!product.variants && product.price && (
                      <div className="mb-4">
                        <span className="text-4xl font-bold text-primary">
                          ₹{product.price.toLocaleString("en-IN")}
                        </span>
                      </div>
                    )}
                  </div>

                  <div>
                    <h2 className="text-xl font-headline font-semibold mb-3">
                      Description
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {product.benefits && product.benefits.length > 0 && (
                    <div>
                      <h2 className="text-xl font-headline font-semibold mb-3">
                        Benefits
                      </h2>
                      <ul className="space-y-2">
                        {product.benefits.map((benefit, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 text-muted-foreground"
                          >
                            <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="pt-4">
                    <OrderNowButton size="lg" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Recommended Products */}
          {recommendedProducts.length > 0 && (
            <ProductRecommendations recommendedProducts={recommendedProducts} />
          )}
        </main>
        <Footer />
      </div>
    </>
  );
}
