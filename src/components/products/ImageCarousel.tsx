"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { FullScreenImageGallery } from "./FullScreenImageGallery";

interface ImageCarouselProps {
  images: string[];
  productTitle: string;
}

export function ImageCarousel({ images, productTitle }: ImageCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  if (!images || images.length === 0) {
    return (
      <div className="relative w-full max-w-sm md:max-w-md mx-auto aspect-[840/1500] max-h-[500px] md:max-h-[600px] bg-muted rounded-lg flex items-center justify-center">
        <p className="text-muted-foreground">No images available</p>
      </div>
    );
  }

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setIsGalleryOpen(true);
  };

  return (
    <>
      <div className="relative w-full">
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div
                  className="relative w-full max-w-sm md:max-w-md mx-auto aspect-[840/1500] max-h-[500px] md:max-h-[600px] overflow-hidden rounded-lg cursor-pointer group"
                  onClick={() => handleImageClick(index)}
                >
                  <Image
                    src={`/images/products/${image}`}
                    alt={`${productTitle} - Image ${index + 1}`}
                    fill
                    className="object-cover group-hover:opacity-90 transition-opacity"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/images/placeholder.jpg";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white bg-black/50 px-4 py-2 rounded-lg text-sm">
                      Click to view full screen
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {images.length > 1 && (
            <>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </>
          )}
        </Carousel>
        {images.length > 1 && (
          <div className="flex justify-center gap-2 mt-4">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all ${
                  index + 1 === current
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted-foreground/50"
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      <FullScreenImageGallery
        images={images}
        productTitle={productTitle}
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        initialIndex={selectedImageIndex}
      />
    </>
  );
}
