"use client";
import { Reveal } from "@/components/mechanics";

/**
 * SECTION: Atmosphere (Act III)
 * Role: Vibe check. Full-bleed graded photo with a brand statement.
 * Layout: Full-screen height with bottom-anchored typography.
 */
export function SectionAtmosphere() {
  return (
    <section id="atmosphere" className="relative min-h-[72vh] overflow-hidden">
      {/* Background Media */}
      <img 
        src="https://images.pexels.com/photos/6248854/pexels-photo-6248854.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
        alt="Затишний інтер'єр та атмосфера ресторану Pasta Famiglia" 
        className="rp-graded absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      
      {/* Overlay Treatments */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
      <div className="rp-grain absolute inset-0" />

      {/* Content Container */}
      <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-[88rem] flex-col justify-end px-4 pb-16 lg:px-10">
        <Reveal>
          <p className="font-display font-semibold leading-[1.05] text-background text-[clamp(1.9rem,4vw,3.4rem)] max-w-[22ch]">
            Місце, де кожна мить наповнена справжнім італійським теплом
          </p>
        </Reveal>
        
        <Reveal delay={0.12}>
          <span className="mt-6 inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-background/70">
            <span className="h-px w-10 bg-accent" aria-hidden />
            ДУША PASTA FAMIGLIA
          </span>
        </Reveal>
      </div>
    </section>
  );
}