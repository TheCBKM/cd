"use client";

import { ProductCard } from "./ProductCard";
import type { CatalogProduct } from "@/lib/definitions";

interface ProductRecommendationsProps {
  recommendedProducts: CatalogProduct[];
}

export function ProductRecommendations({
  recommendedProducts,
}: ProductRecommendationsProps) {
  if (!recommendedProducts || recommendedProducts.length === 0) {
    return null;
  }

  return (
    <section className="py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-headline font-bold mb-6">
          Recommended Products
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {recommendedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
