"use client";

import { Reveal, TiltCard } from "@/components/mechanics";

export function SectionPizza() {
  const pizzaItems = [
    { name: "Маргарита з моцарелою fior di latte", price: "240 грн" },
    { name: "Кватро формаджі з локальним медом", price: "320 грн" },
    { name: "Діавола з гострою салямі", price: "290 грн" },
    { name: "Піца з прошуто та руколою", price: "350 грн" },
  ];

  return (
    <section className="bg-surface py-[var(--space-act)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* IMAGE BLOCK: col-2 to 6 (Desktop) */}
          <div className="md:col-start-2 md:col-end-7 order-2 md:order-1">
            <Reveal delay={0.2}>
              <div className="relative aspect-[3/4] md:aspect-[2/3] overflow-hidden rounded-t-full group">
                <TiltCard>
                  <img
                    src="https://images.pexels.com/photos/7938050/pexels-photo-7938050.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                    alt="Дров'яна піч та свіжа піца"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                </TiltCard>
                <div className="absolute inset-0 rp-grain pointer-events-none opacity-40" />
              </div>
            </Reveal>
          </div>

          {/* CONTENT BLOCK: col-7 to 12 (Desktop) */}
          <div className="md:col-start-7 md:col-end-13 order-1 md:order-2 flex flex-col justify-center">
            <Reveal>
              <h2 className="font-display text-foreground leading-[0.9] tracking-tighter mb-6 text-[clamp(2.5rem,5vw,4.5rem)]">
                Піца з дров'яної печі
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-lg md:text-xl text-foreground mb-12 max-w-lg leading-relaxed">
                Печемо на живому вогні. Скоринка хрумтить, а центр залишається ніжним.
              </p>
            </Reveal>

            {/* EDITORIAL LIST */}
            <div className="space-y-8 md:max-w-[90%]">
              {pizzaItems.map((item, index) => (
                <Reveal key={index} delay={0.15 + index * 0.05}>
                  <div className="group">
                    <div className="flex justify-between items-baseline gap-4 mb-2">
                      <span className="font-display text-xl md:text-2xl text-foreground group-hover:translate-x-1 transition-transform duration-500">
                        {item.name}
                      </span>
                      <span className="font-display text-lg md:text-xl text-foreground shrink-0">
                        {item.price}
                      </span>
                    </div>
                    <div className="h-px w-full bg-foreground/10" />
                  </div>
                </Reveal>
              ))}
            </div>
            
            <div className="mt-12 opacity-40">
              <Reveal delay={0.4}>
                <span className="text-[clamp(4rem,10vw,8rem)] font-display uppercase leading-none select-none pointer-events-none block translate-y-4">
                  Fire
                </span>
              </Reveal>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}