import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { products } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ProductCatalog() {
  return (
    <section id="products" className="bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Our Organic Offerings</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover our range of 100% organic and eco-friendly products, crafted with care to bring you the best of nature.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          {products.map((product) => {
            const productImage = PlaceHolderImages.find((img) => img.id === product.image);
            return (
              <Card key={product.name} className="group overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col">
                <CardHeader className="flex-row items-center gap-4">
                  <product.icon className="w-8 h-8 text-accent" />
                  <CardTitle className="font-headline">{product.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  {productImage && (
                    <div className="overflow-hidden rounded-lg mb-4">
                        <Image
                            src={productImage.imageUrl}
                            alt={product.name}
                            width={600}
                            height={400}
                            className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
                            data-ai-hint={productImage.imageHint}
                        />
                    </div>
                  )}
                  <p className="text-muted-foreground flex-grow">{product.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="text-center">
            <Button size="lg" asChild>
                <Link href="/products">
                    View All Products
                    <ArrowRight className="ml-2" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
