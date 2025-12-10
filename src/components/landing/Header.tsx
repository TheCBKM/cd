"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { icon3DVariants } from "@/lib/animations";
import { ChaitanyaLogo } from "@/components/ui/logo";

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NavLinks = ({
    className,
    onLinkClick,
  }: {
    className?: string;
    onLinkClick?: () => void;
  }) => (
    <nav className={cn("flex items-center gap-4 lg:gap-6", className)}>
      {navLinks.map((link, index) => {
        const isActive = pathname === link.href;
        return (
          <motion.div
            key={link.name}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              href={link.href}
              onClick={onLinkClick}
              className={cn(
                "text-sm font-medium transition-all duration-300 relative group",
                isActive ? "text-primary font-bold" : "hover:text-primary"
              )}
            >
              {link.name}
              {isActive && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  layoutId="activeTab"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          </motion.div>
        );
      })}
    </nav>
  );

  return (
    <motion.header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm border-border shadow-md"
          : "bg-white border-border"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <div className="container flex h-16 items-center px-4 md:px-6">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/"
            className="mr-6 flex items-center gap-2 perspective-1000"
          >
            <motion.div
              variants={icon3DVariants}
              whileHover="hover"
              className="relative"
            >
              <ChaitanyaLogo variant="icon" className="h-10 w-10" />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-headline text-lg font-bold text-foreground">
                The Chaitanya Group
              </span>
              <span className="text-xs text-muted-foreground font-normal">
                By Chaitanya Enterprises
              </span>
            </div>
          </Link>
        </motion.div>

        <div className="hidden md:flex flex-1 items-center justify-end">
          <NavLinks />
        </div>

        <div className="flex flex-1 items-center justify-end md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button variant="ghost" size="icon">
                  <AnimatePresence mode="wait">
                    {isMobileMenuOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X className="h-6 w-6" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu className="h-6 w-6" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </motion.div>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] perspective-1000"
            >
              <motion.div
                className="flex flex-col gap-6 p-6"
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2"
                >
                  <motion.div
                    whileHover={{ rotateY: 180 }}
                    transition={{ duration: 0.5 }}
                    className="perspective-1000"
                  >
                    <ChaitanyaLogo variant="icon" className="h-6 w-6" />
                  </motion.div>
                  <div className="flex flex-col">
                    <span className="font-headline text-lg font-bold">
                      The Chaitanya Group
                    </span>
                    <span className="text-xs text-muted-foreground font-normal">
                      By Chaitanya Enterprises
                    </span>
                  </div>
                </Link>
                <nav className="grid gap-4">
                  {navLinks.map((link, index) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <SheetClose asChild>
                          <Link
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={cn(
                              "text-lg font-medium transition-all duration-300 relative block py-2",
                              isActive
                                ? "text-primary font-bold"
                                : "hover:text-primary"
                            )}
                          >
                            {link.name}
                            {isActive && (
                              <motion.div
                                className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r"
                                layoutId="mobileActiveTab"
                                transition={{
                                  type: "spring",
                                  stiffness: 380,
                                  damping: 30,
                                }}
                              />
                            )}
                          </Link>
                        </SheetClose>
                      </motion.div>
                    );
                  })}
                </nav>
              </motion.div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
