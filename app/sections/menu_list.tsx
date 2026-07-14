"use client";
import { Reveal } from "@/components/mechanics";

export function SectionMenuList() {
  const menuItems = [
    {
      id: 1,
      name: "Спагеті Карбонара",
      desc: "Традиційна римська паста з гуанчале, свіжими жовтками, пекоріно романо та чорним перцем.",
      price: "345 ₴",
      photo: "https://images.pexels.com/photos/546945/pexels-photo-546945.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400"
    },
    {
      id: 2,
      name: "Брускета з томатами",
      desc: "Хрусткий домашній хліб з солодкими чері, базиліком, часником та оливковою олією Extra Virgin.",
      price: "195 ₴",
      photo: "https://images.pexels.com/photos/8841468/pexels-photo-8841468.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400"
    },
    {
      id: 3,
      name: "Лазанья Болоньєзе",
      desc: "Багатошарова паста з насиченим м'ясним рагу, соусом бешамель та скоринкою з пармезану.",
      price: "410 ₴",
      photo: "https://images.pexels.com/photos/546945/pexels-photo-546945.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400"
    },
    {
      id: 4,
      name: "Равіолі з лососем",
      desc: "Ніжне тісто власного приготування з начинкою з норвезького лосося у вершково-лимонному соусі.",
      price: "480 ₴",
      photo: "https://images.pexels.com/photos/8841468/pexels-photo-8841468.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400"
    },
    {
      id: 5,
      name: "Вітелло Тонато",
      desc: "Слайси рожевої телятини під фірмовим кремовим соусом з тунця та великими каперсами.",
      price: "385 ₴",
      photo: "https://images.pexels.com/photos/546945/pexels-photo-546945.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400"
    },
    {
      id: 6,
      name: "Тірамісу Класико",
      desc: "Повітряний маскарпоне, просочене еспресо печиво савоярді та справжнє італійське какао.",
      price: "220 ₴",
      photo: "https://images.pexels.com/photos/8841468/pexels-photo-8841468.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400"
    }
  ];

  return (
    <section id="menu_list" className="relative overflow-hidden bg-background py-[var(--space-act)]">
      {/* Giant watermark for editorial feel */}
      <span aria-hidden className="rp-watermark top-10 select-none text-foreground opacity-[0.03] lg:opacity-[0.05]">
        MENU
      </span>

      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          {/* Sticky Intro with Hero Dish */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h2 className="font-display font-bold text-[clamp(2.6rem,6vw,5.5rem)]">
                Повне<br />Меню
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
                Ми відібрали найкращі інгредієнти, щоб створити чесну італійську кухню у серці Києва. Від закусок до десертів — кожен смак є автентичним.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="rp-grain mt-8 overflow-hidden" style={{ borderRadius: "var(--radius-surface)" }}>
                <img 
                  src="https://images.pexels.com/photos/546945/pexels-photo-546945.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200" 
                  alt="Фірмові страви Pasta Famiglia" 
                  loading="lazy" 
                  className="rp-graded aspect-[4/3] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
                />
              </div>
            </Reveal>
          </div>

          {/* Editorial List */}
          <div className="divide-y divide-foreground/10">
            {menuItems.map((item, idx) => (
              <Reveal key={item.id} delay={idx * 0.05}>
                <div className="group flex items-center justify-between gap-5 py-6 lg:py-8">
                  {/* Thumbnail */}
                  <div className="h-16 w-16 shrink-0 overflow-hidden lg:h-20 lg:w-20" style={{ borderRadius: "var(--radius-control)" }}>
                    <img 
                      src={item.photo} 
                      alt={item.name} 
                      loading="lazy" 
                      className="rp-graded h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.06]" 
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-[clamp(1.25rem,2.2vw,1.9rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                      {item.name}
                    </h3>
                    <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                      {item.desc}
                    </p>
                  </div>

                  {/* Price */}
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