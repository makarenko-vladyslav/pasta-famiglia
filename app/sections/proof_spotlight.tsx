"use client";
import { Reveal } from "@/components/mechanics";
import { Star } from "@phosphor-icons/react";

/**
 * SECTION: ACT IV — The Proof
 * Layout: Spotlight quote on inverted background with grain.
 * Typography: Display scale for the main community voice.
 */
export function SectionProofSpotlight() {
  return (
    <section 
      id="proof_spotlight" 
      className="relative overflow-hidden bg-foreground py-[var(--space-act)] text-background"
    >
      {/* Decorative grain overlay for premium texture */}
      <div className="rp-grain absolute inset-0 pointer-events-none opacity-40" />
      
      <div className="relative z-10 mx-auto max-w-5xl px-4 lg:px-10">
        {/* ACT LABEL - Internal rubric in site language */}
        <span className="rp-actno mb-8 block text-sm uppercase tracking-[0.3em] text-background/70">
          Спільнота
        </span>

        {/* Poster scale quote mark */}
        <span aria-hidden className="block font-display text-[clamp(4rem,10vw,7rem)] leading-none text-accent">
          “
        </span>

        {/* MAIN SPOTLIGHT QUOTE */}
        <Reveal>
          <blockquote className="font-display font-semibold text-[clamp(1.9rem,4.2vw,3.6rem)] leading-tight">
            Це місце, де паста стає мистецтвом, а кожна вечеря — маленькою подорожжю до сонячної Італії в самому серці Києва.
          </blockquote>
        </Reveal>

        <Reveal delay={0.15}>
          <figcaption className="mt-8 flex flex-wrap items-center gap-4 text-sm tracking-widest text-background/70 uppercase">
            <span className="h-px w-12 bg-accent" aria-hidden />
            <span>Олена Марчук</span>
            <span className="flex items-center gap-1 text-accent">
              <Star weight="fill" size={14} />
              <span className="font-display text-base text-background">4.9</span>
              <span className="normal-case tracking-normal opacity-60">/ 127 відгуків</span>
            </span>
          </figcaption>
        </Reveal>

        {/* SECONDARY QUOTES GRID */}
        <div className="mt-14 grid gap-12 border-t border-background/15 pt-10 lg:grid-cols-2 lg:gap-16">
          <figure>
            <Reveal delay={0.2}>
              <blockquote className="text-base lg:text-lg leading-relaxed text-background/85">
                Найкраща карбонара в місті. Тут розуміють різницю між справжнім гуанчале та звичайною шинкою. Рівень деталізації вражає.
              </blockquote>
              <figcaption className="mt-4 font-display text-sm tracking-widest text-background/60 uppercase">
                Артем Коваленко
              </figcaption>
            </Reveal>
          </figure>

          <figure>
            <Reveal delay={0.3}>
              <blockquote className="text-base lg:text-lg leading-relaxed text-background/85">
                Затишок, який неможливо зімітувати. Справжня сімейна атмосфера, де власники знають твої уподобання по іменах.
              </blockquote>
              <figcaption className="mt-4 font-display text-sm tracking-widest text-background/60 uppercase">
                Марія Савченко
              </figcaption>
            </Reveal>
          </figure>
        </div>
      </div>
    </section>
  );
}