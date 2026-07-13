"use client";
import { Marquee, Reveal } from "@/components/mechanics";

/**
 * SectionMarqueeSeparator
 * Role: Interstitial: The living layer.
 * 
 * A high-end editorial separator featuring a slow-moving marquee 
 * with the restaurant's core manifestos.
 */
export function SectionMarqueeSeparator() {
  const manifestoItems = [
    "PIZZA DAL FORNO",
    "•",
    "FRESH PASTA DAILY",
    "•",
    "AL DENTE MANIFESTO",
    "•",
    "PIZZA DAL FORNO",
    "•",
    "FRESH PASTA DAILY",
    "•",
  ];

  return (
    <section 
      className="w-full border-y border-foreground/10 py-6 lg:py-10 overflow-hidden bg-surface"
      aria-hidden="true"
    >
      <Reveal delay={0.1}>
        <div className="flex items-center">
          <Marquee 
            items={manifestoItems} 
            className="font-display text-[clamp(1.2rem,3vw,1.8rem)] uppercase tracking-[0.25em] text-foreground/90 flex items-center gap-8 lg:gap-12"
          />
        </div>
      </Reveal>
    </section>
  );
}