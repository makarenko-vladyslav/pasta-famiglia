"use client";
import { Reveal } from "@/components/mechanics";
import { Star } from "@phosphor-icons/react";

export function SectionProof() {
  return (
    <section id="proof" className="relative overflow-hidden bg-foreground py-[var(--space-act)] text-background">
      {/* Decorative grain overlay for premium texture */}
      <div className="rp-grain absolute inset-0 pointer-events-none opacity-40" />
      
      <div className="relative z-10 mx-auto max-w-5xl px-4 lg:px-10">
        {/* ACT LABEL - Section rubric */}
        <span className="rp-actno mb-8 block text-background/70 uppercase tracking-[0.3em] text-xs lg:text-sm">
          Відгуки
        </span>

        {/* Poster scale quote mark */}
        <span aria-hidden className="block font-display text-[clamp(4rem,10vw,7rem)] leading-none text-accent">
          “
        </span>

        {/* Main Spotlight Quote */}
        <Reveal>
          <blockquote className="font-display font-semibold text-[clamp(1.9rem,4.2vw,3.6rem)] leading-tight">
            Тут готують найкращу пасту в місті. Справжня італійська душа в самому серці Києва.
          </blockquote>
        </Reveal>

        {/* Primary Attribution and Trust Line */}
        <Reveal delay={0.15}>
          <figcaption className="mt-8 flex flex-wrap items-center gap-4 text-sm lg:text-base text-background/70">
            <span className="h-px w-12 bg-accent" aria-hidden />
            <span className="font-medium text-background uppercase tracking-wider">Марія</span>
            <span className="flex items-center gap-1.5 border-l border-background/20 pl-4">
              <Star size={16} weight="fill" className="text-accent" />
              <span className="font-display text-lg text-background">4.9</span>
              <span className="text-xs opacity-60">(127 відгуків у Google)</span>
            </span>
          </figcaption>
        </Reveal>

        {/* Secondary Quotes Grid */}
        <div className="mt-14 grid gap-10 border-t border-background/15 pt-10 lg:grid-cols-2">
          <Reveal delay={0.2}>
            <figure>
              <blockquote className="text-base lg:text-lg leading-relaxed text-background/85">
                Атмосфера Pasta Famiglia просто заворожує. Ідеальне місце для вечірніх посиденьок з друзями або родиною.
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-2 text-sm text-background/60 uppercase tracking-widest">
                <span className="h-0.5 w-4 bg-background/20" /> Віталій П.
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.3}>
            <figure>
              <blockquote className="text-base lg:text-lg leading-relaxed text-background/85">
                Неймовірне обслуговування та найсмачніше тирамісу, яке я коли-небудь куштувала. Рекомендую кожному!
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-2 text-sm text-background/60 uppercase tracking-widest">
                <span className="h-0.5 w-4 bg-background/20" /> Олена К.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}