import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "full" | "icon";
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export const ChaitanyaLogo = ({
  variant = "full",
  className,
  width,
  height,
  priority = false,
}: LogoProps) => {
  // For icon variant, use a smaller logo or the same logo with smaller dimensions
  const imagePath =
    variant === "icon"
      ? "/images/chaitanya-logo-icon.png"
      : "/images/chaitanya-logo.png";

  // Default dimensions based on variant
  const defaultWidth = variant === "icon" ? 24 : 400;
  const defaultHeight = variant === "icon" ? 24 : 300;

  return (
    <Image
      src={imagePath}
      alt="The Chaitanya Group Logo"
      width={width || defaultWidth}
      height={height || defaultHeight}
      className={cn("object-contain", className)}
      priority={priority}
    />
  );
};
