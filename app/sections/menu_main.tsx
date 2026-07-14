"use client";
import { Reveal } from "@/components/mechanics";

export function SectionMenuMain() {
  const menuItems = [
    {
      name: "Тальятелле Карбонара",
      desc: "Справжня гуанчале, пекоріно романо, фермерський жовток та свіжозмелений перець.",
      price: "285 ₴",
      photo: "https://images.pexels.com/photos/36982369/pexels-photo-36982369.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "Маргарита D.O.C.",
      desc: "Томати Сан-Марцано, моцарела буфала, свіжий базилік та оливкова олія Extra Virgin.",
      price: "240 ₴",
      photo: "https://images.pexels.com/photos/8093330/pexels-photo-8093330.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "Різотто з трюфелем",
      desc: "Рис арборіо, крем з чорного трюфеля, вершкове масло та 24-місячний пармезан.",
      price: "420 ₴",
      photo: "https://images.pexels.com/photos/35994509/pexels-photo-35994509.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "Вітелло Тоннато",
      desc: "Тонко нарізана телятина су-від під ніжним соусом з тунця та каперсів.",
      price: "315 ₴",
      photo: "https://images.pexels.com/photos/36982369/pexels-photo-36982369.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "Папарделле з качкою",
      desc: "Домашня широка паста з томленим рагу з качиної ніжки та травами.",
      price: "350 ₴",
      photo: "https://images.pexels.com/photos/8093330/pexels-photo-8093330.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "Равіолі з рікотою",
      desc: "Ручна ліпка, начинка з вершкової рікоти та шпинату в шавлієвому маслі.",
      price: "295 ₴",
      photo: "https://images.pexels.com/photos/35994509/pexels-photo-35994509.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "Тірамісу Класико",
      desc: "Домашнє савоярді, просочене еспресо, та повітряний крем маскарпоне.",
      price: "190 ₴",
      photo: "https://images.pexels.com/photos/36982369/pexels-photo-36982369.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "Пана-Кота",
      desc: "Ніжний вершковий десерт з натуральною ваніллю та ягідним кулі.",
      price: "165 ₴",
      photo: "https://images.pexels.com/photos/8093330/pexels-photo-8093330.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  return (
    <section id="menu_main" className="relative overflow-hidden bg-surface py-[var(--space-act)]">
      {/* Decorative watermark for the act */}
      <span aria-hidden className="rp-watermark top-10 pointer-events-none select-none text-foreground lg:block hidden">
        МЕНЮ
      </span>

      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          {/* Sticky Intro Segment */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h2 className="font-display font-bold text-[clamp(2.6rem,6vw,5.5rem)]">
                ОБРАНІ СТРАВИ
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-8 max-w-sm text-base leading-relaxed text-muted">
                Ми поєднуємо вікові традиції італійської кухні з сучасним підходом до подачі та безкомпромісним вибором продуктів. Кожна тарілка — це історія.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 overflow-hidden" style={{ borderRadius: "var(--radius-surface)" }}>
                <img 
                  src="https://images.pexels.com/photos/36982369/pexels-photo-36982369.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
                  alt="Фірмова італійська паста Pasta Famiglia" 
                  loading="lazy" 
                  className="rp-graded aspect-[4/3] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
                />
              </div>
            </Reveal>
          </div>

          {/* Editorial Price List */}
          <div className="divide-y divide-foreground/10 border-t border-foreground/10 lg:border-t-0">
            {menuItems.map((item, index) => (
              <Reveal key={index} delay={index * 0.05}>
                <div className="group flex items-center justify-between gap-5 py-6 lg:py-8">
                  {/* Circle Thumbnail */}
                  <div 
                    className="h-16 w-16 shrink-0 overflow-hidden transition-transform duration-700 group-hover:rotate-6 lg:h-20 lg:w-20" 
                    style={{ borderRadius: "var(--radius-control)" }}
                  >
                    <img 
                      src={item.photo} 
                      alt={item.name} 
                      loading="lazy" 
                      className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.12]" 
                    />
                  </div>

                  {/* Item Content */}
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-[clamp(1.25rem,2.2vw,1.8rem)] font-semibold leading-tight uppercase transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                      {item.name}
                    </h3>
                    <p className="mt-1.5 max-w-md text-sm leading-relaxed text-muted">
                      {item.desc}
                    </p>
                  </div>

                  {/* Price Block */}
                  <span className="shrink-0 pl-2 font-display text-lg font-semibold text-accent lg:text-xl">
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