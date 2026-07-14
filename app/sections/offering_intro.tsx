"use client";
import { Reveal } from "@/components/mechanics";

export function SectionOfferingIntro() {
  const menuItems = [
    {
      name: "Класична Карбонара",
      desc: "Справжній італійський рецепт: гуанчале, фермерські жовтки, пармезан та пекоріно романо.",
      price: "285 ₴",
      photo: "https://images.pexels.com/photos/37322866/pexels-photo-37322866.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
    },
    {
      name: "Лазанья Болоньєзе",
      desc: "Багатошарова паста з насиченим м'ясним рагу, соусом бешамель та скоринкою з моцарели.",
      price: "340 ₴",
      photo: "https://images.pexels.com/photos/37322866/pexels-photo-37322866.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
    },
    {
      name: "Тальятеле з трюфелем",
      desc: "Домашня паста у вершковому соусі з додаванням пасти з чорного трюфеля та білих грибів.",
      price: "310 ₴",
      photo: "https://images.pexels.com/photos/37322866/pexels-photo-37322866.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
    },
    {
      name: "Равіолі з рікотою",
      desc: "Ніжне тісто з начинкою зі шпинату та рікоти, подається з соусом на основі шавлії.",
      price: "265 ₴",
      photo: "https://images.pexels.com/photos/37322866/pexels-photo-37322866.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
    },
    {
      name: "Паста Неаполітано",
      desc: "Класика півдня Італії: томати пелаті, свіжий базилік, часник та оливкова олія холодного віджиму.",
      price: "240 ₴",
      photo: "https://images.pexels.com/photos/37322866/pexels-photo-37322866.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
    }
  ];

  return (
    <section id="offering_intro" className="relative overflow-hidden bg-background pt-0 pb-[var(--space-act)] lg:pt-[var(--space-act)]">
      <span aria-hidden className="rp-watermark top-10 text-foreground/5 opacity-20 lg:opacity-100">ІТАЛІЙСЬКА ДУША</span>
      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          {/* sticky act intro */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h2 className="font-display font-bold text-[clamp(2.6rem,6vw,5.5rem)]">
                Мистецтво смаку
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
                Кожна страва у Pasta Famiglia — це подорож до сонячної Італії. Ми використовуємо тільки автентичні інгредієнти та рецепти, що передаються поколіннями.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 overflow-hidden" style={{ borderRadius: "var(--radius-surface)" }}>
                <img 
                  src="https://images.pexels.com/photos/37322866/pexels-photo-37322866.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
                  alt="Фірмова паста ресторану Pasta Famiglia" 
                  loading="lazy" 
                  className="rp-graded aspect-[4/3] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
                />
              </div>
            </Reveal>
          </div>

          {/* editorial list: display names + prices, hairline dividers */}
          <div className="divide-y divide-foreground/10">
            {menuItems.map((item, index) => (
              <Reveal key={index} delay={index * 0.05}>
                <div className="group flex items-center justify-between gap-5 py-5 lg:py-8">
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