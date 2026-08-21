import { whatsappLink } from "@/config/business";
import { Reveal } from "./Reveal";
import { WhatsAppIcon } from "./WhatsAppIcon";
import customCake from "@/assets/custome-process.png";

const STEPS = [
  { no: "01", title: "Choose Your Design", text: "Send us a photo, sketch or simple idea." },
  { no: "02", title: "Tell Us Your Occasion", text: "Date, flavour, size and the celebration." },
  { no: "03", title: "Celebrate with Your Cake", text: "Collect it fresh from our shop." },
];

export function CustomCakeSection() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-20 lg:py-28">
      <div
        className="pointer-events-none absolute -top-32 -right-24 h-80 w-80 rounded-full bg-champagne/12 blur-3xl"
        aria-hidden="true"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <Reveal>
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div
              className="absolute -inset-3 rounded-[2rem] border border-champagne/30"
              aria-hidden="true"
            />
            <img
              src={customCake}
              alt="Tall custom designer cake covered in hand-piped buttercream flowers from DELICIOUS Cake & Bakery Ahmedabad"
              loading="lazy"
              width={1104}
              height={1312}
              className="relative h-[420px] w-full rounded-[1.75rem] object-cover shadow-frame lg:h-[560px]"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow text-champagne/80">Signature Service</p>
            <h2 className="mt-3 font-display text-3xl leading-[1.1] text-ivory sm:text-4xl lg:text-[2.9rem]">
              Your Idea.
              <br />
              <span className="italic text-champagne">Our Cake.</span>
            </h2>
            <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-ivory/70">
              Have a design in mind? Share your inspiration with us and let us create a cake for
              your special occasion.
            </p>
          </Reveal>

          <div className="mt-10 space-y-6">
            {STEPS.map((s, i) => (
              <Reveal key={s.no} delay={0.08 * i}>
                <div className="flex gap-5 border-b border-ivory/10 pb-5">
                  <span className="font-display text-2xl text-champagne">{s.no}</span>
                  <div className="min-w-0">
                    <h3 className="text-[15px] font-medium tracking-wide text-ivory">{s.title}</h3>
                    <p className="mt-1 text-[13.5px] text-ivory/60">{s.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.25}>
            <a
              href={whatsappLink(
                "Hello DELICIOUS Cake & Bakery BY TANVI, I would like to discuss a custom cake design.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2.5 rounded-full bg-ivory px-7 py-4 text-sm font-medium text-charcoal transition-all duration-300 hover:-translate-y-0.5 hover:bg-champagne-soft"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Discuss My Cake
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
