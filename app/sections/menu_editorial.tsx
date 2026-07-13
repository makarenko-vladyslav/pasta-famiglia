"use client";
import { Reveal } from "@/components/mechanics";

export function SectionMenuEditorial() {
  const menuItems = [
    {
      name: "Карбонара за римським рецептом",
      description: "Класичний соус на основі яєчних жовтків, пекоріно романо та хрусткого гуанчале.",
      price: "280 ₴",
      image: "https://images.pexels.com/photos/18890239/pexels-photo-18890239.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    },
    {
      name: "Лазанья з ніжною телятиною",
      description: "Шари домашнього тіста з насиченим м'ясним рагу, соусом бешамель та пармезаном.",
      price: "320 ₴",
      image: "https://images.pexels.com/photos/5903541/pexels-photo-5903541.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    },
    {
      name: "Різотто з білими грибами",
      description: "Кремовий рис арборіо з лісовими грибами, трюфельною олією та свіжим чебрецем.",
      price: "345 ₴",
      image: "https://images.pexels.com/photos/18890239/pexels-photo-18890239.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    },
    {
      name: "Равіолі з гарбузом та шавлією",
      description: "Домашні равіолі з печеним гарбузом, вершковим маслом та ароматною шавлією.",
      price: "265 ₴",
      image: "https://images.pexels.com/photos/5903541/pexels-photo-5903541.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    },
    {
      name: "Тірамісу на домашньому маскарпоне",
      description: "Повітряний десерт з кавою еспресо, лікером та какао-пудрою.",
      price: "195 ₴",
      image: "https://images.pexels.com/photos/18890239/pexels-photo-18890239.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    },
  ];

  return (
    <section id="menu_editorial" className="relative overflow-hidden bg-background py-[var(--space-act)]">
      <span aria-hidden className="rp-watermark top-10 text-foreground opacity-[0.03] lg:opacity-[0.05]">
        МЕНЮ
      </span>
      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          {/* sticky act intro */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h2 className="font-display font-bold leading-[0.9] text-[clamp(2.6rem,6vw,5.5rem)]">
                Вишуканість у Кожній Деталі
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
                Ми віримо, що справжня італійська кухня не потребує зайвих прикрас. Тільки найкращі інгредієнти, перевірені часом поєднання та дрібка нашої любові.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 overflow-hidden" style={{ borderRadius: "var(--radius-surface)" }}>
                <img
                  src="https://images.pexels.com/photos/5903541/pexels-photo-5903541.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                  alt="Фірмова подача страв у Pasta Famiglia"
                  loading="lazy"
                  className="rp-graded aspect-[4/3] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]"
                />
              </div>
            </Reveal>
          </div>

          {/* editorial list */}
          <div className="divide-y divide-foreground/10 border-t border-foreground/10 lg:border-t-0">
            {menuItems.map((item, index) => (
              <Reveal key={index} delay={0.1 + index * 0.05}>
                <div className="group flex items-center justify-between gap-5 py-5 lg:py-8">
                  <div 
                    className="h-16 w-16 shrink-0 overflow-hidden lg:h-20 lg:w-20" 
                    style={{ borderRadius: "var(--radius-control)" }}
                  >
                    <img
                      src={item.image}
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