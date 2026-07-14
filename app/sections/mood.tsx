"use client";
import { Reveal } from "@/components/mechanics";

/**
 * ACT III The Soul: Atmosphere (Dark Act)
 * A breathing pause between dense acts using a full-bleed graded photo
 * with a high-impact brand statement.
 */
export function SectionMood() {
  return (
    <section id="mood" className="relative min-h-[72vh] overflow-hidden">
      {/* Background Media with treatment */}
      <img 
        src="https://images.pexels.com/photos/32525228/pexels-photo-32525228.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
        alt="Атмосфера італійського затишку Pasta Famiglia" 
        className="rp-graded absolute inset-0 h-full w-full object-cover"
      />
      
      {/* Scrim Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
      
      {/* Film Grain Effect */}
      <div className="rp-grain absolute inset-0" />

      {/* Content Container */}
      <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-[88rem] flex-col justify-end px-4 pb-16 lg:px-10">
        <Reveal>
          <p className="font-display font-semibold text-background text-[clamp(1.9rem,4vw,3.4rem)] max-w-[22ch] uppercase leading-tight">
            Душа Італії у кожному моменті
          </p>
        </Reveal>
        
        <Reveal delay={0.12}>
          <span className="mt-6 inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-background/70">
            <span 
              className="h-px w-10 bg-accent" 
              style={{ backgroundColor: "bg-accent" }} 
              aria-hidden 
            />
            Атмосфера
          </span>
        </Reveal>
      </div>
    </section>
  );
}