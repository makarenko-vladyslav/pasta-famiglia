"use client";

import { Reveal, TiltCard } from "@/components/mechanics";

/**
 * SECTION: SOCIAL PROOF
 * ACT IV: The Proof.
 * A high-impact spotlight quote section using a dark inverted theme
 * and poster-scale typography.
 */
export function SectionSocialProof() {
  return (
    <section
      id="social-proof"
      className="relative overflow-hidden bg-foreground py-[var(--space-act)] text-background"
    >
      {/* Background Image: Low opacity treatment */}
      <div className="absolute inset-0 z-0 select-none opacity-20">
        <img
          src="https://images.pexels.com/photos/37000116/pexels-photo-37000116.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
          alt="Social atmosphere at Pasta Famiglia"
          className="h-full w-full object-cover grayscale"
          loading="lazy"
        />
      </div>

      {/* Film grain overlay */}
      <div className="rp-grain pointer-events-none absolute inset-0 z-[1]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 lg:px-10">
        <TiltCard>
          <div className="p-8 lg:p-12">
            {/* ACT LABEL */}
            <span className="rp-actno mb-8 block text-background/70">ACT IV: The Proof.</span>
            
            {/* Visual Quotation Mark */}
            <span
              aria-hidden
              className="block font-display text-[7rem] leading-none text-accent"
            >
              “
            </span>

            {/* Spotlight Quote */}
            <Reveal>
              <blockquote className="font-display font-semibold leading-[1.08] tracking-[-0.02em] text-[clamp(1.9rem,4.2vw,3.6rem)]">
                «Найкраще місце на Антоновича для швидкого ланчу. Паста справді al dente, як в Італії».
              </blockquote>
            </Reveal>

            {/* Citation & Trust Line */}
            <Reveal delay={0.15}>
              <figcaption className="mt-8 flex flex-wrap items-center gap-4 text-sm text-background/70 sm:text-base">
                <span className="h-px w-12 bg-accent" aria-hidden />
                <span className="font-medium text-background">Олена</span>
                <span className="opacity-40">·</span>
                <span className="font-display text-accent">★ 4.9</span>
                <span className="opacity-40">·</span>
                <span>127 відгуків</span>
                <span className="opacity-40 hidden sm:inline">·</span>
                <span className="hidden sm:inline">вул. Антоновича, 44</span>
              </figcaption>
            </Reveal>

            {/* Secondary Copy (Ranking Context) */}
            <Reveal delay={0.25}>
              <p className="mt-12 text-sm uppercase tracking-widest text-background/50">
                Наш рейтинг у Google — 4.9 на основі 127 відгуків.
              </p>
            </Reveal>
          </div>
        </TiltCard>
      </div>
    </section>
  );
}