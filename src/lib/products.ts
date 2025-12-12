import type { CatalogProduct, CatalogSubcategory, CatalogCategory, ProductsData } from './definitions';
import productsData from './products.json';

// Type assertion for the imported JSON
const data = productsData as ProductsData;

/**
 * Load products data from JSON
 */
export function loadProductsData(): ProductsData {
  return data;
}

/**
 * Get all products flattened from all categories
 */
export function getAllProducts(): CatalogProduct[] {
  const products: CatalogProduct[] = [];
  data.categories.forEach((category) => {
    category.subcategories.forEach((subcategory) => {
      products.push(...subcategory.products);
    });
  });
  return products;
}

/**
 * Find a product by its unique ID
 */
export function getProductById(id: string): CatalogProduct | undefined {
  for (const category of data.categories) {
    for (const subcategory of category.subcategories) {
      const product = subcategory.products.find((p) => p.id === id);
      if (product) return product;
    }
  }
  return undefined;
}

/**
 * Find a category by its ID
 */
export function getCategoryById(id: string): CatalogCategory | undefined {
  return data.categories.find((cat) => cat.id === id);
}

/**
 * Find a subcategory by its ID
 */
export function getSubcategoryById(id: string): CatalogSubcategory | undefined {
  for (const category of data.categories) {
    const subcategory = category.subcategories.find((sub) => sub.id === id);
    if (subcategory) return subcategory;
  }
  return undefined;
}

/**
 * Get recommended products for a given product ID
 */
export function getRecommendedProducts(productId: string): CatalogProduct[] {
  const product = getProductById(productId);
  if (!product || !product.recommendedProductIds) {
    return [];
  }

  const recommended: CatalogProduct[] = [];
  product.recommendedProductIds.forEach((id) => {
    const recommendedProduct = getProductById(id);
    if (recommendedProduct) {
      recommended.push(recommendedProduct);
    }
  });

  return recommended;
}

/**
 * Find the category that contains a product
 */
export function getCategoryForProduct(productId: string): CatalogCategory | undefined {
  for (const category of data.categories) {
    for (const subcategory of category.subcategories) {
      if (subcategory.products.some((p) => p.id === productId)) {
        return category;
      }
    }
  }
  return undefined;
}

/**
 * Find the subcategory that contains a product
 */
export function getSubcategoryForProduct(productId: string): CatalogSubcategory | undefined {
  for (const category of data.categories) {
    for (const subcategory of category.subcategories) {
      if (subcategory.products.some((p) => p.id === productId)) {
        return subcategory;
      }
    }
  }
  return undefined;
}

/**
 * Get all categories
 */
export function getAllCategories(): CatalogCategory[] {
  return data.categories;
}
