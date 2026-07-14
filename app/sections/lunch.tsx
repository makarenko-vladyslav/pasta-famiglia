"use client";

import { Reveal, Marquee, CountUp } from "@/components/mechanics";

export function SectionLunch() {
  const marqueeItems = [
    "Бізнес-ланч Пн–Пт",
    "З 12:00 до 16:00",
    "Ціна 320 гривень",
    "Обід без стресу",
    "Бізнес-ланч Пн–Пт",
    "З 12:00 до 16:00",
    "Ціна 320 гривень"
  ];

  return (
    <section className="w-full bg-background flex flex-col relative">
      {/* Top Border Marquee */}
      <div className="w-full border-b border-border/10 overflow-hidden">
        <Marquee 
          items={marqueeItems} 
          className="uppercase tracking-[0.25em] text-sm font-display text-accent py-4" 
        />
      </div>

      <div className="w-full mx-auto max-w-6xl px-4 lg:px-6 py-[var(--space-act)]">
        <div className="grid grid-cols-12 gap-x-4 gap-y-16 lg:gap-y-0">
          
          {/* Image Column */}
          <div className="col-span-12 lg:col-span-6 relative">
            <Reveal delay={0.1} className="w-full h-full relative aspect-[4/5] overflow-hidden group" style={{ borderRadius: "var(--radius-surface)" }}>
              <div className="absolute inset-0 rp-grain opacity-[0.15] pointer-events-none mix-blend-overlay z-10"></div>
              <img
                src="https://images.pexels.com/photos/29609013/pexels-photo-29609013.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt="Обід без стресу"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 ease-[var(--ease-out-cubic)] group-hover:scale-[1.04]"
              />
            </Reveal>
          </div>

          {/* Text Column */}
          <div className="col-start-1 lg:col-start-8 col-span-12 lg:col-span-4 flex flex-col justify-center">
            <Reveal delay={0.2} className="flex flex-col gap-10">
              
              <div className="flex flex-col gap-6">
                {/* Stat Element */}
                <div className="flex flex-col gap-2 border-b border-foreground/10 pb-6">
                  <div className="font-display text-[clamp(3rem,5vw,5rem)] leading-none text-foreground flex items-baseline gap-2">
                    <CountUp to={320} locale="uk-UA" />
                    <span className="text-xl lg:text-2xl text-muted font-body">грн</span>
                  </div>
                  <span className="text-sm uppercase tracking-[0.25em] text-muted">Ціна</span>
                </div>

                <div className="flex flex-col gap-4">
                  <h2 className="font-display text-[clamp(2.2rem,4vw,4rem)] leading-[1.05] text-foreground">
                    Обід без стресу
                  </h2>
                  <p className="text-lg lg:text-xl text-foreground/80 text-balance font-body max-w-md">
                    Для тих, хто має рівно годину. Подаємо суп дня, обрану пасту та напій так швидко, що залишиться час випити каву Lavazza.
                  </p>
                </div>
              </div>

              {/* Editorial List */}
              <div className="flex flex-col">
                <div className="flex justify-between items-center py-4 border-t border-foreground/10">
                  <span className="font-display text-base lg:text-lg text-foreground">Бізнес-ланч</span>
                  <span className="text-sm lg:text-base text-muted">Пн–Пт</span>
                </div>
                <div className="flex justify-between items-center py-4 border-t border-b border-foreground/10">
                  <span className="font-display text-base lg:text-lg text-foreground">Час подачі</span>
                  <span className="text-sm lg:text-base text-muted">З 12:00 до 16:00</span>
                </div>
              </div>

            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}