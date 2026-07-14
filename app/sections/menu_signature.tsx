"use client";
import { Reveal } from "@/components/mechanics";

/**
 * SECTION: ACT II - Signature Items
 * ROLE: The Offer - Signature Items
 * LAYOUT: Editorial list with a sticky visual anchor.
 * 
 * DESIGN SYSTEM:
 * - Watermark backdrop for editorial depth.
 * - Sticky intro section (5/12) with a signature dish photo.
 * - Hairline-divided list (7/12) for menu items.
 * - Micro-interactions: Hover scale on thumbnails + text color shift.
 */

export function SectionMenuSignature() {
  const menuItems = [
    {
      name: "Тальятеле з білими грибами",
      desc: "Ручна паста з карпатськими білими грибами, трюфельною пастою та вершковим соусом",
      price: "380 грн",
      photo: "https://images.pexels.com/photos/37322866/pexels-photo-37322866.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    },
    {
      name: "Паста Карбонара Класична",
      desc: "Автентичний рецепт: гуанчале, фермерські жовтки, сир Пекоріно Романо та чорний перець",
      price: "295 грн",
      photo: "https://images.pexels.com/photos/32872507/pexels-photo-32872507.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
    },
    {
      name: "Лазанья Аль Форно",
      desc: "Шари пасти з м'ясним рагу болоньєзе, соусом бешамель та золотистою скоринкою моцарели",
      price: "340 грн",
      photo: "https://images.pexels.com/photos/37322866/pexels-photo-37322866.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    },
    {
      name: "Равіолі з рікотою та шпинатом",
      desc: "Ніжна начинка з італійських сирів у соусі з вершкового масла та шавлії",
      price: "275 грн",
      photo: "https://images.pexels.com/photos/32872507/pexels-photo-32872507.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
    },
    {
      name: "Фетучіні з морепродуктами",
      desc: "Тигрові креветки, мідії та кальмари у легкому соусі на основі білого вина та томатів",
      price: "420 грн",
      photo: "https://images.pexels.com/photos/37322866/pexels-photo-37322866.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    },
  ];

  return (
    <section id="menu_signature" className="relative overflow-hidden bg-background py-[var(--space-act)]">
      {/* Watermark garnish - visible on desktop only as per platform guidelines */}
      <span aria-hidden className="rp-watermark top-10 select-none text-foreground opacity-[0.03] lg:block">
        ПАСТА
      </span>
      
      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          
          {/* Sticky intro section */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h2 className="font-display font-semibold text-[clamp(2.6rem,6vw,5.5rem)]">
                Наші Фірмові Страви
              </h2>
            </Reveal>
            
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-muted lg:text-lg">
                Від класики, що пройшла крізь покоління, до сучасних інтерпретацій італійської кухні. 
                Кожна страва — це історія нашої родини, втілена у смаку.
              </p>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div 
                className="mt-8 overflow-hidden" 
                style={{ borderRadius: "var(--radius-surface)" }}
              >
                <img 
                  src="https://images.pexels.com/photos/37322866/pexels-photo-37322866.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
                  alt="Процес приготування фірмової пасти Pasta Famiglia" 
                  loading="lazy" 
                  className="rp-graded aspect-[4/3] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
                />
              </div>
            </Reveal>
          </div>

          {/* Editorial menu list */}
          <div className="divide-y divide-foreground/10">
            {menuItems.map((item, index) => (
              <Reveal key={index} delay={0.05 * index}>
                <div className="group flex items-center justify-between gap-5 py-6 lg:py-8">
                  {/* Thumbnail */}
                  <div 
                    className="h-16 w-16 shrink-0 overflow-hidden lg:h-24 lg:w-24" 
                    style={{ borderRadius: "var(--radius-control)" }}
                  >
                    <img 
                      src={item.photo} 
                      alt={item.name} 
                      loading="lazy" 
                      className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.08]" 
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-[clamp(1.2rem,2.5vw,1.8rem)] font-medium leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                      {item.name}
                    </h3>
                    <p className="mt-1.5 max-w-md text-sm leading-relaxed text-muted lg:text-base">
                      {item.desc}
                    </p>
                  </div>
                  
                  {/* Price - rendered as fact in display font */}
                  <span className="shrink-0 pl-4 font-display text-lg font-semibold text-accent lg:text-xl">
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