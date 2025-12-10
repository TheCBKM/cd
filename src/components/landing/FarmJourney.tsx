'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { journeySteps } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import { SafeImage } from '@/components/ui/safe-image';
import { fadeInUp, scrollReveal, button3DVariants, staggerContainer } from '@/lib/animations';

export default function FarmJourney() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="journey" className="bg-white relative overflow-hidden py-16 md:py-20 lg:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-3">
            <h2 className="text-3xl font-headline font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              From Our Farm to You
            </h2>
            <p className="max-w-2xl text-muted-foreground text-lg md:text-xl">
              All leaves and farm produce are grown organically at Chaitanya Dham, handpicked, naturally dried, processed hygienically and packed with care. We ensure purity, freshness and nutritional value in every product.
            </p>
          </div>
        </motion.div>
        
        <motion.div
          ref={ref}
          className="relative max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {journeySteps.map((step, index) => {
            const journeyImage = PlaceHolderImages.find((img) => img.id === step.image);

            return (
              <JourneyStep
                key={step.title}
                step={step}
                journeyImage={journeyImage}
                index={index}
                inView={inView}
              />
            );
          })}
        </motion.div>
        
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.div
            variants={button3DVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            className="perspective-1000 inline-block"
          >
            <Button asChild size="lg" className="bg-primary hover:bg-accent text-white transform-3d shadow-lg shadow-primary/20">
              <Link href="/our-farm">
                Learn More About Our Farm
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function JourneyStep({
  step,
  journeyImage,
  index,
  inView,
}: {
  step: typeof journeySteps[0];
  journeyImage: typeof PlaceHolderImages[0] | undefined;
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      className="relative mb-12 md:mb-16 last:mb-0"
      variants={scrollReveal}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay: index * 0.15 }}
    >
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Numbered Step Badge - FinCareForLife Style */}
        <div className="flex-shrink-0">
          <motion.div
            className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold shadow-lg"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            {index + 1}
          </motion.div>
        </div>

        {/* Content */}
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <step.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-headline font-bold text-foreground">
              {step.title}
            </h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            {step.description}
          </p>
        </div>

        {/* Image */}
        {journeyImage && (
          <motion.div
            className="w-full md:w-80 flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="rounded-lg overflow-hidden shadow-md">
              <SafeImage
                src={journeyImage.imageUrl}
                alt={step.title}
                width={600}
                height={400}
                className="object-cover w-full h-48 md:h-56"
                data-ai-hint={journeyImage.imageHint}
              />
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
