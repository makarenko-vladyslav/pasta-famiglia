"use client";

import { Reveal } from "@/components/mechanics";

export function SectionMenuEditorial() {
  const menuItems = [
    {
      name: "Carbonara Tradizionale",
      description: "Гуанчале, жовток фермерського яйця, пекоріно романо, свіжозмелений чорний перець.",
      price: "285 ₴",
    },
    {
      name: "Tagliatelle al Tartufo",
      description: "Домашня тальятеле, вершковий соус, свіжий чорний трюфель та пармезан 24 місяці витримки.",
      price: "420 ₴",
    },
    {
      name: "Lasagna della Casa",
      description: "Багатошарова паста, класичне рагу болоньєзе, ніжний соус бешамель та скоринка моцарели.",
      price: "310 ₴",
    },
    {
      name: "Ravioli con Spinaci",
      description: "Равіолі ручної ліпки зі шпинатом та рікотою, соус на основі шавлії та масла.",
      price: "265 ₴",
    },
    {
      name: "Pappardelle al Cinghiale",
      description: "Широка паста з повільно тушкованою кабанятиною у густому соусі з червоного вина.",
      price: "395 ₴",
    },
    {
      name: "Gnocchi Quattro Formaggi",
      description: "Картопляні ньоккі у соусі з горгонзоли, таледжіо, пармезану та моцарели.",
      price: "290 ₴",
    },
    {
      name: "Spaghetti Frutti di Mare",
      description: "Класичні спагеті з креветками, мідіями та кальмарами у томатному соусі з базиліком.",
      price: "380 ₴",
    },
  ];

  return (
    <section id="menu_editorial" className="relative overflow-hidden bg-surface py-[var(--space-act)]">
      <span aria-hidden className="rp-watermark top-10 text-foreground">МЕНЮ</span>
      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          {/* sticky act intro — the empty half is DELIBERATE and inhabited:
              an appetizing dish photo (menu sells with the eyes) */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h2 className="font-display font-bold leading-[0.9] text-[clamp(2.6rem,6vw,5.5rem)]">
                Авторське меню
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
                Ми готуємо пасту власноруч щоранку, використовуючи італійське борошно з твердих сортів пшениці та традиційні техніки. Кожна страва — це історія нашого дому.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 overflow-hidden" style={{ borderRadius: "var(--radius-surface)" }}>
                <img 
                  src="https://images.pexels.com/photos/10406184/pexels-photo-10406184.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
                  alt="Фірмова італійська паста" 
                  loading="lazy" 
                  className="rp-graded aspect-[4/3] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
                />
              </div>
            </Reveal>
          </div>
          {/* editorial list: display names + prices, hairline dividers, NO cards */}
          <div className="divide-y divide-foreground/10">
            {menuItems.map((item, index) => (
              <Reveal key={index} delay={0.05 * index}>
                <div className="group flex items-baseline justify-between gap-6 py-6">
                  <div>
                    <h3 className="font-display text-[clamp(1.4rem,2.4vw,2.1rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                      {item.name}
                    </h3>
                    <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                  <span className="shrink-0 font-display text-lg font-semibold text-accent">
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