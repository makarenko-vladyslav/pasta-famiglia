"use client";
import { Reveal } from "@/components/mechanics";
import { Star } from "@phosphor-icons/react";

/**
 * SectionProof (ACT IV)
 * Social validation through high-impact testimonials.
 * Layout: Inverted (dark) act with a spotlight quote and secondary reviews.
 */
export function SectionProof() {
  return (
    <section 
      id="proof" 
      className="relative overflow-hidden bg-foreground py-[var(--space-act)] text-background"
    >
      {/* Background visual texture */}
      <div className="rp-grain absolute inset-0 pointer-events-none" />
      <img 
        src="https://images.pexels.com/photos/10148448/pexels-photo-10148448.jpeg" 
        alt="" 
        className="absolute inset-0 h-full w-full object-cover opacity-5 grayscale"
        loading="lazy"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 lg:px-10">
        {/* Label */}
        <span className="rp-actno mb-8 block text-background/70">Відгуки</span>
        
        {/* Decorative Quote Mark */}
        <span aria-hidden className="block font-display text-[clamp(4rem,10vw,7rem)] leading-none text-accent">“</span>
        
        {/* Primary Spotlight Quote */}
        <Reveal>
          <blockquote className="font-display font-medium italic leading-[1.1] text-[clamp(1.9rem,4.2vw,3.6rem)] text-background">
            Найкраща паста в моєму житті. Атмосфера справжнього італійського дому, де кожен гість — частина великої родини.
          </blockquote>
        </Reveal>

        <Reveal delay={0.15}>
          <figcaption className="mt-8 flex flex-wrap items-center gap-4 text-sm font-mono tracking-wider uppercase">
            <span className="h-px w-12 bg-accent" aria-hidden />
            <span>Марія Ковальчук</span>
            <span className="text-background/40" aria-hidden></span>
            <div className="flex items-center gap-1.5 text-accent">
              <div className="flex text-[10px]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} weight="fill" />
                ))}
              </div>
              <span className="text-background/70">4.9 / 5.0</span>
            </div>
          </figcaption>
        </Reveal>

        {/* Secondary Reviews Grid */}
        <div className="mt-14 grid gap-12 border-t border-background/15 pt-10 lg:grid-cols-2 lg:gap-16">
          <Reveal delay={0.2}>
            <figure className="max-w-md">
              <blockquote className="font-body text-base leading-relaxed text-background/85">
                Справжній смак Італії в центрі Києва. Рекомендую спробувати карбонару — вона божественна, точно як у Римі.
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3 text-sm text-background/60">
                <span className="h-px w-6 bg-background/20" />
                Олександр П.
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.3}>
            <figure className="max-w-md">
              <blockquote className="font-body text-base leading-relaxed text-background/85">
                Чудове місце для сімейної вечері. Персонал дуже уважний, а десерти просто тануть у роті. Обов’язково повернемось.
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3 text-sm text-background/60">
                <span className="h-px w-6 bg-background/20" />
                Анна Б.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}