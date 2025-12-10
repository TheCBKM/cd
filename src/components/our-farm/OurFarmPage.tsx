import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SafeImage } from '@/components/ui/safe-image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle, Sprout, Hand, Wind, Package, ChevronsRight } from 'lucide-react';

const produce = [
  'Moringa','Bottle Gourd','Neem', 'Wheat grass', 'Curry leaves', 'Mint', 'Tulsi / Basil', 'Java plum leaves', 'Mango leaves',
  , 'Coriander', 'Spinach', 'Beetroot', 'Cucumber', 'Guava & Banana'
];

const practices = [
  'No chemical fertilizers or pesticides',
  'Use of cow dung manure and natural compost',
  'Hand harvesting',
  'Cabinet drying techniques',
  'Zero wastage approach / 100% recyclable approach',
];

const farmToProductSteps = [
    { text: 'Grown organically', icon: Sprout },
    { text: 'Handpicked at the right stage', icon: Hand },
    { text: 'Naturally dried and processed', icon: Wind },
    { text: 'Packed hygienically', icon: Package },
];

export default function OurFarmPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'our-farm-hero');
  const produceImage = PlaceHolderImages.find((img) => img.id === 'farm-produce');
  const practicesImage = PlaceHolderImages.find((img) => img.id === 'organic-practices');

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
            Located near Mandleshwar in District Khargone, in the sacred Narmada river valley, Chaitanya Dham is the heart of our work.
          .
            </p>
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
            <h2 className="text-3xl font-headline font-bold">Our Organic Practices</h2>
            <p className="text-muted-foreground">We follow traditional farming methods:</p>
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
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Farm to Product</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
            This ensures quality control on purity, nutrition levels and safety hygiene in every product.
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {farmToProductSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center gap-4">
                <div className="bg-white border-4 border-primary/20 p-4 rounded-full flex items-center justify-center shadow-md">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
                <p className="font-semibold">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
