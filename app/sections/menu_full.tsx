"use client";
import { Reveal } from "@/components/mechanics";

export function SectionMenuFull() {
  const menuItems = [
    {
      name: "Карбонара",
      desc: "Автентична паста з гуанчале, жовтками, пекоріно романо та чорним перцем.",
      price: "245 грн",
      photo: "https://images.pexels.com/photos/8311823/pexels-photo-8311823.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
    },
    {
      name: "Маргарита Класика",
      desc: "Томати сан-марцано, моцарела фьор-ді-латте, свіжий базилік та оливкова олія.",
      price: "195 грн",
      photo: "https://images.pexels.com/photos/8311823/pexels-photo-8311823.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
    },
    {
      name: "Равіолі з рікотою",
      desc: "Домашня паста з ніжною рікотою та шпинатом у шавлієвому маслі.",
      price: "230 грн",
      photo: "https://images.pexels.com/photos/8311823/pexels-photo-8311823.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
    },
    {
      name: "Фетучіні з грибами",
      desc: "Широка паста ручної роботи з білими грибами та вершковим соусом.",
      price: "265 грн",
      photo: "https://images.pexels.com/photos/8311823/pexels-photo-8311823.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
    },
    {
      name: "Різотто з морепродуктами",
      desc: "Рис арборіо з тигровими креветками, мідіями та білим вином.",
      price: "310 грн",
      photo: "https://images.pexels.com/photos/8311823/pexels-photo-8311823.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
    },
    {
      name: "Брускетта з томатами",
      desc: "Хрусткий хліб з маринованими томатами, часником та базиліком.",
      price: "165 грн",
      photo: "https://images.pexels.com/photos/8311823/pexels-photo-8311823.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
    },
    {
      name: "Тірамісу",
      desc: "Класичний десерт на основі маскарпоне, печива савоярді та міцної кави.",
      price: "155 грн",
      photo: "https://images.pexels.com/photos/8311823/pexels-photo-8311823.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
    },
    {
      name: "Панна котта",
      desc: "Ніжний вершковий десерт з малиновим кулі та свіжою м'ятою.",
      price: "135 грн",
      photo: "https://images.pexels.com/photos/8311823/pexels-photo-8311823.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
    }
  ];

  return (
    <section id="menu_full" className="relative overflow-hidden bg-surface py-[var(--space-act)]">
      <span aria-hidden className="rp-watermark top-10 text-foreground">FRESH</span>
      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          {/* sticky act intro */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h2 className="font-display font-bold text-[clamp(2.6rem,6vw,5.5rem)]">
                Меню Смаку
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
                Кожна страва у Pasta Famiglia — це результат багаторічних традицій та любові до італійської кухні. Ми використовуємо лише фермерські продукти та інгредієнти найвищої якості.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 overflow-hidden" style={{ borderRadius: "var(--radius-surface)" }}>
                <img 
                  src="https://images.pexels.com/photos/8311823/pexels-photo-8311823.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
                  alt="Фірмові страви ресторану Pasta Famiglia" 
                  loading="lazy" 
                  className="rp-graded aspect-[4/3] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
                />
              </div>
            </Reveal>
          </div>

          {/* editorial list */}
          <div className="divide-y divide-foreground/10">
            {menuItems.map((item, index) => (
              <Reveal key={index}>
                <div className="group flex items-center justify-between gap-5 py-5">
                  <div 
                    className="h-16 w-16 shrink-0 overflow-hidden lg:h-20 lg:w-20" 
                    style={{ borderRadius: "var(--radius-control)" }}
                  >
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