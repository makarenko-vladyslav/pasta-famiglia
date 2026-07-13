"use client";

import { Reveal } from "@/components/mechanics";

/**
 * SECTION: menu_oven
 * ACT II: The Offer - Wood-Fired Oven signature.
 * SKELETON: Full-bleed graded photo with one brand statement over it.
 * DESIGN: Breathing pause with high-impact editorial type over a wood-fired flame visual.
 */
export function SectionMenuOven() {
  return (
    <section id="menu_oven" className="relative min-h-[72vh] overflow-hidden">
      <img 
        src="https://images.pexels.com/photos/31837779/pexels-photo-31837779.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
        alt="Традиційна італійська піч на дровах у Pasta Famiglia" 
        className="rp-graded absolute inset-0 h-full w-full object-cover" 
        loading="lazy"
      />
      
      {/* Visual Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
      <div className="rp-grain absolute inset-0 opacity-40" />
      
      {/* Content Layer */}
      <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-[88rem] flex-col justify-end px-4 pb-16 lg:px-10">
        
        {/* Trust Line: Rating & Location (As per rules, derived from FACTS) */}
        <Reveal delay={0.05}>
          <p className="mb-4 text-xs lg:text-sm font-body text-background/60 tracking-wider">
            ★ 4.9 · 127 відгуків · вул. Антоновича, 44, Київ
          </p>
        </Reveal>

        <Reveal>
          <h2 className="font-display font-semibold leading-[1.05] tracking-[-0.02em] text-background text-[clamp(1.9rem,4vw,3.4rem)] max-w-[22ch]">
            Живий вогонь та італійська майстерність у кожній страві з нашої печі.
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <span className="mt-6 inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-background/70">
            <span className="h-px w-10 bg-accent" aria-hidden />
            ПІЧ НА ДРОВАХ
          </span>
        </Reveal>
      </div>
    </section>
  );
}