"use client";

import { motion } from "framer-motion";
import { WhatsAppIcon } from "@/components/icons";
import { button3DVariants } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=919203692001&text=Namaskar%20%F0%9F%99%8F%0AI%20would%20like%20to%20know%20more%20about%20Chaitanya%20Dham.";

interface OrderNowButtonProps {
  size?: "sm" | "default" | "lg";
  className?: string;
  variant?: "default" | "outline" | "ghost";
  showIcon?: boolean;
  children?: React.ReactNode;
}

export function OrderNowButton({
  size = "default",
  className,
  variant = "default",
  showIcon = true,
  children,
}: OrderNowButtonProps) {
  const buttonContent = children || "Order Now";

  if (variant === "default") {
    return (
      <motion.div
        variants={button3DVariants}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        className="perspective-1000 inline-block"
      >
        <Button
          asChild
          size={size}
          className={cn(
            "bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg shadow-[#25D366]/30 transform-3d",
            className
          )}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Order Now on WhatsApp"
          >
            {showIcon && <WhatsAppIcon className="w-4 h-4 md:w-5 md:h-5" />}
            {buttonContent}
          </a>
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={button3DVariants}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      className="perspective-1000 inline-block"
    >
      <Button
        asChild
        size={size}
        variant={variant}
        className={cn(
          "border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white transform-3d",
          className
        )}
      >
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Order Now on WhatsApp"
        >
          {showIcon && <WhatsAppIcon className="w-4 h-4 md:w-5 md:h-5" />}
          {buttonContent}
        </a>
      </Button>
    </motion.div>
  );
}
