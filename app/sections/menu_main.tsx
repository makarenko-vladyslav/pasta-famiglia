"use client";
import { Reveal } from "@/components/mechanics";

/**
 * SECTION: menu_main
 * ROLE: ACT II: The Offer (Part 2)
 * LAYOUT: Sticky intro + Editorial list with thumbnails
 */
export function SectionMenuMain() {
  const menuItems = [
    {
      name: "Тальятеле з грибами",
      desc: "Вершковий соус, трюфельна олія, пармезан 24 місяці витримки.",
      price: "285 ₴",
      photo: "https://images.pexels.com/photos/4975661/pexels-photo-4975661.jpeg?auto=compress&cs=tinysrgb&h=400&w=400",
    },
    {
      name: "Лазанья Болоньєзе",
      desc: "Традиційний м'ясний рагу, бешамель, листи пасти власного виробництва.",
      price: "310 ₴",
      photo: "https://images.pexels.com/photos/8646690/pexels-photo-8646690.jpeg?auto=compress&cs=tinysrgb&h=400&w=400",
    },
    {
      name: "Різотто з креветками",
      desc: "Рис арборіо, тигрові креветки, мідії, кальмари, сухе біле вино.",
      price: "395 ₴",
      photo: "https://images.pexels.com/photos/546945/pexels-photo-546945.jpeg?auto=compress&cs=tinysrgb&h=400&w=400",
    },
    {
      name: "Равіолі з рікотою",
      desc: "Ніжна начинка, соус з вершкового масла та свіжої шавлії.",
      price: "240 ₴",
      photo: "https://images.pexels.com/photos/4975661/pexels-photo-4975661.jpeg?auto=compress&cs=tinysrgb&h=400&w=400",
    },
    {
      name: "Капрезе з бурратою",
      desc: "Солодкі томати чері, соус песто, ароматний базилік.",
      price: "275 ₴",
      photo: "https://images.pexels.com/photos/8646690/pexels-photo-8646690.jpeg?auto=compress&cs=tinysrgb&h=400&w=400",
    },
    {
      name: "Тірамісу Класико",
      desc: "Маскарпоне, кава еспресо, печиво савоярді, какао.",
      price: "185 ₴",
      photo: "https://images.pexels.com/photos/546945/pexels-photo-546945.jpeg?auto=compress&cs=tinysrgb&h=400&w=400",
    },
  ];

  return (
    <section id="menu_main" className="relative overflow-hidden bg-surface py-[var(--space-act)]">
      <span aria-hidden className="rp-watermark top-10 text-foreground">
        МЕНЮ
      </span>
      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          {/* sticky act intro */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h2 className="font-display font-bold text-[clamp(2.6rem,6vw,5.5rem)]">
                Класика Італії
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
                Кожна страва — це історія, написана свіжими інгредієнтами та приправлена щирою любов’ю нашої родини до справжнього смаку.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div
                className="mt-8 overflow-hidden"
                style={{ borderRadius: "var(--radius-surface)" }}
              >
                <img
                  src="https://images.pexels.com/photos/10406184/pexels-photo-10406184.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
                  alt="Свіжа паста ручної роботи"
                  loading="lazy"
                  className="rp-graded aspect-[4/3] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]"
                />
              </div>
            </Reveal>
          </div>

          {/* editorial list */}
          <div className="divide-y divide-foreground/10">
            {menuItems.map((item, idx) => (
              <Reveal key={idx}>
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