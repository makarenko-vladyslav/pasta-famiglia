"use client";

import { Reveal } from "@/components/mechanics";

/**
 * SectionOffering — ACT II: The Offer
 * Editorial menu list with a sticky visual anchor.
 * Uses strict typography roles and hairline dividers.
 */
export function SectionOffering() {
  const menuItems = [
    {
      name: "Домашня паста al dente",
      desc: "Свіжа паста власного виробництва з твердих сортів пшениці та автентичними соусами.",
      price: "245 ₴",
      photo: "https://images.pexels.com/photos/13366358/pexels-photo-13366358.png?auto=compress&cs=tinysrgb&fit=crop&h=600&w=600",
    },
    {
      name: "Піца на дровах",
      desc: "Тонке тісто, витримане 48 годин, та фермерські італійські сири з нашої печі.",
      price: "310 ₴",
      photo: "https://images.pexels.com/photos/13366358/pexels-photo-13366358.png?auto=compress&cs=tinysrgb&fit=crop&h=600&w=600",
    },
    {
      name: "Бізнес-ланчі до 16:00",
      desc: "Повноцінний обід для продуктивного дня: суп, основна страва та напій на ваш вибір.",
      price: "280 ₴",
      photo: "https://images.pexels.com/photos/13366358/pexels-photo-13366358.png?auto=compress&cs=tinysrgb&fit=crop&h=600&w=600",
    },
    {
      name: "Дитячі страви",
      desc: "Корисні та яскраві позиції, розроблені спеціально для найменших гостей нашої родини.",
      price: "165 ₴",
      photo: "https://images.pexels.com/photos/13366358/pexels-photo-13366358.png?auto=compress&cs=tinysrgb&fit=crop&h=600&w=600",
    },
  ];

  return (
    <section id="offering" className="relative overflow-hidden bg-background py-[var(--space-act)]">
      <span aria-hidden className="rp-watermark top-10 text-foreground pointer-events-none select-none">
        МЕНЮ
      </span>
      
      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          {/* sticky act intro */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h2 className="font-display font-bold leading-[0.9] text-[clamp(2.6rem,6vw,5.5rem)]">
                Що у нашому меню
              </h2>
            </Reveal>
            
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
                Ми об’єднали традиційні рецепти італійських сімей із сучасним підходом до подачі, щоб кожен візит став маленькою подорожжю.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 overflow-hidden" style={{ borderRadius: "var(--radius-surface)" }}>
                <img 
                  src="https://images.pexels.com/photos/13366358/pexels-photo-13366358.png?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1200" 
                  alt="Фірмові страви Pasta Famiglia" 
                  loading="lazy" 
                  className="rp-graded aspect-[4/3] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
                />
              </div>
            </Reveal>
          </div>

          {/* editorial list */}
          <div className="divide-y divide-foreground/10 border-t border-foreground/10 lg:border-t-0">
            {menuItems.map((item, index) => (
              <Reveal key={index} delay={index * 0.05}>
                <div className="group flex items-center justify-between gap-5 py-5 lg:py-8 transition-colors duration-200">
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
                    <p className="mt-1 max-w-md text-sm leading-relaxed text-muted line-clamp-2 lg:line-clamp-none">
                      {item.desc}
                    </p>
                  </div>

                  <div className="shrink-0 pl-2 text-right">
                    <span className="font-display text-lg font-semibold text-accent lg:text-xl">
                      {item.price}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}