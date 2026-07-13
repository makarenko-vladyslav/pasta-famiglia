"use client";

import { Reveal } from "@/components/mechanics";

/**
 * ACT III: The Soul - Kids Section
 * 1:1 Translation of Spec: Grid layout with image/text split on surface background.
 * Primary focus on family-friendly atmosphere "Pasta Famiglia".
 */
export function SectionKids() {
  return (
    <section 
      id="kids"
      className="relative w-full bg-surface py-[var(--space-act)] overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch border border-foreground/10 overflow-hidden">
          
          {/* Media Block: Left on Desktop, Top on Mobile */}
          <div className="relative overflow-hidden group aspect-[4/5] lg:aspect-auto lg:min-h-[600px] border-b lg:border-b-0 lg:border-r border-foreground/10">
            <Reveal className="h-full w-full">
              <img
                src="https://images.pexels.com/photos/27669092/pexels-photo-27669092.png?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt="Дитячий простір у ресторані Pasta Famiglia"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-1000 ease-[var(--ease-out-cubic)] group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-foreground/5 pointer-events-none" />
            </Reveal>
          </div>

          {/* Content Block: Right on Desktop, Bottom on Mobile */}
          <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
            <div className="max-w-md">
              <Reveal delay={0.1}>
                <span className="text-sm uppercase tracking-[0.3em] text-muted mb-6 block">
                  Для сім'ї
                </span>
              </Reveal>

              <Reveal delay={0.2}>
                <h2 className="font-display text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.1] text-foreground mb-8">
                  Простір для дітей
                </h2>
              </Reveal>

              <Reveal delay={0.3}>
                <p className="font-body text-lg lg:text-xl text-foreground/90 leading-relaxed">
                  Поки ви чекаєте на пасту, малеча грається в дитячій кімнаті. 
                  У вихідні з дітьми працює професійний аніматор.
                </p>
              </Reveal>

              <div className="mt-12 pt-8 border-t border-foreground/10">
                <div className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground" />
                  <p className="text-sm text-muted uppercase tracking-widest">
                    Безпека та комфорт
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}