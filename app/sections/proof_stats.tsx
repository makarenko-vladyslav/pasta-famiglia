"use client";

import { Reveal } from "@/components/mechanics";

/**
 * SectionProofStats - ACT IV: The Proof.
 * Trust metrics and spotlight testimonials.
 * Layout strictly follows the provided ACT SKELETON.
 */
export function SectionProofStats() {
  return (
    <section id="proof_stats" className="relative overflow-hidden bg-foreground py-[var(--space-act)] text-background">
      {/* Film grain overlay for premium texture on dark ground */}
      <div className="rp-grain absolute inset-0 opacity-40" aria-hidden="true" />
      
      <div className="relative z-10 mx-auto max-w-5xl px-4 lg:px-10">
        {/* ONE spotlight quote at poster scale — not a card carousel */}
        <span className="rp-actno mb-8 block font-body text-sm uppercase tracking-[0.3em] text-background/70">
          Визнання
        </span>
        
        <span aria-hidden className="block font-display text-[7rem] leading-none text-accent">
          “
        </span>
        
        <Reveal>
          <blockquote className="font-display font-semibold leading-[1.08] text-[clamp(1.9rem,4.2vw,3.6rem)]">
            Тут готують найкращу карбонару в місті. Атмосфера настільки затишна, що здається, ніби ти завітав на недільну вечерю до справжньої італійської родини.
          </blockquote>
        </Reveal>
        
        <Reveal delay={0.15}>
          <figcaption className="mt-8 flex items-center gap-4 text-sm text-background/70">
            <span className="h-px w-12 bg-accent" aria-hidden="true" />
            Марина О. · ★ 4.9 · 127 відгуків · вул. Антоновича, 44
          </figcaption>
        </Reveal>

        {/* Supporting quotes grid */}
        <div className="mt-14 grid gap-8 border-t border-background/15 pt-10 lg:grid-cols-2">
          <Reveal delay={0.2}>
            <figure>
              <blockquote className="text-base leading-relaxed text-background/85">
                Паста ручної роботи та ідеально підібране вино. Місце, куди хочеться повертатися знову і знову за справжніми емоціями та смаком Італії.
              </blockquote>
              <figcaption className="mt-3 font-body text-sm text-background/60">
                — Олег В.
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.3}>
            <figure>
              <blockquote className="text-base leading-relaxed text-background/85">
                Неймовірне обслуговування та автентичні смаки. Pasta Famiglia — це справжня гастрономічна перлина в самому центрі Києва.
              </blockquote>
              <figcaption className="mt-3 font-body text-sm text-background/60">
                — Анна С.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}