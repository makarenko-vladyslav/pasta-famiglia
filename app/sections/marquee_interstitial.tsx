"use client";
import { Marquee } from "@/components/mechanics";

/**
 * SECTION: Marquee Interstitial
 * ROLE: Interstitial — The Living Idle Layer
 * 
 * A full-width rhythmic band acting as a visual separator between 
 * the signature guarantee and the brand story.
 */
export function SectionMarqueeInterstitial() {
  // Verbatim strings translated to the site language (uk)
  // Logic: "FRESH PASTA SEMOLA · OPEN KITCHEN · 20 MIN GUARANTEE · HANDMADE WITH LOVE"
  const items = [
    "СВІЖА ПАСТА SEMOLA",
    "ВІДКРИТА КУХНЯ",
    "ГАРАНТІЯ 20 ХВИЛИН",
    "РУЧНА РОБОТА З ЛЮБОВ'Ю",
    "СВІЖА ПАСТА SEMOLA",
    "ВІДКРИТА КУХНЯ",
    "ГАРАНТІЯ 20 ХВИЛИН",
    "РУЧНА РОБОТА З ЛЮБОВ'Ю"
  ];

  return (
    <section 
      id="marquee-interstitial" 
      className="relative w-full overflow-hidden bg-background border-y border-foreground/10 py-0"
    >
      <div className="flex items-center py-6 lg:py-10">
        <div className="w-full flex font-body text-[clamp(1.2rem,2.5vw,1.5rem)] uppercase tracking-[0.1em] text-foreground">
          <Marquee 
            items={items} 
          />
        </div>
      </div>
    </section>
  );
}