"use client";
import { Reveal } from "@/components/mechanics";
import { Star } from "@phosphor-icons/react";

/**
 * ACT IV: The Proof — Guest Voices
 * A high-contrast, inverted section showcasing guest testimonials.
 * Uses the vetted award composition with a focus on typography and whitespace.
 */
export function SectionProof() {
  return (
    <section id="proof" className="relative overflow-hidden bg-foreground py-[var(--space-act)] text-background">
      {/* Film grain texture for premium depth */}
      <div className="rp-grain absolute inset-0 opacity-40" />
      
      <div className="relative z-10 mx-auto max-w-5xl px-4 lg:px-10">
        {/* Act Label - Localized rubric */}
        <span className="rp-actno mb-8 block text-background/70 uppercase tracking-[0.3em] text-sm">
          Відгуки
        </span>

        {/* Decorative oversized quotation mark */}
        <span aria-hidden className="block font-display text-[7rem] leading-none text-accent">
          “
        </span>

        {/* Spotlight Quote - Poster scale display text */}
        <Reveal>
          <blockquote className="font-display font-semibold italic text-[clamp(1.9rem,4.2vw,3.6rem)] leading-tight">
            Найкраща паста в моєму житті. Атмосфера переносить тебе прямо в серце Риму, а гостинність Pasta Famiglia просто не має рівних у Києві.
          </blockquote>
        </Reveal>

        {/* Caption with rating line and review count from FACTS */}
        <Reveal delay={0.15}>
          <figcaption className="mt-8 flex flex-wrap items-center gap-4 text-sm text-background/70">
            <span className="h-px w-12 bg-accent" aria-hidden />
            <span className="font-medium text-background">Вікторія Г.</span>
            <span className="flex items-center gap-1 text-accent">
              <Star weight="fill" size={16} />
              <span className="font-display text-base leading-none">4.9</span>
            </span>
            <span className="opacity-50">127 відгуків у Google</span>
          </figcaption>
        </Reveal>

        {/* Grid of secondary voices - editorial list layout */}
        <div className="mt-14 grid gap-10 border-t border-background/15 pt-10 lg:grid-cols-2">
          <Reveal delay={0.2}>
            <figure>
              <blockquote className="text-base leading-relaxed text-background/85">
                Кожного разу, коли ми приходимо сюди з родиною, ми почуваємося як вдома. Паста ручної роботи та домашнє вино — це саме те, що потрібно для ідеального вечора.
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3 text-sm text-background/60">
                <span className="h-px w-6 bg-background/20" />
                Дмитро П.
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.3}>
            <figure>
              <blockquote className="text-base leading-relaxed text-background/85">
                Справжня італійська кухня без зайвого пафосу. Неймовірні десерти та найкращий еспресо в місті. Обов’язково спробуйте їхню фірмову лазанью.
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3 text-sm text-background/60">
                <span className="h-px w-6 bg-background/20" />
                Анна С.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}