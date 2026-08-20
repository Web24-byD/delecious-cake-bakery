import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const centered = align === "center";
  return (
    <Reveal className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-3 font-display text-3xl leading-[1.15] text-charcoal sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      <div className={`gold-rule mt-5 w-20 ${centered ? "mx-auto" : ""}`} aria-hidden="true" />
      {subtitle && (
        <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">{subtitle}</p>
      )}
    </Reveal>
  );
}
