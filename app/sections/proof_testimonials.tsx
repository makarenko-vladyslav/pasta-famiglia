"use client";

import { Reveal } from "@/components/mechanics";

/**
 * ACT IV — The Proof: Social proof spotlight
 * A centered, high-contrast inverted section featuring a dominant quote 
 * and supplementary guest testimonials.
 */
export function SectionProofTestimonials() {
  return (
    <section 
      id="proof_testimonials" 
      className="relative overflow-hidden bg-foreground py-[var(--space-act)] text-background"
    >
      {/* Decorative grain overlay for premium texture */}
      <div className="rp-grain absolute inset-0 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 lg:px-10">
        {/* ACT LABEL */}
        <Reveal>
          <span className="rp-actno mb-8 block text-sm uppercase tracking-[0.3em] text-background/60">
            Відгуки
          </span>
        </Reveal>

        {/* LARGE QUOTE DECOR */}
        <span aria-hidden className="block font-display text-[clamp(4rem,10vw,7rem)] leading-none text-accent mb-[-0.2em] select-none">
          “
        </span>

        {/* SPOTLIGHT QUOTE */}
        <Reveal>
          <blockquote className="font-display font-medium italic leading-[1.08] text-[clamp(1.9rem,4.2vw,3.6rem)] max-w-[18ch] lg:max-w-[22ch]">
            Найкраща карбонара за межами Риму. В Pasta Famiglia панує справжня італійська душа в кожній деталі.
          </blockquote>
        </Reveal>

        {/* AUTHOR & RATING LINE */}
        <Reveal delay={0.15}>
          <figcaption className="mt-10 flex flex-wrap items-center gap-4 text-sm md:text-base text-background/70">
            <span className="h-px w-12 bg-accent" aria-hidden />
            <span className="font-medium text-background">Олександр Пономаренко</span>
            <span className="hidden md:inline text-background/30">•</span>
            <p className="flex items-center gap-2">
              <span className="text-accent">★ 4.9</span>
              <span className="opacity-60">· 127 відгуків · вул. Антоновича, 44</span>
            </p>
          </figcaption>
        </Reveal>

        {/* SECONDARY QUOTES GRID */}
        <div className="mt-20 grid gap-12 border-t border-background/15 pt-12 lg:grid-cols-2 lg:gap-20">
          <Reveal delay={0.2}>
            <figure className="max-w-md">
              <blockquote className="text-lg leading-relaxed text-background/85">
                «Домашня паста та бездоганний сервіс. Обов'язково спробуйте їхню фірмову лазанью — це справжнє гастрономічне відкриття для нашої родини.»
              </blockquote>
              <figcaption className="mt-4 text-sm uppercase tracking-widest text-background/50">
                — Олена Ващук
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.3}>
            <figure className="max-w-md">
              <blockquote className="text-lg leading-relaxed text-background/85">
                «Затишок, який рідко зустрінеш у великому місті. Відчуваємо себе як удома в Італії щоразу, коли приходимо на недільний обід.»
              </blockquote>
              <figcaption className="mt-4 text-sm uppercase tracking-widest text-background/50">
                — Марк Остапчук
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}