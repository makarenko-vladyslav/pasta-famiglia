"use client";
import { Reveal } from "@/components/mechanics";

export function SectionMenuSignature() {
  const menuItems = [
    {
      name: "Спагеті Карбонара",
      desc: "Автентичний рецепт: гуанчале, яєчні жовтки, пармезан та пекоріно романо",
      price: "315 ₴",
      photo: "https://images.pexels.com/photos/14872288/pexels-photo-14872288.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    },
    {
      name: "Папарделле з білими грибами",
      desc: "Широка паста ручної роботи, свіжі лісові гриби, вершковий соус та трюфельна олія",
      price: "345 ₴",
      photo: "https://images.pexels.com/photos/30729159/pexels-photo-30729159.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    },
    {
      name: "Равіолі зі шпинатом",
      desc: "Ніжна рікотта, свіжий шпинат та соус на основі вершкового масла з шавлією",
      price: "290 ₴",
      photo: "https://images.pexels.com/photos/6287311/pexels-photo-6287311.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    },
    {
      name: "Тальятеле Болоньєзе",
      desc: "Класичне м'ясне рагу, що тушкується 6 годин з червоним вином та овочами",
      price: "320 ₴",
      photo: "https://images.pexels.com/photos/14872288/pexels-photo-14872288.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    },
    {
      name: "Фетучіні з морепродуктами",
      desc: "Тигрові креветки, мідії та кальмари у насиченому соусі біск",
      price: "420 ₴",
      photo: "https://images.pexels.com/photos/30729159/pexels-photo-30729159.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    },
  ];

  return (
    <section id="menu_signature" className="relative overflow-hidden bg-background py-[var(--space-act)]">
      <span aria-hidden className="rp-watermark top-10 text-foreground pointer-events-none select-none">
        ПАСТА
      </span>
      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          {/* sticky act intro */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h2 className="font-display font-bold text-[clamp(2.6rem,6vw,5.5rem)]">
                Авторська паста
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
                Наша паста готується щодня вручну з італійського борошна твердих сортів. 
                Ми зберігаємо традиції, додаючи сучасний характер кожній страві.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 overflow-hidden" style={{ borderRadius: "var(--radius-surface)" }}>
                <img 
                  src="https://images.pexels.com/photos/6287311/pexels-photo-6287311.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
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
              <Reveal key={index} delay={index * 0.05}>
                <div className="group flex items-center justify-between gap-5 py-5 lg:py-8">
                  <div className="h-16 w-16 shrink-0 overflow-hidden lg:h-24 lg:w-24" style={{ borderRadius: "var(--radius-control)" }}>
                    <img 
                      src={item.photo} 
                      alt={item.name} 
                      loading="lazy" 
                      className="rp-graded h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.1]" 
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