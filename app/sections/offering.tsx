"use client";
import { Reveal } from "@/components/mechanics";

export function SectionOffering() {
  const menuItems = [
    {
      id: 1,
      name: "Карбонара за римським рецептом",
      desc: "Автентична паста з гуанчале, сиром Пекоріно Романо та домашніми жовтками без вершків.",
      price: "265 ₴",
      photo: "https://images.pexels.com/photos/5639536/pexels-photo-5639536.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400"
    },
    {
      id: 2,
      name: "Фетучіні з білими грибами",
      desc: "Свіжа паста власного виробництва з лісовими грибами, вершковим соусом та трюфельною олією.",
      price: "310 ₴",
      photo: "https://images.pexels.com/photos/5639536/pexels-photo-5639536.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400"
    },
    {
      id: 3,
      name: "Равіолі зі шпинатом та рікотою",
      desc: "Тонке тісто, ніжна начинка з фермерської рікоти та шпинату в соусі з вершкового масла та шавлії.",
      price: "245 ₴",
      photo: "https://images.pexels.com/photos/5639536/pexels-photo-5639536.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400"
    },
    {
      id: 4,
      name: "Лазанья Болоньєзе",
      desc: "Класичне поєднання шарів пасти, м'ясного рагу, яке ми готуємо 6 годин, та соусу бешамель.",
      price: "295 ₴",
      photo: "https://images.pexels.com/photos/5639536/pexels-photo-5639536.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400"
    },
    {
      id: 5,
      name: "Паста з морепродуктами",
      desc: "Тигрові креветки, мідії та кальмари у легкому соусі на основі білого вина та чері.",
      price: "380 ₴",
      photo: "https://images.pexels.com/photos/5639536/pexels-photo-5639536.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400"
    }
  ];

  return (
    <section id="offering" className="relative overflow-hidden bg-background py-[var(--space-act)]">
      <span aria-hidden className="rp-watermark top-10 text-foreground">ПАСТА</span>
      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          {/* sticky act intro */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h2 className="font-display font-bold text-[clamp(2.6rem,6vw,5.5rem)]">
                Мистецтво свіжої пасти
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
                Ми готуємо пасту вручну щоранку, використовуючи лише італійське борошно твердих сортів. Ваша ідеальна страва готова за 20 хвилин — від замісу тіста до подачі.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 overflow-hidden" style={{ borderRadius: "var(--radius-surface)" }}>
                <img 
                  src="https://images.pexels.com/photos/5639536/pexels-photo-5639536.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
                  alt="Процес приготування свіжої пасти" 
                  loading="lazy" 
                  className="rp-graded aspect-[4/3] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
                />
              </div>
            </Reveal>
          </div>

          {/* editorial list */}
          <div className="divide-y divide-foreground/10">
            {menuItems.map((item, index) => (
              <Reveal key={item.id} delay={index * 0.05}>
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