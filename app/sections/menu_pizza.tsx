"use client";
import { Reveal } from "@/components/mechanics";

/**
 * ACT II: The Offer. Editorial menu - Part 2 (Atmospheric Pause).
 * 
 * This section acts as a visual palette cleanser and atmospheric transition 
 * between dense menu parts, focusing on the craft of Neapolitan pizza.
 * 
 * SKELETON LAW: Full-bleed graded photo with a single brand statement.
 */
export function SectionMenuPizza() {
  return (
    <section id="menu_pizza" className="relative min-h-[72vh] overflow-hidden">
      {/* Background Media */}
      <img 
        src="https://images.pexels.com/photos/12720645/pexels-photo-12720645.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1920" 
        alt="Традиційна неаполітанська піца на дровах" 
        className="rp-graded absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      
      {/* Visual Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
      <div className="rp-grain absolute inset-0 pointer-events-none" />
      
      {/* Content Layer */}
      <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-[88rem] flex-col justify-end px-4 pb-16 lg:px-10 lg:pb-24">
        <div className="max-w-[22ch]">
          <Reveal>
            <p className="font-display font-semibold text-background text-[clamp(1.9rem,4vw,3.4rem)] leading-[1.1]">
              Тісто, що визріває 48 годин, та живий вогонь дровʼяної печі
            </p>
          </Reveal>
        </div>
        
        <Reveal delay={0.12}>
          <div className="mt-8 inline-flex items-center gap-4 text-sm uppercase tracking-[0.25em] text-background/70">
            <span className="h-px w-10 bg-accent" aria-hidden="true" />
            <span>Неаполітанська класика</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}