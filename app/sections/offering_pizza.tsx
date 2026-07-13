"use client";

import { Reveal } from "@/components/mechanics";

/**
 * SECTION: ACT II — The Offering (Pizza Focus)
 * A breathing pause with a full-bleed visual statement about the wood-fired speed.
 */
export function SectionOfferingPizza() {
  return (
    <section 
      id="offering_pizza" 
      className="relative min-h-[72vh] overflow-hidden"
    >
      {/* Background Media & Treatments */}
      <img 
        src="https://images.pexels.com/photos/8895216/pexels-photo-8895216.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
        alt="Гаряча піца з дров'яної печі Pasta Famiglia" 
        className="rp-graded absolute inset-0 h-full w-full object-cover" 
        loading="lazy"
      />
      
      {/* Scrim for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
      
      {/* Texture Overlay */}
      <div className="rp-grain absolute inset-0 pointer-events-none" />

      {/* Content Layout */}
      <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-[88rem] flex-col justify-end px-4 pb-16 lg:px-10">
        <div className="max-w-[22ch]">
          <Reveal>
            <h2 className="font-display font-semibold leading-[1.05] text-background text-[clamp(1.9rem,4vw,3.4rem)]">
              Піца з дров’яної печі: 20 хвилин від вогню до столу
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="mt-6 inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-background/70">
            <span className="h-px w-10 bg-accent" aria-hidden="true" />
            <span>Італійські традиції вогню</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}