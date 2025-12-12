"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { CatalogProduct } from "@/lib/definitions";

interface ProductCardProps {
  product: CatalogProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const firstImage = product.images[0] || "placeholder.jpg";
  const imagePath = `/images/products/${firstImage}`;

  // Get first variant or fallback to product price
  const firstVariant =
    product.variants && product.variants.length > 0
      ? product.variants[0]
      : null;
  const isOutOfStock = firstVariant
    ? firstVariant.outOfStock
    : product.outOfStock || false;

  return (
    <Link href={`/products/${product.id}`} className="block h-full">
      <Card className="h-full flex flex-col bg-white border border-border shadow-sm hover:shadow-lg transition-shadow cursor-pointer group relative">
        {isOutOfStock && (
          <Badge variant="destructive" className="absolute top-2 right-2 z-10">
            Out of Stock
          </Badge>
        )}
        {firstVariant && (
          <div className="absolute top-2 left-2 z-10 bg-primary text-primary-foreground text-base md:text-lg font-bold px-3 py-1.5 rounded-md">
            <div className="flex items-center gap-2">
              {firstVariant.discount && firstVariant.discount > 0 ? (
                <>
                  <span className="line-through text-sm opacity-75">
                    ₹{firstVariant.price.toLocaleString("en-IN")}
                  </span>
                  <span>
                    ₹{firstVariant.discountedPrice.toLocaleString("en-IN")}
                  </span>
                </>
              ) : (
                <span>₹{firstVariant.price.toLocaleString("en-IN")}</span>
              )}
            </div>
          </div>
        )}
        {!firstVariant && product.price && (
          <Badge className="absolute top-2 left-2 z-10 bg-primary text-primary-foreground text-base md:text-lg font-bold px-3 py-1.5">
            ₹{product.price.toLocaleString("en-IN")}
          </Badge>
        )}
        <div className="relative w-full aspect-[840/1500] overflow-hidden rounded-t-lg">
          <Image
            src={imagePath}
            alt={product.title}
            fill
            className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
              isOutOfStock ? "opacity-60" : ""
            }`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            onError={(e) => {
              // Fallback to placeholder if image fails to load
              const target = e.target as HTMLImageElement;
              target.src = "/images/placeholder.jpg";
            }}
          />
        </div>
        <CardHeader className="flex-grow">
          <CardTitle className="text-lg font-headline line-clamp-2">
            {product.title}
          </CardTitle>
          <CardDescription className="line-clamp-3 mt-2">
            {product.description}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
