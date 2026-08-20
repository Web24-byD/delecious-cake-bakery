import { Instagram } from "lucide-react";
import { INSTAGRAM_URL, hasInstagram } from "@/config/business";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import designerBirthday from "@/assets/cake-designer-birthday.jpg";
import blackForest from "@/assets/cake-blackforest.jpg";
import cupcakes from "@/assets/gallery-cupcakes.jpg";
import redVelvet from "@/assets/cake-redvelvet.jpg";
import shopCounter from "@/assets/shop-counter.jpg";
import classicChocolate from "@/assets/cake-classic-chocolate.jpg";

const POSTS = [
  { src: designerBirthday, alt: "Designer birthday cake with floral piping" },
  { src: blackForest, alt: "Black forest cake with cherries" },
  { src: cupcakes, alt: "Assorted decorated cupcakes" },
  { src: redVelvet, alt: "Red velvet cake slice" },
  { src: shopCounter, alt: "Bakery display counter with cakes and pastries" },
  { src: classicChocolate, alt: "Classic chocolate cake with a cut slice" },
];

export function SocialSection() {
  return (
    <section className="bg-cream/60 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Follow Along" title="Sweet Moments, Freshly Baked" />

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {POSTS.map((p, i) => (
            <Reveal key={p.src + i} delay={i * 0.05}>
              <div className="group relative aspect-square overflow-hidden rounded-xl">
                <img
                  src={p.src}
                  alt={`${p.alt} — DELICIOUS Cake & Bakery Ahmedabad`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <span className="absolute inset-0 grid place-items-center bg-charcoal/35 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <Instagram className="h-5 w-5 text-ivory" strokeWidth={1.5} />
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-10 text-center">
          {hasInstagram ? (
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-charcoal/20 bg-card px-7 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-champagne hover:-translate-y-0.5"
            >
              <Instagram className="h-4 w-4" strokeWidth={1.6} />
              Follow Our Sweet Journey
            </a>
          ) : (
            <p className="text-[13px] text-muted-foreground">
              Instagram link coming soon — add it in{" "}
              <code className="rounded bg-card px-1.5 py-0.5 text-[12px]">INSTAGRAM_URL</code>.
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
