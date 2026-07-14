"use client";
import { Reveal } from "@/components/mechanics";

/**
 * SectionFamilyAtmosphere (ACT III: The Soul - Part B)
 * Layout Law: Full-bleed graded photo with brand statement.
 * This section acts as a visual and emotional pause between content-heavy acts.
 */
export function SectionFamilyAtmosphere() {
  return (
    <section id="family_atmosphere" className="relative min-h-[72vh] overflow-hidden">
      {/* Background Media */}
      <img 
        src="https://images.pexels.com/photos/19842825/pexels-photo-19842825.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
        alt="Затишна атмосфера та інтер'єр Pasta Famiglia" 
        className="rp-graded absolute inset-0 h-full w-full object-cover" 
        loading="lazy"
      />
      
      {/* Scrims & Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
      <div className="rp-grain absolute inset-0 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-[88rem] flex-col justify-end px-4 pb-16 lg:px-10">
        <div className="max-w-[800px]">
          <Reveal>
            <p className="font-display font-semibold text-background text-[clamp(1.9rem,4vw,3.4rem)] leading-[1.1] max-w-[22ch]">
              Дім, де аромат свіжої пасти поєднується з теплом щирих розмов.
            </p>
          </Reveal>
          
          <Reveal delay={0.12}>
            <span className="mt-6 inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-background/70">
              <span className="h-px w-10 bg-accent" aria-hidden="true" />
              РОДИННИЙ ЗАТИШОК
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}