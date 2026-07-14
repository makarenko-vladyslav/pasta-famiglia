"use client";
import { Reveal, Marquee } from "@/components/mechanics";

/**
 * SECTION: Marquee Interstitial
 * ROLE: Transition. Continuous movement between The Offer and The Soul.
 * STYLING: Typographic band with high-end display font and infinite scroll.
 */
export function SectionMarqueeInterstitial() {
  // Translated items from SPEC to SITE LANGUAGE (uk)
  // Maintains the "•" separator and uppercase styling as per typography requirements.
  const marqueeItems = [
    "СВІЖА ПАСТА ЩОДНЯ",
    "БЕЗ СЕРВІСНИХ ЗБОРІВ",
    "ТІЛЬКИ AL DENTE",
    "ІМПОРТНА СЕМОЛА",
  ];

  return (
    <section 
      className="w-full py-6 lg:py-8 border-y border-foreground/10 overflow-hidden bg-surface relative z-10"
      aria-hidden="true"
    >
      <Reveal delay={0.05}>
        <div className="flex items-center overflow-hidden">
          <div className="font-display uppercase tracking-[0.2em] text-[clamp(1.8rem,5vw,2.25rem)] text-foreground leading-none whitespace-nowrap">
            <Marquee 
              items={marqueeItems} 
              // The Marquee mechanic handles the mapping and duplication
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}