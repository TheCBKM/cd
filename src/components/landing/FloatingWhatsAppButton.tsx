"use client";

import { motion } from "framer-motion";
import { WhatsAppIcon } from "@/components/icons";

export default function FloatingWhatsAppButton() {
  return (
    <motion.a
      href="https://api.whatsapp.com/send?phone=919203692001&text=Namaskar%20%F0%9F%99%8F%0AI%20would%20like%20to%20know%20more%20about%20Chaitanya%20Dham."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20BA5A] text-white w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/40 z-50 group"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        y: [0, -10, 0],
      }}
      transition={{
        scale: { delay: 0.5, duration: 0.3 },
        opacity: { delay: 0.5, duration: 0.3 },
        y: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      whileHover={{
        scale: 1.1,
        boxShadow: "0 20px 40px rgba(37, 211, 102, 0.4)",
      }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Pulsing ring animation */}
      <motion.div
        className="absolute inset-0 rounded-full bg-[#25D366] opacity-75"
        animate={{
          scale: [1, 1.5, 1.5],
          opacity: [0.75, 0, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />

      {/* Icon */}
      <motion.div
        className="relative z-10"
        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
        transition={{ duration: 0.5 }}
      >
        <WhatsAppIcon className="w-8 h-8 md:w-10 md:h-10" />
      </motion.div>

      {/* Tooltip on hover */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Chat with us on WhatsApp
        <div className="absolute left-full top-1/2 -translate-y-1/2 -translate-x-1 border-4 border-transparent border-l-gray-900" />
      </div>
    </motion.a>
  );
}
