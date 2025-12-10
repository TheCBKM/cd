"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import RotatingTagline from "@/components/landing/RotatingTagline";
import { ChaitanyaLogo } from "@/components/ui/logo";
import {
  fadeInUp,
  textReveal,
  button3DVariants,
  staggerContainer,
} from "@/lib/animations";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full flex items-center justify-center bg-gradient-to-b from-white via-green-50/30 to-white py-20 md:py-32">
      {/* Subtle Background Pattern with Logo */}
      <div className="absolute inset-0 opacity-[0.5] flex items-center justify-center">
        {/* <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" /> */}
        {/* <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" /> */}
        {/* Logo in center */}
        <ChaitanyaLogo className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto space-y-6 text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Rotating Tagline - Now the main hero text */}
          <div className="flex items-center justify-center w-full">
            <RotatingTagline />
          </div>

          {/* Description */}
          <motion.p
            className="text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            From our organic farm at Chaitanya Dham to your kitchen, Your heart –
            pure herbal powders, healthy smoothies, chutneys, Premium cold
            pressed oils and eco-friendly cow dung products for a healthier
            lifestyle.
          </motion.p>

          {/* CTA Buttons - Green Theme */}
          <motion.div
            className="flex flex-col gap-4 min-[400px]:flex-row justify-center mt-10"
            variants={fadeInUp}
          >
            <motion.div
              variants={button3DVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              className="perspective-1000"
            >
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-accent text-white shadow-lg shadow-primary/30 transform-3d text-lg px-8 py-6"
              >
                <Link href="/products">Explore Products</Link>
              </Button>
            </motion.div>

            <motion.div
              variants={button3DVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              className="perspective-1000"
            >
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white transform-3d text-lg px-8 py-6"
              >
                <a
                  href="https://wa.me/919203692001"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact / WhatsApp
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
