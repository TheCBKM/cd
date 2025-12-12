"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FullScreenImageGalleryProps {
  images: string[];
  productTitle: string;
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}

export function FullScreenImageGallery({
  images,
  productTitle,
  isOpen,
  onClose,
  initialIndex = 0,
}: FullScreenImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex, isOpen]);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "ArrowLeft") {
        handlePrevious();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handlePrevious, handleNext, onClose]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-full p-0 bg-black/95 border-none">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-50 text-white hover:bg-white/20 rounded-full"
            onClick={onClose}
            aria-label="Close gallery"
          >
            <X className="h-6 w-6" />
          </Button>

          {/* Previous Button */}
          {images.length > 1 && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 z-50 text-white hover:bg-white/20 rounded-full"
              onClick={handlePrevious}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
          )}

          {/* Image */}
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <div className="relative w-full h-full max-w-full max-h-full flex items-center justify-center">
              <Image
                src={`/images/products/${images[currentIndex]}`}
                alt={`${productTitle} - Image ${currentIndex + 1}`}
                fill
                className="object-contain"
                sizes="95vw"
                priority
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/images/placeholder.jpg";
                }}
              />
            </div>
          </div>

          {/* Next Button */}
          {images.length > 1 && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 z-50 text-white hover:bg-white/20 rounded-full"
              onClick={handleNext}
              aria-label="Next image"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          )}

          {/* Image Counter */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          )}

          {/* Thumbnail Navigation */}
          {images.length > 1 && images.length <= 10 && (
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-50 flex gap-2 max-w-[90vw] overflow-x-auto pb-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`relative w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentIndex
                      ? "border-white scale-110"
                      : "border-white/30 opacity-60 hover:opacity-100"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                >
                  <Image
                    src={`/images/products/${image}`}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
