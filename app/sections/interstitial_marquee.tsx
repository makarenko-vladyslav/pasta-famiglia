"use client";
import { Reveal, Marquee } from "@/components/mechanics";

/**
 * SectionInterstitialMarquee: A high-impact horizontal scrolling band 
 * that acts as a transition between the menu and the story acts.
 * Uses a monospace-style display font for a modern, industrial Italian aesthetic.
 */
export function SectionInterstitialMarquee() {
  const marqueeItems = [
    "ПАСТА ВЛАСНОГО ПРИГОТУВАННЯ",
    "20 ХВИЛИН",
    "ЧЕСНА ЦІНА",
    "WOOD-FIRED PIZZA",
    "FRESH AL DENTE",
  ];

  return (
    <section 
      className="w-full py-6 border-y border-foreground/10 overflow-hidden bg-background"
      aria-label="Переваги"
    >
      <Reveal delay={0.1}>
        <div className="flex items-center">
          <Marquee 
            items={marqueeItems}
            className="font-display font-normal uppercase tracking-tighter text-2xl md:text-3xl lg:text-5xl py-2"
          />
        </div>
      </Reveal>
    </section>
  );
}