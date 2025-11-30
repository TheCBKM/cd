import { Leaf, HeartPulse, Recycle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Leaf,
    title: 'Organic Farming',
    description: 'Grown at Chaitanyadham near the Narmada river using natural farming methods – no chemicals, no pesticides.',
  },
  {
    icon: HeartPulse,
    title: 'Holistic Health',
    description: 'Smoothies and supplements specially curated for gut health, weight management, diabetic and thyroid support.',
  },
  {
    icon: Recycle,
    title: 'Eco-Friendly Living',
    description: 'Cow dung cakes, diya, incense sticks and fertilizers that promote traditional, sustainable living.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-background">
      <div className="container px-4 md:px-6 py-12 md:py-24">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
                <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Why Choose Us?</h2>
            </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 lg:grid-cols-3 lg:gap-12">
            {features.map((feature) => (
                <Card key={feature.title} className="text-center">
                    <CardHeader className="items-center">
                        <div className="bg-primary/10 p-3 rounded-full">
                            <feature.icon className="w-8 h-8 text-primary" />
                        </div>
                        <CardTitle className="font-headline mt-4">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
