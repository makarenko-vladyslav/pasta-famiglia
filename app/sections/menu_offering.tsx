"use client";

import { Reveal } from "@/components/mechanics";

/**
 * ACT II: Menu Offering
 * Editorial list layout with a sticky intro and high-impact typography.
 * Follows the "Pasta Famiglia" visual identity.
 */
export function SectionMenuOffering() {
  const menuItems = [
    {
      name: "Карбонара за римським рецептом",
      desc: "Автентична паста з гуанчале, жовтками та пекоріно романо",
      price: "320 ₴",
      photo: "https://images.pexels.com/photos/4048421/pexels-photo-4048421.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
    },
    {
      name: "Тальятеле з білими грибами",
      desc: "Домашня паста, вершковий соус, трюфельна олія та пармезан",
      price: "380 ₴",
      photo: "https://images.pexels.com/photos/4048421/pexels-photo-4048421.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
    },
    {
      name: "Равіолі з рікотою та шпинатом",
      desc: "У соусі з вершкового масла, шавлії та обсмажених кедрових горіхів",
      price: "290 ₴",
      photo: "https://images.pexels.com/photos/4048421/pexels-photo-4048421.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
    },
    {
      name: "Лазанья Болоньєзе",
      desc: "Шари пасти з м'ясним рагу, соусом бешамель та золотистою моцарелою",
      price: "340 ₴",
      photo: "https://images.pexels.com/photos/4048421/pexels-photo-4048421.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
    },
    {
      name: "Фетучіні з морепродуктами",
      desc: "Креветки, мідії та кальмари у соусі на основі білого вина",
      price: "450 ₴",
      photo: "https://images.pexels.com/photos/4048421/pexels-photo-4048421.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
    },
    {
      name: "Піца Маргарита",
      desc: "Томати San Marzano, моцарела fior di latte та свіжий базилік",
      price: "280 ₴",
      photo: "https://images.pexels.com/photos/4048421/pexels-photo-4048421.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
    }
  ];

  return (
    <section id="menu_offering" className="relative overflow-hidden bg-background py-[var(--space-act)]">
      <span aria-hidden className="rp-watermark top-10 text-foreground select-none pointer-events-none">
        МЕНЮ
      </span>
      
      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          {/* STICKY INTRO */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h2 className="font-display font-bold leading-[0.9] text-[clamp(2.6rem,6vw,5.5rem)]">
                Класика та Традиції
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
                Від автентичної пасти ручної роботи до вишуканих антипасті — кожен інгредієнт відібрано з любов'ю до італійської кухні у самому серці Києва.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 overflow-hidden" style={{ borderRadius: "var(--radius-surface)" }}>
                <img 
                  src="https://images.pexels.com/photos/4048421/pexels-photo-4048421.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
                  alt="Процес приготування свіжої пасти" 
                  loading="lazy" 
                  className="rp-graded aspect-[4/3] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
                />
              </div>
            </Reveal>
          </div>

          {/* EDITORIAL LIST */}
          <div className="divide-y divide-foreground/10">
            {menuItems.map((item, index) => (
              <Reveal key={index}>
                <div className="group flex items-center justify-between gap-5 py-6">
                  {/* Item Thumbnail */}
                  <div className="hidden h-16 w-16 shrink-0 overflow-hidden sm:block lg:h-20 lg:w-20" style={{ borderRadius: "var(--radius-control)" }}>
                    <img 
                      src={item.photo} 
                      alt={item.name} 
                      loading="lazy" 
                      className="rp-graded h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.06]" 
                    />
                  </div>
                  
                  {/* Item Details */}
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-[clamp(1.25rem,2.2vw,1.9rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                      {item.name}
                    </h3>
                    <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                      {item.desc}
                    </p>
                  </div>
                  
                  {/* Item Price */}
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