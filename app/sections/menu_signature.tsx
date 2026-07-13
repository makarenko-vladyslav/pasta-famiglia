"use client";

import { Reveal } from "@/components/mechanics";

/**
 * SectionMenuSignature
 * ROLE: ACT II: The Offer - Fresh Pasta List.
 * STACK: Next.js + Tailwind 4
 * DESIGN: Editorial typographic list with sticky intro and watermark backdrop.
 */
export function SectionMenuSignature() {
  return (
    <section id="menu_signature" className="relative overflow-hidden bg-surface py-[var(--space-act)]">
      {/* Giant watermark behind content - visible only on larger screens via platform styles, but defined here */}
      <span aria-hidden className="rp-watermark top-10 text-foreground pointer-events-none select-none opacity-[0.03] lg:opacity-[0.05]">
        PASTA
      </span>

      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          
          {/* Sticky act intro: Human rubric and context */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h2 className="font-display font-bold leading-[0.9] tracking-[-0.03em] text-[clamp(2.6rem,6vw,5.5rem)]">
                Фірмова<br />Паста
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
                Кожна порція — це результат багатогодинної праці: від замішування тіста з добірного борошна твердих сортів до соусу, що томився за класичним рецептом нашої родини.
              </p>
            </Reveal>
            <span aria-hidden className="mt-10 hidden lg:block font-display text-[9rem] font-extrabold leading-none text-foreground/5 select-none">
              02
            </span>
          </div>

          {/* Editorial list: Display names + prices, hairline dividers, NO cards */}
          <div className="divide-y divide-foreground/10 border-t border-foreground/10 lg:border-t-0">
            
            {/* Item 1 */}
            <Reveal>
              <div className="group flex items-baseline justify-between gap-6 py-8">
                <div>
                  <h3 className="font-display text-[clamp(1.4rem,2.4vw,2.1rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                    Папарделле з білими грибами
                  </h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                    Свіжа паста власного виробництва, вершковий соус, лісові гриби, чебрець та витриманий пармезан.
                  </p>
                </div>
                <span className="shrink-0 font-display text-xl font-semibold text-accent">345 ₴</span>
              </div>
            </Reveal>

            {/* Item 2 */}
            <Reveal delay={0.05}>
              <div className="group flex items-baseline justify-between gap-6 py-8">
                <div>
                  <h3 className="font-display text-[clamp(1.4rem,2.4vw,2.1rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                    Тальятеле Болоньєзе
                  </h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                    Класичне рагу з добірної яловичини та томатів Сан-Марцано, що тушкується протягом 6 годин.
                  </p>
                </div>
                <span className="shrink-0 font-display text-xl font-semibold text-accent">310 ₴</span>
              </div>
            </Reveal>

            {/* Item 3 */}
            <Reveal delay={0.1}>
              <div className="group flex items-baseline justify-between gap-6 py-8">
                <div>
                  <h3 className="font-display text-[clamp(1.4rem,2.4vw,2.1rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                    Лінгвіні з креветками
                  </h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                    Тигрові креветки, томати чері, часник, біле вино та свіжа петрушка з оливковою олією.
                  </p>
                </div>
                <span className="shrink-0 font-display text-xl font-semibold text-accent">395 ₴</span>
              </div>
            </Reveal>

            {/* Item 4 */}
            <Reveal delay={0.15}>
              <div className="group flex items-baseline justify-between gap-6 py-8">
                <div>
                  <h3 className="font-display text-[clamp(1.4rem,2.4vw,2.1rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                    Равіолі з трюфелем та рікотою
                  </h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                    Ніжна начинка з фермерської рікоти та трюфельної пасти у соусі з вершкового масла.
                  </p>
                </div>
                <span className="shrink-0 font-display text-xl font-semibold text-accent">360 ₴</span>
              </div>
            </Reveal>

            {/* Item 5 */}
            <Reveal delay={0.2}>
              <div className="group flex items-baseline justify-between gap-6 py-8">
                <div>
                  <h3 className="font-display text-[clamp(1.4rem,2.4vw,2.1rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                    Спагеті Наполетана
                  </h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                    Свіжі томати, базилік, оливкова олія першого віджиму та кулька моцарели буфала.
                  </p>
                </div>
                <span className="shrink-0 font-display text-xl font-semibold text-accent">285 ₴</span>
              </div>
            </Reveal>

            {/* Item 6 */}
            <Reveal delay={0.25}>
              <div className="group flex items-baseline justify-between gap-6 py-8">
                <div>
                  <h3 className="font-display text-[clamp(1.4rem,2.4vw,2.1rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                    Фетучіні Альфредо
                  </h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                    Шовковистий соус на основі вершкового масла та витриманого пармезану Реджано.
                  </p>
                </div>
                <span className="shrink-0 font-display text-xl font-semibold text-accent">290 ₴</span>
              </div>
            </Reveal>

          </div>
        </div>
      </div>
    </section>
  );
}