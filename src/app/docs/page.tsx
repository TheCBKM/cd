import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";
import {
  products,
  detailedProducts,
  wellnessGuideContent,
  journeySteps,
} from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Documentation & Help Center",
  description:
    "Complete guide to The Chaitanya Group's Natural products, usage instructions, farm information, and frequently asked questions.",
  keywords: [
    "Chaitanya Group documentation",
    "Products guide",
    "herbal powder usage",
    "smoothie preparation",
    "Farming",
    "product information",
    "help center",
  ],
  openGraph: {
    title: `Documentation & Help Center | ${siteConfig.name}`,
    description:
      "Complete guide to our Natural products, usage instructions, and farm information.",
    url: `${siteConfig.url}/docs`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "The Chaitanya Group Documentation",
      },
    ],
  },
  alternates: {
    canonical: `${siteConfig.url}/docs`,
  },
};

export default function DocsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-white">
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h1 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">
                Documentation & Help Center
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Complete information about our Natural products, usage
                guidelines, farm practices, and more.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12">
              {/* Overview Section */}
              <div>
                <h2 className="text-3xl font-headline font-bold mb-6">
                  Overview
                </h2>
                <Card className="bg-white border border-border">
                  <CardHeader>
                    <CardTitle>About The Chaitanya Group</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      The Chaitanya Group is dedicated to Natural farming, value
                      addition of farm produce, and promoting a healthy
                      lifestyle through natural products. We provide pure,
                      Natural, and eco-friendly products from the heart of
                      nature.
                    </p>
                    <p className="text-muted-foreground">
                      Our products include Natural herbal powders, healthy
                      smoothies, chutneys, premium cold-pressed oils, and
                      eco-friendly cow dung products from Chaitanya Dham, our
                      farm in Mandleshwar, Madhya Pradesh.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Product Information Section */}
              <div>
                <h2 className="text-3xl font-headline font-bold mb-6">
                  Product Information
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {detailedProducts.map((category) => (
                    <Card
                      key={category.title}
                      className="bg-white border border-border"
                    >
                      <CardHeader>
                        <CardTitle>{category.title}</CardTitle>
                        <CardDescription>
                          {category.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {category.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              {item.title && (
                                <h4 className="font-semibold mb-2">
                                  {item.title}
                                </h4>
                              )}
                              {item.subItems && (
                                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                                  {item.subItems.map((subItem, subIndex) => (
                                    <li key={subIndex}>{subItem}</li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Usage Guidelines Section */}
              <div>
                <h2 className="text-3xl font-headline font-bold mb-6">
                  Usage Guidelines
                </h2>
                <div className="grid gap-6">
                  {wellnessGuideContent.map((item, index) => (
                    <Card key={index} className="bg-white border border-border">
                      <CardHeader>
                        <CardTitle>{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground whitespace-pre-line">
                          {item.content}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Farm Information Section */}
              <div>
                <h2 className="text-3xl font-headline font-bold mb-6">
                  Farm Information
                </h2>
                <Card className="bg-white border border-border">
                  <CardHeader>
                    <CardTitle>Chaitanya Dham - Our Farm</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      Chaitanya Dham is located in Mandleshwar, Maheshwar,
                      Khargone district, Madhya Pradesh, India. We follow
                      Natural farming practices to produce pure, chemical-free
                      products.
                    </p>
                    <div className="grid gap-4 md:grid-cols-2">
                      {journeySteps.map((step, index) => (
                        <Card
                          key={index}
                          className="bg-white border border-border"
                        >
                          <CardHeader>
                            <CardTitle className="text-lg">
                              {step.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground text-sm">
                              {step.description}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact & Support Section */}
              <div>
                <h2 className="text-3xl font-headline font-bold mb-6">
                  Contact & Support
                </h2>
                <Card className="bg-white border border-border">
                  <CardHeader>
                    <CardTitle>Get in Touch</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Phone & WhatsApp</h4>
                        <p className="text-muted-foreground">
                          {siteConfig.contact.phone}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Email</h4>
                        <p className="text-muted-foreground">
                          {siteConfig.contact.email}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Address</h4>
                        <p className="text-muted-foreground">
                          {siteConfig.contact.address.street}
                          <br />
                          {siteConfig.contact.address.city},{" "}
                          {siteConfig.contact.address.district}
                          <br />
                          {siteConfig.contact.address.state}{" "}
                          {siteConfig.contact.address.postalCode}
                          <br />
                          {siteConfig.contact.address.country}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
