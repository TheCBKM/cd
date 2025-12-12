"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const taglines = [
  "Awakening Health Naturally",
  "प्राकृतिक पद्धति से स्वस्थ जीवन",
  "स्वाद भी ! सेहत भी !!",
];

export default function RotatingTagline() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % taglines.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[4rem] md:min-h-[5rem] lg:min-h-[6rem] overflow-hidden flex items-center justify-center w-full">
      <AnimatePresence mode="wait" initial={false}>
        <motion.p
          key={currentIndex}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-headline font-bold text-center px-4 absolute"
          style={{ color: "#702a0c" }}
        >
          {taglines[currentIndex]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
