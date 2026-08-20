import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import catBirthday from "@/assets/cat-birthday.jpg";
import catAnniversary from "@/assets/cat-anniversary.jpg";
import catCustom from "@/assets/cat-custom.jpg";
import catChocolate from "@/assets/cat-chocolate.jpg";
import catDesigner from "@/assets/cat-designer.jpg";
import catTreats from "@/assets/cat-treats.jpg";

const CATEGORIES = [
  {
    name: "Birthday Cakes",
    desc: "Bright, joyful cakes made for the big day.",
    image: catBirthday,
    alt: "Pastel buttercream birthday cake with candles from DELICIOUS Cake & Bakery Ahmedabad",
  },
  {
    name: "Anniversary Cakes",
    desc: "Elegant cakes for the years worth celebrating.",
    image: catAnniversary,
    alt: "Ivory anniversary cake with dusty rose flowers and gold detail",
  },
  {
    name: "Custom Cakes",
    desc: "Your design, shaped and finished by hand.",
    image: catCustom,
    alt: "Hand-painted custom fondant cake with a cream satin bow",
  },
  {
    name: "Chocolate Cakes",
    desc: "Deep, rich chocolate for true chocolate lovers.",
    image: catChocolate,
    alt: "Chocolate truffle cake with glossy ganache and chocolate shards",
  },
  {
    name: "Designer Cakes",
    desc: "Sculpted finishes, florals and fine gold work.",
    image: catDesigner,
    alt: "Designer cake with textured ivory buttercream, gold brushstrokes and white roses",
  },
  {
    name: "Bakery Treats",
    desc: "Cupcakes, pastries, brownies and everyday bakes.",
    image: catTreats,
    alt: "Assorted bakery treats including cupcakes, pastries, brownies and cookies",
  },
];

export function CategorySection() {
  return (
    <section id="cakes" className="bg-cream/60 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Our Cakes"
          title="Something Sweet for Every Celebration"
          subtitle="From elegant celebration cakes to delicious bakery favourites, find something made for your special moment."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.06}>
              <a
                href="#featured"
                className="group block overflow-hidden rounded-2xl border border-border/70 bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="relative aspect-4/5 overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.alt}
                    loading="lazy"
                    width={912}
                    height={1104}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-charcoal/5 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                    <div className="min-w-0">
                      <h3 className="font-display text-xl text-ivory">{c.name}</h3>
                      <p className="mt-1 text-[13px] leading-snug text-ivory/80">{c.desc}</p>
                    </div>
                    <span className="grid h-9 w-9 shrink-0 translate-y-2 place-items-center rounded-full bg-ivory/95 text-charcoal opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
