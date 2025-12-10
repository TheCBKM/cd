"use client";

import { useActionState, useRef, useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { suggestProducts, type FormState } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Wand2, AlertTriangle, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  fadeInUp,
  icon3DVariants,
  button3DVariants,
  scaleIn,
} from "@/lib/animations";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SafeImage } from "@/components/ui/safe-image";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <motion.div
      variants={button3DVariants}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      className="perspective-1000"
    >
      <Button
        type="submit"
        disabled={pending}
        className="w-full bg-primary hover:bg-accent text-white transform-3d shadow-lg shadow-primary/20"
      >
        {pending ? (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              <Wand2 className="mr-2 h-4 w-4" />
            </motion.div>
            Thinking...
          </>
        ) : (
          <>
            <Wand2 className="mr-2 h-4 w-4" />
            Get Suggestions
          </>
        )}
      </Button>
    </motion.div>
  );
}

interface GalleryImage {
  src: string;
  alt: string;
}

interface HealthSuggestionToolProps {
  galleryImages?: GalleryImage[];
}

export default function HealthSuggestionTool({
  galleryImages = [],
}: HealthSuggestionToolProps) {
  const initialState: FormState = { message: "" };
  const [state, formAction] = useActionState(suggestProducts, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (state.message && state.issues) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: state.issues.join(", "),
      });
    } else if (state.message && state.products) {
      // Success is handled by displaying the card, no toast needed unless for confirmation
    } else if (state.message && !state.products && !state.issues) {
      toast({
        title: "Notice",
        description: state.message,
      });
    }

    if (state.message && state.products) {
      formRef.current?.reset();
    }
  }, [state, toast]);

  return (
    <section
      id="ai-tool"
      className="bg-white relative overflow-hidden py-16 md:py-20 lg:py-24"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          className="mx-auto max-w-3xl grid gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div className="space-y-4 text-center" variants={fadeInUp}>
            <motion.div
              variants={icon3DVariants}
              whileHover="hover"
              className="perspective-1000 inline-block"
            >
              <Wand2 className="mx-auto h-12 w-12 text-primary" />
            </motion.div>
            <h2 className="text-3xl font-headline font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              AI-Powered Health Assistant
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Describe your health needs, and our AI will suggest the best The
              Chaitanya Group products for you.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="perspective-1000">
            <Card className="transform-3d backface-hidden bg-white border border-border shadow-sm hover:shadow-lg transition-all duration-300 group">
              <CardHeader>
                <CardTitle>Get Personalized Suggestions</CardTitle>
                <CardDescription>
                  For example: "I feel tired in the afternoons and want a
                  natural energy boost. I prefer something I can drink."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form ref={formRef} action={formAction} className="space-y-4">
                  <div className="grid w-full gap-2">
                    <Label htmlFor="healthNeeds">Your Health Needs</Label>
                    <motion.div
                      className="relative"
                      animate={isFocused ? { scale: 1.02 } : { scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Textarea
                        id="healthNeeds"
                        name="healthNeeds"
                        placeholder="Tell us about your wellness goals..."
                        rows={4}
                        required
                        defaultValue={state.fields?.healthNeeds}
                        className="rounded-lg transition-all duration-300 focus:ring-2 focus:ring-primary/50 focus:shadow-lg focus:shadow-primary/20"
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                      />
                      {isFocused && (
                        <motion.div
                          className="absolute inset-0 border-2 border-primary/50 rounded-lg pointer-events-none"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                        />
                      )}
                    </motion.div>
                  </div>
                  <SubmitButton />
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <AnimatePresence mode="wait">
            {state?.products && (
              <motion.div
                variants={scaleIn}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="perspective-1000"
              >
                <Card className="bg-white border border-border transform-3d shadow-lg shadow-primary/10">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="perspective-1000"
                      >
                        <CheckCircle2 className="text-primary" />
                      </motion.div>
                      Here are your suggestions:
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <motion.div
                      className="prose prose-sm max-w-full text-foreground"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <p>{state.products}</p>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Image Gallery Slider */}
          {galleryImages && galleryImages.length > 0 && (
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8"
            >
              <Card className="transform-3d backface-hidden bg-white border border-border shadow-sm hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle>Gallery</CardTitle>
                  <CardDescription>
                    Browse through our collection of images
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Carousel
                    opts={{
                      align: "start",
                      loop: true,
                    }}
                    className="w-full"
                  >
                    <CarouselContent className="-ml-2 md:-ml-4">
                      {galleryImages.map((image, index) => (
                        <CarouselItem
                          key={index}
                          className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                        >
                          <div className="relative aspect-video rounded-lg overflow-hidden group">
                            <SafeImage
                              src={image.src}
                              alt={image.alt}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2 md:left-4" />
                    <CarouselNext className="right-2 md:right-4" />
                  </Carousel>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
