'use client';

import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface SafeImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  'data-ai-hint'?: string;
  fallbackSrc?: string;
}

export function SafeImage({
  src,
  alt,
  width,
  height,
  fill,
  className,
  priority = false,
  'data-ai-hint': dataAiHint,
  fallbackSrc = 'https://placehold.co/600x400/13631c/F5F5DC?text=Image+Loading',
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError && imgSrc !== fallbackSrc) {
      setHasError(true);
      setImgSrc(fallbackSrc);
    }
  };

  const imageProps = {
    src: imgSrc,
    alt,
    className: cn(className),
    onError: handleError,
    priority,
    'data-ai-hint': dataAiHint,
    unoptimized: hasError, // Use unoptimized for fallback images
  };

  if (fill) {
    return (
      <Image
        {...imageProps}
        fill
        sizes="100vw"
      />
    );
  }

  return (
    <Image
      {...imageProps}
      width={width || 600}
      height={height || 400}
    />
  );
}

