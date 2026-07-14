"use client";
import { Reveal } from "@/components/mechanics";

/**
 * ACT II The Offer — Business Speed
 * A high-impact, full-bleed visual pause emphasizing the lunch offer.
 * Follows the layout law for graded-photo statements.
 */
export function SectionMenuLunch() {
  return (
    <section id="menu_lunch" className="relative min-h-[72vh] overflow-hidden">
      {/* Background Layer */}
      <img 
        src="https://images.pexels.com/photos/3769740/pexels-photo-3769740.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
        alt="Обідня пропозиція в ресторані Pasta Famiglia" 
        className="rp-graded absolute inset-0 h-full w-full object-cover" 
        loading="lazy"
      />
      
      {/* Scrim for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
      
      {/* Texture Layer */}
      <div className="rp-grain absolute inset-0" />

      {/* Content Container */}
      <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-[88rem] flex-col justify-end px-4 pb-16 lg:px-10">
        <Reveal>
          <p className="font-display font-semibold text-background text-[clamp(1.9rem,4vw,3.4rem)] max-w-[22ch] leading-tight">
            Бізнес-ланчі: смак Італії у ритмі міста
          </p>
        </Reveal>
        
        <Reveal delay={0.12}>
          <span className="mt-6 inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-background/70">
            <span className="h-px w-10 bg-accent" aria-hidden />
            Комплексний сет за 350₴
          </span>
        </Reveal>
      </div>
    </section>
  );
}