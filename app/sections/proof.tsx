"use client";
import { Reveal } from "@/components/mechanics";

/**
 * Section: The Proof (Social Spotlight)
 * Role: ACT IV - Social Proof and Reviews
 * Layout: Inverted dark background with poster-scale spotlight quote.
 */
export function SectionProof() {
  return (
    <section id="proof" className="relative overflow-hidden bg-foreground py-[var(--space-act)] text-background">
      {/* Film grain overlay for premium texture */}
      <div className="rp-grain absolute inset-0 opacity-40" />
      
      <div className="relative z-10 mx-auto max-w-5xl px-4 lg:px-10">
        {/* ACT LABEL: Ukrainian for "Reviews" or "Recognition" */}
        <span className="rp-actno mb-8 block text-sm tracking-[0.3em] uppercase text-background/70">
          Відгуки
        </span>

        {/* Decorative Quote Mark */}
        <span aria-hidden className="block font-display text-[clamp(4rem,10vw,7rem)] leading-none text-accent">
          “
        </span>

        {/* Primary Spotlight Quote */}
        <Reveal>
          <blockquote className="font-display font-semibold text-[clamp(1.9rem,4.2vw,3.6rem)] leading-tight">
            Це місце, де кожна страва розповідає історію, а справжня італійська душа відчувається в кожному шматочку домашньої пасти.
          </blockquote>
        </Reveal>

        {/* Primary Citation with Rating */}
        <Reveal delay={0.15}>
          <figcaption className="mt-8 flex items-center gap-4 text-sm font-medium tracking-wide text-background/70">
            <span className="h-px w-12 bg-accent" aria-hidden />
            Олена Ковальчук · 4.9 ★ (127 відгуків)
          </figcaption>
        </Reveal>

        {/* Secondary Quotes Grid */}
        <div className="mt-14 grid gap-8 border-t border-background/15 pt-10 lg:grid-cols-2">
          <figure>
            <blockquote className="text-base leading-relaxed text-background/85 italic">
              «Найкраща карбонара в Києві. Атмосфера настільки затишна, що забуваєш про час. Сервіс бездоганний.»
            </blockquote>
            <figcaption className="mt-3 text-sm font-medium text-background/60">
              — Андрій Марченко
            </figcaption>
          </figure>

          <figure>
            <blockquote className="text-base leading-relaxed text-background/85 italic">
              «Відчувається любов до деталей. Від власного оливкової олії до неймовірно привітної команди. Обов’язково повернуся.»
            </blockquote>
            <figcaption className="mt-3 text-sm font-medium text-background/60">
              — Юлія Савченко
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}