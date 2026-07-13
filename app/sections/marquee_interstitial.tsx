"use client";

import { Reveal, Marquee } from "@/components/mechanics";

/**
 * SECTION: Marquee Interstitial
 * ROLE: Signature ingredients band
 * STACK: Next.js + Tailwind 4
 */
export function SectionMarqueeInterstitial() {
  // Verbatim content from SPEC (translated to site language: uk)
  const ingredients = [
    "СВІЖА ПАСТА",
    "БОРОШНО CAPUTO",
    "БЕЗ ПРИХОВАНИХ ПЛАТЕЖІВ",
    "AL DENTE",
    "СВІЖА ПАСТА",
    "БОРОШНО CAPUTO",
    "БЕЗ ПРИХОВАНИХ ПЛАТЕЖІВ",
    "AL DENTE",
  ];

  return (
    <section className="relative w-full overflow-hidden bg-accent text-accent-foreground border-y border-foreground/10">
      <Reveal delay={0.1}>
        <div className="py-6 lg:py-10 flex items-center">
          {/* 
            Typography Spec: 
            - Mono font, uppercase, tracking 0.1em. 
            - Font size scales down 40% on mobile (lg:text-5xl ≈ 3rem -> text-2xl ≈ 1.5rem is ~50%, text-3xl is ~60%).
            - Using text-3xl to lg:text-5xl to respect the 40% scale down logic closely.
          */}
          <div className="w-full font-mono uppercase tracking-[0.1em] text-3xl lg:text-5xl whitespace-nowrap">
            <Marquee items={ingredients} />
          </div>
        </div>
      </Reveal>
    </section>
  );
}