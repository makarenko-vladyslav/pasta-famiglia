"use client";

import { Marquee, Reveal } from "@/components/mechanics";

/**
 * SECTION: MARQUEE-SPACER
 * ROLE: INTERSTITIAL: THE RHYTHM.
 * 
 * A high-kinetic typographic break separating the lunch menu from the craft section.
 * Uses a poster-scale infinite scroll to maintain energy and brand presence.
 */
export function SectionMarqueeSpacer() {
  // Items as defined in the SECTION SPEC animations requirement
  const marqueeItems = [
    "CARBONARA",
    "AMATRICIANA",
    "NAPOLETANA",
    "FRESH PASTA"
  ];

  return (
    <section 
      className="w-full py-12 border-y border-foreground/10 overflow-hidden bg-surface"
      aria-hidden="true"
    >
      <Reveal delay={0.1}>
        <div className="flex items-center">
          <Marquee 
            items={marqueeItems} 
            className="font-display italic text-[clamp(4rem,10vw,8.5rem)] uppercase tracking-tighter leading-[0.9] py-2"
          />
        </div>
      </Reveal>
      
      {/* 
          Note: Speed is handled by the Marquee mechanic. 
          Typography uses poster-scale clamp to ensure visual impact across devices.
          The border-y provides the editorial hairline divider as per premium constants.
      */}
    </section>
  );
}