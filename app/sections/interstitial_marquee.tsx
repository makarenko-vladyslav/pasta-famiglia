"use client";
import { Marquee } from "@/components/mechanics";

/**
 * SECTION: Interstitial Marquee
 * ROLE: ACT II: The Offer. Living idle layer.
 * STYLING: Full-width, rotated, scaled for edge-to-edge coverage, bg-surface.
 */
export function SectionInterstitialMarquee() {
  const marqueeItems = [
    "СВІЖА ПАСТА ЩОДНЯ •",
    "ПІЦА З ПЕЧІ •",
    "БЕЗ СЕРВІСНОГО ЗБОРУ •",
    "ВИНО ТА РОДИНА •",
    "КУЛІНАРНЕ МИСТЕЦТВО •",
    "СВІЖА ПАСТА ЩОДНЯ •",
    "ПІЦА З ПЕЧІ •",
    "БЕЗ СЕРВІСНОГО ЗБОРУ •",
    "ВИНО ТА РОДИНА •",
    "КУЛІНАРНЕ МИСТЕЦТВО •",
  ];

  return (
    <section 
      className="relative z-10 w-full overflow-hidden bg-surface py-[var(--space-act)] -rotate-1 scale-105 border-y border-foreground/10"
      aria-hidden="true"
    >
      <div className="flex items-center font-display text-base lg:text-2xl tracking-[0.2em] uppercase text-foreground">
        <Marquee 
          items={marqueeItems} 
        />
      </div>

      {/* Subtle Grain Overlay for texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] rp-grain" />
    </section>
  );
}