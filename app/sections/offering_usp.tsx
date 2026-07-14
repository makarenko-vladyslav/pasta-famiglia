"use client";
import { Reveal } from "@/components/mechanics";

export function SectionOfferingUsp() {
  return (
    <section id="offering_usp" className="relative overflow-hidden bg-surface py-[var(--space-act)]">
      <span aria-hidden className="rp-watermark top-10 text-foreground">
        20 ХВИЛИН
      </span>
      
      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          {/* sticky act intro — the empty half is DELIBERATE and inhabited */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h2 className="font-display font-bold text-[clamp(2.6rem,6vw,5.5rem)]">
                Закон 20 хвилин
              </h2>
            </Reveal>
            
            <Reveal delay={0.12}>
              <div className="mt-6 max-w-sm">
                <p className="text-base leading-relaxed text-muted">
                  Ми цінуємо ваш час так само, як і смак. Якщо ваше замовлення не на столі протягом 20 хвилин — <span className="text-accent italic text-lg lg:text-xl">напій за наш рахунок</span>. Справжня італійська швидкість без жодних компромісів.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 overflow-hidden" style={{ borderRadius: "var(--radius-surface)" }}>
                <img 
                  src="https://images.pexels.com/photos/20342116/pexels-photo-20342116.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
                  alt="Шеф-кухар Pasta Famiglia готує свіжу пасту" 
                  loading="lazy" 
                  className="rp-graded aspect-[4/3] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
                />
              </div>
            </Reveal>
          </div>

          {/* editorial list: display names + prices, hairline dividers, NO cards */}
          <div className="divide-y divide-foreground/10">
            {/* Row Item 1 */}
            <Reveal>
              <div className="group flex items-center justify-between gap-5 py-5">
                <div className="h-16 w-16 shrink-0 overflow-hidden lg:h-20 lg:w-20" style={{ borderRadius: "var(--radius-control)" }}>
                  <img 
                    src="https://images.pexels.com/photos/20342116/pexels-photo-20342116.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
                    alt="Карбонара за класичним рецептом" 
                    loading="lazy" 
                    className="rp-graded h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.06]" 
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-[clamp(1.25rem,2.2vw,1.9rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                    Карбонара за класичним рецептом
                  </h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                    Гуанчале, пекоріно романо, жовток та свіжозмелений перець.
                  </p>
                </div>
                <span className="shrink-0 pl-2 font-display text-lg font-semibold text-accent">245 ₴</span>
              </div>
            </Reveal>

            {/* Row Item 2 */}
            <Reveal>
              <div className="group flex items-center justify-between gap-5 py-5">
                <div className="h-16 w-16 shrink-0 overflow-hidden lg:h-20 lg:w-20" style={{ borderRadius: "var(--radius-control)" }}>
                  <img 
                    src="https://images.pexels.com/photos/20342116/pexels-photo-20342116.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
                    alt="Тальятеле з білими грибами" 
                    loading="lazy" 
                    className="rp-graded h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.06]" 
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-[clamp(1.25rem,2.2vw,1.9rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                    Тальятеле з білими грибами
                  </h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                    Вершковий соус, білі гриби, чебрець та пармезан 24-місячної витримки.
                  </p>
                </div>
                <span className="shrink-0 pl-2 font-display text-lg font-semibold text-accent">310 ₴</span>
              </div>
            </Reveal>

            {/* Row Item 3 */}
            <Reveal>
              <div className="group flex items-center justify-between gap-5 py-5">
                <div className="h-16 w-16 shrink-0 overflow-hidden lg:h-20 lg:w-20" style={{ borderRadius: "var(--radius-control)" }}>
                  <img 
                    src="https://images.pexels.com/photos/20342116/pexels-photo-20342116.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
                    alt="Паста Аматрічана" 
                    loading="lazy" 
                    className="rp-graded h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.06]" 
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-[clamp(1.25rem,2.2vw,1.9rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                    Паста Аматрічана
                  </h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                    Томати сан-марцано, гуанчале, перець чилі та сир пекоріно.
                  </p>
                </div>
                <span className="shrink-0 pl-2 font-display text-lg font-semibold text-accent">235 ₴</span>
              </div>
            </Reveal>

            {/* Row Item 4 */}
            <Reveal>
              <div className="group flex items-center justify-between gap-5 py-5">
                <div className="h-16 w-16 shrink-0 overflow-hidden lg:h-20 lg:w-20" style={{ borderRadius: "var(--radius-control)" }}>
                  <img 
                    src="https://images.pexels.com/photos/20342116/pexels-photo-20342116.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
                    alt="Лазанья Болоньєзе" 
                    loading="lazy" 
                    className="rp-graded h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.06]" 
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-[clamp(1.25rem,2.2vw,1.9rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                    Лазанья Болоньєзе
                  </h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                    Традиційні шари пасти з м'ясним рагу болоньєзе та бешамелем.
                  </p>
                </div>
                <span className="shrink-0 pl-2 font-display text-lg font-semibold text-accent">290 ₴</span>
              </div>
            </Reveal>

            {/* Row Item 5 */}
            <Reveal>
              <div className="group flex items-center justify-between gap-5 py-5">
                <div className="h-16 w-16 shrink-0 overflow-hidden lg:h-20 lg:w-20" style={{ borderRadius: "var(--radius-control)" }}>
                  <img 
                    src="https://images.pexels.com/photos/20342116/pexels-photo-20342116.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
                    alt="Равіолі зі шпинатом та рікотою" 
                    loading="lazy" 
                    className="rp-graded h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.06]" 
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-[clamp(1.25rem,2.2vw,1.9rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                    Равіолі зі шпинатом та рікотою
                  </h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                    Ніжна начинка зі шпинату та рікоти у масляному соусі з шалфеєм.
                  </p>
                </div>
                <span className="shrink-0 pl-2 font-display text-lg font-semibold text-accent">220 ₴</span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}