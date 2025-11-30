import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { teamMembers } from '@/lib/data';
import { Users } from 'lucide-react';

export default function Team() {
  return (
    <section id="team" className="bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Meet Our Team</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Chaitanya Enterprises is formed by passionate individuals from diverse backgrounds.
            </p>
          </div>
        </div>
        <div className="mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:max-w-5xl">
          {teamMembers.map((member) => (
            <Card key={member.name} className="text-center flex flex-col">
              <CardHeader>
                  <Avatar className="w-20 h-20 border-4 border-primary/50 mx-auto">
                    <AvatarFallback className="bg-primary/20 text-primary font-headline text-2xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center gap-2 flex-grow">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold font-headline">{member.name}</h3>
                  <p className="text-sm font-medium text-primary">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mx-auto max-w-3xl mt-12 text-center">
            <Users className="mx-auto h-8 w-8 text-primary mb-4" />
            <p className="text-muted-foreground">
                Together, we aim to improve the health of our near and dear ones and common people in India through natural, organic solutions.
            </p>
        </div>
      </div>
    </section>
  );
}
