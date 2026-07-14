"use client";
import { Reveal } from "@/components/mechanics";
import { Star } from "@phosphor-icons/react";

/**
 * SectionProof - Act IV: Social Proof
 * Spotlight quote layout with high-impact typography on an inverted background.
 */
export function SectionProof() {
  return (
    <section 
      id="proof" 
      className="relative overflow-hidden bg-foreground py-[var(--space-act)] text-background"
    >
      {/* Film grain overlay for texture on dark background */}
      <div className="rp-grain absolute inset-0 pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-5xl px-4 lg:px-10">
        {/* Act Label / Rubric */}
        <span className="rp-actno mb-8 block text-background/70 uppercase tracking-[0.3em] text-sm">
          Відгуки
        </span>

        {/* Large decorative accent quote mark */}
        <span aria-hidden className="block font-display text-[7rem] leading-none text-accent select-none">
          “
        </span>

        {/* Primary Spotlight Quote */}
        <Reveal>
          <blockquote className="font-display font-semibold text-[clamp(1.9rem,4.2vw,3.6rem)] leading-tight">
            Pasta Famiglia — це не просто ресторан, це подорож до Італії. Кожна страва наповнена любов&apos;ю та автентичними смаками, які неможливо забути.
          </blockquote>
        </Reveal>

        {/* Citation and Fact-based Rating Line */}
        <Reveal delay={0.15}>
          <figcaption className="mt-8 flex flex-wrap items-center gap-4 text-sm text-background/70">
            <span className="h-px w-12 bg-accent" aria-hidden />
            <span className="uppercase tracking-wider">Тетяна Павленко</span>
            <span className="flex items-center gap-1.5 text-accent font-mono text-base">
              <Star weight="fill" size={16} />
              4.9 / 5 (127 відгуків)
            </span>
          </figcaption>
        </Reveal>

        {/* Secondary Quotes Grid */}
        <div className="mt-14 grid gap-8 border-t border-background/15 pt-10 lg:grid-cols-2">
          <figure>
            <blockquote className="text-base leading-relaxed text-background/85">
              &ldquo;Домашня атмосфера та неймовірна карбонара. Найкраще місце для сімейної вечері у Києві. Обов&apos;язково повернемося ще.&rdquo;
            </blockquote>
            <figcaption className="mt-3 text-sm text-background/60">— Ігор С.</figcaption>
          </figure>

          <figure>
            <blockquote className="text-base leading-relaxed text-background/85">
              &ldquo;Рівень сервісу та якість інгредієнтів вражають. Трюфельна паста — мій абсолютний фаворит. Смак як у найкращих закладах Риму.&rdquo;
            </blockquote>
            <figcaption className="mt-3 text-sm text-background/60">— Анна М.</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}