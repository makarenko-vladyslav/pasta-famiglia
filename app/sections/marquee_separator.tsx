"use client";
import { Marquee, Reveal } from "@/components/mechanics";

/**
 * SECTION: Marquee Separator
 * ROLE: Interstitial: Living Layer
 * DESIGN: Full-bleed border-y, infinite ingredients scroll.
 */
export function SectionMarqueeSeparator() {
  // Verbatim ingredients from spec
  const items = [
    "SEMOLA",
    "CAPUTO",
    "MUTTI",
    "FRESH PASTA",
    "SEMOLA",
    "CAPUTO",
    "MUTTI",
    "FRESH PASTA",
    "SEMOLA",
    "CAPUTO",
    "MUTTI",
    "FRESH PASTA"
  ];

  return (
    <section 
      className="relative w-full overflow-hidden border-y border-foreground/10 py-6 bg-background"
    >
      <Reveal delay={0.1}>
        <div className="flex items-center select-none">
          <Marquee 
            items={items} 
            className="font-display text-sm lg:text-base uppercase tracking-[0.3em] text-foreground flex gap-x-12"
          />
        </div>
      </Reveal>
      
      {/* Decorative dot separator styling is often handled by the Marquee component spacing, 
          but we ensure the container remains tight to the spec's py-6. */}
      
      <style jsx global>{`
        /* Energy injection for mobile scroll as per spec */
        @media (max-width: 768px) {
          .marquee-inner { 
            animation-duration: 15s !important; 
          }
        }
      `}</style>
    </section>
  );
}