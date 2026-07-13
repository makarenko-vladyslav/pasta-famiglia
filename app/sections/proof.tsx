"use client";

import { Reveal } from "@/components/mechanics";

export function SectionProof() {
  return (
    <section 
      id="proof" 
      className="relative overflow-hidden bg-foreground py-[var(--space-act)] text-background"
    >
      {/* Film grain texture for premium depth */}
      <div className="rp-grain absolute inset-0" />
      
      <div className="relative z-10 mx-auto max-w-5xl px-4 lg:px-10">
        {/* Internal rubric label */}
        <span className="rp-actno mb-8 block text-sm uppercase tracking-[0.3em] text-background/70">
          Довіра
        </span>

        {/* Poster scale quote decoration */}
        <span aria-hidden className="block font-display text-[7rem] leading-none text-accent">
          “
        </span>

        <Reveal>
          <blockquote className="font-display font-semibold leading-[1.08] tracking-[-0.02em] text-[clamp(1.9rem,4.2vw,3.6rem)]">
            Справжня італійська кухня — це передусім чесність. У Pasta Famiglia ми відчули це в кожному шматочку пасти, у кожному погляді. Це місце, де якість інгредієнтів не потребує зайвих слів.
          </blockquote>
        </Reveal>

        <Reveal delay={0.15}>
          <figcaption className="mt-8 flex flex-wrap items-center gap-4 text-sm text-background/70 lg:text-base">
            <span className="h-px w-12 bg-accent" aria-hidden />
            <span className="font-medium text-background">Олександр Данилюк</span>
            <span className="opacity-40">·</span>
            <span>★ 4.9 · 127 відгуків · вул. Антоновича, 44</span>
          </figcaption>
        </Reveal>
      </div>
    </section>
  );
}