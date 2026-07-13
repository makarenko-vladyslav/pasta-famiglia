"use client";

import { Reveal } from "@/components/mechanics";

/**
 * SECTION: Atmosphere (ACT III: The Soul)
 * A breathing pause between dense acts. Full-bleed graded photo with brand statement.
 * Follows the MANDATORY SKELETON for Act III soul sections.
 */
export function SectionAtmosphere() {
  return (
    <section id="atmosphere" className="relative min-h-[72vh] overflow-hidden">
      {/* Background Media with Premium Treatments */}
      <img 
        src="https://images.pexels.com/photos/10406184/pexels-photo-10406184.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
        alt="Затишний інтер'єр італійського ресторану Pasta Famiglia" 
        className="rp-graded absolute inset-0 h-full w-full object-cover" 
        loading="lazy"
      />
      
      {/* Visual Scrim for Text Legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
      
      {/* Film Grain Texture Overlay */}
      <div className="rp-grain absolute inset-0" />

      {/* Content Layer */}
      <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-[88rem] flex-col justify-end px-4 pb-16 lg:px-10">
        <Reveal>
          <p className="font-display font-semibold leading-[1.05] tracking-[-0.02em] text-background text-[clamp(1.9rem,4vw,3.4rem)] max-w-[22ch]">
            Місце, де час уповільнюється, а кожна вечеря перетворюється на теплу сімейну історію.
          </p>
        </Reveal>
        
        <Reveal delay={0.12}>
          <span className="mt-6 inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-background/70">
            <span className="h-px w-10 bg-accent" aria-hidden />
            Атмосфера та затишок
          </span>
        </Reveal>
      </div>
    </section>
  );
}