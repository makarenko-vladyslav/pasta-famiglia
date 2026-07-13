"use client";

import { Reveal, TiltCard } from "@/components/mechanics";
import { HouseLine, Balloon, OrangeSlice } from "@phosphor-icons/react";

/**
 * SECTION: Kids (ACT III: The Soul)
 * STYLING: Grid-based editorial layout with vertical typography and circle-masked imagery.
 */
export function SectionKids() {
  const features = [
    {
      title: "Дитяче меню без гострих спецій",
      description: "Збалансовані порції, які подобаються маленьким гурманам",
      icon: <OrangeSlice size={20} weight="light" />,
    },
    {
      title: "Безпечні іграшки та лабіринт",
      description: "Сертифіковані матеріали та м'яке покриття для активних ігор",
      icon: <HouseLine size={20} weight="light" />,
    },
    {
      title: "Аніматор щосуботи та неділі",
      description: "Професійні розваги, поки ви насолоджуєтеся вечерею",
      icon: <Balloon size={20} weight="light" />,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-background py-[var(--space-act)]">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 lg:gap-8">
          
          {/* Vertical Label - Desktop Only */}
          <div className="hidden items-start justify-start md:col-start-1 md:flex">
            <span className="sticky top-24 font-mono text-[12px] tracking-[0.2em] uppercase opacity-50 [writing-mode:vertical-lr] rotate-180">
              Family
            </span>
          </div>

          {/* Visual Asset */}
          <div className="col-span-1 md:col-start-2 md:col-end-7">
            <Reveal delay={0.2}>
              <TiltCard>
                <div className="group relative aspect-[4/5] overflow-hidden rounded-[var(--radius-surface)] transition-all duration-1000 [clip-path:circle(100%_at_50%_50%)] hover:[clip-path:circle(70%_at_50%_50%)]">
                  <div className="rp-grain absolute inset-0 z-10 pointer-events-none opacity-40" />
                  <img
                    src="https://images.pexels.com/photos/3662708/pexels-photo-3662708.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
                    alt="Дитяча кімната Pasta Famiglia"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-foreground/5" />
                </div>
              </TiltCard>
            </Reveal>
          </div>

          {/* Text Content */}
          <div className="col-span-1 mt-8 md:col-start-7 md:col-end-13 md:mt-0 lg:pl-8">
            <Reveal>
              <h2 className="font-display leading-[0.9] tracking-tight text-foreground text-[clamp(2rem,4vw,3.5rem)] mb-8">
                Діти грають — ви відпочиваєте
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-lg md:text-xl text-foreground mb-12 max-w-md">
                У нас є окрема кімната з іграшками, а по вихідних працює аніматор. 
                Поки ви закінчуєте вечерею, діти зайняті справою.
              </p>
            </Reveal>

            {/* Editorial List */}
            <div className="space-y-0">
              {features.map((item, index) => (
                <Reveal key={index} delay={0.1 + index * 0.1}>
                  <div className="group flex items-start gap-4 border-t border-foreground/10 py-6 last:border-b">
                    <div className="mt-1 text-accent">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between">
                        <span className="font-display text-xl md:text-2xl tracking-tight text-foreground">
                          {item.title}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-muted line-clamp-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </div>
      
      {/* Background Decorative Element */}
      <div className="absolute -bottom-12 -right-12 pointer-events-none select-none opacity-[0.03] overflow-hidden">
        <span className="font-display text-[20vw] leading-none whitespace-nowrap">
          FAMIGLIA
        </span>
      </div>
    </section>
  );
}