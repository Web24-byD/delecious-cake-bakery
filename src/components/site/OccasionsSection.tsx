import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import catBirthday from "@/assets/cat-birthday.png";
import catAnniversary from "@/assets/cake-anniversary.png";
import occBaby from "@/assets/occ-baby.jpg";
import occOther from "@/assets/occ-other.png";

const OCCASIONS = [
  {
    title: "Birthday",
    text: "Make their special day unforgettable.",
    image: catBirthday,
    alt: "Pastel birthday cake with candles",
  },
  {
    title: "Anniversary",
    text: "Celebrate your story with something sweet.",
    image: catAnniversary,
    alt: "Ivory anniversary cake with roses and gold detail",
  },
  {
    title: "Baby Celebration",
    text: "Sweet beginnings deserve a beautiful cake.",
    image: occBaby,
    alt: "Soft pastel baby celebration cake with fondant clouds and stars",
  },
  {
    title: "Other Celebrations",
    text: "Tell us the occasion and we'll help make it special.",
    image: occOther,
    alt: "White celebration cake with gold decorations and a sparkler candle",
  },
];

export function OccasionsSection() {
  return (
    <section id="moments" className="bg-cream/60 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Special Moments"
          title="For Every Sweet Moment"
          subtitle="Whatever you're celebrating, there's a cake for it."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {OCCASIONS.map((o, i) => (
            <Reveal key={o.title} delay={i * 0.06}>
              <article className="group overflow-hidden rounded-2xl border border-border/70 bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                <div className="aspect-4/5 overflow-hidden">
                  <img
                    src={o.image}
                    alt={`${o.alt} — DELICIOUS Cake & Bakery Ahmedabad`}
                    loading="lazy"
                    width={912}
                    height={1104}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg text-charcoal">{o.title}</h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted-foreground">
                    {o.text}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
