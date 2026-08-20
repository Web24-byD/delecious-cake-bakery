import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import {
  ADDRESS,
  ADDRESS_LINES,
  BUSINESS_BY,
  BUSINESS_NAME,
  GOOGLE_MAPS_URL,
  PHONE_NUMBER,
  hasPhone,
  whatsappLink,
} from "@/config/business";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { WhatsAppIcon } from "./WhatsAppIcon";

const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

export function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Make Your Celebration Sweeter"
          subtitle="Message us on WhatsApp with your occasion, date and design idea — or visit us at the shop."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.15fr]">
          <Reveal>
            <div className="h-full rounded-2xl border border-border/70 bg-card p-7 shadow-soft sm:p-9">
              <h3 className="font-display text-2xl text-charcoal">{BUSINESS_NAME}</h3>
              <p className="mt-1 text-[11px] font-medium tracking-[0.24em] text-muted-foreground uppercase">
                {BUSINESS_BY}
              </p>
              <div className="gold-rule mt-6" aria-hidden="true" />

              <div className="mt-6 flex gap-3.5">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-champagne" strokeWidth={1.5} />
                <address className="text-[14.5px] leading-relaxed text-muted-foreground not-italic">
                  {ADDRESS_LINES.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>

              <div className="mt-5 flex gap-3.5">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-champagne" strokeWidth={1.5} />
                <p className="text-[14.5px] text-muted-foreground">
                  {hasPhone ? (
                    <a href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`} className="hover:text-foreground">
                      {PHONE_NUMBER}
                    </a>
                  ) : (
                    <>
                      Phone number to be added
                      <span className="mt-0.5 block text-[12.5px]">
                        Set <code className="rounded bg-muted px-1.5 py-0.5">PHONE_NUMBER</code> in
                        the business config.
                      </span>
                    </>
                  )}
                </p>
              </div>

              <div className="mt-5 flex gap-3.5">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-champagne" strokeWidth={1.5} />
                <p className="text-[14.5px] text-muted-foreground">
                  Ask us about order timing, collection and delivery on WhatsApp.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 rounded-full bg-whatsapp px-6 py-4 text-sm font-medium text-ivory shadow-soft transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Order on WhatsApp
                </a>
                <div className="grid gap-3 sm:grid-cols-2">
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-full bg-charcoal px-5 py-3.5 text-sm font-medium text-ivory transition-colors duration-300 hover:bg-foreground"
                  >
                    <Navigation className="h-4 w-4" strokeWidth={1.6} />
                    Get Directions
                  </a>
                  {hasPhone ? (
                    <a
                      href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                      className="flex items-center justify-center gap-2 rounded-full border border-charcoal/20 px-5 py-3.5 text-sm font-medium text-foreground transition-colors duration-300 hover:border-champagne hover:bg-cream"
                    >
                      <Phone className="h-4 w-4" strokeWidth={1.6} />
                      Call Us
                    </a>
                  ) : (
                    <span className="flex items-center justify-center gap-2 rounded-full border border-dashed border-border px-5 py-3.5 text-sm text-muted-foreground">
                      <Phone className="h-4 w-4" strokeWidth={1.6} />
                      Call Us — add number
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-border/70 bg-card shadow-soft">
              <iframe
                title="Map showing DELICIOUS Cake & Bakery in Krishnanagar, Ahmedabad"
                src={mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[300px] w-full border-0 sm:h-[420px]"
              />
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-t border-border/70 p-5">
                <p className="min-w-0 text-[13.5px] leading-relaxed text-muted-foreground">
                  {ADDRESS_LINES.join(" ")}
                </p>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 rounded-full border border-charcoal/20 px-4 py-2 text-[12.5px] font-medium transition-colors hover:border-champagne hover:bg-cream"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
