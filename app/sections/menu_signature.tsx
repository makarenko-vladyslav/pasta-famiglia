"use client";

import { Reveal } from "@/components/mechanics";

export function SectionMenuSignature() {
  return (
    <section id="menu_signature" className="relative overflow-hidden bg-surface py-[var(--space-act)]">
      <span aria-hidden className="rp-watermark top-10 text-foreground">
        МЕНЮ
      </span>
      
      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          {/* sticky act intro — the empty half is DELIBERATE and inhabited:
              an appetizing dish photo (menu sells with the eyes) */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h2 className="font-display font-bold leading-[0.9] text-[clamp(2.6rem,6vw,5.5rem)]">
                Авторське <br /> меню
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
                Кожна страва — це поєднання італійських традицій та авторського бачення нашого шеф-кухаря. Використовуємо лише борошно сорту Doppio Zero та фермерські продукти.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 overflow-hidden" style={{ borderRadius: "var(--radius-surface)" }}>
                <img 
                  src="https://images.pexels.com/photos/12956428/pexels-photo-12956428.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
                  alt="Свіжа паста з томатами та базиліком" 
                  loading="lazy" 
                  className="rp-graded aspect-[4/3] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
                />
              </div>
            </Reveal>
          </div>

          {/* editorial list: display names + prices, hairline dividers, NO cards */}
          <div className="divide-y divide-foreground/10 border-t border-foreground/10 lg:border-t-0">
            
            <Reveal delay={0.1}>
              <div className="group flex items-baseline justify-between gap-6 py-8">
                <div>
                  <h3 className="font-display text-[clamp(1.4rem,2.4vw,2.1rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                    Качу е Пепе
                  </h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                    Класична паста тонареллі, сир Pecorino Romano та свіжозмелений чорний перець.
                  </p>
                </div>
                <span className="shrink-0 font-display text-lg font-semibold text-accent">280 ₴</span>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="group flex items-baseline justify-between gap-6 py-8">
                <div>
                  <h3 className="font-display text-[clamp(1.4rem,2.4vw,2.1rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                    Тальятеле з трюфелем
                  </h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                    Свіжа паста з вершковою емульсією, пармезаном та слайсами чорного трюфеля.
                  </p>
                </div>
                <span className="shrink-0 font-display text-lg font-semibold text-accent">420 ₴</span>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="group flex items-baseline justify-between gap-6 py-8">
                <div>
                  <h3 className="font-display text-[clamp(1.4rem,2.4vw,2.1rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                    Равіолі з рікотою
                  </h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                    Равіолі ручного ліплення з начинкою із рікоти та шпинату в олії зі шавлією.
                  </p>
                </div>
                <span className="shrink-0 font-display text-lg font-semibold text-accent">310 ₴</span>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="group flex items-baseline justify-between gap-6 py-8">
                <div>
                  <h3 className="font-display text-[clamp(1.4rem,2.4vw,2.1rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                    Карбонара Autentica
                  </h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                    Гуанчале, жовтки фермерських яєць та сир пекоріно. Без додавання вершків.
                  </p>
                </div>
                <span className="shrink-0 font-display text-lg font-semibold text-accent">295 ₴</span>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="group flex items-baseline justify-between gap-6 py-8">
                <div>
                  <h3 className="font-display text-[clamp(1.4rem,2.4vw,2.1rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                    Ризото з морепродуктами
                  </h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                    Рис карнаролі з тигровими креветками, мідіями та кальмарами у винному соусі.
                  </p>
                </div>
                <span className="shrink-0 font-display text-lg font-semibold text-accent">450 ₴</span>
              </div>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="group flex items-baseline justify-between gap-6 py-8">
                <div>
                  <h3 className="font-display text-[clamp(1.4rem,2.4vw,2.1rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                    Лазанья Болоньєзе
                  </h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                    Традиційний м'ясний рагу, соус бешамель та дев'ять шарів домашньої пасти.
                  </p>
                </div>
                <span className="shrink-0 font-display text-lg font-semibold text-accent">340 ₴</span>
              </div>
            </Reveal>

          </div>
        </div>
      </div>
    </section>
  );
}