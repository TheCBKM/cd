import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import FloatingWhatsAppButton from "@/components/landing/FloatingWhatsAppButton";

export const metadata: Metadata = {
  title: "The Chaitanya Group",
  description:
    "Pure, organic, and eco-friendly products from the heart of nature.",
  icons: {
    icon: [
      { url: "/images/chaitanya-logo-icon.png", sizes: "any" },
      { url: "/images/chaitanya-logo-icon.png", type: "image/png" },
    ],
    apple: [
      {
        url: "/images/chaitanya-logo-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: "/images/chaitanya-logo-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=Lato:wght@300;400;700&family=Montserrat+Alternates:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={cn(
          "font-body antialiased min-h-screen bg-background text-foreground"
        )}
      >
        {children}
        <Toaster />
        <Analytics />
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
