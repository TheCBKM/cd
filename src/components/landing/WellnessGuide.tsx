'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { wellnessGuideContent } from '@/lib/data';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function WellnessGuide() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="wellness" className="bg-white relative overflow-hidden py-16 md:py-20 lg:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-3">
            <h2 className="text-3xl font-headline font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Your Guide to Wellness
            </h2>
            <p className="max-w-2xl text-muted-foreground text-lg md:text-xl">
              Learn how to make the most of our Natural products with these simple guidelines and important information.
            </p>
          </div>
        </motion.div>
        
        <motion.div
          ref={ref}
          className="mx-auto max-w-3xl perspective-1000"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Accordion type="single" collapsible className="w-full">
            {wellnessGuideContent.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                custom={index}
              >
                <AccordionItem
                  value={`item-${index + 1}`}
                  className="mb-4 border border-border rounded-lg overflow-hidden transform-3d bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-lg font-headline hover:no-underline text-left px-6 py-4 perspective-1000">
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.title}
                    </motion.span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground px-6 pb-4">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.content}
                    </motion.p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
