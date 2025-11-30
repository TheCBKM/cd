import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Leaf, Target, Goal, Users } from 'lucide-react';

const founders = [
  {
    name: 'Mrs. Prerna Kolhatkar',
    bio: 'Music and social services background, active in community health and awareness.',
    initials: 'PK',
  },
  {
    name: 'Mr. Sanjeev Joshi',
    bio: 'MBA, corporate leadership experience as COO in fibre optics sector, founder of Fincare for Life, passionate about wellness and organic living.',
    initials: 'SJ',
  },
  {
    name: 'Ms. Shriya Kavishwar',
    bio: 'Pursuing CA, strong financial background, managing finances for multiple clients.',
    initials: 'SK',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-background">
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <Leaf className="h-12 w-12 text-accent" />
            <h1 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">
              About Chaitanya Enterprises
            </h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Chaitanya Enterprises is a part of the Chaitanya Group, dedicated to organic farming, value addition of farm produce, and promoting a healthy lifestyle through natural products.
            </p>
            <p className="max-w-[700px] text-foreground italic text-lg">
                Our journey began with a simple thought – to provide pure, affordable, and natural health foods to our families and communities.
            </p>
             <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Today, we offer herbal powders, smoothies, chutneys, pickles, masalas, dry snacks, and eco-friendly cow dung products.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-card py-12 md:py-24">
        <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2">
                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <Target className="w-10 h-10 text-primary" />
                        <h2 className="text-3xl font-headline font-bold">Our Vision</h2>
                    </div>
                    <p className="text-muted-foreground text-lg">
                        To improve the health of common people in India by offering natural, organic, and traditional products that support daily wellness.
                    </p>
                </div>
                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <Goal className="w-10 h-10 text-primary" />
                        <h2 className="text-3xl font-headline font-bold">Our Mission</h2>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground text-lg">
                        <li>Promote organic farming</li>
                        <li>Provide pure and chemical-free food products</li>
                        <li>Support gut health and weight management</li>
                        <li>Encourage eco-friendly and traditional living</li>
                    </ul>
                </div>
            </div>
        </div>
      </section>
      
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <Users className="h-12 w-12 text-primary" />
                <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">
                Our Founders
                </h2>
            </div>
            <div className="mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-3 lg:max-w-5xl">
            {founders.map((founder) => (
                <Card key={founder.name} className="text-center flex flex-col">
                <CardHeader>
                    <Avatar className="w-20 h-20 border-4 border-primary/50 mx-auto">
                        <AvatarFallback className="bg-primary/20 text-primary font-headline text-2xl">
                        {founder.initials}
                        </AvatarFallback>
                    </Avatar>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center gap-2 flex-grow">
                    <div className="space-y-1">
                    <h3 className="text-xl font-bold font-headline">{founder.name}</h3>
                    <p className="text-sm text-muted-foreground">{founder.bio}</p>
                    </div>
                </CardContent>
                </Card>
            ))}
            </div>
            <div className="mx-auto max-w-3xl mt-12 text-center">
                <p className="text-muted-foreground text-lg">
                    Their combined expertise in social service, corporate management, and finance drives Chaitanya Enterprises with purpose and commitment.
                </p>
            </div>
        </div>
      </section>
    </div>
  );
}
