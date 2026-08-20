import { motion } from "motion/react";
import { DEFAULT_ENQUIRY, whatsappLink } from "@/config/business";
import { WhatsAppIcon } from "./WhatsAppIcon";

/** Floating WhatsApp enquiry CTA, fixed bottom-right on every viewport. */
export function WhatsAppButton() {
  return (
    <motion.a
      href={whatsappLink(DEFAULT_ENQUIRY)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order or enquire on WhatsApp"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed right-4 bottom-4 z-50 flex items-center gap-2.5 rounded-full bg-whatsapp px-4 py-3.5 text-ivory shadow-lift transition-transform duration-300 hover:scale-[1.04] sm:right-6 sm:bottom-6"
    >
      <WhatsAppIcon className="h-5 w-5 shrink-0" />
      <span className="text-sm font-medium tracking-wide">Order / Enquire</span>
    </motion.a>
  );
}
