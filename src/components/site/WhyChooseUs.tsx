import { CakeSlice, Heart, MapPin, PenTool } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const FEATURES = [
  {
    icon: CakeSlice,
    title: "Freshly Prepared",
    text: "Made with care for your special occasion.",
  },
  {
    icon: PenTool,
    title: "Beautiful Designs",
    text: "Creative cakes for birthdays, celebrations and special moments.",
  },
  {
    icon: Heart,
    title: "Made to Order",
    text: "Share your idea and discuss a cake that fits your occasion.",
  },
  {
    icon: MapPin,
    title: "Local & Personal",
    text: "A local bakery focused on personal service.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Why Choose Us" title="Small Bakery, Careful Details" />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.07}>
              <div className="h-full rounded-2xl border border-border/70 bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                <f.icon className="h-6 w-6 text-champagne" strokeWidth={1.4} aria-hidden="true" />
                <h3 className="mt-5 font-display text-lg text-charcoal">{f.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
