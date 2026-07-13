"use client";
import { Reveal } from "@/components/mechanics";
import { Star } from "@phosphor-icons/react";

export function SectionSocialProof() {
  return (
    <section id="social_proof" className="relative overflow-hidden bg-foreground py-[var(--space-act)] text-background">
      <div className="rp-grain absolute inset-0 opacity-40 pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-5xl px-4 lg:px-10">
        {/* ONE spotlight quote at poster scale — not a card carousel */}
        <span className="rp-actno mb-8 block text-background/50 text-sm uppercase tracking-[0.3em]">
          Відгуки
        </span>
        
        <span aria-hidden className="block font-display text-[7rem] leading-none text-accent select-none">
          “
        </span>
        
        <Reveal>
          <blockquote className="font-display font-semibold text-[clamp(1.9rem,4.2vw,3.6rem)] leading-[1.1] text-balance">
            Найкраща паста в моєму житті. Атмосфера справжньої Італії прямо в центрі Києва.
          </blockquote>
        </Reveal>

        <Reveal delay={0.15}>
          <figcaption className="mt-8 flex flex-col md:flex-row md:items-center gap-4 text-sm text-background/70">
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-accent" aria-hidden />
              <span className="font-medium text-background">Олена Коваль</span>
            </div>
            <span className="hidden md:block opacity-30"></span>
            <div className="flex items-center gap-2">
              <div className="flex text-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} weight="fill" />
                ))}
              </div>
              <span className="font-display text-background tracking-wider">4.9 / 5 (127 відгуків)</span>
            </div>
          </figcaption>
        </Reveal>

        {/* Extra REAL quotes grid */}
        <div className="mt-14 grid gap-8 border-t border-background/15 pt-10 lg:grid-cols-2">
          <Reveal delay={0.2}>
            <figure>
              <blockquote className="text-base lg:text-lg leading-relaxed text-background/85">
                "Домашній затишок та неймовірні аромати. Обов'язково спробуйте лазанью та домашнє вино — це справжня насолода."
              </blockquote>
              <figcaption className="mt-4 text-sm text-background/50 uppercase tracking-widest font-medium">
                — Дмитро С.
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.3}>
            <figure>
              <blockquote className="text-base lg:text-lg leading-relaxed text-background/85">
                "Сервіс на найвищому рівні. Місце, куди хочеться повертатися знову і знову за цією неповторною атмосферою."
              </blockquote>
              <figcaption className="mt-4 text-sm text-background/50 uppercase tracking-widest font-medium">
                — Анна М.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}