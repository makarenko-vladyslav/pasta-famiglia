"use client";

import { Reveal, CountUp } from "@/components/mechanics";

export function SectionSocialProof() {
  return (
    <section className="py-[var(--space-act)] w-full bg-surface overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 lg:px-6 grid grid-cols-12 gap-y-12 md:gap-y-16 gap-x-6">
        
        {/* Spotlight Typographic Anchor */}
        <div className="col-span-12 md:col-span-10 md:col-start-2 text-center border-b border-foreground/10 pb-12 md:pb-16 flex flex-col items-center justify-center">
          <Reveal>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] text-foreground">
              Оцінка <CountUp to={4.9} decimals={1} locale="uk-UA" /> на Google Maps
            </h2>
          </Reveal>
        </div>

        {/* Editorial Sub-Columns */}
        <div className="col-span-12 md:col-span-5 md:col-start-2 flex flex-col gap-6">
          <Reveal delay={0.1}>
            <p className="text-lg lg:text-xl text-foreground/80 leading-relaxed font-body">
              З початку 2024 року ми зібрали <span className="font-display text-xl text-foreground font-medium ml-1"><CountUp to={127} locale="uk-UA" /></span> відгуків від киян.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <span className="block text-sm uppercase tracking-[0.25em] text-muted font-medium">
              Статистика
            </span>
          </Reveal>
        </div>

        <div className="col-span-12 md:col-span-5 flex flex-col gap-6">
          <Reveal delay={0.2}>
            <p className="text-lg lg:text-xl text-foreground/80 leading-relaxed font-body">
              Жодних накруток — лише враження тих, хто обідав у нас або замовляв додому.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <span className="block text-sm uppercase tracking-[0.25em] text-muted font-medium">
              Принцип
            </span>
          </Reveal>
        </div>

      </div>
    </section>
  );
}