import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { hasWhatsApp, whatsappLink } from "@/config/business";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./WhatsAppIcon";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Our Cakes", href: "#cakes" },
  { label: "Special Moments", href: "#moments" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-1000 transition-all duration-500",
        scrolled
          ? "border-b border-border/70 bg-ivory/92 backdrop-blur-md"
          : "border-b border-transparent bg-ivory/30 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 lg:px-8">
        {/* Logo */}
        <a
          href="#home"
          className="min-w-0"
          aria-label="Home"
        >
          <Logo />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-[13px] font-medium tracking-wide text-foreground/80 transition-colors hover:text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-champagne after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}

          {/* Desktop WhatsApp Button */}
          {hasWhatsApp && (
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex shrink-0 items-center gap-2 rounded-full bg-charcoal px-5 py-2.5 text-[13px] font-medium text-ivory transition-all duration-300 hover:bg-foreground hover:shadow-soft"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Order on WhatsApp
            </a>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="shrink-0 rounded-full border border-white/60 bg-white/40 p-3 text-foreground shadow-[0_8px_30px_rgba(0,0,0,0.10)] backdrop-blur-xl transition-all duration-300 hover:bg-white/55 lg:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-9999 flex min-h-screen flex-col overflow-y-auto bg-[#F8F5EE] lg:hidden"
          >
            {/* Mobile Header */}
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-black/10 bg-[#F8F5EE] px-5 py-3.5">
              <Logo />

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="shrink-0 rounded-full p-2 transition-colors hover:bg-cream"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav className="flex flex-1 flex-col justify-center gap-1 bg-[#F8F5EE] px-7">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.06 * i + 0.05,
                    duration: 0.4,
                  }}
                  className="border-b border-border/60 py-4 font-display text-2xl text-foreground"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>

            {/* Mobile WhatsApp Button */}
            {hasWhatsApp && (
              <div className="px-7 pb-10">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center gap-2.5 rounded-full bg-whatsapp px-6 py-4 text-base font-medium text-ivory shadow-soft"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Order on WhatsApp
                </a>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}