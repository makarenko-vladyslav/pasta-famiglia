"use client";
import { Reveal } from "@/components/mechanics";

export function SectionMenuHighlights() {
  const menuItems = [
    {
      name: "Піца Маргарита",
      desc: "Томати Mutti, моцарела буфала, свіжий базилік та оливкова олія першого віджиму.",
      price: "240 ₴",
      photo: "https://images.pexels.com/photos/36707034/pexels-photo-36707034.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
    },
    {
      name: "Паста Карбонара",
      desc: "Класичний римський рецепт: гуанчале, яєчні жовтки, овечий сир пекоріно та чорний перець.",
      price: "285 ₴",
      photo: "https://images.pexels.com/photos/36707034/pexels-photo-36707034.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
    },
    {
      name: "Кватро Формаджі",
      desc: "Чотири види італійських сирів на фірмовому тісті з борошна Caputo тривалої ферментації.",
      price: "310 ₴",
      photo: "https://images.pexels.com/photos/36707034/pexels-photo-36707034.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
    },
    {
      name: "Паста Болоньєзе",
      desc: "Домашня тальятеле з повільно тушкованим рагу з добірної телятини та червоного вина.",
      price: "295 ₴",
      photo: "https://images.pexels.com/photos/36707034/pexels-photo-36707034.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
    },
    {
      name: "Різотто з грибами",
      desc: "Вершковий рис Арборіо з лісовими білими грибами, пармезаном та ароматом трюфеля.",
      price: "340 ₴",
      photo: "https://images.pexels.com/photos/36707034/pexels-photo-36707034.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
    }
  ];

  return (
    <section id="menu_highlights" className="relative overflow-hidden bg-surface py-[var(--space-act)]">
      <span aria-hidden className="rp-watermark top-10 text-foreground opacity-[0.03] lg:opacity-[0.07]">
        МЕНЮ
      </span>
      
      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          {/* sticky act intro */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h2 className="font-display font-bold text-[clamp(2.6rem,6vw,5.5rem)]">
                ФІРМОВІ СТРАВИ
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
                Секрет нашого смаку — це автентичне італійське борошно Caputo, добірні томати Mutti та відданість традиціям у кожній страві.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 overflow-hidden" style={{ borderRadius: "var(--radius-surface)" }}>
                <img 
                  src="https://images.pexels.com/photos/36707034/pexels-photo-36707034.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
                  alt="Традиційна італійська кухня" 
                  loading="lazy" 
                  className="rp-graded aspect-[4/3] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
                />
              </div>
            </Reveal>
          </div>

          {/* editorial list: display names + prices, hairline dividers */}
          <div className="divide-y divide-foreground/10 border-t border-foreground/10 lg:border-t-0">
            {menuItems.map((item, idx) => (
              <Reveal key={idx} delay={0.05 * idx}>
                <div className="group flex items-center justify-between gap-5 py-6 lg:py-8">
                  <div className="h-16 w-16 shrink-0 overflow-hidden lg:h-20 lg:w-20" style={{ borderRadius: "var(--radius-control)" }}>
                    <img 
                      src={item.photo} 
                      alt={item.name} 
                      loading="lazy" 
                      className="rp-graded h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.06]" 
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-[clamp(1.25rem,2.2vw,1.9rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                      {item.name}
                    </h3>
                    <p className="mt-1 max-w-md text-sm leading-relaxed text-muted italic">
                      {item.desc}
                    </p>
                  </div>
                  <span className="shrink-0 pl-2 font-display text-lg font-semibold text-accent">
                    {item.price}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}