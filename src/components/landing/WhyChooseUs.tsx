"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Leaf, HeartPulse, Recycle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  card3DVariants,
  staggerContainer,
  icon3DVariants,
  fadeInUp,
} from "@/lib/animations";

const features = [
  {
    icon: Leaf,
    title: "Chemical-free Farming",
    description:
      "Grown at Chaitanya Dham in the Narmada valley, near Mandleshwar; using natural farming methods – no chemicals, no pesticides.",
  },
  {
    icon: HeartPulse,
    title: "Holistic Health",
    description:
      "NutriGreens and supplements specially curated for gut health improvements, toxin removal, full of micro nutrients and weight management.",
  },
  {
    icon: Recycle,
    title: "Eco-Friendly Living",
    description:
      "Cow dung cakes, Homa sticks of natural fragrances and fertilisers that promote traditional, sustainable living.",
  },
];

export default function WhyChooseUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="why-choose-us"
      className="bg-white relative overflow-hidden py-16 md:py-20 lg:py-24"
    >
      <div className="container px-5 sm:px-6 md:px-8">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-3">
            <h2 className="text-3xl font-headline font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Why Choose Us?
            </h2>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          className="mx-auto grid max-w-5xl items-start gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-12"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  return (
    <motion.div
      variants={card3DVariants}
      custom={index}
      className="perspective-1000 preserve-3d"
    >
      <Card className="text-center h-full transform-3d backface-hidden bg-white border border-border shadow-sm hover:shadow-lg transition-all duration-300 group">
        <CardHeader className="items-center pb-3">
          <motion.div
            className="bg-primary/10 p-4 rounded-full mx-auto perspective-1000 group-hover:bg-primary/20 transition-colors"
            variants={icon3DVariants}
            whileHover="hover"
          >
            <feature.icon className="w-8 h-8 text-primary" />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <CardTitle className="font-headline mt-4 text-foreground">
              {feature.title}
            </CardTitle>
          </motion.div>
        </CardHeader>
        <CardContent>
          <motion.p
            className="text-muted-foreground leading-relaxed"
            variants={fadeInUp}
          >
            {feature.description}
          </motion.p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
