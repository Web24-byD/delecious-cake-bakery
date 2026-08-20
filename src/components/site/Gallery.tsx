import { useState } from "react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Lightbox, type LightboxImage } from "./Lightbox";
import designerBirthday from "@/assets/cake-designer-birthday.jpg";
import catDesigner from "@/assets/cat-designer.jpg";
import catChocolate from "@/assets/cat-chocolate.jpg";
import blackForest from "@/assets/cake-blackforest.jpg";
import redVelvet from "@/assets/cake-redvelvet.jpg";
import cupcakes from "@/assets/gallery-cupcakes.jpg";
import shopInterior from "@/assets/shop-interior.jpg";
import shopCounter from "@/assets/shop-counter.jpg";
import occOther from "@/assets/occ-other.jpg";

const IMAGES: LightboxImage[] = [
  {
    src: designerBirthday,
    label: "Birthday",
    alt: "Designer birthday cake with peach floral piping from DELICIOUS Cake & Bakery Ahmedabad",
  },
  {
    src: catDesigner,
    label: "Designer",
    alt: "Designer cake with gold brushstrokes and white roses from DELICIOUS Cake & Bakery Ahmedabad",
  },
  {
    src: shopCounter,
    label: "Our Counter",
    alt: "Bakery display counter filled with cakes and pastries at DELICIOUS Cake & Bakery Ahmedabad",
  },
  {
    src: catChocolate,
    label: "Chocolate",
    alt: "Chocolate truffle cake with ganache drip from DELICIOUS Cake & Bakery Ahmedabad",
  },
  {
    src: cupcakes,
    label: "Bakery Treats",
    alt: "Assorted decorated cupcakes from DELICIOUS Cake & Bakery Ahmedabad",
  },
  {
    src: shopInterior,
    label: "Our Shop",
    alt: "Marble counter and warm lighting inside DELICIOUS Cake & Bakery Ahmedabad",
  },
  {
    src: blackForest,
    label: "Chocolate",
    alt: "Black forest cake with cherries and chocolate flakes from DELICIOUS Cake & Bakery Ahmedabad",
  },
  {
    src: occOther,
    label: "Celebration",
    alt: "White celebration cake with gold decorations from DELICIOUS Cake & Bakery Ahmedabad",
  },
  {
    src: redVelvet,
    label: "Red Velvet",
    alt: "Red velvet cake slice with cream cheese frosting from DELICIOUS Cake & Bakery Ahmedabad",
  },
];

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="A Little Taste of What We Create"
          subtitle="Cakes, bakery treats and moments from our shop in Krishnanagar, Ahmedabad."
        />

        <Reveal className="mt-14">
          <div className="columns-2 gap-4 [column-fill:balance] lg:columns-3">
            {IMAGES.map((img, i) => (
              <button
                key={img.src + i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Open image: ${img.label}`}
                className="group mb-4 block w-full overflow-hidden rounded-2xl border border-border/70 shadow-soft transition-shadow duration-500 hover:shadow-lift"
              >
                <span className="relative block">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <span className="absolute inset-0 bg-charcoal/25 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute bottom-3 left-3 rounded-full bg-ivory/92 px-3 py-1 text-[10px] font-medium tracking-[0.16em] text-charcoal uppercase opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {img.label}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      <Lightbox images={IMAGES} index={index} onClose={() => setIndex(null)} onNavigate={setIndex} />
    </section>
  );
}
