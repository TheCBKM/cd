import Image from 'next/image';
import { journeySteps } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

export default function FarmJourney() {
  return (
    <section id="journey" className="bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">From Our Farm to You</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              All leaves and farm produce are grown organically at Chaitanyadham, handpicked, naturally dried, processed hygienically and packed with care. We ensure purity, freshness and nutritional value in every product.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />
          {journeySteps.map((step, index) => {
            const journeyImage = PlaceHolderImages.find((img) => img.id === step.image);
            const isEven = index % 2 === 0;

            return (
              <div key={step.title} className="relative mb-12 md:mb-24">
                <div className="md:absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-background border-4 border-card p-2 rounded-full hidden md:flex">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <div
                  className={cn(
                    'flex flex-col md:flex-row items-center gap-6 md:gap-12 w-full',
                    !isEven && 'md:flex-row-reverse'
                  )}
                >
                  <div className="w-full md:w-5/12">
                    {journeyImage && (
                      <Image
                        src={journeyImage.imageUrl}
                        alt={step.title}
                        width={600}
                        height={400}
                        className="rounded-lg object-cover shadow-lg"
                        data-ai-hint={journeyImage.imageHint}
                      />
                    )}
                  </div>
                  <div className="w-full md:w-5/12 space-y-2 text-center md:text-left">
                    <div className="flex md:hidden items-center justify-center gap-4 mb-4">
                        <div className="bg-background border-4 border-card p-2 rounded-full flex">
                            <step.icon className="w-8 h-8 text-primary" />
                        </div>
                    </div>
                    <h3 className="text-2xl font-headline font-bold">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
