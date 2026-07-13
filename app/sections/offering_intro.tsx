"use client";

import { Reveal } from "@/components/mechanics";

export function SectionOfferingIntro() {
  return (
    <section id="offering_intro" className="relative overflow-hidden bg-background py-[var(--space-act)]">
      {/* Background Watermark - hidden on mobile, decorative on large screens */}
      <span aria-hidden className="rp-watermark top-10 text-foreground hidden lg:block select-none">
        MENÙ
      </span>

      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          
          {/* Sticky Intro Side */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h2 className="font-display font-bold leading-[0.9] text-[clamp(2.6rem,6vw,5.5rem)]">
                Стіл без <br /> секретів
              </h2>
            </Reveal>
            
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
                Ми віримо, що справжня італійська кухня починається з чесності. 
                Відкрита кухня, найкраще борошно та сімейні рецепти Pasta Famiglia, 
                що передаються поколіннями.
              </p>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div className="mt-8 overflow-hidden" style={{ borderRadius: "var(--radius-surface)" }}>
                <img 
                  src="https://images.pexels.com/photos/26729398/pexels-photo-26729398.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
                  alt="Процес приготування свіжої пасти" 
                  loading="lazy" 
                  className="rp-graded aspect-[4/3] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
                />
              </div>
            </Reveal>
          </div>

          {/* Editorial List Side */}
          <div className="divide-y divide-foreground/10">
            
            {/* Row 1 */}
            <Reveal>
              <div className="group flex items-baseline justify-between gap-6 py-6">
                <div>
                  <h3 className="font-display text-[clamp(1.4rem,2.4vw,2.1rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                    Паста Карбонара
                  </h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                    Гуанчале, сир пекоріно романо, жовток, свіжозмелений чорний перець. Без вершків.
                  </p>
                </div>
                <span className="shrink-0 font-display text-lg font-semibold text-accent">320 ₴</span>
              </div>
            </Reveal>

            {/* Row 2 */}
            <Reveal>
              <div className="group flex items-baseline justify-between gap-6 py-6">
                <div>
                  <h3 className="font-display text-[clamp(1.4rem,2.4vw,2.1rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                    Тальятеле з білими грибами
                  </h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                    Домашня паста, карпатські білі гриби, вершковий соус, свіжий чебрець.
                  </p>
                </div>
                <span className="shrink-0 font-display text-lg font-semibold text-accent">380 ₴</span>
              </div>
            </Reveal>

            {/* Row 3 */}
            <Reveal>
              <div className="group flex items-baseline justify-between gap-6 py-6">
                <div>
                  <h3 className="font-display text-[clamp(1.4rem,2.4vw,2.1rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                    Лазанья Болоньєзе
                  </h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                    Класичне м’ясне рагу, густий бешамель, пармезан, шість шарів домашньої пасти.
                  </p>
                </div>
                <span className="shrink-0 font-display text-lg font-semibold text-accent">350 ₴</span>
              </div>
            </Reveal>

            {/* Row 4 */}
            <Reveal>
              <div className="group flex items-baseline justify-between gap-6 py-6">
                <div>
                  <h3 className="font-display text-[clamp(1.4rem,2.4vw,2.1rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                    Равіолі з рикотою
                  </h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                    Ніжна рикота, молодий шпинат, соус на основі вершкового масла та шавлії.
                  </p>
                </div>
                <span className="shrink-0 font-display text-lg font-semibold text-accent">290 ₴</span>
              </div>
            </Reveal>

            {/* Row 5 */}
            <Reveal>
              <div className="group flex items-baseline justify-between gap-6 py-6">
                <div>
                  <h3 className="font-display text-[clamp(1.4rem,2.4vw,2.1rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                    Спагеті Фрутті ді Маре
                  </h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                    Тигрові креветки, мідії, кальмари, легкий соус з томатів чері та білого вина.
                  </p>
                </div>
                <span className="shrink-0 font-display text-lg font-semibold text-accent">460 ₴</span>
              </div>
            </Reveal>

            {/* Row 6 */}
            <Reveal>
              <div className="group flex items-baseline justify-between gap-6 py-6">
                <div>
                  <h3 className="font-display text-[clamp(1.4rem,2.4vw,2.1rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                    Паппарделле з качкою
                  </h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                    Томлена качка в червоному вині Chianti, ароматні трави, витриманий пармезан.
                  </p>
                </div>
                <span className="shrink-0 font-display text-lg font-semibold text-accent">395 ₴</span>
              </div>
            </Reveal>

          </div>
        </div>
      </div>
    </section>
  );
}