"use client";
import { Reveal } from "@/components/mechanics";
import { Star } from "@phosphor-icons/react";

export function SectionProof() {
  return (
    <section id="proof" className="relative overflow-hidden bg-foreground py-[var(--space-act)] text-background">
      <div className="rp-grain absolute inset-0 opacity-40" />
      
      <div className="relative z-10 mx-auto max-w-5xl px-4 lg:px-10">
        {/* ONE spotlight quote at poster scale — not a card carousel */}
        <span className="rp-actno mb-8 block text-sm font-medium tracking-[0.3em] uppercase text-background/70">
          Відгуки
        </span>
        
        <span aria-hidden className="block font-display text-[7rem] leading-none text-accent select-none">
          “
        </span>
        
        <Reveal>
          <blockquote className="font-display font-semibold text-[clamp(1.9rem,4.2vw,3.6rem)] leading-tight">
            Кожна страва тут — це запрошення до столу справжньої італійської родини, де щирість і смак завжди на першому місці.
          </blockquote>
        </Reveal>
        
        <Reveal delay={0.15}>
          <figcaption className="mt-8 flex items-center gap-4 text-sm text-background/70">
            <span className="h-px w-12 bg-accent" aria-hidden />
            <span className="font-medium text-background">АНДРІЙ М.</span>
            <span className="flex items-center gap-1">
              <Star weight="fill" className="text-accent" size={14} />
              4.9 (127 відгуків у Google)
            </span>
          </figcaption>
        </Reveal>

        {/* 1-2 shorter REAL quotes */}
        <div className="mt-14 grid gap-8 border-t border-background/15 pt-10 lg:grid-cols-2">
          <figure>
            <blockquote className="text-base leading-relaxed text-background/85">
              Неймовірна атмосфера та найсмачніша паста карбонара, яку я куштувала у Києві. Обов’язково повернуся ще не один раз.
            </blockquote>
            <figcaption className="mt-3 text-sm font-medium tracking-wide text-background/60 uppercase">
              Олена К.
            </figcaption>
          </figure>

          <figure>
            <blockquote className="text-base leading-relaxed text-background/85">
              Місце, куди хочеться повертатися щовихідних. Справжня італійська душа в самому центрі міста. Дякую за гостинність!
            </blockquote>
            <figcaption className="mt-3 text-sm font-medium tracking-wide text-background/60 uppercase">
              Максим В.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}