"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { products } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SafeImage } from "@/components/ui/safe-image";
import {
  card3DVariants,
  staggerContainer,
  fadeInUp,
  button3DVariants,
} from "@/lib/animations";
import { useState } from "react";

// Map old product names to new category IDs
const productToCategoryMap: Record<string, string> = {
  "Vitality Boost": "cat-2",
  "NutriPowder Vault": "cat-1",
  "The Zing Collection": "cat-3",
  "Chaitanya Cold Pressed Oil": "cat-4",
  "Chaitanya Blends": "cat-5",
  "Śuddhāhuti - Sacred Flames": "cat-6",
};

export default function ProductCatalog() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="products"
      className="py-16 md:py-20 lg:py-24 bg-white perspective-1000"
    >
      <div className="container px-5 sm:px-6 md:px-8">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-3">
            <h2 className="text-3xl font-headline font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Our Offerings
            </h2>
            <p className="max-w-2xl text-muted-foreground text-lg md:text-xl">
              Discover our range of Chemical-free and eco-friendly products, crafted
              with care to bring you the best of nature, health and taste.{" "}
            </p>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          className="mx-auto grid max-w-5xl items-start gap-6 sm:gap-8 py-8 sm:py-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-12"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {products.map((product, index) => {
            const productImage = PlaceHolderImages.find(
              (img) => img.id === product.image
            );

            return (
              <ProductCard
                key={product.name}
                product={product}
                productImage={productImage}
                index={index}
              />
            );
          })}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div
            variants={button3DVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            className="perspective-1000 inline-block"
          >
            <Button
              size="lg"
              asChild
              className="bg-primary hover:bg-accent text-white transform-3d shadow-lg shadow-primary/20"
            >
              <Link href="/products">
                View All Products
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  productImage,
  index,
}: {
  product: (typeof products)[0];
  productImage: (typeof PlaceHolderImages)[0] | undefined;
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    // Don't apply transform if hovering over button area
    const target = e.target as HTMLElement;
    if (target.closest("button, a")) {
      return;
    }

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
    setIsHovered(false);
  };

  return (
    <motion.div
      variants={card3DVariants}
      custom={index}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="magnetic perspective-1000 preserve-3d"
    >
      <Card className="group overflow-hidden flex flex-col h-full transform-3d backface-hidden bg-white border border-border shadow-sm hover:shadow-lg transition-all duration-300 relative">
        <CardHeader className="flex-row items-center gap-4 pb-3">
          <motion.div
            animate={
              isHovered
                ? { rotateY: 360, scale: 1.1 }
                : { rotateY: 0, scale: 1 }
            }
            transition={{ duration: 0.6 }}
            className="perspective-1000 p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors"
          >
            <product.icon className="w-6 h-6 text-primary" />
          </motion.div>
          <CardTitle className="font-headline text-foreground">
            {product.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col flex-grow pt-0">
          {productImage && (
            <motion.div
              className="overflow-hidden rounded-lg mb-4 relative bg-muted"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <SafeImage
                src={productImage.imageUrl}
                alt={`${product.name} - ${product.description} from The Chaitanya Group organic products`}
                width={600}
                height={400}
                className="object-cover w-full h-48"
                data-ai-hint={productImage.imageHint}
              />
            </motion.div>
          )}
          <p className="text-muted-foreground flex-grow leading-relaxed">
            {product.description}
          </p>
          <div className="mt-4 pt-4 border-t relative z-10">
            <motion.div
              variants={button3DVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              className="perspective-1000"
              style={{ pointerEvents: "auto" }}
            >
              <Button
                asChild
                size="sm"
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-colors relative z-10"
                style={{ pointerEvents: "auto" }}
              >
                <Link
                  href={
                    productToCategoryMap[product.name]
                      ? `/products#${productToCategoryMap[product.name]}`
                      : "/products"
                  }
                  style={{ pointerEvents: "auto" }}
                >
                  View More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
