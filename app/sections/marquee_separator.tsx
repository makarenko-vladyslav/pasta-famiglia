"use client";

import { Reveal, Marquee } from "@/components/mechanics";

/**
 * SECTION: Marquee Separator
 * ROLE: ACT II: The Offer (Interstitial)
 * 
 * A high-energy, editorial-style marquee that breaks the grid rhythm 
 * between the Signature act and the Differentiators act. 
 * Uses italicized display typography and a subtle surface background.
 */
export function SectionMarqueeSeparator() {
  // Items transliterated to Ukrainian as per the Site Language (uk) 
  // and the "No English on UA page" rule, while maintaining the spec's culinary content.
  const marqueeItems = [
    "КАРБОНАРА",
    "АМАТРИЧАНА",
    "ПІЧІ",
    "ТАЛЬЯТЕЛЛЕ",
    "СЕМОЛА",
    "АЛЬ ДЕНТЕ",
    "БЕЗ ПЛАТИ ЗА ОБСЛУГОВУВАННЯ",
    "КИЇВ",
  ];

  return (
    <section 
      className="w-full border-y border-foreground/10 py-6 overflow-hidden bg-background relative"
      aria-label="Кулінарні акценти"
    >
      <Reveal delay={0.1}>
        <div className="flex items-center">
          <Marquee 
            speed={40} 
            direction="left"
            items={marqueeItems.map((item) => (
              <span 
                key={item} 
                className="font-display italic text-2xl lg:text-4xl uppercase tracking-tighter mx-8 text-foreground"
              >
                {item}
                <span className="ml-16 opacity-30 select-none">·</span>
              </span>
            ))}
          />
        </div>
      </Reveal>
    </section>
  );
}