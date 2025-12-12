import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Goal, Users } from "lucide-react";
import { ChaitanyaLogo } from "@/components/ui/logo";
import { SafeImage } from "@/components/ui/safe-image";
import { teamMembers } from "@/lib/data";

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <ChaitanyaLogo variant="icon" className="h-12 w-12" />
            <h1 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">
              About The Chaitanya Group
            </h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The Chaitanya Group is dedicated to Chemical-free farming, value
              addition of farm produce, and promoting a healthy lifestyle
              through natural products.
            </p>
            <p className="max-w-[700px] text-foreground italic text-lg">
              Our journey began with a simple thought – to provide pure,
              affordable, and natural health foods to our families and
              communities.
            </p>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              To consistently offer pure, traceable, and responsibly sourced
              farm produce, while fostering community awareness about natural
              living and regenerative agriculture.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Target className="w-10 h-10 text-primary" />
                <h2 className="text-3xl font-headline font-bold">Our Vision</h2>
              </div>
              <p className="text-muted-foreground text-lg">
                To inspire a world where mindful living, regenerative farming,
                and evidence-based wellness practices work together for the
                upliftment of individuals and the planet.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Goal className="w-10 h-10 text-primary" />
                <h2 className="text-3xl font-headline font-bold">
                  Our Mission
                </h2>
              </div>
              <p className="text-muted-foreground text-lg">
                Our mission is to create trustworthy natural wellness solutions
                by integrating research-backed nutrition, sustainable
                agriculture, and the spiritual principles of purity, harmony,
                and service.
              </p>
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
            {teamMembers.map((member, index) => (
              <Card
                key={member.name}
                className="text-center flex flex-col bg-white border border-border shadow-sm hover:shadow-lg transition-shadow"
              >
                <CardHeader className="pb-8">
                  <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mx-auto rounded-full overflow-hidden border-4 border-primary/50 shadow-lg mt-4">
                    <SafeImage
                      src={`/images/profile/${index + 1}.png`}
                      alt={member.name}
                      width={224}
                      height={224}
                      className="w-full h-full object-cover object-top"
                      priority
                    />
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center gap-2 flex-grow">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold font-headline">
                      {member.name}
                    </h3>
                    <p className="text-sm font-semibold text-primary">
                      {member.role}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {member.bio}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mx-auto max-w-3xl mt-12 text-center">
            <p className="text-muted-foreground text-lg">
              Together, Prerna, Sanjeev, and Shriya combine creativity, business
              acumen, and financial discipline to drive Chaitanya Enterprises
              forward. United by a shared belief that healthy food should also
              be delicious, they are committed to producing chemical-free,
              natural, and flavourful food items crafted from their own farm’s
              produce.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
