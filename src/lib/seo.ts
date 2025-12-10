/**
 * SEO Configuration and Utilities
 * Centralized SEO metadata and structured data helpers
 */

export const siteConfig = {
  name: "The Chaitanya Group",
  shortName: "Chaitanya Organics",
  description:
    "Pure, organic, and eco-friendly products from the heart of nature. Organic herbal powders, healthy smoothies, chutneys, premium cold-pressed oils, and eco-friendly cow dung products from Chaitanya Dham.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://thechaitanyagroup.com",
  ogImage: "/images/chaitanya-logo.png",
  logo: "/images/chaitanya-logo.png",
  logoIcon: "/images/chaitanya-logo-icon.png",
  contact: {
    phone: "+919203692001",
    whatsapp: "+919203692001",
    email: "info@thechaitanyagroup.com",
    address: {
      street: "Chaitanya Dham, Mandleshwar",
      city: "Maheshwar",
      district: "Khargone",
      state: "Madhya Pradesh",
      postalCode: "451221",
      country: "India",
    },
  },
  social: {
    instagram: "https://www.instagram.com/thechaitanyagroup/",
  },
  keywords: [
    "organic products",
    "herbal powders",
    "organic farming",
    "cold pressed oils",
    "organic smoothies",
    "eco-friendly products",
    "cow dung products",
    "organic chutneys",
    "natural products",
    "Chaitanya Dham",
    "organic food",
    "ayurvedic products",
    "healthy lifestyle",
    "organic farm",
    "sustainable living",
  ],
};

/**
 * Generate structured data for Organization (JSON-LD)
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.state,
      postalCode: siteConfig.contact.address.postalCode,
      addressCountry: siteConfig.contact.address.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone,
      contactType: "Customer Service",
      email: siteConfig.contact.email,
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [siteConfig.social.instagram],
  };
}

/**
 * Generate structured data for LocalBusiness (JSON-LD)
 */
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}#organization`,
    name: siteConfig.name,
    image: `${siteConfig.url}${siteConfig.logo}`,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.state,
      postalCode: siteConfig.contact.address.postalCode,
      addressCountry: siteConfig.contact.address.country,
    },
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    url: siteConfig.url,
    priceRange: "$$",
    servesCuisine: "Organic & Natural Products",
  };
}

/**
 * Generate structured data for Product (JSON-LD)
 */
export function generateProductSchema(product: {
  name: string;
  description: string;
  image?: string;
  category?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image
      ? `${siteConfig.url}${product.image}`
      : `${siteConfig.url}${siteConfig.ogImage}`,
    category: product.category || "Organic Products",
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
    },
  };
}

/**
 * Generate structured data for BreadcrumbList (JSON-LD)
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}

/**
 * Generate structured data for WebSite (JSON-LD)
 */
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/products?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * Generate structured data for ItemList (JSON-LD)
 */
export function generateItemListSchema(items: Array<{
  name: string;
  description: string;
  image?: string;
  url?: string;
}>) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: item.name,
        description: item.description,
        image: item.image ? `${siteConfig.url}${item.image}` : `${siteConfig.url}${siteConfig.ogImage}`,
        url: item.url || `${siteConfig.url}/products`,
      },
    })),
  };
}

/**
 * Generate structured data for FAQPage (JSON-LD)
 */
export function generateFAQPageSchema(faqs: Array<{
  question: string;
  answer: string;
}>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate structured data for Person (JSON-LD)
 */
export function generatePersonSchema(person: {
  name: string;
  jobTitle?: string;
  description?: string;
  image?: string;
  url?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.jobTitle,
    description: person.description,
    image: person.image ? `${siteConfig.url}${person.image}` : undefined,
    url: person.url || siteConfig.url,
    worksFor: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };
}

/**
 * Generate structured data for Farm (JSON-LD)
 */
export function generateFarmSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Farm",
    name: "Chaitanya Dham",
    description:
      "Organic farm producing pure, chemical-free products including herbal powders, smoothies, cold-pressed oils, and eco-friendly products.",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.state,
      postalCode: siteConfig.contact.address.postalCode,
      addressCountry: siteConfig.contact.address.country,
    },
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    url: `${siteConfig.url}/our-farm`,
  };
}
