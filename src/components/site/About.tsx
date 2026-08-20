import { Reveal } from "./Reveal";
import { Logo } from "./Logo";
import shopInterior from "@/assets/shop-interior.jpg";

const VALUES = [
  { title: "Freshly Made", text: "Baked close to your collection time." },
  { title: "Quality Ingredients", text: "Simple, good ingredients we trust." },
  { title: "Made for Celebrations", text: "Designed around your occasion." },
];

export function About() {
  return (
    <section id="about" className="bg-cream/60 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <Reveal>
          <div className="relative mx-auto max-w-xl lg:max-w-none">
            <div
              className="absolute -inset-3 rounded-[2rem] border border-champagne-soft"
              aria-hidden="true"
            />
            <img
              src={shopInterior}
              alt="Marble counter, glass cake display and warm lighting inside DELICIOUS Cake & Bakery Ahmedabad"
              loading="lazy"
              width={1408}
              height={1008}
              className="relative h-[300px] w-full rounded-[1.75rem] object-cover shadow-frame sm:h-[400px] lg:h-[470px]"
            />
            <div className="absolute -bottom-6 left-6 rounded-xl border border-border/70 bg-card px-5 py-4 shadow-lift">
              <Logo />
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">About Us</p>
            <h2 className="mt-3 font-display text-3xl leading-[1.12] text-charcoal sm:text-4xl lg:text-[2.6rem]">
              Baked with Passion,
              <br />
              <span className="italic">Made for Your Moments.</span>
            </h2>
            <div className="gold-rule mt-5 w-20" aria-hidden="true" />
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
              At DELICIOUS Cake & Bakery, every celebration deserves something special. From
              beautifully designed cakes to delicious bakery favourites, we create sweet moments
              that are made to be remembered.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="rounded-xl border border-border/70 bg-card p-5 shadow-soft">
                  <span className="block h-px w-8 bg-champagne" aria-hidden="true" />
                  <h3 className="mt-3 text-[14px] font-medium tracking-wide text-charcoal">
                    {v.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                    {v.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
