"use client";
import { Star } from "@phosphor-icons/react";
import { Reveal } from "@/components/mechanics";

export function SectionProof() {
  return (
    <section
      id="proof"
      className="relative overflow-hidden bg-foreground py-[var(--space-act)] text-background"
    >
      <div className="rp-grain absolute inset-0 opacity-20" />
      
      <div className="relative z-10 mx-auto max-w-5xl px-4 lg:px-10">
        {/* ONE spotlight quote at poster scale — not a card carousel */}
        <Reveal>
          <span className="text-sm uppercase tracking-[0.3em] text-background/70">
            ВІДГУКИ
          </span>
        </Reveal>
        
        <Reveal delay={0.1}>
          <span aria-hidden className="mt-8 block font-display text-[7rem] leading-none text-accent">
            “
          </span>
        </Reveal>

        <Reveal delay={0.2}>
          <blockquote className="font-display font-semibold text-[clamp(1.9rem,4.2vw,3.6rem)] leading-tight">
            Смак, що переносить у серце Тоскани. Pasta Famiglia — це не просто ресторан, а справжня родинна історія в кожній тарілці.
          </blockquote>
        </Reveal>

        <Reveal delay={0.3}>
          <figcaption className="mt-8 flex flex-wrap items-center gap-4 text-sm text-background/70">
            <span className="h-px w-12 bg-accent" aria-hidden />
            <span className="font-medium text-background">Марія П.</span>
            <span className="hidden sm:inline"></span>
            <div className="flex items-center gap-2">
              <div className="flex text-accent">
                <Star size={16} weight="fill" />
                <Star size={16} weight="fill" />
                <Star size={16} weight="fill" />
                <Star size={16} weight="fill" />
                <Star size={16} weight="fill" />
              </div>
              <span className="font-mono text-base font-bold text-background">4.9</span>
              <span>(127 відгуків)</span>
            </div>
          </figcaption>
        </Reveal>

        {/* Shorter REAL quotes grid */}
        <div className="mt-14 grid gap-12 border-t border-background/15 pt-10 lg:grid-cols-2">
          <Reveal delay={0.4}>
            <figure>
              <blockquote className="text-base leading-relaxed text-background/85">
                Найкраща карбонара в Києві. Атмосфера затишку та бездоганний сервіс. Обов’язково повернемося знову!
              </blockquote>
              <figcaption className="mt-3 text-sm font-medium text-background/60">
                Дмитро С.
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.5}>
            <figure>
              <blockquote className="text-base leading-relaxed text-background/85">
                Чудове місце для сімейної вечері. Домашня паста та вишукане вино — ідеальна комбінація для вечора.
              </blockquote>
              <figcaption className="mt-3 text-sm font-medium text-background/60">
                Олена В.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}