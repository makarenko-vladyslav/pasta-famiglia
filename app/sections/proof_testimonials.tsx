"use client";

import { Reveal } from "@/components/mechanics";

/**
 * SECTION: ACT IV — The Proof.
 * Spotlight on client experiences with high-contrast poster typography.
 * Follows the EXACT skeleton layout for Pasta Famiglia.
 */
export function SectionProofTestimonials() {
  return (
    <section 
      id="proof_testimonials" 
      className="relative overflow-hidden bg-foreground py-[var(--space-act)] text-background"
    >
      {/* Texture overlay */}
      <div className="rp-grain absolute inset-0 pointer-events-none opacity-40" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 lg:px-10">
        {/* ACT LABEL - Ukrainian rubric */}
        <span className="block mb-8 text-sm uppercase tracking-[0.3em] font-body text-background/70">
          Відгуки гостей
        </span>

        {/* POSTER QUOTE START */}
        <span aria-hidden className="block font-display text-[clamp(4rem,10vw,7rem)] leading-none text-accent/80 select-none">
          “
        </span>

        <div className="max-w-4xl">
          <Reveal>
            <blockquote className="font-display font-semibold leading-[1.08] text-[clamp(1.9rem,4.2vw,3.6rem)]">
              Найкраща паста в моєму житті. Атмосфера справжньої Італії прямо в центрі Києва. Сюди хочеться повертатися за кожним шматочком фокачі.
            </blockquote>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <figcaption className="mt-8 flex items-center gap-4 text-sm font-body text-background/70">
            <span className="h-px w-12 bg-accent" aria-hidden />
            <span className="font-medium text-background">Тетяна Ковальчук</span>
            <span className="opacity-50">·</span>
            <span>★ 4.9 · 127 відгуків · вул. Антоновича, 44</span>
          </figcaption>
        </Reveal>

        {/* ADDITIONAL TESTIMONIALS GRID */}
        <div className="mt-14 grid gap-10 border-t border-background/15 pt-10 lg:grid-cols-2">
          <figure>
            <Reveal delay={0.2}>
              <blockquote className="text-base lg:text-lg leading-relaxed text-background/85 italic">
                «Різотто з грибами — це справжнє мистецтво. Обслуговування на найвищому рівні, неймовірно уважний персонал та затишок.»
              </blockquote>
              <figcaption className="mt-4 text-xs uppercase tracking-widest text-background/50 font-body">
                Марко Соколов
              </figcaption>
            </Reveal>
          </figure>

          <figure>
            <Reveal delay={0.3}>
              <blockquote className="text-base lg:text-lg leading-relaxed text-background/85 italic">
                «Тут готують справжню карбонару без вершків, як і має бути за каноном. Велика винна карта та дуже смачне домашнє вино.»
              </blockquote>
              <figcaption className="mt-4 text-xs uppercase tracking-widest text-background/50 font-body">
                Олена Задорожна
              </figcaption>
            </Reveal>
          </figure>
        </div>
      </div>

      {/* Decorative vertical label for desktop */}
      <div 
        aria-hidden 
        className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] rotate-180 text-background/5 text-[8vw] font-display font-bold leading-none select-none"
      >
        FAMIGLIA
      </div>
    </section>
  );
}