'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { teamMembers } from '@/lib/data';
import { Users } from 'lucide-react';
import { card3DVariants, staggerContainer, fadeInUp, icon3DVariants } from '@/lib/animations';

export default function Team() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="team" className="bg-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 animate-gradient-rotate opacity-50" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">
              Meet Our Team
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The Chaitanya Group is formed by passionate individuals from diverse backgrounds.
            </p>
          </div>
        </div>
        
        <motion.div
          ref={ref}
          className="mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:max-w-5xl"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={member.name}
              member={member}
              index={index}
            />
          ))}
        </motion.div>
        
        <motion.div
          className="mx-auto max-w-3xl mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div
            variants={icon3DVariants}
            whileHover="hover"
            className="perspective-1000 inline-block mb-4"
          >
            <Users className="mx-auto h-8 w-8 text-primary" />
          </motion.div>
          <motion.p
            className="text-muted-foreground"
            variants={fadeInUp}
          >
            Together, we aim to improve the health of our near and dear ones and common people in India through natural, organic solutions.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function TeamMemberCard({
  member,
  index,
}: {
  member: typeof teamMembers[0];
  index: number;
}) {
  const initials = member.name.split(' ').map(n => n[0]).join('');

  return (
    <motion.div
      variants={card3DVariants}
      custom={index}
      className="perspective-1000 preserve-3d"
    >
      <Card className="text-center flex flex-col h-full transform-3d backface-hidden bg-white border border-border shadow-sm hover:shadow-lg transition-all duration-300 group">
        <CardHeader>
          <motion.div
            className="relative inline-block"
            whileHover={{ scale: 1.1, rotateY: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Avatar className="w-20 h-20 border-4 border-primary/50 mx-auto shadow-lg perspective-1000">
              <AvatarFallback className="bg-gradient-to-br from-primary/20 to-accent/20 text-primary font-headline text-2xl">
                {initials}
              </AvatarFallback>
            </Avatar>
            <motion.div
              className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center gap-2 flex-grow">
          <motion.div
            className="space-y-1"
            variants={fadeInUp}
          >
            <h3 className="text-xl font-bold font-headline">{member.name}</h3>
            <p className="text-sm font-medium text-primary">{member.role}</p>
            <p className="text-sm text-muted-foreground">{member.bio}</p>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
