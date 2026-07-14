"use client";
import { Reveal } from "@/components/mechanics";

/**
 * SECTION: ACT II - Menu Lunch
 * ROLE: The Offer - Time Guarantee
 * STYLE: 5/7 asymmetry editorial list with sticky intro and giant watermark.
 */
export function SectionMenuLunch() {
  return (
    <section id="menu_lunch" className="relative overflow-hidden bg-surface py-[var(--space-act)]">
      <span aria-hidden className="rp-watermark top-10 text-foreground select-none">
        LUNCH
      </span>
      
      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          {/* sticky act intro */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative">
              {/* Vertical label from spec as lg-only garnish */}
              <div className="hidden lg:block absolute -left-12 top-0 h-full origin-top-left -rotate-90 pointer-events-none">
                <span className="text-sm font-display uppercase tracking-[0.3em] text-accent/40 whitespace-nowrap">
                  Guarantee 20 min
                </span>
              </div>
              
              <Reveal>
                <h2 className="font-display font-bold text-[clamp(2.6rem,6vw,5.5rem)]">
                  Ланч за <br /> 20 хвилин
                </h2>
              </Reveal>
            </div>

            <Reveal delay={0.12}>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
                Ми цінуємо ваш час так само високо, як і смак наших страв. Гарантуємо подачу обраного меню протягом двадцяти хвилин у будні дні.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 overflow-hidden" style={{ borderRadius: "var(--radius-surface)" }}>
                <img 
                  src="https://images.pexels.com/photos/32872507/pexels-photo-32872507.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
                  alt="Бізнес-ланч у Pasta Famiglia" 
                  loading="lazy" 
                  className="rp-graded aspect-[4/3] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
                />
              </div>
            </Reveal>
          </div>

          {/* editorial list */}
          <div className="divide-y divide-foreground/10">
            {/* ROW 1 */}
            <Reveal>
              <div className="group flex items-center justify-between gap-5 py-5">
                <div className="h-16 w-16 shrink-0 overflow-hidden lg:h-20 lg:w-20" style={{ borderRadius: "var(--radius-control)" }}>
                  <img 
                    src="https://images.pexels.com/photos/4252772/pexels-photo-4252772.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200" 
                    alt="Салат Цезар з куркою" 
                    loading="lazy" 
                    className="rp-graded h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.06]" 
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-[clamp(1.25rem,2.2vw,1.9rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                    Салат Цезар
                  </h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                    Класичний салат з філе курки гриль, пармезаном та авторським соусом.
                  </p>
                </div>
                <span className="shrink-0 pl-2 font-display text-lg font-semibold text-accent">245 ₴</span>
              </div>
            </Reveal>

            {/* ROW 2 */}
            <Reveal>
              <div className="group flex items-center justify-between gap-5 py-5">
                <div className="h-16 w-16 shrink-0 overflow-hidden lg:h-20 lg:w-20" style={{ borderRadius: "var(--radius-control)" }}>
                  <img 
                    src="https://images.pexels.com/photos/32872507/pexels-photo-32872507.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200" 
                    alt="Фетучіні Альфредо" 
                    loading="lazy" 
                    className="rp-graded h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.06]" 
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-[clamp(1.25rem,2.2vw,1.9rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                    Фетучіні Альфредо
                  </h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                    Ніжна паста у густому вершковому соусі з печерицями та базиліком.
                  </p>
                </div>
                <span className="shrink-0 pl-2 font-display text-lg font-semibold text-accent">280 ₴</span>
              </div>
            </Reveal>

            {/* ROW 3 */}
            <Reveal>
              <div className="group flex items-center justify-between gap-5 py-5">
                <div className="h-16 w-16 shrink-0 overflow-hidden lg:h-20 lg:w-20" style={{ borderRadius: "var(--radius-control)" }}>
                  <img 
                    src="https://images.pexels.com/photos/4252772/pexels-photo-4252772.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200" 
                    alt="Маргарита Classic" 
                    loading="lazy" 
                    className="rp-graded h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.06]" 
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-[clamp(1.25rem,2.2vw,1.9rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                    Маргарита Classic
                  </h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                    Традиційна неаполітанська піца з моцарелою та свіжим базиліком.
                  </p>
                </div>
                <span className="shrink-0 pl-2 font-display text-lg font-semibold text-accent">210 ₴</span>
              </div>
            </Reveal>

            {/* ROW 4 */}
            <Reveal>
              <div className="group flex items-center justify-between gap-5 py-5">
                <div className="h-16 w-16 shrink-0 overflow-hidden lg:h-20 lg:w-20" style={{ borderRadius: "var(--radius-control)" }}>
                  <img 
                    src="https://images.pexels.com/photos/32872507/pexels-photo-32872507.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200" 
                    alt="Крем-суп з печериць" 
                    loading="lazy" 
                    className="rp-graded h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.06]" 
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-[clamp(1.25rem,2.2vw,1.9rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                    Крем-суп грибний
                  </h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                    Ароматний суп з лісових грибів та печериць з трюфельною олією.
                  </p>
                </div>
                <span className="shrink-0 pl-2 font-display text-lg font-semibold text-accent">185 ₴</span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}