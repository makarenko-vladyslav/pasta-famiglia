"use client";
import { Reveal } from "@/components/mechanics";

/**
 * SECTION: ACT II - Editorial Price List
 * Layout: Sticky act intro on the left, editorial list on the right.
 * Logic: Strictly follows the provided skeleton, avoids virtue adjectives,
 * uses token-based styling and provided image assets.
 */
export function SectionMenuFull() {
  const menuItems = [
    {
      name: "Карбонара",
      desc: "Гуанчале, яєчний жовток, сир пекоріно романо, свіжомелений чорний перець",
      price: "285 ₴",
      photo: "https://images.pexels.com/photos/14750156/pexels-photo-14750156.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
    },
    {
      name: "Маргарита",
      desc: "Томати Сан-Марцано, моцарела фьор-ді-лате, свіжий базилік, оливкова олія",
      price: "210 ₴",
      photo: "https://images.pexels.com/photos/14750156/pexels-photo-14750156.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
    },
    {
      name: "Тальятеле з грибами",
      desc: "Паста власного виробництва, білі гриби, вершковий соус, трюфельна олія",
      price: "315 ₴",
      photo: "https://images.pexels.com/photos/14750156/pexels-photo-14750156.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
    },
    {
      name: "Равіолі з рікотою",
      desc: "Шпинат, сир рікота, вершкове масло, шавлія, пармезан 24-місячної витримки",
      price: "260 ₴",
      photo: "https://images.pexels.com/photos/14750156/pexels-photo-14750156.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
    },
    {
      name: "Фетучіні з морепродуктами",
      desc: "Тигрові креветки, мідії, кальмари, соус на основі білого вина та томатів",
      price: "390 ₴",
      photo: "https://images.pexels.com/photos/14750156/pexels-photo-14750156.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
    },
    {
      name: "Лазанья Болоньєзе",
      desc: "Листи пасти, рагу з яловичини, соус бешамель, моцарела, пармезан",
      price: "295 ₴",
      photo: "https://images.pexels.com/photos/14750156/pexels-photo-14750156.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
    }
  ];

  return (
    <section id="menu_full" className="relative overflow-hidden bg-surface py-[var(--space-act)]">
      <span aria-hidden className="rp-watermark top-10 text-foreground select-none">МЕНЮ</span>
      
      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          
          {/* Sticky Act Intro */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h2 className="font-display font-bold text-[clamp(2.6rem,6vw,5.5rem)]">
                Меню ресторану
              </h2>
            </Reveal>
            
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
                Сім видів домашньої пасти, виготовленої щоранку з італійського борошна. 
                Рецепти, що базуються на регіональних кулінарних традиціях Італії.
              </p>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div className="mt-8 overflow-hidden" style={{ borderRadius: "var(--radius-surface)" }}>
                <img 
                  src="https://images.pexels.com/photos/14750156/pexels-photo-14750156.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
                  alt="Процес приготування пасти" 
                  loading="lazy" 
                  className="rp-graded aspect-[4/3] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
                />
              </div>
            </Reveal>
          </div>

          {/* Editorial List */}
          <div className="divide-y divide-foreground/10 border-t border-foreground/10 lg:border-t-0">
            {menuItems.map((item, i) => (
              <Reveal key={i}>
                <div className="group flex items-center justify-between gap-5 py-5">
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