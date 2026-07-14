"use client";
import { Reveal, Marquee } from "@/components/mechanics";

/**
 * SectionMarqueeInterstitial - The living rhythm of the page.
 * A high-energy typographic band that separates content acts with movement.
 * Uses a poster-scale display font and hairline borders for a premium feel.
 */
export function SectionMarqueeInterstitial() {
  // Phrases from SPEC translated to SITE LANGUAGE (uk) where applicable
  // Technical Italian culinary terms (Semola, Al Dente) are preserved for authenticity
  const marqueePhrases = [
    "СВІЖА ПАСТА",
    "SEMOLA",
    "AL DENTE",
    "ПІЦА НА ДРОВАХ",
    "PASTA FAMIGLIA",
    "СВІЖА ПАСТА",
    "SEMOLA",
    "AL DENTE",
    "ПІЦА НА ДРОВАХ",
    "PASTA FAMIGLIA",
  ];

  return (
    <section 
      className="relative w-full border-y border-foreground/10 bg-background overflow-hidden py-[var(--space-act)]"
      aria-hidden="true"
    >
      <Reveal delay={0.1}>
        <div className="flex items-center w-full h-20 lg:h-[120px]">
          <Marquee 
            items={marqueePhrases} 
            className="font-display font-medium uppercase tracking-tighter text-[clamp(2rem,5vw,3.5rem)] text-foreground flex gap-12 lg:gap-24"
          />
        </div>
      </Reveal>

      {/* Decorative grain for texture depth */}
      <div className="absolute inset-0 pointer-events-none rp-grain opacity-20" />
    </section>
  );
}