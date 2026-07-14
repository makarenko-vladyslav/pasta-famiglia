"use client";
import { Reveal } from "@/components/mechanics";

export function SectionMenuSignature() {
  const menuItems = [
    {
      name: "Папарделле з білими грибами",
      desc: "Фірмова паста ручної роботи з вершковим соусом та трюфельною олією.",
      price: "320 ₴",
      photo: "https://images.pexels.com/photos/16716576/pexels-photo-16716576.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200"
    },
    {
      name: "Ньокі Соррентіно",
      desc: "М'які картопляні галушки з моцарелою буффало та томатним соусом.",
      price: "285 ₴",
      photo: "https://images.pexels.com/photos/26989474/pexels-photo-26989474.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200"
    },
    {
      name: "Різотто з морепродуктами",
      desc: "Рис арборіо, креветки, мідії та гребінці у легкому винному соусі.",
      price: "440 ₴",
      photo: "https://images.pexels.com/photos/5908198/pexels-photo-5908198.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
    },
    {
      name: "Лазанья аль Форно",
      desc: "Класичний рецепт з яловичим рагу Болоньєзе та ніжним бешамелем.",
      price: "310 ₴",
      photo: "https://images.pexels.com/photos/16716576/pexels-photo-16716576.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200"
    },
    {
      name: "Равіолі зі шпинатом",
      desc: "Домашні равіолі з рікотою, шпинатом та шавлієвим маслом.",
      price: "260 ₴",
      photo: "https://images.pexels.com/photos/26989474/pexels-photo-26989474.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200"
    }
  ];

  return (
    <section id="menu_signature" className="relative overflow-hidden bg-surface py-[var(--space-act)]">
      <span aria-hidden className="rp-watermark top-10 text-foreground">МЕНЮ</span>
      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          {/* sticky act intro — the empty half is DELIBERATE and inhabited:
              an appetizing dish photo (menu sells with the eyes) */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h2 className="font-display font-bold text-[clamp(2.6rem,6vw,5.5rem)]">
                Фірмові Страви
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
                Ми зібрали наші найпопулярніші позиції, які стали візитною карткою Pasta Famiglia. Тільки свіжа паста власного виробництва та добірні інгредієнти.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 overflow-hidden" style={{ borderRadius: "var(--radius-surface)" }}>
                <img 
                  src="https://images.pexels.com/photos/5908198/pexels-photo-5908198.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
                  alt="Свіжа паста ручної роботи" 
                  loading="lazy" 
                  className="rp-graded aspect-[4/3] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
                />
              </div>
            </Reveal>
          </div>
          
          {/* editorial list: display names + prices, hairline dividers, NO cards */}
          <div className="divide-y divide-foreground/10">
            {menuItems.map((item, index) => (
              <Reveal key={index}>
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