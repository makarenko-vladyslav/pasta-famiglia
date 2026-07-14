"use client";
import { Reveal } from "@/components/mechanics";

/**
 * SECTION: Offering Intro
 * ROLE: ACT II: The Offer — The Promise of Speed
 * LAYOUT: Asymmetric grid (Skeleton Law) with sticky intro and editorial list.
 * THEME: Pure typographic focus with a 20-minute speed guarantee.
 */
export function SectionOfferingIntro() {
  return (
    <section id="offering_intro" className="relative overflow-hidden bg-background py-[var(--space-act)]">
      {/* Decorative watermark - hidden on small screens per platform standard */}
      <span aria-hidden className="rp-watermark top-10 text-foreground opacity-5 select-none">
        СВІЖІСТЬ
      </span>

      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          
          {/* Sticky Act Intro: The Promise */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h2 className="font-display font-bold text-[clamp(2.6rem,6vw,5.5rem)]">
                Гарантія 20 хвилин
              </h2>
            </Reveal>
            
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
                Ми цінуємо ваш час так само високо, як і смак наших страв. Свіжа паста, приготована за авторськими рецептами, з’явиться на вашому столі менш ніж за третину години.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 overflow-hidden" style={{ borderRadius: "var(--radius-surface)" }}>
                <img 
                  src="https://images.pexels.com/photos/16716576/pexels-photo-16716576.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
                  alt="Процес приготування свіжої пасти в Pasta Famiglia" 
                  loading="lazy" 
                  className="rp-graded aspect-[4/3] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
                />
              </div>
            </Reveal>
          </div>

          {/* Editorial List: The Pillars of Service */}
          <div className="divide-y divide-foreground/10">
            {/* Item 01 */}
            <Reveal>
              <div className="group flex items-center justify-between gap-5 py-5 lg:py-8">
                <div className="h-16 w-16 shrink-0 overflow-hidden lg:h-20 lg:w-20" style={{ borderRadius: "var(--radius-control)" }}>
                  <img 
                    src="https://images.pexels.com/photos/16716576/pexels-photo-16716576.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200" 
                    alt="Власне виробництво" 
                    loading="lazy" 
                    className="rp-graded h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.06]" 
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-[clamp(1.25rem,2.2vw,1.9rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                    Власне виробництво
                  </h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                    Ми самі готуємо борошно та замішуємо тісто щоранку для ідеальної текстури кожної порції.
                  </p>
                </div>
                <span className="shrink-0 pl-2 font-display text-lg font-semibold text-accent">01</span>
              </div>
            </Reveal>

            {/* Item 02 */}
            <Reveal>
              <div className="group flex items-center justify-between gap-5 py-5 lg:py-8">
                <div className="h-16 w-16 shrink-0 overflow-hidden lg:h-20 lg:w-20" style={{ borderRadius: "var(--radius-control)" }}>
                  <img 
                    src="https://images.pexels.com/photos/16716576/pexels-photo-16716576.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200" 
                    alt="Швидкість подачі" 
                    loading="lazy" 
                    className="rp-graded h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.06]" 
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-[clamp(1.25rem,2.2vw,1.9rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                    Швидкість подачі
                  </h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                    Від моменту замовлення до першого шматочка — рівно 20 хвилин. Ми цінуємо ваш ритм життя.
                  </p>
                </div>
                <span className="shrink-0 pl-2 font-display text-lg font-semibold text-accent">20'</span>
              </div>
            </Reveal>

            {/* Item 03 */}
            <Reveal>
              <div className="group flex items-center justify-between gap-5 py-5 lg:py-8">
                <div className="h-16 w-16 shrink-0 overflow-hidden lg:h-20 lg:w-20" style={{ borderRadius: "var(--radius-control)" }}>
                  <img 
                    src="https://images.pexels.com/photos/16716576/pexels-photo-16716576.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200" 
                    alt="Довіра гостей" 
                    loading="lazy" 
                    className="rp-graded h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.06]" 
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-[clamp(1.25rem,2.2vw,1.9rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                    Рейтинг довіри
                  </h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                    Наш підхід підтверджено оцінкою 4.9 та сотнями відгуків задоволених мешканців Києва.
                  </p>
                </div>
                <span className="shrink-0 pl-2 font-display text-lg font-semibold text-accent">4.9</span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}