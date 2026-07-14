"use client";
import { Reveal, TiltCard } from "@/components/mechanics";

/**
 * ACT IV: The Proof.
 * A social validation section using an inverted color palette (dark ground) 
 * to create a cinematic spotlight for a high-authority testimonial.
 */
export function SectionProof() {
  return (
    <section id="proof" className="relative overflow-hidden bg-foreground py-[var(--space-act)] text-background">
      {/* Texture overlay for premium depth */}
      <div className="rp-grain absolute inset-0 opacity-40 pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-5xl px-4 lg:px-10">
        {/* ACT LABEL / KICKER */}
        <span className="mb-8 block text-sm uppercase tracking-[0.3em] text-background/60">
          Відгуки
        </span>

        {/* SPOTLIGHT QUOTE */}
        <div className="relative">
          <span aria-hidden className="block font-display text-[clamp(4rem,10vw,7rem)] leading-none text-accent select-none">
            “
          </span>
          
          <TiltCard>
            <Reveal>
              <blockquote className="font-display font-semibold text-[clamp(1.9rem,4.2vw,3.6rem)] leading-[1.1] text-balance">
                Найкраща паста в Києві. Атмосфера справжньої Італії, де кожен інгредієнт розповідає історію. Обов’язково до відвідування кожному.
              </blockquote>
            </Reveal>
          </TiltCard>

          <Reveal delay={0.15}>
            <figcaption className="mt-10 flex items-center gap-4 text-sm font-medium tracking-widest uppercase">
              <span className="h-px w-12 bg-accent" aria-hidden />
              Олександр Кравченко<span className="font-mono text-accent">4.9 ★ Google Maps</span>
            </figcaption>
          </Reveal>
        </div>

        {/* SECONDARY QUOTES GRID */}
        <div className="mt-20 grid gap-12 border-t border-background/15 pt-12 lg:grid-cols-2 lg:gap-20">
          <figure>
            <Reveal delay={0.2}>
              <blockquote className="text-base lg:text-lg leading-relaxed text-background/85">
                «Неймовірне обслуговування та автентичні рецепти. Карбонара — це просто щось неймовірне. Дякую за чудовий вечір!»
              </blockquote>
              <figcaption className="mt-4 text-xs tracking-[0.2em] text-background/50 uppercase">
                Марія Бондар
              </figcaption>
            </Reveal>
          </figure>

          <figure>
            <Reveal delay={0.3}>
              <blockquote className="text-base lg:text-lg leading-relaxed text-background/85">
                «Затишне місце для сімейної вечері. Відчувається любов у кожній страві та увага до деталей у сервісі. Рекомендую.»
              </blockquote>
              <figcaption className="mt-4 text-xs tracking-[0.2em] text-background/50 uppercase">
                Дмитро Сидоренко
              </figcaption>
            </Reveal>
          </figure>
        </div>
      </div>
    </section>
  );
}