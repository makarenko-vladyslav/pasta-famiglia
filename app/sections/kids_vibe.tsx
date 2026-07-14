"use client";
import { Reveal } from "@/components/mechanics";

export function SectionKidsVibe() {
  return (
    <section id="kids_vibe" className="relative min-h-[72vh] overflow-hidden">
      {/* Background Media */}
      <img 
        src="https://images.pexels.com/photos/6248853/pexels-photo-6248853.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
        alt="Дитячий простір у Pasta Famiglia" 
        className="rp-graded absolute inset-0 h-full w-full object-cover" 
        loading="lazy"
      />
      
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
      <div className="rp-grain absolute inset-0" />
      
      {/* Decorative Act Number (Fulfilling SPEC intent while respecting SKELETON layout) */}
      <div className="absolute top-10 right-10 pointer-events-none select-none hidden lg:block">
        <span className="font-display text-[clamp(6rem,12vw,10rem)] leading-none text-background opacity-10">
          03
        </span>
      </div>

      {/* Content Layout */}
      <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-[88rem] flex-col justify-end px-4 pb-16 lg:px-10">
        <Reveal>
          <p className="font-display font-semibold text-background text-[clamp(1.9rem,4vw,3.4rem)] max-w-[22ch] leading-tight">
            Простір, де малеча стає головними гостями нашого італійського дому
          </p>
        </Reveal>
        
        <Reveal delay={0.12}>
          <span className="mt-6 inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-background/70">
            <span className="h-px w-10 bg-accent" aria-hidden />
            Дитяча територія
          </span>
        </Reveal>
      </div>
    </section>
  );
}