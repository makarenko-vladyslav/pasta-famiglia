"use client";

import { Reveal, Magnetic } from "@/components/mechanics";
import { Heart } from "@phosphor-icons/react";

/**
 * SectionFamily - ACT III: The Soul
 * A narrative section focusing on the family atmosphere and kids' area.
 * Layout: Reverse asymmetric (7/5) with a soft arch photo crop.
 */
export function SectionFamily() {
  return (
    <section className="relative overflow-hidden bg-surface py-[var(--space-act)]">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
          
          {/* Right: Large photo cropped into a soft arch shape (Stacked first on mobile) */}
          <div className="order-first lg:order-last lg:col-span-5">
            <Reveal delay={0.2}>
              <div 
                className="group relative overflow-hidden aspect-[4/5] w-full"
                style={{ borderRadius: "500px 500px var(--radius-surface) var(--radius-surface)" }}
              >
                <div className="absolute inset-0 bg-foreground/5 z-10 pointer-events-none" />
                <img
                  src="https://images.pexels.com/photos/5907532/pexels-photo-5907532.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                  alt="Family dining and kids zone at Pasta Famiglia"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-1000 ease-[var(--ease-out-cubic)] group-hover:scale-[1.04]"
                />
                <div className="rp-grain absolute inset-0 pointer-events-none opacity-40" />
              </div>
            </Reveal>
          </div>

          {/* Left: Narrative content */}
          <div className="lg:col-span-7">
            <div className="flex flex-col space-y-8">
              <Reveal delay={0.1}>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-foreground/20" />
                  <span className="text-sm font-medium uppercase tracking-[0.3em] text-muted">
                    СІМЕЙНИЙ ЗАТИШОК
                  </span>
                </div>
              </Reveal>

              <div className="space-y-6">
                <Reveal delay={0.2}>
                  <h2 className="font-display text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.1] text-foreground">
                    Відпочинок для батьків
                  </h2>
                </Reveal>

                <Reveal delay={0.3}>
                  <p className="font-body text-lg leading-relaxed text-foreground lg:text-xl max-w-xl">
                    У нас є обладнана дитяча зона з аніматором. Поки діти грають, ви можете спокійно насолодитися вечерею.
                  </p>
                </Reveal>
              </div>

              <div className="pt-4 border-t border-foreground/10 max-w-md">
                <Reveal delay={0.4}>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <Heart size={20} weight="fill" className="text-foreground/40" />
                    </div>
                    <p className="text-sm text-muted leading-relaxed">
                      Ми створили простір, де кожна деталь працює на ваш спокій. Pasta Famiglia — це місце, куди приходять цілими поколіннями за автентичними смаками та щирим теплом.
                    </p>
                  </div>
                </Reveal>
              </div>

              <div className="pt-6">
                <Reveal delay={0.5}>
                  <Magnetic>
                    <a
                      href="#hero"
                      className="inline-flex items-center justify-center bg-foreground px-6 py-3.5 text-base text-background transition-colors hover:bg-foreground/90"
                      style={{ borderRadius: "var(--radius-control)" }}
                    >
                      Замовити столик
                    </a>
                  </Magnetic>
                </Reveal>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Decorative vertical label for wide screens */}
      <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-90 opacity-5 pointer-events-none">
        <span className="font-display text-[8rem] whitespace-nowrap uppercase tracking-widest text-foreground">
          FAMIGLIA
        </span>
      </div>
    </section>
  );
}