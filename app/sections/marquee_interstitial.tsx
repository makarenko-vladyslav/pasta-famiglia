"use client";

import { Reveal, Marquee } from "@/components/mechanics";

/**
 * SECTION: Marquee Interstitial
 * ROLE: Transition band of signature brand attributes.
 * STYLE: Typographic poster crawl, Jost (font-display), tracking-tighter.
 */
export function SectionMarqueeInterstitial() {
  const attributes = [
    "СВІЖА ПАСТА",
    "ДРОВ'ЯНА ПІЧ",
    "БОРОШНО CAPUTO",
    "20 ХВИЛИН",
    "БЕЗ СЕРВІСНОГО ЗБОРУ",
    "ІТАЛІЙСЬКІ ТРАДИЦІЇ",
    "ВЛАСНЕ ВИРОБНИЦТВО",
  ];

  return (
    <section 
      className="relative w-full overflow-hidden border-y border-foreground/10 bg-background py-10 lg:py-14"
      aria-hidden="true"
    >
      <Reveal delay={0.1}>
        <div className="flex items-center">
          <Marquee 
            items={attributes} 
            className="font-display text-[2.2rem] md:text-[3rem] lg:text-[clamp(2.5rem,5vw,4rem)] font-semibold uppercase tracking-tighter text-foreground"
          />
        </div>
      </Reveal>
      
      {/* Decorative vertical accent for large screens only */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:block">
        <span className="text-[10px] uppercase tracking-[0.4em] text-muted [writing-mode:vertical-lr] opacity-40">
          PASTA FAMIGLIA • KYIV
        </span>
      </div>
    </section>
  );
}