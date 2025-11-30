import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

  return (
    <section className="relative h-[calc(100vh-4rem)] w-full flex items-center justify-center text-center p-0 overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          priority
          className="object-cover -z-10 scale-105 animate-zoom-in"
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50 -z-10" />
      <div className="container px-4 md:px-6 z-10">
        <div className="max-w-3xl mx-auto space-y-4 animate-fade-up">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Chaitanya Enterprises
          </h1>
          <p className="text-2xl text-gray-200 md:text-3xl font-headline">
            Awakening Health Naturally
          </p>
          <p className="text-lg text-gray-200 md:text-xl">
            From our organic farm at Chaitanyadham to your kitchen – pure herbal powders, healthy smoothies, chutneys and eco-friendly cow dung products for a healthier lifestyle.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground transform transition-transform duration-200 hover:scale-102">
              <Link href="/products">Explore Products</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary transform transition-transform duration-200 hover:scale-102">
              <Link href="#contact">Contact / WhatsApp</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
