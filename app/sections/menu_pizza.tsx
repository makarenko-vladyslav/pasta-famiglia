"use client";
import { Reveal } from "@/components/mechanics";

export function SectionMenuPizza() {
  const menuItems = [
    {
      name: "Маргарита",
      desc: "Томати Сан Марцано, моцарела фьор-ді-латте, свіжий базилік та оливкова олія Extra Virgin.",
      price: "245 ₴",
      photo: "https://images.pexels.com/photos/36753771/pexels-photo-36753771.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
    },
    {
      name: "Дьявола",
      desc: "Пікантна салямі вентричіна, чилі, моцарела, орегано та фірмовий томатний соус.",
      price: "310 ₴",
      photo: "https://images.pexels.com/photos/8178895/pexels-photo-8178895.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
    },
    {
      name: "Чотири сири",
      desc: "Горгонзола дольче, пармезан 24 місяці витримки, моцарела та вершкова рікота.",
      price: "345 ₴",
      photo: "https://images.pexels.com/photos/32525228/pexels-photo-32525228.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
    },
    {
      name: "Прошуто та гриби",
      desc: "Витримане прошуто котто, лісові гриби, моцарела та свіжий чебрець на білій основі.",
      price: "325 ₴",
      photo: "https://images.pexels.com/photos/36753771/pexels-photo-36753771.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
    },
    {
      name: "Буррата та Песто",
      desc: "Ціла куля ніжної буррати, томати чері, домашній песто із базиліку та кедрові горішки.",
      price: "385 ₴",
      photo: "https://images.pexels.com/photos/8178895/pexels-photo-8178895.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
    }
  ];

  return (
    <section id="menu_pizza" className="relative overflow-hidden bg-background py-[var(--space-act)]">
      <span aria-hidden className="rp-watermark top-10 text-foreground">ПІЦА</span>
      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          {/* sticky act intro */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h2 className="font-display font-bold text-[clamp(2.6rem,6vw,5.5rem)]">
                Дров'яна піца
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
                Традиційне тісто на заквасці, що визріває 48 годин, та випікання у розпеченій італійській печі для ідеально хрусткої скоринки та автентичного смаку.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 overflow-hidden" style={{ borderRadius: "var(--radius-surface)" }}>
                <img 
                  src="https://images.pexels.com/photos/16774290/pexels-photo-16774290.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
                  alt="Процес випікання піци у печі" 
                  loading="lazy" 
                  className="rp-graded aspect-[4/3] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
                />
              </div>
            </Reveal>
          </div>

          {/* editorial list */}
          <div className="divide-y divide-foreground/10">
            {menuItems.map((item, index) => (
              <Reveal key={index} delay={0.05 * index}>
                <div className="group flex items-center justify-between gap-5 py-5 lg:py-8">
                  <div className="h-16 w-16 shrink-0 overflow-hidden lg:h-24 lg:w-24" style={{ borderRadius: "var(--radius-control)" }}>
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
                    <p className="mt-1 max-w-md text-sm leading-relaxed text-muted lg:text-base">
                      {item.desc}
                    </p>
                  </div>
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