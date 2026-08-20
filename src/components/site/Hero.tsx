import { motion } from "motion/react";
import { ArrowDown, Sparkles } from "lucide-react";
import { whatsappLink } from "@/config/business";
import { WhatsAppIcon } from "./WhatsAppIcon";
import heroCake from "@/assets/hero-cake.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24">
      <div className="warm-glow pointer-events-none absolute inset-0 -z-10 opacity-70" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-24 -right-24 -z-10 h-72 w-72 rounded-full bg-blush/40 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="order-2 lg:order-1"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-champagne-soft bg-card/70 px-4 py-1.5 text-[11px] font-medium tracking-[0.16em] text-muted-foreground uppercase">
            <Sparkles className="h-3.5 w-3.5 text-champagne" />
            Freshly Baked • Made with Love
          </span>

          <h1 className="mt-6 font-display text-[2.6rem] leading-[1.05] text-charcoal sm:text-6xl lg:text-[4.2rem]">
            Made for Moments
            <br />
            <span className="italic">Worth Celebrating.</span>
          </h1>

          <div className="gold-rule mt-7 w-24" aria-hidden="true" />

          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            Beautifully crafted cakes and bakery treats for birthdays, anniversaries, celebrations
            and every sweet moment.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 rounded-full bg-charcoal px-7 py-4 text-sm font-medium text-ivory shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Order Your Cake
            </a>
            <a
              href="#cakes"
              className="flex items-center justify-center gap-2 rounded-full border border-charcoal/20 bg-card/60 px-7 py-4 text-sm font-medium text-foreground transition-all duration-300 hover:border-champagne hover:bg-cream"
            >
              Explore Cakes
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease, delay: 0.1 }}
          className="relative order-1 lg:order-2"
        >
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div
              className="absolute -inset-3 rounded-[2rem] border border-champagne-soft/70"
              aria-hidden="true"
            />
            <img
              src={heroCake}
              width={1104}
              height={1312}
              alt="Two-tier white cream celebration cake with strawberries and gold accents from DELICIOUS Cake & Bakery Ahmedabad"
              className="relative h-[380px] w-full rounded-[1.75rem] object-cover shadow-frame sm:h-[480px] lg:h-[600px]"
            />

            <motion.div
              animate={{ y: [0, -9, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-2 top-8 rounded-xl border border-border/70 bg-card/95 px-4 py-2.5 shadow-soft backdrop-blur-sm sm:-left-6"
            >
              <p className="text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
                Custom Cakes
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              className="absolute -right-2 top-1/2 rounded-xl border border-border/70 bg-card/95 px-4 py-2.5 shadow-soft backdrop-blur-sm sm:-right-6"
            >
              <p className="text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
                Birthday Cakes
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              className="absolute bottom-6 left-4 rounded-xl border border-border/70 bg-card/95 px-4 py-2.5 shadow-soft backdrop-blur-sm sm:left-0"
            >
              <p className="text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
                Freshly Baked
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
