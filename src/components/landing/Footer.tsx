"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { Mail, MapPin, Twitter, Instagram, Facebook } from "lucide-react";
import { WhatsAppIcon } from "../icons";
import { fadeInUp, staggerContainer, icon3DVariants } from "@/lib/animations";
import { ChaitanyaLogo } from "@/components/ui/logo";

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/thechaitanyagroup/",
    },
  ];

  return (
    <footer
      id="contact"
      className="bg-white border-t border-border relative overflow-hidden"
    >
      <div className="container px-4 md:px-6 py-12">
        <motion.div
          ref={ref}
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="space-y-4" variants={fadeInUp}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/" className="flex items-center gap-2">
                <motion.div
                  variants={icon3DVariants}
                  whileHover="hover"
                  className="perspective-1000"
                >
                  <ChaitanyaLogo variant="icon" className="h-6 w-6" />
                </motion.div>
                <span className="font-headline text-lg font-bold text-foreground">
                  The Chaitanya Group
                </span>
              </Link>
            </motion.div>
            <p className="text-muted-foreground text-sm">
              Pure, organic, and eco-friendly products from the heart of nature.
            </p>
          </motion.div>

          <motion.div className="space-y-4" variants={fadeInUp}>
            <h4 className="font-headline text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="perspective-1000"
                >
                  <WhatsAppIcon className="w-4 h-4 text-primary" />
                </motion.div>
                <motion.a
                  href="https://api.whatsapp.com/send?phone=919203692001&text=Namaskar%20%F0%9F%99%8F%0AI%20would%20like%20to%20know%20more%20about%20Chaitanya%20Dham."
                  className="text-muted-foreground hover:text-foreground"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  (+91) 9203692001
                </motion.a>
              </li>
              <li className="flex items-center gap-2">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="perspective-1000"
                >
                  <Mail className="w-4 h-4 text-primary" />
                </motion.div>
                <motion.a
                  href="mailto:info@thechaitanyagroup.com"
                  className="text-muted-foreground hover:text-foreground"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  info@thechaitanyagroup.com
                </motion.a>
              </li>
            </ul>
          </motion.div>

          <motion.div className="space-y-4" variants={fadeInUp}>
            <h4 className="font-headline text-lg font-semibold">Visit Us</h4>
            <address className="not-italic text-sm space-y-2">
              <div className="flex items-start gap-2">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  transition={{ duration: 0.2 }}
                  className="perspective-1000"
                >
                  <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                </motion.div>
                <span className="text-muted-foreground">
                  The Chaitanya Group
                  <br />
                  Chaitanya Dham, Mandleshwar
                  <br />
                  Teh: Maheshwar, Dist: Khargone (MP)
                  <br />
                  451221
                </span>
              </div>
            </address>
          </motion.div>

          <motion.div className="space-y-4" variants={fadeInUp}>
            <h4 className="font-headline text-lg font-semibold">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="text-muted-foreground hover:text-primary transition-colors perspective-1000"
                  whileHover={{
                    scale: 1.2,
                    rotateY: 360,
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                >
                  <social.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 text-center text-muted-foreground text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p>
            Visitors are welcome by prior appointment. Come experience organic
            farming and natural living at Chaitanya Dham.
          </p>
        </motion.div>

        <motion.div
          className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>
            &copy; {new Date().getFullYear()} The Chaitanya Group. All rights
            reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
