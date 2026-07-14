"use client";
import { Reveal } from "@/components/mechanics";

/**
 * ACT IV: The Proof. Voices.
 * A premium typographic section highlighting guest experiences on a dark ground.
 * Follows the inverted act pattern: bg-foreground / text-background.
 */
export function SectionProofSocial() {
  return (
    <section 
      id="proof_social" 
      className="relative overflow-hidden bg-foreground py-[var(--space-act)] text-background"
    >
      {/* Decorative film grain overlay */}
      <div className="rp-grain absolute inset-0 opacity-40 pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-5xl px-4 lg:px-10">
        {/* Label for the section narrative */}
        <Reveal>
          <span className="block mb-8 text-sm uppercase tracking-[0.3em] text-background/60">
            Відгуки
          </span>
        </Reveal>

        {/* ONE spotlight quote at poster scale */}
        <span 
          aria-hidden 
          className="block font-display text-[clamp(5rem,10vw,8rem)] leading-none text-accent"
        >
          “
        </span>
        
        <Reveal delay={0.1}>
          <blockquote className="font-display font-semibold text-[clamp(1.9rem,4.2vw,3.6rem)] leading-[1.1] text-balance">
            Найкраща паста, яку я куштувала за межами Риму. Тут відчувається душа та справжня італійська пристрасть до їжі.
          </blockquote>
        </Reveal>

        <Reveal delay={0.25}>
          <figcaption className="mt-8 flex flex-wrap items-center gap-4 text-sm text-background/70">
            <span className="h-px w-12 bg-accent" aria-hidden />
            <span className="font-medium text-background">Олександра</span> 
            <span className="opacity-60">4.9/5 на основі 127 відгуків у Google</span>
          </figcaption>
        </Reveal>

        {/* Secondary quotes grid */}
        <div className="mt-16 grid gap-10 border-t border-background/15 pt-12 lg:grid-cols-2 lg:gap-16">
          <Reveal delay={0.3}>
            <figure className="space-y-4">
              <blockquote className="text-lg lg:text-xl leading-relaxed text-background/85">
                Атмосфера затишку та бездоганний сервіс. Кожна деталь інтер'єру та меню Pasta Famiglia продумана до дрібниць.
              </blockquote>
              <figcaption className="text-sm uppercase tracking-widest text-background/50">
                — Дмитро В.
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.4}>
            <figure className="space-y-4">
              <blockquote className="text-lg lg:text-xl leading-relaxed text-background/85">
                Тут готують найкращу карбонару в Києві. Обов&apos;язково спробуйте їхні домашні десерти — це справжнє задоволення.
              </blockquote>
              <figcaption className="text-sm uppercase tracking-widest text-background/50">
                — Ірина
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}