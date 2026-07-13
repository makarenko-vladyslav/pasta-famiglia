"use client";

import { Reveal, Marquee } from "@/components/mechanics";

/**
 * SECTION: Marquee Interstitial
 * ROLE: ACT II: Transition - The Living Layer.
 * LAYOUT: Full-bleed horizontal crawl, high-contrast ribbon.
 */
export function SectionMarqueeInterstitial() {
  const ingredients = [
    "SEMOLA CAPUTO",
    "БЕЗ ПЛАТИ ЗА ОБСЛУГОВУВАННЯ",
    "20 ХВИЛИН АБО БЕЗКОШТОВНО",
    "PASTA FAMIGLIA",
    "ВЛАСНЕ ВИРОБНИЦТВО",
    "TRADIZIONE ITALIANA",
    "AL DENTE ALWAYS",
    "КИЇВ • АНТОНОВИЧА 44",
    "FRESH PASTA DAILY",
    "CASA DELLA PASTA"
  ];

  return (
    <section className="relative w-full py-8 overflow-hidden bg-foreground text-background select-none">
      <Reveal delay={0.1}>
        <div className="flex items-center font-mono uppercase text-[1.1rem] lg:text-[1.2rem] tracking-[0.2em] lg:tracking-widest whitespace-nowrap">
          <Marquee 
            items={ingredients} 
            // The Marquee component from mechanics typically accepts an array 
            // and handles the infinite loop internally.
          />
        </div>
      </Reveal>
      
      {/* Subtle overlay to ensure the "speed" feels consistent across viewport widths */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .marquee-container {
            animation-duration: 15s !important;
          }
        }
      `}</style>
    </section>
  );
}