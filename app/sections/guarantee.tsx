"use client";

import { Reveal } from "@/components/mechanics";

/**
 * ACT IV: The Proof (Trust) — Guarantee Section
 * A breathing pause with a full-bleed graded photo and a strong brand statement.
 * Follows the "Full-bleed graded photo" layout skeleton.
 */
export function SectionGuarantee() {
  return (
    <section id="guarantee" className="relative min-h-[72vh] overflow-hidden">
      {/* Background Media with Graded Overlay and Grain */}
      <img
        src="https://images.pexels.com/photos/4617830/pexels-photo-4617830.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
        alt="Гарантія швидкої подачі страв у Pasta Famiglia"
        className="rp-graded absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
      <div className="rp-grain absolute inset-0" />

      {/* Content Layer */}
      <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-[88rem] flex-col justify-end px-4 pb-16 lg:px-10">
        {/* Main Statement (Copy Headline Verbatim) */}
        <Reveal>
          <p className="font-display font-semibold text-background text-[clamp(1.9rem,4vw,3.4rem)] max-w-[22ch] leading-tight">
            Встигнемо за 20 хвилин
          </p>
        </Reveal>

        {/* Tagline / Subcopy (Copy Subcopy Verbatim) */}
        <Reveal delay={0.12}>
          <span className="mt-6 inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-background/70">
            <span className="h-px w-10 bg-accent" aria-hidden />
            Якщо офіціант не подасть вашу страву протягом цього часу — ми пригостимо вас будь-яким напоєм за наш рахунок.
          </span>
        </Reveal>
      </div>
    </section>
  );
}