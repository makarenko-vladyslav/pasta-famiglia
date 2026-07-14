"use client";
import { Reveal } from "@/components/mechanics";

/**
 * SectionProof - Act IV: The Proof
 * Layout: Spotlight quote at poster scale on an inverted background.
 * Typography: Playfair-inspired display for the main quote, monospaced details.
 */
export function SectionProof() {
  return (
    <section 
      id="proof" 
      className="relative overflow-hidden bg-foreground py-[var(--space-act)] text-background"
    >
      {/* Texture Layer */}
      <div className="rp-grain absolute inset-0 pointer-events-none opacity-40" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 lg:px-10">
        {/* Act Label - Upper-case tracking as per system style */}
        <span className="rp-actno mb-8 block text-sm font-medium tracking-[0.3em] uppercase text-background/50">
          Відгуки
        </span>

        {/* Big Decorative Quote Mark */}
        <span aria-hidden className="block font-display text-[7rem] leading-none text-accent select-none">
          “
        </span>

        {/* Primary Spotlight Quote */}
        <Reveal>
          <blockquote className="font-display font-medium text-[clamp(1.9rem,4.2vw,3.6rem)] leading-[1.1] italic">
            Найкраща паста в Києві. Атмосфера справжньої Італії, де кожен гість відчуває себе частиною великої родини. Смак, що повертає у спогади про Рим.
          </blockquote>
        </Reveal>

        {/* Author and Fact Line */}
        <Reveal delay={0.15}>
          <figcaption className="mt-8 flex flex-wrap items-center gap-4 text-sm font-body tracking-tight text-background/70">
            <span className="h-px w-12 bg-accent/60" aria-hidden />
            <span className="uppercase tracking-wider font-medium text-background">Марія Ковальчук</span> 
            <span className="text-background/40">/</span>
            <span>4.9/5 на основі 127 відгуків у Google</span>
          </figcaption>
        </Reveal>

        {/* Secondary Quotes Grid */}
        <div className="mt-16 grid gap-10 border-t border-background/15 pt-10 md:grid-cols-2">
          <figure>
            <blockquote className="text-base lg:text-lg leading-relaxed text-background/85">
              «Неймовірне обслуговування та автентичні смаки. Класична карбонара без вершків — це просто шедевр, який варто спробувати кожному.»
            </blockquote>
            <figcaption className="mt-4 text-xs uppercase tracking-[0.2em] text-background/50">
              Олександр Р.
            </figcaption>
          </figure>

          <figure>
            <blockquote className="text-base lg:text-lg leading-relaxed text-background/85">
              «Місце, куди хочеться повертатися знову і знову. Справжній затишок у центрі міста та найкраще виноградне меню, що ми зустрічали.»
            </blockquote>
            <figcaption className="mt-4 text-xs uppercase tracking-[0.2em] text-background/50">
              Олена Вітвицька
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}