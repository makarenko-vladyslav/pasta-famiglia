"use client";

import { Reveal } from "@/components/mechanics";
import { Star } from "@phosphor-icons/react";

/**
 * SECTION: ACT IV — The Proof
 * Layout: Inverted act (dark background) featuring a high-impact spotlight testimonial.
 */
export function SectionProofTestimonial() {
  return (
    <section 
      id="proof_testimonial" 
      className="relative overflow-hidden bg-foreground py-[var(--space-act)] text-background"
    >
      <div className="rp-grain absolute inset-0 opacity-40" />
      
      <div className="relative z-10 mx-auto max-w-5xl px-4 lg:px-10">
        <Reveal>
          <span className="mb-8 block text-sm font-body tracking-[0.3em] uppercase text-background/60">
            Враження
          </span>
        </Reveal>

        <span aria-hidden className="block font-display text-[7rem] leading-none text-accent select-none">
          “
        </span>

        <Reveal delay={0.1}>
          <blockquote className="font-display font-semibold leading-[1.08] text-[clamp(1.9rem,4.2vw,3.6rem)]">
            Справжня Італія в центрі Києва. Кожна деталь — від домашньої пасти до винної карти — створена з великою любов&apos;ю до своєї справи та гостей.
          </blockquote>
        </Reveal>

        <Reveal delay={0.2}>
          <figcaption className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 lg:gap-6 text-sm text-background/70">
            <div className="flex items-center gap-4">
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-background/10 bg-surface">
                <img 
                  src="https://images.pexels.com/photos/6248853/pexels-photo-6248853.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=100&w=100" 
                  alt="Atmosphere at Pasta Famiglia"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <span className="font-display text-lg tracking-wide text-background uppercase">Марія Федоренко</span>
            </div>
            
            <div className="hidden sm:block h-px w-8 bg-accent/40" aria-hidden />
            
            <div className="flex items-center gap-2">
              <div className="flex text-accent">
                <Star size={16} weight="fill" />
                <Star size={16} weight="fill" />
                <Star size={16} weight="fill" />
                <Star size={16} weight="fill" />
                <Star size={16} weight="fill" />
              </div>
              <span className="font-display text-base">4.9 · 127 відгуків · вул. Антоновича, 44</span>
            </div>
          </figcaption>
        </Reveal>

        {/* Secondary Reviews */}
        <div className="mt-16 grid gap-10 border-t border-background/15 pt-12 lg:grid-cols-2">
          <Reveal delay={0.3}>
            <figure>
              <blockquote className="text-lg leading-relaxed text-background/85 font-body italic">
                &quot;Затишок, який не хочеться покидати. Рекомендую пасту з трюфелем — це справжній кулінарний шедевр, що тане в роті.&quot;
              </blockquote>
              <figcaption className="mt-4 text-sm tracking-widest uppercase text-background/50 font-body">
                Олександр К.
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.4}>
            <figure>
              <blockquote className="text-lg leading-relaxed text-background/85 font-body italic">
                &quot;Найкраще місце для сімейної вечері. Обслуговування на висоті, а атмосфера нагадує маленьке містечко десь у Тоскані.&quot;
              </blockquote>
              <figcaption className="mt-4 text-sm tracking-widest uppercase text-background/50 font-body">
                Анна та Дмитро
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}