"use client";
import { Reveal } from "@/components/mechanics";

export function SectionMenuIntro() {
  return (
    <section id="menu_intro" className="relative overflow-hidden bg-background py-[var(--space-act)] border-t border-foreground/10">
      <span aria-hidden className="rp-watermark top-10 text-foreground">МЕНЮ</span>
      
      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          {/* sticky act intro — the empty half is DELIBERATE and inhabited:
              an appetizing dish photo (menu sells with the eyes) */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h2 className="font-display font-bold text-[clamp(2.6rem,6vw,5.5rem)]">
                Вишукана класика
              </h2>
            </Reveal>
            
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
                Відкрийте для себе автентичні смаки Італії в самому серці Києва. Кожна страва готується з любов'ю до традицій та найкращих фермерських інгредієнтів.
              </p>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div className="mt-8 overflow-hidden" style={{ borderRadius: "var(--radius-surface)" }}>
                <img 
                  src="https://images.pexels.com/photos/11923047/pexels-photo-11923047.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1200" 
                  alt="Процес приготування свіжого тіста" 
                  loading="lazy" 
                  className="rp-graded aspect-[4/3] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
                />
              </div>
            </Reveal>
          </div>

          {/* editorial list: display names + prices, hairline dividers, NO cards */}
          <div className="divide-y divide-foreground/10">
            {/* Item 1 */}
            <Reveal>
              <div className="group flex items-center justify-between gap-5 py-5 lg:py-8">
                <div className="h-16 w-16 shrink-0 overflow-hidden lg:h-24 lg:w-24" style={{ borderRadius: "var(--radius-control)" }}>
                  <img 
                    src="https://images.pexels.com/photos/11923047/pexels-photo-11923047.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400" 
                    alt="Карпачо з яловичини" 
                    loading="lazy" 
                    className="rp-graded h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.06]" 
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-[clamp(1.25rem,2.2vw,1.9rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                    Карпачо з яловичини
                  </h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                    Тонко нарізана яловичина з пармезаном, руколою та трюфельною олією.
                  </p>
                </div>
                <span className="shrink-0 pl-2 font-display text-lg font-semibold text-accent">285 ₴</span>
              </div>
            </Reveal>

            {/* Item 2 */}
            <Reveal delay={0.1}>
              <div className="group flex items-center justify-between gap-5 py-5 lg:py-8">
                <div className="h-16 w-16 shrink-0 overflow-hidden lg:h-24 lg:w-24" style={{ borderRadius: "var(--radius-control)" }}>
                  <img 
                    src="https://images.pexels.com/photos/11923047/pexels-photo-11923047.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400" 
                    alt="Брускетта Помодоро" 
                    loading="lazy" 
                    className="rp-graded h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.06]" 
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-[clamp(1.25rem,2.2vw,1.9rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                    Брускетта Помодоро
                  </h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                    Хрусткий домашній хліб з маринованими томатами, часником та свіжим базиліком.
                  </p>
                </div>
                <span className="shrink-0 pl-2 font-display text-lg font-semibold text-accent">165 ₴</span>
              </div>
            </Reveal>

            {/* Item 3 */}
            <Reveal delay={0.15}>
              <div className="group flex items-center justify-between gap-5 py-5 lg:py-8">
                <div className="h-16 w-16 shrink-0 overflow-hidden lg:h-24 lg:w-24" style={{ borderRadius: "var(--radius-control)" }}>
                  <img 
                    src="https://images.pexels.com/photos/11923047/pexels-photo-11923047.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400" 
                    alt="Асорті італійських сирів" 
                    loading="lazy" 
                    className="rp-graded h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.06]" 
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-[clamp(1.25rem,2.2vw,1.9rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                    Асорті італійських сирів
                  </h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                    Горгонзола, пармезан, пекоріно та фірмовий тапенад з оливок.
                  </p>
                </div>
                <span className="shrink-0 pl-2 font-display text-lg font-semibold text-accent">340 ₴</span>
              </div>
            </Reveal>

            {/* Item 4 */}
            <Reveal delay={0.2}>
              <div className="group flex items-center justify-between gap-5 py-5 lg:py-8">
                <div className="h-16 w-16 shrink-0 overflow-hidden lg:h-24 lg:w-24" style={{ borderRadius: "var(--radius-control)" }}>
                  <img 
                    src="https://images.pexels.com/photos/11923047/pexels-photo-11923047.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400" 
                    alt="Вітелло Тоннато" 
                    loading="lazy" 
                    className="rp-graded h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.06]" 
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-[clamp(1.25rem,2.2vw,1.9rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                    Вітелло Тоннато
                  </h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                    Ніжна телятина sous-vide під кремовим соусом на основі тунця та каперсів.
                  </p>
                </div>
                <span className="shrink-0 pl-2 font-display text-lg font-semibold text-accent">295 ₴</span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}