"use client";
import { Reveal } from "@/components/mechanics";

/**
 * SectionProofSpotlight
 * ACT IV: The Proof (Part 1).
 * Focused on a high-impact social proof spotlight with premium typography.
 */
export function SectionProofSpotlight() {
  return (
    <section id="proof_spotlight" className="relative overflow-hidden bg-foreground py-[var(--space-act)] text-background">
      <div className="rp-grain absolute inset-0 opacity-40" />
      
      <div className="relative z-10 mx-auto max-w-5xl px-4 lg:px-10">
        {/* ACT LABEL */}
        <span className="rp-actno mb-8 block text-sm font-body uppercase tracking-[0.3em] text-background/60">
          Відгуки
        </span>

        {/* QUOTE DECORATION */}
        <span aria-hidden className="block font-display text-[7rem] leading-none text-accent">
          “
        </span>

        {/* MAIN QUOTE */}
        <Reveal>
          <blockquote className="font-display font-semibold italic leading-[1.08] text-[clamp(1.9rem,4.2vw,3.6rem)]">
            Справжній смак Італії у самому серці Києва. Кожна деталь, від аромату базиліку до текстури пасти, — бездоганна.
          </blockquote>
        </Reveal>

        {/* ATTRIBUTION & RATING */}
        <Reveal delay={0.15}>
          <figcaption className="mt-8 flex flex-wrap items-center gap-4 text-sm font-body uppercase tracking-widest text-background/70 lg:text-lg">
            <span className="h-px w-12 bg-accent" aria-hidden />
            <span>Олена Тарасова</span>
            <span className="hidden opacity-30 lg:inline">/</span>
            <span className="font-mono text-sm tracking-normal text-accent/90">
              ★ 4.9 · 127 відгуків
            </span>
          </figcaption>
        </Reveal>

        {/* SECONDARY QUOTES GRID - HIDDEN if no extra verbatim copy is provided, 
            but kept in structural logic per skeleton mandate. 
            Since COPY is empty, we omit the grid items to maintain integrity. */}
      </div>
    </section>
  );
}