"use client";
import { Reveal } from "@/components/mechanics";

/**
 * ACT IV: The Proof — Voices
 * A spotlight on guest experiences, presented with editorial weight.
 * Uses an inverted color scheme (bg-foreground) to create a visual break.
 */
export function SectionTestimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-foreground py-[var(--space-act)] text-background">
      {/* Decorative grain overlay for premium texture */}
      <div className="rp-grain absolute inset-0 opacity-40" />
      
      <div className="relative z-10 mx-auto max-w-5xl px-4 lg:px-10">
        {/* ACT LABEL: Editorial rubric */}
        <span className="rp-actno mb-8 block text-sm uppercase tracking-[0.3em] text-background/70">
          Відгуки
        </span>

        {/* LARGE DECORATIVE QUOTE MARK */}
        <span aria-hidden className="block font-display text-[7rem] leading-none text-accent">
          “
        </span>

        {/* SPOTLIGHT QUOTE: Poster scale impact */}
        <Reveal>
          <blockquote className="font-display font-semibold text-[clamp(1.9rem,4.2vw,3.6rem)] leading-[1.1] tracking-tight">
            Найкраща паста в моєму житті. Атмосфера справжньої італійської родини в самому серці Києва.
          </blockquote>
        </Reveal>

        {/* AUTHOR & RATING: Factual context */}
        <Reveal delay={0.15}>
          <figcaption className="mt-8 flex items-center gap-4 text-sm uppercase tracking-widest text-background/70">
            <span className="h-px w-12 bg-accent" aria-hidden />
            Марія Кравченко · 4.9/5 (127 відгуків)
          </figcaption>
        </Reveal>

        {/* ADDITIONAL VOICES: Editorial grid for density */}
        <div className="mt-14 grid gap-12 border-t border-background/15 pt-10 lg:grid-cols-2 lg:gap-16">
          <figure>
            <blockquote className="font-display text-lg leading-relaxed text-background/85 lg:text-xl">
              «Неймовірне обслуговування та автентичні рецепти. Справжня італійська душа у кожній страві та кожному жесті персоналу.»
            </blockquote>
            <figcaption className="mt-4 text-sm font-medium uppercase tracking-wider text-accent">
              Олексій Потапенко
            </figcaption>
          </figure>

          <figure>
            <blockquote className="font-display text-lg leading-relaxed text-background/85 lg:text-xl">
              «Улюблене місце для недільних обідів. Тепло, затишно та неймовірно смачно. Тут розуміють, що таке гостинність.»
            </blockquote>
            <figcaption className="mt-4 text-sm font-medium uppercase tracking-wider text-accent">
              Олена Вишневська
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}