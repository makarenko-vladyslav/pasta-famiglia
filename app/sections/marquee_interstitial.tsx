"use client";
import { Marquee, Reveal } from "@/components/mechanics";

/**
 * SECTION: Marquee Interstitial
 * ROLE: Mandatory living idle layer for Pasta Famiglia.
 * STYLE: Editorial monospaced marquee, high tracking, hairline borders.
 */
export function SectionMarqueeInterstitial() {
  // Ukrainian translation of the SPEC strings to adhere to SITE LANGUAGE law
  const marqueeItems = [
    "ПАСТА РУЧНОЇ РОБОТИ",
    "ПІЦА НА ДРОВАХ",
    "БЕЗ СЕРВІСНОГО ЗБОРУ",
    "СВІЖЕ ЩОДНЯ",
    "ПАСТА РУЧНОЇ РОБОТИ",
    "ПІЦА НА ДРОВАХ",
    "БЕЗ СЕРВІСНОГО ЗБОРУ",
    "СВІЖЕ ЩОДНЯ",
  ];

  return (
    <section 
      className="relative w-full overflow-hidden border-y border-foreground/10 py-8 lg:py-12"
      aria-hidden="true"
    >
      <Reveal delay={0.1}>
        <div className="flex items-center justify-center">
          <Marquee 
            items={marqueeItems} 
            className="font-body text-lg lg:text-xl uppercase tracking-[0.2em] text-foreground/90"
          />
        </div>
      </Reveal>
      
      {/* Subtle Grain Overlay for texture depth without breaking the "transparent background" spec */}
      <div className="absolute inset-0 pointer-events-none rp-grain opacity-[0.03]" />
    </section>
  );
}