"use client";
import { Reveal } from "@/components/mechanics";

/**
 * ACT II: The Offer. Signature Fresh Pasta menu.
 * Editorial list under a sticky header.
 */
export function SectionOfferingPasta() {
  const pastaImage = "https://images.pexels.com/photos/29626982/pexels-photo-29626982.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200";

  const menuItems = [
    {
      name: "Карбонара",
      desc: "Класика з гуанчале, жовтками фермерських яєць та витриманим сиром пекоріно романо.",
      price: "285 ₴",
    },
    {
      name: "Тальятеле",
      desc: "Фірмова паста з білими грибами, вершковим соусом та свіжим чебрецем.",
      price: "310 ₴",
    },
    {
      name: "Паппарделле",
      desc: "Широка паста з повільно тушкованим рагу з качки та тертим пармезаном.",
      price: "345 ₴",
    },
    {
      name: "Равіолі",
      desc: "Ручна робота з ніжним шпинатом, рікотою та ароматним маслом шавлії.",
      price: "275 ₴",
    },
  ];

  return (
    <section id="offering_pasta" className="relative overflow-hidden bg-background py-[var(--space-act)]">
      <span aria-hidden className="rp-watermark top-10 text-foreground opacity-[0.03] lg:opacity-[0.05]">
        PASTA
      </span>
      
      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          {/* Sticky Intro: Headline and main visual */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h2 className="font-display font-bold text-[clamp(2.6rem,6vw,5.5rem)]">
                Мистецтво свіжої пасти
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
                Кожна порція створюється вручну з італійського борошна Semola та фермерських яєць. 
                Ми не просто готуємо — ми продовжуємо справжню родинну традицію.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 overflow-hidden" style={{ borderRadius: "var(--radius-surface)" }}>
                <img 
                  src={pastaImage} 
                  alt="Процес приготування свіжої пасти" 
                  loading="lazy" 
                  className="rp-graded aspect-[4/3] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
                />
              </div>
            </Reveal>
          </div>

          {/* Editorial List: Item names, descriptions, and prices */}
          <div className="divide-y divide-foreground/10">
            {menuItems.map((item, idx) => (
              <Reveal key={item.name} delay={0.1 * idx}>
                <div className="group flex items-center justify-between gap-5 py-5 lg:py-8">
                  {/* Small floating thumbnail */}
                  <div 
                    className="h-16 w-16 shrink-0 overflow-hidden lg:h-20 lg:w-20" 
                    style={{ borderRadius: "var(--radius-control)" }}
                  >
                    <img 
                      src={pastaImage} 
                      alt={item.name} 
                      loading="lazy" 
                      className="rp-graded h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.06]" 
                    />
                  </div>
                  
                  {/* Textual Content */}
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-[clamp(1.25rem,2.2vw,1.9rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                      {item.name}
                    </h3>
                    <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                      {item.desc}
                    </p>
                  </div>
                  
                  {/* Price in Mono/Display style */}
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