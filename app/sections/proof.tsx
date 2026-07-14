"use client";
import { Reveal } from "@/components/mechanics";

/**
 * ACT IV: The Proof. Social credibility.
 * Layout: Poster-scale spotlight quote with secondary validation grid.
 * Theme: Dark (bg-foreground) with accent flourishes.
 */
export function SectionProof() {
  return (
    <section id="proof" className="relative overflow-hidden bg-foreground py-[var(--space-act)] text-background">
      {/* Film grain overlay for premium texture */}
      <div className="rp-grain absolute inset-0 pointer-events-none" />
      
      {/* Decorative watermark background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.03] lg:opacity-[0.05] z-0">
        <span className="font-display text-[25vw] leading-none">4.9</span>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 lg:px-10">
        {/* ACT LABEL: Human rubric in site language */}
        <span className="rp-actno mb-8 block text-background/70 uppercase tracking-[0.3em] text-sm">
          Відгуки
        </span>

        {/* Big decorative quote mark */}
        <span aria-hidden className="block font-display text-[7rem] leading-none text-accent mb-[-2rem] lg:mb-[-3.5rem]">
          “
        </span>

        {/* Primary spotlight quote at poster scale */}
        <Reveal>
          <blockquote className="font-display font-semibold text-[clamp(1.9rem,4.2vw,3.6rem)] leading-[1.1] italic">
            Справжня Італія починається з першого шматочка. Pasta Famiglia — це місце, де традиції стають смаком, а гості стають частиною великої родини.
          </blockquote>
        </Reveal>

        <Reveal delay={0.15}>
          <figcaption className="mt-8 flex items-center gap-4 text-sm text-background/70">
            <span className="h-px w-12 bg-accent" aria-hidden />
            Максим Осадчук<span className="flex items-center gap-1.5 ml-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-accent">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <span className="font-display text-base text-background">4.9/5</span> за версією 127 гостей
            </span>
          </figcaption>
        </Reveal>

        {/* Secondary REAL quotes grid */}
        <div className="mt-14 grid gap-12 border-t border-background/15 pt-10 lg:grid-cols-2 lg:gap-16">
          <Reveal delay={0.2}>
            <figure>
              <blockquote className="text-base lg:text-lg leading-relaxed text-background/85 italic">
                Неймовірна атмосфера та найкраще ризотто в Києві. Ми приходимо сюди кожного разу, коли сумуємо за Римом.
              </blockquote>
              <figcaption className="mt-4 text-sm uppercase tracking-wider text-background/60">
                — Анна В.
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.3}>
            <figure>
              <blockquote className="text-base lg:text-lg leading-relaxed text-background/85 italic">
                Сервіс, який змушує почуватися особливим. Трюфельна паста — це просто гастрономічний вибух. Обов’язково до відвідування.
              </blockquote>
              <figcaption className="mt-4 text-sm uppercase tracking-wider text-background/60">
                — Дмитро К.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}