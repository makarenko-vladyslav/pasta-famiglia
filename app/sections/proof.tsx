"use client";
import { Reveal } from "@/components/mechanics";

/**
 * SectionProof: ACT IV - The Proof
 * Layout: Inverted act (dark ground) with a high-impact spotlight quote.
 * Typography: Display-scale blockquote with Mono-accented rating metrics.
 */
export function SectionProof() {
  const PHOTO_URL = "https://images.pexels.com/photos/3760239/pexels-photo-3760239.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200";

  return (
    <section id="proof" className="relative overflow-hidden bg-foreground pt-0 pb-[var(--space-act)] lg:pt-[var(--space-act)] text-background">
      {/* Film grain overlay for premium texture */}
      <div className="rp-grain absolute inset-0 pointer-events-none" />

      {/* Circular watermark photo background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vh] h-[60vh] opacity-10 blur-3xl pointer-events-none">
        <img 
          src={PHOTO_URL} 
          alt="" 
          className="w-full h-full object-cover rounded-full" 
          loading="lazy"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 lg:px-10">
        <Reveal>
          <span className="rp-actno mb-8 block text-background/70 uppercase tracking-[0.3em] text-xs">
            Відгуки
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <span aria-hidden className="block font-display text-[7rem] leading-none text-accent">
            “
          </span>
        </Reveal>

        <Reveal delay={0.2}>
          <blockquote className="font-display font-semibold text-[clamp(1.9rem,4.2vw,3.6rem)] leading-tight">
            Смак, що переносить до Італії. Кожна деталь Pasta Famiglia — від сервісу до останньої краплі соусу — сповнена любові.
          </blockquote>
        </Reveal>

        <Reveal delay={0.3}>
          <figcaption className="mt-8 flex flex-wrap items-center gap-4 text-sm text-background/70">
            <span className="h-px w-12 bg-accent" aria-hidden />
            <span className="font-medium text-background">Анна К.</span>
            <span className="text-background/40"></span>
            <span className="flex items-center gap-2">
              <span className="font-display text-xl text-accent">4.9</span>
              <span className="uppercase tracking-widest text-[10px] opacity-70">Рейтинг</span>
              <span className="text-background/40">/</span>
              <span className="font-display text-xl text-accent">127</span>
              <span className="uppercase tracking-widest text-[10px] opacity-70">Відгуків</span>
            </span>
          </figcaption>
        </Reveal>

        {/* Additional proofs grid */}
        <div className="mt-14 grid gap-8 border-t border-background/15 pt-10 lg:grid-cols-2">
          <Reveal delay={0.4}>
            <figure className="group">
              <blockquote className="text-base leading-relaxed text-background/85">
                Справжня італійська паста al dente. Неймовірне місце для затишної вечері з друзями.
              </blockquote>
              <figcaption className="mt-3 font-display text-sm tracking-wide text-background/60">
                Дмитро П.
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.5}>
            <figure className="group">
              <blockquote className="text-base leading-relaxed text-background/85">
                Найкращий сервіс у Києві та неймовірно привітна атмосфера. Обов'язково спробуйте їхню фокаччу.
              </blockquote>
              <figcaption className="mt-3 font-display text-sm tracking-wide text-background/60">
                Олена В.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}