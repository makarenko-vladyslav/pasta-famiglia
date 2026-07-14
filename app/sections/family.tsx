"use client";

import { Reveal, Magnetic } from "@/components/mechanics";
import { ArrowRight } from "@phosphor-icons/react";

/**
 * ACT III: The Soul (Atmosphere)
 * Layout: Centered text block with an arched photo frame below.
 * Typography: Poster scale display + readable lead copy.
 */
export function SectionFamily() {
  return (
    <section className="relative py-[var(--space-act)] bg-background overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        {/* Text Content Block */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <Reveal delay={0.1}>
            <span className="inline-block text-sm uppercase tracking-[0.3em] text-muted mb-6">
              СІМЕЙНИЙ ЗАТИШОК
            </span>
          </Reveal>

          <Reveal delay={0.2}>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] mb-8 max-w-[20ch]">
              Відпочинок для всієї родини
            </h2>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="font-body text-lg lg:text-xl text-foreground/80 max-w-[60ch] mb-10">
              Поки ви спілкуєтеся, діти проводять час у спеціально обладнаній ігровій кімнаті з аніматором (працює у вихідні).
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <Magnetic>
              <a
                href="#hero"
                className="group flex items-center gap-2 bg-foreground text-background px-5 py-3 text-sm lg:text-base transition-transform hover:scale-105"
                style={{ borderRadius: "var(--radius-control)" }}
              >
                Переглянути дитяче меню
                <ArrowRight weight="bold" size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
            </Magnetic>
          </Reveal>
        </div>

        {/* Arched Media Frame */}
        <div className="relative w-full max-w-4xl mx-auto px-4 lg:px-0">
          <Reveal delay={0.5}>
            <div 
              className="relative aspect-[4/5] lg:aspect-[16/10] overflow-hidden group"
              style={{ 
                borderTopLeftRadius: "500px", 
                borderTopRightRadius: "500px",
                borderBottomLeftRadius: "var(--radius-surface)",
                borderBottomRightRadius: "var(--radius-surface)"
              }}
            >
              <img
                src="https://images.pexels.com/photos/3661365/pexels-photo-3661365.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
                alt="Family atmosphere at Pasta Famiglia"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-foreground/5 pointer-events-none" />
              <div className="rp-grain absolute inset-0 opacity-20 pointer-events-none" />
            </div>
          </Reveal>
          
          {/* Decorative side label (lg only) */}
          <div className="hidden lg:block absolute -right-12 top-1/2 -translate-y-1/2 rotate-90 origin-center">
            <span className="text-xs uppercase tracking-[0.5em] text-muted/40 whitespace-nowrap">
              PASTA FAMIGLIA MOMENTS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}