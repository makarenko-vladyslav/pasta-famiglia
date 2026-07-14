"use client";

import { Reveal, Magnetic } from "@/components/mechanics";
import { ArrowUpRight } from "@phosphor-icons/react";

export function SectionMenuPreview() {
  return (
    <section id="menu-preview" className="relative overflow-hidden bg-surface py-[var(--space-act)]">
      <span aria-hidden className="rp-watermark top-10 text-foreground lg:block hidden">
        МЕНЮ
      </span>
      
      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          {/* sticky act intro */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h2 className="font-display font-bold leading-[0.9] text-[clamp(2.6rem,6vw,5.5rem)]">
                Прозорі ціни без доплат
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
                Чесна кухня Pasta Famiglia: ми використовуємо лише імпортоване італійське борошно та фермерські продукти, щоб кожна страва смакувала як у серці Риму.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 overflow-hidden" style={{ borderRadius: "var(--radius-surface)" }}>
                <img 
                  src="https://images.pexels.com/photos/29609013/pexels-photo-29609013.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
                  alt="Італійські страви ресторану" 
                  loading="lazy" 
                  className="rp-graded aspect-[4/3] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
                />
              </div>
            </Reveal>
          </div>

          {/* editorial list */}
          <div className="flex flex-col">
            <div className="divide-y divide-foreground/10">
              {/* Item 1 */}
              <Reveal>
                <div className="group flex items-center justify-between gap-5 py-5 lg:py-8">
                  <div className="hidden h-16 w-16 shrink-0 overflow-hidden sm:block lg:h-20 lg:w-20" style={{ borderRadius: "var(--radius-control)" }}>
                    <img 
                      src="https://images.pexels.com/photos/29609013/pexels-photo-29609013.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=300" 
                      alt="Домашня паста" 
                      loading="lazy" 
                      className="rp-graded h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.06]" 
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-[clamp(1.25rem,2.2vw,1.9rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                      Домашня паста
                    </h3>
                    <p className="mt-1 max-w-md text-sm italic leading-relaxed text-muted">
                      Готуємо власноруч кожного ранку з італійського борошна семола та фермерських жовтків.
                    </p>
                  </div>
                  <span className="shrink-0 pl-2 font-display text-lg font-semibold text-accent lowercase">
                    від 210 грн
                  </span>
                </div>
              </Reveal>

              {/* Item 2 */}
              <Reveal>
                <div className="group flex items-center justify-between gap-5 py-5 lg:py-8">
                  <div className="hidden h-16 w-16 shrink-0 overflow-hidden sm:block lg:h-20 lg:w-20" style={{ borderRadius: "var(--radius-control)" }}>
                    <img 
                      src="https://images.pexels.com/photos/29609013/pexels-photo-29609013.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=300" 
                      alt="Піца з дров’яної печі" 
                      loading="lazy" 
                      className="rp-graded h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.06]" 
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-[clamp(1.25rem,2.2vw,1.9rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                      Піца з дров’яної печі
                    </h3>
                    <p className="mt-1 max-w-md text-sm italic leading-relaxed text-muted">
                      Тісто 48-годинної ферментації, італійські томати та справжня вершкова моцарела.
                    </p>
                  </div>
                  <span className="shrink-0 pl-2 font-display text-lg font-semibold text-accent lowercase">
                    до 380 грн
                  </span>
                </div>
              </Reveal>

              {/* Item 3 */}
              <Reveal>
                <div className="group flex items-center justify-between gap-5 py-5 lg:py-8">
                  <div className="hidden h-16 w-16 shrink-0 overflow-hidden sm:block lg:h-20 lg:w-20" style={{ borderRadius: "var(--radius-control)" }}>
                    <img 
                      src="https://images.pexels.com/photos/29609013/pexels-photo-29609013.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=300" 
                      alt="Бізнес-ланч: три страви" 
                      loading="lazy" 
                      className="rp-graded h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.06]" 
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-[clamp(1.25rem,2.2vw,1.9rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                      Бізнес-ланч: три страви
                    </h3>
                    <p className="mt-1 max-w-md text-sm italic leading-relaxed text-muted">
                      Збалансований обід для вашої паузи: суп, основна страва на вибір та напій.
                    </p>
                  </div>
                  <span className="shrink-0 pl-2 font-display text-lg font-semibold text-accent lowercase">
                    320 грн
                  </span>
                </div>
              </Reveal>
            </div>

            <div className="mt-10 lg:mt-12">
              <Reveal delay={0.3}>
                <Magnetic>
                  <a 
                    href="/menu" 
                    className="group inline-flex items-center gap-2 bg-foreground px-5 py-3 text-sm text-background lg:text-base"
                    style={{ borderRadius: "var(--radius-control)" }}
                  >
                    <span>Дивитися все меню</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </Magnetic>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}