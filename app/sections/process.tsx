"use client";

import { Reveal, TiltCard } from "@/components/mechanics";

const steps = [
  {
    title: "Формуємо тісто щодня",
    body: "Замішуємо борошно з водою о 6:00. Нарізаємо таліателе та равіолі за 2 години до відкриття.",
  },
  {
    title: "Готуємо на відкритій кухні",
    body: "Процес варіння пасти та приготування соусів відбувається на очах у гостей залу на відстані 2 метрів.",
  },
  {
    title: "Ізолюємо столики від шуму",
    body: "Між посадковими зонами встановлені акустичні панелі, що знижують гучність розмов на 40%.",
  },
  {
    title: "Продаємо пасту напівфабрикатом",
    body: "Пакуємо сиру пасту у вакуумні пакети разом із порційними соусами для приготування за 5 хвилин вдома.",
  },
];

export function SectionProcess() {
  return (
    <section className="py-[var(--space-act)] w-full bg-background">
      <div className="mx-auto max-w-6xl px-4 md:px-8 grid grid-cols-12 gap-y-12 md:gap-x-4">
        
        {/* Left Sticky Column */}
        <div className="col-span-12 md:col-span-5 flex flex-col">
          <div className="md:sticky md:top-24 h-max flex flex-col gap-8 md:gap-12">
            <Reveal delay={0.1}>
              <h2 className="font-display text-[clamp(2.2rem,4.5vw,4rem)] text-foreground leading-[1.05] tracking-tight">
                Як ми працюємо
              </h2>
            </Reveal>
            
            <Reveal delay={0.2}>
              <TiltCard>
                <div
                  className="aspect-[4/5] w-full overflow-hidden"
                  style={{ borderRadius: "var(--radius-surface)" }}
                >
                  <img
                    src="https://images.pexels.com/photos/6248853/pexels-photo-6248853.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                    alt="Процес приготування"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-1000 hover:scale-[1.04] ease-[var(--ease-out-cubic)]"
                  />
                </div>
              </TiltCard>
            </Reveal>
          </div>
        </div>

        {/* Right Scrolling Column */}
        <div className="col-span-12 md:col-span-6 md:col-start-7 flex flex-col pt-4 md:pt-0">
          <div className="flex flex-col w-full border-b border-foreground/10">
            {steps.map((step, idx) => (
              <Reveal key={idx} delay={0.1 + idx * 0.1}>
                <div className="group border-t border-foreground/10 py-10 md:py-14 flex flex-col md:flex-row gap-4 md:gap-10">
                  <div className="font-display text-2xl md:text-3xl text-muted/40 leading-none transition-colors duration-700 ease-[var(--ease-out-cubic)] group-hover:text-foreground">
                    0{idx + 1}
                  </div>
                  <div className="flex flex-col gap-3 md:gap-4 md:mt-1">
                    <h3 className="font-display text-xl md:text-2xl text-foreground leading-tight transition-transform duration-700 ease-[var(--ease-out-cubic)] group-hover:translate-x-2">
                      {step.title}
                    </h3>
                    <p className="text-base text-muted max-w-sm leading-relaxed transition-transform duration-700 ease-[var(--ease-out-cubic)] group-hover:translate-x-2">
                      {step.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}