import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/seo';
import { getAllProducts } from '@/lib/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Get all products for dynamic routes
  const products = getAllProducts();
  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/products/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Define all routes
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/our-farm`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/docs`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    ...productRoutes,
  ];

  return routes;
}
