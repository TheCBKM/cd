import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { detailedProducts } from '@/lib/data';
import { CheckCircle } from 'lucide-react';

export default function ProductsPage() {
  return (
    <div className="bg-white text-foreground">
      <section className="py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">
              Our Products
            </h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore our full range of organic, homemade, and eco-friendly products, made with the purest ingredients from our farm.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12">
            {detailedProducts.map((category) => (
              <div key={category.title}>
                <h2 className="text-3xl font-headline font-bold mb-2">{category.title}</h2>
                <p className="text-muted-foreground mb-6 text-lg">{category.description}</p>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {category.items.map((item, index) => (
                    <Card key={index} className="flex flex-col bg-white border border-border shadow-sm hover:shadow-lg transition-shadow">
                      <CardHeader>
                        {item.title && <CardTitle className="text-xl font-headline">{item.title}</CardTitle>}
                        {item.description && <CardDescription>{item.description}</CardDescription>}
                      </CardHeader>
                      <CardContent className="flex-grow">
                        {item.subItems && (
                           <ul className="space-y-2">
                           {item.subItems.map((subItem, subIndex) => (
                             <li key={subIndex} className="flex items-start gap-3">
                               <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                               <span className="text-muted-foreground">{subItem}</span>
                             </li>
                           ))}
                         </ul>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
