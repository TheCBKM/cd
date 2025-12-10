"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SafeImage } from "@/components/ui/safe-image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { OrderNowButton } from "@/components/ui/order-now-button";
import {
  CheckCircle,
  Sprout,
  Hand,
  Wind,
  Package,
  ChevronsRight,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const produce = [
  "Moringa",
  "Bottle Gourd",
  "Neem",
  "Wheat grass",
  "Curry leaves",
  "Mint",
  "Tulsi / Basil",
  "Java plum leaves",
  "Mango leaves",
  "Coriander",
  "Spinach",
  "Beetroot",
  "Cucumber",
  "Guava & Banana",
];

const practices = [
  "No chemical fertilizers or pesticides",
  "Use of cow dung manure and natural compost",
  "Hand harvesting",
  "Cabinet drying techniques",
  "Zero wastage approach / 100% recyclable approach",
];

const farmToProductSteps = [
  { text: "Grown organically", icon: Sprout },
  { text: "Handpicked at the right stage", icon: Hand },
  { text: "Naturally dried and processed", icon: Wind },
  { text: "Packed hygienically", icon: Package },
];

export default function OurFarmPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "our-farm-hero");
  const produceImage = PlaceHolderImages.find(
    (img) => img.id === "farm-produce"
  );
  const practicesImage = PlaceHolderImages.find(
    (img) => img.id === "organic-practices"
  );

  // Farm gallery images from public/images/gallery
  const farmGalleryImages = [
    {
      src: "/images/gallery/1.jpg",
      alt: "Organic farming at Chaitanya Dham showing lush green fields and sustainable agriculture practices",
    },
    {
      src: "/images/gallery/2.jpg",
      alt: "Organic produce cultivation at Chaitanya Dham farm in Mandleshwar, Madhya Pradesh",
    },
    {
      src: "/images/gallery/3.jpg",
      alt: "Natural farming methods and organic crop growth at Chaitanya Dham organic farm",
    },
    {
      src: "/images/gallery/4.jpg",
      alt: "Sustainable agriculture and organic farming practices at Chaitanya Dham",
    },
    {
      src: "/images/gallery/5.jpg",
      alt: "Organic vegetables and herbs growing at Chaitanya Dham farm using natural methods",
    },
    {
      src: "/images/gallery/6.jpg",
      alt: "Farm-to-table organic produce at Chaitanya Dham showing fresh organic crops",
    },
    {
      src: "/images/gallery/7.jpg",
      alt: "Chemical-free organic farming at Chaitanya Dham with natural compost and cow dung manure",
    },
    {
      src: "/images/gallery/8.jpg",
      alt: "Organic farm landscape at Chaitanya Dham showcasing sustainable agriculture",
    },
    {
      src: "/images/gallery/9.jpg",
      alt: "Natural organic farming practices and crop cultivation at Chaitanya Dham",
    },
    {
      src: "/images/gallery/10.jpg",
      alt: "Organic produce harvest and farming activities at Chaitanya Dham farm",
    },
    {
      src: "/images/gallery/11.jpg",
      alt: "Sustainable organic agriculture and farm management at Chaitanya Dham",
    },
  ];

  const [api, setApi] = useState<CarouselApi>();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Auto-slide functionality
  useEffect(() => {
    if (!api || !inView) {
      return;
    }

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0); // Loop back to start
      }
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [api, inView]);

  return (
    <div className="bg-white text-foreground">
      <section className="relative min-h-[60vh] w-full flex items-center justify-center text-center p-0 bg-gradient-to-b from-white via-green-50/30 to-white py-20 md:py-32">
        {heroImage && (
          <SafeImage
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            priority
            className="object-cover -z-10 opacity-20"
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="container px-4 md:px-6 z-10 relative">
          <div className="max-w-3xl mx-auto space-y-4">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Chaitanya Dham Farm
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Located near Mandleshwar in District Khargone, in the sacred
              Narmada river valley, Chaitanya Dham is the heart of our work. .
            </p>
            <div className="mt-6">
              <OrderNowButton size="lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-headline font-bold">What We Grow</h2>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-muted-foreground">
              {produce.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          {produceImage && (
            <SafeImage
              src={produceImage.imageUrl}
              alt={produceImage.description}
              width={600}
              height={400}
              className="rounded-lg object-cover shadow-lg"
              data-ai-hint={produceImage.imageHint}
            />
          )}
        </div>
      </section>

      <section className="bg-white py-12 md:py-24">
        <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
          {practicesImage && (
            <SafeImage
              src={practicesImage.imageUrl}
              alt={practicesImage.description}
              width={600}
              height={400}
              className="rounded-lg object-cover shadow-lg"
              data-ai-hint={practicesImage.imageHint}
            />
          )}
          <div className="space-y-4">
            <h2 className="text-3xl font-headline font-bold">
              Our Organic Practices
            </h2>
            <p className="text-muted-foreground">
              We follow traditional farming methods:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              {practices.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">
              Farm to Product
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              This ensures quality control on purity, nutrition levels and
              safety hygiene in every product.
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {farmToProductSteps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center gap-4"
              >
                <div className="bg-white border-4 border-primary/20 p-4 rounded-full flex items-center justify-center shadow-md">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
                <p className="font-semibold">{step.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <OrderNowButton size="lg" />
          </div>
        </div>
      </section>

      {/* Farm Gallery Section */}
      <section
        ref={ref}
        className="py-12 md:py-24 bg-gradient-to-b from-white via-green-50/30 to-white"
      >
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl mb-4">
              Farm Gallery
            </h2>
            <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed">
              Take a visual journey through Chaitanya Dham and see our organic
              farming practices in action.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-6xl mx-auto"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {farmGalleryImages.map((image, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative aspect-video rounded-lg overflow-hidden group shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <SafeImage
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 md:left-4 bg-white/80 hover:bg-white shadow-lg" />
              <CarouselNext className="right-2 md:right-4 bg-white/80 hover:bg-white shadow-lg" />
            </Carousel>
          </motion.div>
          <div className="text-center mt-12">
            <OrderNowButton size="lg" />
          </div>
        </div>
      </section>
    </div>
  );
}
