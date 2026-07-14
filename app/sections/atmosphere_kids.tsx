"use client";
import { Reveal } from "@/components/mechanics";

/**
 * ACT III: Atmosphere & Kids
 * A breathing pause with full-bleed media focusing on the soul of Pasta Famiglia.
 */
export function SectionAtmosphereKids() {
  return (
    <section id="atmosphere_kids" className="relative min-h-[72vh] overflow-hidden">
      {/* Background Media */}
      <img 
        src="https://images.pexels.com/photos/4134537/pexels-photo-4134537.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
        alt="Інтер'єр ресторану Pasta Famiglia з дитячою зоною" 
        className="rp-graded absolute inset-0 h-full w-full object-cover" 
        loading="lazy"
      />
      
      {/* Visual Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
      <div className="rp-grain absolute inset-0" />
      
      {/* Content Container */}
      <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-[88rem] flex-col justify-end px-4 pb-16 lg:px-10">
        <div className="max-w-[40rem]">
          <Reveal>
            <p className="font-display font-semibold text-background text-[clamp(1.9rem,4vw,3.4rem)] leading-[1.1] max-w-[22ch]">
              Місце, де кожна родина стає ближчою.
            </p>
          </Reveal>
          
          <Reveal delay={0.12}>
            <span className="mt-6 inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-background/70">
              <span className="h-px w-10 bg-accent" aria-hidden="true" />
              Сімейний затишок
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}