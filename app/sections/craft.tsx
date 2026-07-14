"use client";

import { Reveal } from "@/components/mechanics";

export function SectionCraft() {
  const items = [
    "Борошно твердих сортів",
    "Томати Mutti",
    "Ручне розкочування"
  ];

  return (
    <section className="py-[var(--space-act)] w-full bg-foreground text-background relative rp-grain overflow-hidden">
      <div className="grid grid-cols-12 w-full max-w-7xl mx-auto md:px-6 lg:px-8">
        
        {/* Media Block */}
        <div className="col-span-12 md:col-start-1 md:col-span-8 lg:col-span-7 row-start-1 relative w-full group">
          <div 
            className="w-full aspect-square md:aspect-[3/4] lg:aspect-[4/5] overflow-hidden md:rounded-[var(--radius-surface)] relative"
          >
            <img
              src="https://images.pexels.com/photos/30479289/pexels-photo-30479289.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
              alt="Процес приготування"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out-cubic group-hover:scale-[1.04]"
            />
            {/* Subtle atmospheric scrim for the dark act */}
            <div className="absolute inset-0 bg-foreground/10 pointer-events-none mix-blend-overlay" />
          </div>
        </div>

        {/* Floating Content Overlap */}
        <div className="col-span-12 md:col-start-6 lg:col-start-7 md:col-span-7 lg:col-span-6 row-start-2 md:row-start-1 z-20 self-end bg-foreground px-4 pt-10 pb-4 md:p-8 lg:p-12 xl:p-16">
          <Reveal delay={0.1}>
            <span className="block text-sm uppercase tracking-[0.25em] text-background/60 mb-6 md:mb-8">
              Процес
            </span>
          </Reveal>

          <Reveal delay={0.2}>
            <h2 className="font-display text-[clamp(2.2rem,4.5vw,4rem)] text-background leading-[1.05] mb-6 md:mb-8">
              Змішуємо Semola та воду
            </h2>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="text-lg lg:text-xl text-background/90 leading-relaxed mb-10 md:mb-14 max-w-xl">
              Жодних магазинних упаковок. Беремо борошно Caputo, томати Mutti та розкочуємо тісто просто в залі, щоб воно завжди мало текстуру al dente.
            </p>
          </Reveal>

          <div className="flex flex-col w-full">
            {items.map((item, idx) => (
              <Reveal key={idx} delay={0.4 + idx * 0.1}>
                <div className="border-t border-background/15 py-4 md:py-5 flex items-center justify-between group/item">
                  <span className="font-display text-xl md:text-2xl text-background/80 transition-colors duration-300 group-hover/item:text-background">
                    {item}
                  </span>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.4 + items.length * 0.1}>
              <div className="border-t border-background/15 w-full" />
            </Reveal>
          </div>
        </div>

      </div>
    </section>
  );
}