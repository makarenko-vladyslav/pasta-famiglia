"use client";

import { Reveal, TiltCard } from "@/components/mechanics";

export function SectionOffering() {
  return (
    <section id="offering" className="relative overflow-hidden bg-background py-[var(--space-act)]">
      <span aria-hidden className="rp-watermark top-10 text-foreground pointer-events-none select-none">
        CRAFT
      </span>
      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          {/* sticky act intro — the layout law inhabitant */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h2 className="font-display font-bold leading-[0.9] tracking-[-0.03em] text-[clamp(2.6rem,6vw,5.5rem)]">
                Смак, народжений <br /> традицією
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
                Наша кухня базується на трьох принципах: свіжість локальних продуктів, італійське борошно вищого ґатунку та рецепти, передані крізь покоління нашої родини Pasta Famiglia.
              </p>
            </Reveal>

            {/* TiltCard Asset - Integrated as per spec while respecting skeleton weight */}
            <div className="mt-12 max-w-sm">
              <Reveal delay={0.2}>
                <TiltCard>
                  <div className="overflow-hidden bg-surface aspect-[3/4]">
                    <img 
                      src="https://images.pexels.com/photos/38431275/pexels-photo-38431275.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
                      alt="Процес виготовлення пасти" 
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-1000 ease-out-cubic group-hover:scale-[1.04] rp-grain"
                    />
                  </div>
                </TiltCard>
              </Reveal>
            </div>

            <span aria-hidden className="mt-10 hidden lg:block font-display text-[9rem] font-extrabold leading-none text-foreground/5 select-none">
              01
            </span>
          </div>

          {/* editorial list: display names + prices, hairline dividers */}
          <div className="divide-y divide-foreground/10">
            <Reveal>
              <div className="group flex items-baseline justify-between gap-6 py-6">
                <div>
                  <h3 className="font-display text-[clamp(1.4rem,2.4vw,2.1rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                    Папарделле з білими грибами
                  </h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                    Свіжа паста власного виробництва, ароматні карпатські гриби, вершковий соус та крапля трюфельної олії.
                  </p>
                </div>
                <span className="shrink-0 font-display text-lg font-semibold text-accent">320 ₴</span>
              </div>
            </Reveal>

            <Reveal>
              <div className="group flex items-baseline justify-between gap-6 py-6">
                <div>
                  <h3 className="font-display text-[clamp(1.4rem,2.4vw,2.1rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                    Карбонара за класикою
                  </h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                    Справжній італійський рецепт: витриманий гуанчале, жовток, сир Пекоріно Романо та свіжомелений чорний перець.
                  </p>
                </div>
                <span className="shrink-0 font-display text-lg font-semibold text-accent">285 ₴</span>
              </div>
            </Reveal>

            <Reveal>
              <div className="group flex items-baseline justify-between gap-6 py-6">
                <div>
                  <h3 className="font-display text-[clamp(1.4rem,2.4vw,2.1rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                    Равіолі з рікоттою та шпинатом
                  </h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                    Ніжна начинка у тонкому тісті, подається з соусом на основі вершкового масла, шавлії та пармезану.
                  </p>
                </div>
                <span className="shrink-0 font-display text-lg font-semibold text-accent">245 ₴</span>
              </div>
            </Reveal>

            <Reveal>
              <div className="group flex items-baseline justify-between gap-6 py-6">
                <div>
                  <h3 className="font-display text-[clamp(1.4rem,2.4vw,2.1rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                    Лазанья Болоньєзе
                  </h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                    Багатошарова класика з м'ясним рагу 6-годинного тушкування, ніжним соусом бешамель та тягучою моцарелою.
                  </p>
                </div>
                <span className="shrink-0 font-display text-lg font-semibold text-accent">310 ₴</span>
              </div>
            </Reveal>

            <Reveal>
              <div className="group flex items-baseline justify-between gap-6 py-6">
                <div>
                  <h3 className="font-display text-[clamp(1.4rem,2.4vw,2.1rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                    Тальятелле з морепродуктами
                  </h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                    Креветки, мідії та кальмари у соусі з білого вина, солодких томатів черрі та свіжої петрушки.
                  </p>
                </div>
                <span className="shrink-0 font-display text-lg font-semibold text-accent">410 ₴</span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}