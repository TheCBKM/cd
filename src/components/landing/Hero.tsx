"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import RotatingTagline from "@/components/landing/RotatingTagline";
import { ChaitanyaLogo } from "@/components/ui/logo";
import { OrderNowButton } from "@/components/ui/order-now-button";
import { ChevronDown } from "lucide-react";
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
      <div className="absolute inset-0 opacity-[0.20] flex items-center justify-center">
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
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-bold"
            style={{ color: "#180a80" }}
            variants={fadeInUp}
          >
            From our farm at Chaitanya Dham to your kitchen, Your heart
            – pure herbal powders, healthy NutriGreens, chutneys, Premium cold
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

            <OrderNowButton size="lg" className="text-lg px-8 py-6" />
          </motion.div>

          {/* Scroll Down Arrow */}
          <motion.div
            className="flex justify-center mt-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            variants={fadeInUp}
          >
            <motion.a
              href="#why-choose-us"
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-s font-medium text-center whitespace-nowrap">
                Scroll to learn more
              </span>
              <ChevronDown className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
