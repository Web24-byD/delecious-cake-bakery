import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { productEnquiry, whatsappLink } from "@/config/business";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { SectionHeading } from "./SectionHeading";
import classicChocolate from "@/assets/cake-classic-chocolate.jpg";
import blackForest from "@/assets/cake-blackforest.jpg";
import redVelvet from "@/assets/cake-redvelvet.jpg";
import designerBirthday from "@/assets/cake-designer-birthday.jpg";
import anniversary from "@/assets/cat-anniversary.jpg";
import custom from "@/assets/custom-process.jpg";

type Filter = "All" | "Chocolate" | "Birthday" | "Designer" | "Anniversary";

const FILTERS: Filter[] = ["All", "Chocolate", "Birthday", "Designer", "Anniversary"];

const CAKES = [
  {
    name: "Classic Chocolate Cake",
    desc: "Soft chocolate sponge layered with smooth chocolate cream.",
    tags: ["Chocolate", "Birthday"],
    image: classicChocolate,
    alt: "Classic chocolate cake with chocolate buttercream swirls and a cut slice",
  },
  {
    name: "Black Forest Cake",
    desc: "Whipped cream, cherries and generous chocolate shavings.",
    tags: ["Chocolate"],
    image: blackForest,
    alt: "Black forest cake with cream swirls, cherries and chocolate flakes",
  },
  {
    name: "Red Velvet Cake",
    desc: "Velvety red sponge with a classic cream cheese finish.",
    tags: ["Birthday", "Anniversary"],
    image: redVelvet,
    alt: "Red velvet cake slice with cream cheese frosting layers",
  },
  {
    name: "Designer Birthday Cake",
    desc: "Piped florals and fine detailing for a standout birthday.",
    tags: ["Birthday", "Designer"],
    image: designerBirthday,
    alt: "Designer birthday cake with peach floral piping and a gold candle",
  },
  {
    name: "Anniversary Special Cake",
    desc: "Ivory finish with soft roses and delicate gold trim.",
    tags: ["Anniversary", "Designer"],
    image: anniversary,
    alt: "Anniversary cake with dusty rose sugar flowers and gold candles",
  },
  {
    name: "Custom Celebration Cake",
    desc: "Shaped around your theme, colours and occasion.",
    tags: ["Designer", "Birthday"],
    image: custom,
    alt: "Tall custom celebration cake covered in hand-piped buttercream flowers",
  },
];

export function FeaturedCakes() {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = CAKES.filter((c) => filter === "All" || c.tags.includes(filter));

  return (
    <section id="featured" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Featured"
          title="Made to Make Them Smile"
          subtitle="A few favourites from our counter. Tell us your occasion and we'll help you choose."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-2 text-[13px] font-medium transition-all duration-300 ${
                filter === f
                  ? "border-charcoal bg-charcoal text-ivory"
                  : "border-border bg-card text-muted-foreground hover:border-champagne hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((cake) => (
              <motion.article
                key={cake.name}
                layout
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-soft transition-shadow duration-500 hover:shadow-lift"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={cake.image}
                    alt={`${cake.alt} — DELICIOUS Cake & Bakery Ahmedabad`}
                    loading="lazy"
                    width={1008}
                    height={1008}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-ivory/92 px-3 py-1 text-[10px] font-medium tracking-[0.16em] text-charcoal uppercase backdrop-blur-sm">
                    {cake.tags[0]}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-xl text-charcoal">{cake.name}</h3>
                  <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-muted-foreground">
                    {cake.desc}
                  </p>
                  <div className="mt-5 flex items-center justify-between gap-3">
                    <span className="text-[12px] tracking-[0.14em] text-muted-foreground uppercase">
                      Ask for Price
                    </span>
                    <a
                      href={whatsappLink(productEnquiry(cake.name))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full bg-charcoal px-4 py-2.5 text-[12.5px] font-medium text-ivory transition-colors duration-300 hover:bg-whatsapp"
                    >
                      <WhatsAppIcon className="h-3.5 w-3.5" />
                      Enquire on WhatsApp
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
