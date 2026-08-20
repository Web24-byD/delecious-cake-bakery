import { Instagram } from "lucide-react";
import {
  ADDRESS_LINES,
  BUSINESS_BY,
  BUSINESS_SUB,
  INSTAGRAM_URL,
  hasInstagram,
  whatsappLink,
} from "@/config/business";
import { WhatsAppIcon } from "./WhatsAppIcon";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Cakes", href: "#cakes" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-charcoal pt-16 pb-8 text-ivory">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl tracking-[0.2em] text-ivory">DELICIOUS</p>
            <p className="mt-2 text-[11px] font-medium tracking-[0.24em] text-champagne uppercase">
              {BUSINESS_SUB} · {BUSINESS_BY}
            </p>
            <p className="mt-5 max-w-sm text-[13.5px] leading-relaxed text-ivory/60">
              Beautifully crafted cakes and bakery treats for every sweet moment, made in
              Krishnanagar, Ahmedabad.
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2.5 rounded-full bg-ivory px-6 py-3.5 text-sm font-medium text-charcoal transition-colors duration-300 hover:bg-champagne-soft"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Order Your Cake
            </a>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-[11px] font-medium tracking-[0.24em] text-ivory/50 uppercase">
              Quick Links
            </h2>
            <ul className="mt-5 space-y-3">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[14px] text-ivory/75 transition-colors hover:text-champagne"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-[11px] font-medium tracking-[0.24em] text-ivory/50 uppercase">
              Visit Us
            </h2>
            <address className="mt-5 text-[14px] leading-relaxed text-ivory/75 not-italic">
              {ADDRESS_LINES.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            {hasInstagram ? (
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-[14px] text-ivory/75 transition-colors hover:text-champagne"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.6} />
                Instagram
              </a>
            ) : (
              <p className="mt-5 inline-flex items-center gap-2 text-[13px] text-ivory/45">
                <Instagram className="h-4 w-4" strokeWidth={1.6} />
                Instagram link coming soon
              </p>
            )}
          </div>
        </div>

        <div className="mt-14 border-t border-ivory/10 pt-6">
          <p className="text-center text-[12px] text-ivory/45">
            © 2026 DELICIOUS Cake & Bakery BY TANVI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
