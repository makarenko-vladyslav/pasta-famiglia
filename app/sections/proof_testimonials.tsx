"use client";
import { Reveal } from "@/components/mechanics";

/**
 * Section: Proof Testimonials (Act IV)
 * Role: Customer validation through spotlight and supporting quotes.
 * Layout: Typographic focus on inverted background with grain texture.
 */
export function SectionProofTestimonials() {
  return (
    <section 
      id="proof_testimonials" 
      className="relative overflow-hidden bg-foreground py-[var(--space-act)] text-background"
    >
      {/* Film grain overlay for premium texture */}
      <div className="rp-grain absolute inset-0 pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-5xl px-4 lg:px-10">
        {/* ACT LABEL: Human rubric in site language */}
        <span className="rp-actno mb-8 block text-sm uppercase tracking-[0.3em] text-background/70">
          Відгуки
        </span>

        {/* SPOTLIGHT QUOTE */}
        <span aria-hidden className="block font-display text-[clamp(4rem,10vw,7rem)] leading-none text-accent">
          “
        </span>
        
        <Reveal>
          <blockquote className="font-display font-semibold text-[clamp(1.9rem,4.2vw,3.6rem)] leading-[1.1] text-pretty">
            Pasta Famiglia — це місце, де кожна вечеря перетворюється на свято. Справжня домашня паста та неймовірна атмосфера, яку хочеться відчувати знову і знову.
          </blockquote>
        </Reveal>

        <Reveal delay={0.15}>
          <figcaption className="mt-8 flex flex-wrap items-center gap-4 text-sm font-medium tracking-wide text-background/70 uppercase">
            <span className="h-px w-12 bg-accent" aria-hidden />
            Олена Петренко · ★ 4.9 (127 відгуків)
          </figcaption>
        </Reveal>

        {/* SUPPORTING QUOTES GRID */}
        <div className="mt-14 grid gap-8 border-t border-background/15 pt-10 lg:grid-cols-2 lg:gap-16">
          <figure>
            <blockquote className="text-base leading-relaxed text-background/85">
              Найкраща карбонара в місті. Обов&apos;язково спробуйте їхні фірмові десерти та домашнє вино — це кохання з першого ковтка.
            </blockquote>
            <figcaption className="mt-4 text-sm font-medium text-background/60">
              Олександр В.
            </figcaption>
          </figure>

          <figure>
            <blockquote className="text-base leading-relaxed text-background/85">
              Неймовірний сервіс та дуже затишно. Ідеальне місце для сімейних зустрічей, де про кожного гостя дбають як про рідного.
            </blockquote>
            <figcaption className="mt-4 text-sm font-medium text-background/60">
              Марія Г.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}