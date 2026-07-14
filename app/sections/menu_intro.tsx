"use client";
import { Reveal } from "@/components/mechanics";

/**
 * SectionMenuIntro (ACT II: The Offer)
 * 12-column grid editorial layout for the restaurant menu.
 * High-end typography with sticky intro and thumbnail-rich list.
 */
export function SectionMenuIntro() {
  return (
    <section 
      id="menu_intro" 
      className="relative overflow-hidden bg-background py-[var(--space-act)]"
    >
      {/* Decorative large watermark background */}
      <span 
        aria-hidden 
        className="rp-watermark top-10 text-foreground select-none pointer-events-none"
      >
        МЕНЮ
      </span>

      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          
          {/* Sticky Intro: Heading and Featured Visual */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h2 className="font-display font-bold text-[clamp(2.6rem,6vw,5.5rem)]">
                Скарби нашої кухні
              </h2>
            </Reveal>
            
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
                Кожна страва — це подорож до сонячної Італії. Ми зберігаємо автентичність рецептів, додаючи дещицю нашої сімейної пристрасті до кожної тарілки.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div 
                className="mt-8 overflow-hidden" 
                style={{ borderRadius: "var(--radius-surface)" }}
              >
                <img 
                  src="https://images.pexels.com/photos/13736876/pexels-photo-13736876.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
                  alt="Свіжоприготована італійська паста в Pasta Famiglia" 
                  loading="lazy" 
                  className="rp-graded aspect-[4/3] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
                />
              </div>
            </Reveal>
          </div>

          {/* Editorial Menu List: Display names + prices with hairline dividers */}
          <div className="divide-y divide-foreground/10">
            
            {/* Item 1 */}
            <Reveal>
              <div className="group flex items-center justify-between gap-5 py-5">
                <div 
                  className="h-16 w-16 shrink-0 overflow-hidden lg:h-20 lg:w-20" 
                  style={{ borderRadius: "var(--radius-control)" }}
                >
                  <img 
                    src="https://images.pexels.com/photos/13736876/pexels-photo-13736876.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
                    alt="Равіолі з білими грибами" 
                    loading="lazy" 
                    className="rp-graded h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.06]" 
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-[clamp(1.25rem,2.2vw,1.9rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                    Равіолі з білими грибами
                  </h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                    Трюфельна паста, вершки, фермерський пармезан та свіжа шавлія.
                  </p>
                </div>
                <span className="shrink-0 pl-2 font-display text-lg font-semibold text-accent">
                  340 ₴
                </span>
              </div>
            </Reveal>

            {/* Item 2 */}
            <Reveal>
              <div className="group flex items-center justify-between gap-5 py-5">
                <div 
                  className="h-16 w-16 shrink-0 overflow-hidden lg:h-20 lg:w-20" 
                  style={{ borderRadius: "var(--radius-control)" }}
                >
                  <img 
                    src="https://images.pexels.com/photos/13736876/pexels-photo-13736876.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
                    alt="Спагетті Фрутті ді Маре" 
                    loading="lazy" 
                    className="rp-graded h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.06]" 
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-[clamp(1.25rem,2.2vw,1.9rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                    Спагетті Фрутті ді Маре
                  </h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                    Тигрові креветки, мідії та кальмари у соусі з томатів конкасе.
                  </p>
                </div>
                <span className="shrink-0 pl-2 font-display text-lg font-semibold text-accent">
                  480 ₴
                </span>
              </div>
            </Reveal>

            {/* Item 3 */}
            <Reveal>
              <div className="group flex items-center justify-between gap-5 py-5">
                <div 
                  className="h-16 w-16 shrink-0 overflow-hidden lg:h-20 lg:w-20" 
                  style={{ borderRadius: "var(--radius-control)" }}
                >
                  <img 
                    src="https://images.pexels.com/photos/13736876/pexels-photo-13736876.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
                    alt="Ньоккі з горгонзолою" 
                    loading="lazy" 
                    className="rp-graded h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.06]" 
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-[clamp(1.25rem,2.2vw,1.9rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                    Ньоккі з горгонзолою
                  </h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                    Домашні картопляні кльоцки, волоський горіх та ніжний сирний соус.
                  </p>
                </div>
                <span className="shrink-0 pl-2 font-display text-lg font-semibold text-accent">
                  290 ₴
                </span>
              </div>
            </Reveal>

            {/* Item 4 */}
            <Reveal>
              <div className="group flex items-center justify-between gap-5 py-5">
                <div 
                  className="h-16 w-16 shrink-0 overflow-hidden lg:h-20 lg:w-20" 
                  style={{ borderRadius: "var(--radius-control)" }}
                >
                  <img 
                    src="https://images.pexels.com/photos/13736876/pexels-photo-13736876.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
                    alt="Тальятеле Болоньєзе" 
                    loading="lazy" 
                    className="rp-graded h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.06]" 
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-[clamp(1.25rem,2.2vw,1.9rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                    Тальятеле Болоньєзе
                  </h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                    Класичне м'ясне рагу, що тушкується вісім годин за рецептом нашої родини.
                  </p>
                </div>
                <span className="shrink-0 pl-2 font-display text-lg font-semibold text-accent">
                  360 ₴
                </span>
              </div>
            </Reveal>

            {/* Item 5 */}
            <Reveal>
              <div className="group flex items-center justify-between gap-5 py-5">
                <div 
                  className="h-16 w-16 shrink-0 overflow-hidden lg:h-20 lg:w-20" 
                  style={{ borderRadius: "var(--radius-control)" }}
                >
                  <img 
                    src="https://images.pexels.com/photos/13736876/pexels-photo-13736876.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
                    alt="Тірамісу Класіко" 
                    loading="lazy" 
                    className="rp-graded h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.06]" 
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-[clamp(1.25rem,2.2vw,1.9rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                    Тірамісу Класіко
                  </h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                    Домашнє печиво савоярді, просочене міцною арабікою з лікером амарето.
                  </p>
                </div>
                <span className="shrink-0 pl-2 font-display text-lg font-semibold text-accent">
                  210 ₴
                </span>
              </div>
            </Reveal>

          </div>
        </div>
      </div>
    </section>
  );
}