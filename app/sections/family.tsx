"use client";

import { Reveal } from "@/components/mechanics";

export function SectionFamily() {
  return (
    <section className="py-[var(--space-act)] w-full bg-surface text-foreground overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-12 gap-y-16 md:gap-x-4 items-center">
          
          <div className="col-start-1 col-span-12 md:col-start-2 md:col-span-4 flex flex-col gap-6 md:gap-8 order-1">
            <Reveal delay={0.1}>
              <div className="flex flex-col gap-4">
                <span className="text-sm uppercase tracking-[0.25em] text-muted">
                  Для сім'ї
                </span>
                <h2 className="font-display text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.05]">
                  Поки ви спокійно їсте
                </h2>
              </div>
            </Reveal>
            
            <Reveal delay={0.2}>
              <p className="text-lg lg:text-[1.125rem] text-muted leading-relaxed font-body">
                Діти не нудьгуватимуть за столом, а ви зможете відпочити в тиші. На вихідних у нас працює ігрова кімната з аніматором, є окреме дитяче меню.
              </p>
            </Reveal>
          </div>

          <div className="col-start-1 col-span-12 md:col-start-7 md:col-span-5 order-2">
            <Reveal delay={0.3}>
              <div 
                className="relative w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden group"
                style={{ borderRadius: "var(--radius-surface)" }}
              >
                <img 
                  src="https://images.pexels.com/photos/6287570/pexels-photo-6287570.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
                  alt="Окрема дитяча кімната та меню" 
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-[var(--ease-out-cubic)] group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 rp-grain opacity-20 mix-blend-overlay pointer-events-none"></div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}