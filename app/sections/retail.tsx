"use client";

import { Reveal, Marquee } from "@/components/mechanics";

export function SectionRetail() {
  const marqueeItems = [
    "Свіжа паста",
    "Борошно Caputo",
    "Томати Mutti",
    "Оливкова олія",
    "Пармезан"
  ];

  return (
    <section className="w-full bg-surface py-[var(--space-act)] flex flex-col gap-16 lg:gap-24 overflow-hidden">
      <div className="w-full border-y border-foreground/10 py-4 font-display text-[clamp(2.5rem,5vw,4rem)] uppercase text-foreground">
        <Marquee items={marqueeItems} />
      </div>

      <div className="max-w-6xl mx-auto px-4 lg:px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-5 flex flex-col gap-6 order-2 lg:order-1">
          <Reveal delay={0.1}>
            <h2 className="font-display text-[clamp(2.2rem,4.5vw,4rem)] leading-none text-foreground">
              Заберіть додому
            </h2>
          </Reveal>
          
          <Reveal delay={0.2}>
            <p className="text-lg lg:text-xl text-foreground/90 leading-relaxed">
              Продаємо пасту ручної роботи як напівфабрикат. Візьміть порцію з собою, щоб зварити вечерю на власній плиті за п'ять хвилин.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="pt-6 border-t border-foreground/10 mt-2">
              <span className="text-sm uppercase tracking-[0.25em] text-muted font-medium">
                Діє знижка на самовивіз.
              </span>
            </div>
          </Reveal>
        </div>

        <div 
          className="lg:col-span-7 relative w-full aspect-[4/5] lg:aspect-[3/4] overflow-hidden group order-1 lg:order-2" 
          style={{ borderRadius: "var(--radius-surface)" }}
        >
          <img
            src="https://images.pexels.com/photos/10054908/pexels-photo-10054908.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
            alt="Заберіть додому"
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-[1.04] duration-1000"
            style={{ transitionTimingFunction: "var(--ease-out-cubic)" }}
          />
          <div className="absolute inset-0 bg-foreground/5 mix-blend-overlay rp-grain pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}