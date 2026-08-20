import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { whatsappLink } from "@/config/business";
import { Reveal } from "./Reveal";
import { WhatsAppIcon } from "./WhatsAppIcon";
import birthdayScene from "@/assets/birthday-scene.jpg";

const BADGES = ["Birthday Cakes", "Theme Cakes", "Photo Cakes", "Custom Designs"];

export function BirthdaySection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="warm-glow pointer-events-none absolute inset-0 -z-10 opacity-60" aria-hidden="true" />

      {[
        { left: "8%", top: "18%", size: 10, dur: 7 },
        { left: "86%", top: "26%", size: 7, dur: 8.5 },
        { left: "70%", top: "78%", size: 8, dur: 9 },
        { left: "18%", top: "72%", size: 6, dur: 7.5 },
      ].map((d, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          className="pointer-events-none absolute -z-10 rounded-full bg-champagne/45"
          style={{ left: d.left, top: d.top, width: d.size, height: d.size }}
          animate={{ y: [0, -18, 0], opacity: [0.35, 0.8, 0.35] }}
          transition={{ duration: d.dur, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-8">
        <Reveal>
          <div className="relative">
            <img
              src={birthdayScene}
              alt="Birthday cake with lit candles, balloons and confetti from DELICIOUS Cake & Bakery Ahmedabad"
              loading="lazy"
              width={1408}
              height={1008}
              className="h-[300px] w-full rounded-[1.75rem] object-cover shadow-frame sm:h-[400px] lg:h-[470px]"
            />
            <div
              className="absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-champagne/25"
              aria-hidden="true"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow inline-flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-champagne" />
              Birthdays
            </p>
            <h2 className="mt-3 font-display text-3xl leading-[1.12] text-charcoal sm:text-4xl lg:text-[2.75rem]">
              Make Their Birthday Extra Special
            </h2>
            <div className="gold-rule mt-5 w-20" aria-hidden="true" />
            <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-muted-foreground">
              Theme cakes, photo cakes and hand-finished designs — planned around the person you're
              celebrating.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {BADGES.map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-champagne-soft bg-card px-4 py-2 text-[12.5px] text-foreground/80"
                >
                  {b}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <a
              href={whatsappLink(
                "Hello DELICIOUS Cake & Bakery BY TANVI, I would like to plan a birthday cake.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-2.5 rounded-full bg-charcoal px-7 py-4 text-sm font-medium text-ivory shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Plan a Birthday Cake
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
