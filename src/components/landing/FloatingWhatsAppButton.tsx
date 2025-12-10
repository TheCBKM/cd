'use client';

import { WhatsAppIcon } from '@/components/icons';

export default function FloatingWhatsAppButton() {
  return (
    <a
      href="https://wa.me/919260369200"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-200 hover:scale-110 z-50"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8" />
    </a>
  );
}
