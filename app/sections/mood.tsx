"use client";
import { Reveal } from "@/components/mechanics";

/**
 * ACT III: The Soul. Atmosphere act.
 * A breathing pause using a full-bleed graded photo with a brand statement.
 * Layout adheres 1:1 to the vetted award skeleton.
 */
export function SectionMood() {
  return (
    <section id="mood" className="relative min-h-[72vh] overflow-hidden">
      {/* Background Layer: Graded Media */}
      <img 
        src="https://images.pexels.com/photos/10059904/pexels-photo-10059904.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
        alt="Атмосфера італійського ресторану Pasta Famiglia" 
        className="rp-graded absolute inset-0 h-full w-full object-cover" 
        loading="lazy"
      />
      
      {/* Scrim for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
      
      {/* Texture Overlay */}
      <div className="rp-grain absolute inset-0" />
      
      {/* Content Container */}
      <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-[88rem] flex-col justify-end px-4 pb-16 lg:px-10">
        <Reveal>
          <p className="font-display font-semibold text-background text-[clamp(1.9rem,4vw,3.4rem)] max-w-[22ch] leading-tight">
            Місце, де затишок зустрічається з автентичним смаком Італії
          </p>
        </Reveal>
        
        <Reveal delay={0.12}>
          <span className="mt-6 inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-background/70">
            <span className="h-px w-10 bg-accent" aria-hidden="true" />
            АТМОСФЕРА ТА ДУША
          </span>
        </Reveal>
      </div>
    </section>
  );
}