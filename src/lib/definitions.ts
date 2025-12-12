import type { LucideIcon } from 'lucide-react';
import React from 'react';

export type Product = {
  name: string;
  description: string;
  image: string;
  icon: React.ElementType;
};

export type JourneyStep = {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
};

export type WellnessItem = {
  title: string;
  content: string;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
};

export type DetailedProduct = {
  title?: string;
  description?: string;
  subItems?: string[];
}

export type DetailedProductCategory = {
  title: string;
  description: string;
  items: DetailedProduct[];
}

// New types for Amazon-style product catalog
export type ProductVariant = {
  title: string; // e.g., "100g", "200g", "500g"
  price: number; // Original price in rupees
  discount: number; // Discount percentage
  discountedPrice: number; // Price after discount
  outOfStock: boolean; // Out of stock flag for this variant
};

export type CatalogProduct = {
  id: string;
  title: string;
  description: string;
  images: string[];
  benefits: string[];
  recommendedProductIds: string[];
  price?: number; // Price in rupees (deprecated, use variants)
  outOfStock?: boolean; // Out of stock flag (deprecated, use variants)
  variants?: ProductVariant[]; // Product variants with different sizes/prices
};

export type CatalogSubcategory = {
  id: string;
  title: string;
  description: string;
  products: CatalogProduct[];
};

export type CatalogCategory = {
  id: string;
  title: string;
  description: string;
  subcategories: CatalogSubcategory[];
};

export type ProductsData = {
  categories: CatalogCategory[];
};
