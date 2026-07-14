"use client";
import { Reveal } from "@/components/mechanics";

/**
 * SectionMenuFeatured
 * ACT II: The Offer. Focus on signature handmade items.
 * Layout: Two-column split with sticky intro and editorial list.
 */
export function SectionMenuFeatured() {
  const menuItems = [
    {
      name: "Тальятеле з білими грибами",
      description: "Домашня паста, лісові гриби, вершковий соус та крапля трюфельної олії для глибини смаку.",
      price: "345 ₴",
      photo: "https://images.pexels.com/photos/18813258/pexels-photo-18813258.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400"
    },
    {
      name: "Лазанья Болоньєзе",
      description: "Традиційні шари тіста з м'ясним рагу, соусом бешамель та витриманим пармезаном.",
      price: "380 ₴",
      photo: "https://images.pexels.com/photos/18813258/pexels-photo-18813258.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400"
    },
    {
      name: "Равіолі з рікотою та шпинатом",
      description: "Ніжна начинка з фермерської рікоти та свіжого шпинату в ароматному соусі з вершкового масла та шавлії.",
      price: "295 ₴",
      photo: "https://images.pexels.com/photos/18813258/pexels-photo-18813258.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400"
    },
    {
      name: "Паста Карбонара",
      description: "Автентичний римський рецепт: гуанчале, жовтки вільних курей та витриманий сир пекоріно романо.",
      price: "320 ₴",
      photo: "https://images.pexels.com/photos/18813258/pexels-photo-18813258.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400"
    },
    {
      name: "Паппарделле з качкою",
      description: "Широка паста з томленим качиним м'ясом, червоним вином та ароматними травами.",
      price: "365 ₴",
      photo: "https://images.pexels.com/photos/18813258/pexels-photo-18813258.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400"
    }
  ];

  return (
    <section id="menu_featured" className="relative overflow-hidden bg-surface py-[var(--space-act)]">
      {/* Background decoration */}
      <span aria-hidden className="rp-watermark top-10 text-foreground opacity-5">МЕНЮ</span>
      
      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          {/* Sticky act intro */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h2 className="font-display font-bold text-[clamp(2.6rem,6vw,5.5rem)]">
                Фірмові страви
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
                Справжня італійська душа в кожній порції пасти ручної роботи. Ми використовуємо тільки борошно сорту Semola та добірні фермерські інгредієнти.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 overflow-hidden" style={{ borderRadius: "var(--radius-surface)" }}>
                <img 
                  src="https://images.pexels.com/photos/18813258/pexels-photo-18813258.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
                  alt="Фірмова паста Pasta Famiglia" 
                  loading="lazy" 
                  className="rp-graded aspect-[4/3] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
                />
              </div>
            </Reveal>
          </div>

          {/* Editorial list: display names + prices */}
          <div className="divide-y divide-foreground/10 border-t border-foreground/10 lg:border-t-0">
            {menuItems.map((item, index) => (
              <Reveal key={index} delay={index * 0.05}>
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
                    <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                  <span className="shrink-0 pl-2 font-display text-lg lg:text-xl font-semibold text-accent">
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