"use client";
import { Reveal, TiltCard } from "@/components/mechanics";

export function SectionMenuLunch() {
  const lunchPhoto = "https://images.pexels.com/photos/29583763/pexels-photo-29583763.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200";

  return (
    <section id="menu_lunch" className="relative overflow-hidden bg-background py-[var(--space-act)]">
      <span aria-hidden className="rp-watermark top-10 text-foreground opacity-[0.03] select-none">ЛАНЧ</span>
      
      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          {/* sticky act intro */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h2 className="font-display font-bold text-[clamp(2.6rem,6vw,5.5rem)]">
                Бізнес-ланч
              </h2>
            </Reveal>
            
            <Reveal delay={0.12}>
              <div className="mt-6">
                <p className="max-w-sm text-base leading-relaxed text-muted">
                  Ідеальна пауза серед робочого дня. Ми зібрали ваші улюблені італійські смаки у збалансований сет для продуктивного обіду.
                </p>
                <div className="mt-4 font-display text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-accent">
                  350 UAH
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 overflow-hidden" style={{ borderRadius: "var(--radius-surface)" }}>
                <TiltCard>
                  <img 
                    src={lunchPhoto} 
                    alt="Комплексний італійський обід" 
                    loading="lazy" 
                    className="rp-graded aspect-[4/3] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
                  />
                </TiltCard>
              </div>
            </Reveal>
          </div>

          {/* editorial list */}
          <div className="divide-y divide-foreground/10">
            {/* Course 1 */}
            <Reveal>
              <div className="group flex items-center justify-between gap-5 py-6">
                <div className="h-16 w-16 shrink-0 overflow-hidden lg:h-20 lg:w-20" style={{ borderRadius: "var(--radius-control)" }}>
                  <img 
                    src={lunchPhoto} 
                    alt="Салат Панцанела" 
                    loading="lazy" 
                    className="rp-graded h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.06]" 
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-[clamp(1.25rem,2.2vw,1.9rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                    Салат Панцанела
                  </h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                    Стиглі томати, хрусткий хліб та свіжий базилік з оливковою олією
                  </p>
                </div>
                <span className="shrink-0 pl-2 font-display text-lg font-semibold text-accent">SET ITEM</span>
              </div>
            </Reveal>

            {/* Course 2 */}
            <Reveal>
              <div className="group flex items-center justify-between gap-5 py-6">
                <div className="h-16 w-16 shrink-0 overflow-hidden lg:h-20 lg:w-20" style={{ borderRadius: "var(--radius-control)" }}>
                  <img 
                    src={lunchPhoto} 
                    alt="Мінестроне" 
                    loading="lazy" 
                    className="rp-graded h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.06]" 
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-[clamp(1.25rem,2.2vw,1.9rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                    Мінестроне
                  </h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                    Класичний овочевий суп на насиченому бульйоні з пармезаном
                  </p>
                </div>
                <span className="shrink-0 pl-2 font-display text-lg font-semibold text-accent">SET ITEM</span>
              </div>
            </Reveal>

            {/* Course 3 */}
            <Reveal>
              <div className="group flex items-center justify-between gap-5 py-6">
                <div className="h-16 w-16 shrink-0 overflow-hidden lg:h-20 lg:w-20" style={{ borderRadius: "var(--radius-control)" }}>
                  <img 
                    src={lunchPhoto} 
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
                    Домашня паста з томатами, пікантною панчетою та сиром пекоріно
                  </p>
                </div>
                <span className="shrink-0 pl-2 font-display text-lg font-semibold text-accent">SET ITEM</span>
              </div>
            </Reveal>

            {/* Course 4 */}
            <Reveal>
              <div className="group flex items-center justify-between gap-5 py-6">
                <div className="h-16 w-16 shrink-0 overflow-hidden lg:h-20 lg:w-20" style={{ borderRadius: "var(--radius-control)" }}>
                  <img 
                    src={lunchPhoto} 
                    alt="Напій на вибір" 
                    loading="lazy" 
                    className="rp-graded h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.06]" 
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-[clamp(1.25rem,2.2vw,1.9rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                    Напій на вибір
                  </h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                    Фірмовий ягідний лимонад або італійська кава на ваш смак
                  </p>
                </div>
                <span className="shrink-0 pl-2 font-display text-lg font-semibold text-accent">SET ITEM</span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}