"use client";

import { Reveal } from "@/components/mechanics";

/**
 * ACT IV: Social Proof
 * Layout: Inverted spotlight act with high-impact display quote.
 * Adheres to the SKELETON LAW for award-winning composition.
 */
export function SectionSocialProof() {
  return (
    <section 
      id="social-proof" 
      className="relative overflow-hidden bg-foreground py-[var(--space-act)] text-background"
    >
      {/* Film grain texture overlay */}
      <div className="rp-grain absolute inset-0 opacity-20" />
      
      <div className="relative z-10 mx-auto max-w-5xl px-4 lg:px-10">
        {/* ACT LABEL: Using the COPY headline character-for-character */}
        <Reveal>
          <h2 className="rp-actno mb-8 block text-sm font-body tracking-[0.3em] uppercase text-background/70">
            Що кажуть наші гості
          </h2>
        </Reveal>

        {/* Poster scale quote mark */}
        <span aria-hidden className="block font-display text-[7rem] leading-none text-accent select-none">
          “
        </span>

        {/* ONE spotlight quote at poster scale — not a card carousel */}
        <Reveal delay={0.1}>
          <blockquote className="font-display font-semibold italic text-[clamp(1.9rem,4.2vw,3.6rem)] leading-[1.1] text-balance">
            Нарешті в Києві місце, де пасту готують самі, а не просто варять куплену. Дуже швидко принесли обід, офіціанти уважні.
          </blockquote>
        </Reveal>

        {/* Author and Rating Line - Author in Source Code Pro style as per spec intent */}
        <Reveal delay={0.2}>
          <figcaption className="mt-8 flex flex-wrap items-center gap-4 text-sm font-medium tracking-wide">
            <span className="h-px w-12 bg-accent" aria-hidden />
            <span className="font-mono uppercase text-background/90">Гість Pasta Famiglia</span>
            <span className="text-background/40" aria-hidden>·</span>
            <span className="text-background/70">
              4.9 рейтинг у Google Maps · 127 реальних відгуків
            </span>
          </figcaption>
        </Reveal>

        {/* 
            Extra quotes grid is omitted as per SKELETON LAW ("REMOVE this whole grid if only one review exists").
            Only the primary spotlight quote from COPY is rendered.
        */}
      </div>
    </section>
  );
}