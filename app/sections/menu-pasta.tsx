"use client";

import { Reveal, Magnetic } from "@/components/mechanics";
import { ArrowRight } from "@phosphor-icons/react";

/**
 * SECTION: menu-pasta
 * ROLE: ACT II: The Offer (Signature).
 * LAYOUT: Editorial list format with sticky side navigation.
 */
export function SectionMenuPasta() {
  const pastaItems = [
    {
      name: "Паста з томатами Mutti та страчателою",
      price: "280 грн",
      desc: "Фірмова паста з італійськими томатами та вершковим сиром"
    },
    {
      name: "Карбонара за римським рецептом",
      price: "310 грн",
      desc: "Зі справжнім гуанчале, жовтками та сиром Пекоріно Романо"
    },
    {
      name: "Тальятеле з білими грибами",
      price: "340 грн",
      desc: "Широка паста у вершковому соусі з лісовими грибами"
    },
    {
      name: "Равіолі з качкою та шавлією",
      price: "360 грн",
      desc: "Ручна ліпка, начинка з качиного конфі та соус на вершковому маслі"
    }
  ];

  return (
    <section id="menu-pasta" className="relative overflow-hidden bg-background py-[var(--space-act)]">
      <span aria-hidden className="rp-watermark top-10 text-foreground">
        PASTA
      </span>
      
      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          {/* sticky act intro */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h2 className="font-display font-bold leading-[0.9] tracking-[-0.03em] text-[clamp(2.6rem,6vw,5.5rem)]">
                Наша Fresh Pasta
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
                Ви бачите, як ми готуємо: від замішування борошна Caputo до останнього листочка базиліка.
              </p>
            </Reveal>
            
            <p className="mt-8 hidden font-display text-sm font-medium tracking-widest text-muted/60 lg:block">
              ★ 4.9 · 127 відгуків · вул. Антоновича, 44
            </p>
            
            <span aria-hidden className="mt-10 hidden lg:block font-display text-[9rem] font-extrabold leading-none text-foreground/5">
              03
            </span>
          </div>

          {/* editorial list */}
          <div className="flex flex-col">
            <div className="divide-y divide-foreground/10">
              {pastaItems.map((item, idx) => (
                <Reveal key={idx} delay={0.1 * idx}>
                  <div className="group flex flex-col justify-between gap-2 py-8 md:flex-row md:items-baseline md:gap-6">
                    <div className="max-w-xl">
                      <h3 className="font-display text-[clamp(1.4rem,2.4vw,2.1rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                        {item.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {item.desc}
                      </p>
                    </div>
                    <span className="shrink-0 font-display text-xl font-semibold text-accent md:text-2xl">
                      {item.price}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* CTA section */}
            <div className="mt-12 border-t border-foreground/10 pt-12">
              <Reveal delay={0.4}>
                <Magnetic>
                  <a 
                    href="#contacts" 
                    className="group inline-flex items-center gap-4 bg-foreground px-8 py-5 text-sm font-bold uppercase tracking-widest text-background transition-colors duration-300 hover:bg-accent hover:text-accent-foreground"
                  >
                    Дивитись повне меню
                    <ArrowRight size={18} weight="bold" className="transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </Magnetic>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}