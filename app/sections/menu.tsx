"use client";

import { Reveal } from "@/components/mechanics";

const menuItems = [
  {
    name: "Дві піци та дві пасти",
    price: "1150 грн",
    desc: "Набір для компанії, дві піци та дві порції пасти на вибір.",
    thumb: "https://images.pexels.com/photos/30479289/pexels-photo-30479289.jpeg",
  },
  {
    name: "Prosecco та антипасті",
    price: "1450 грн",
    desc: "Пляшка італійського ігристого вина та набір м'ясних закусок.",
    thumb: "https://images.pexels.com/photos/6287570/pexels-photo-6287570.jpeg",
  },
];

const SECTION_PHOTO = "https://images.pexels.com/photos/5710164/pexels-photo-5710164.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800";

export function SectionMenu() {
  return (
    <section className="py-[var(--space-act)] w-full bg-surface text-foreground relative">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid grid-cols-12 gap-x-4">
          
          {/* Header Area */}
          <div className="col-span-12 pb-12">
            <Reveal>
              <span className="block text-sm uppercase tracking-[0.3em] text-muted mb-6">
                Меню
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.05] mb-8">
                Піч на дровах
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="font-body text-lg md:text-xl text-foreground max-w-2xl leading-relaxed">
                Висока температура вогню дає ту хрустку скоринку, яка не розмокає під час доставки. Основні страви коштують від 210 до 380 гривень.
              </p>
            </Reveal>
          </div>

          {/* Optional Anchor Image Column (Desktop Only) */}
          <div className="hidden md:block col-span-3 col-start-1">
            <Reveal delay={0.3}>
              <div 
                className="relative overflow-hidden w-full group" 
                style={{ 
                  borderRadius: "var(--radius-surface)",
                  aspectRatio: "3/4" 
                }}
              >
                <div className="absolute inset-0 z-10 rp-grain opacity-20 mix-blend-overlay pointer-events-none"></div>
                <img
                  src={SECTION_PHOTO}
                  alt="Піч на дровах"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-[var(--ease-out-cubic)] group-hover:scale-[1.04]"
                />
              </div>
            </Reveal>
          </div>

          {/* Editorial List Area */}
          <div className="col-span-12 md:col-start-4 md:col-span-8">
            <div className="flex flex-col w-full">
              {menuItems.map((item, idx) => (
                <Reveal key={idx} delay={0.4 + idx * 0.1}>
                  <div className="group block w-full py-6 md:py-8 border-b border-foreground/10 first:border-t">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                      
                      {/* Thumbnail */}
                      <div 
                        className="w-16 h-16 shrink-0 overflow-hidden relative"
                        style={{ borderRadius: "var(--radius-surface)" }}
                      >
                        <img 
                          src={item.thumb} 
                          alt={item.name} 
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-1000 ease-[var(--ease-out-cubic)] group-hover:scale-[1.04]" 
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 w-full">
                        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between w-full">
                          <h3 className="font-display text-[1.5rem] leading-tight transition-colors duration-200 group-hover:text-accent">
                            {item.name}
                          </h3>
                          
                          {/* Dotted Line - Desktop Only */}
                          <div className="hidden md:block flex-1 mx-6 border-b border-dotted border-foreground/20 relative top-[-6px]"></div>
                          
                          {/* Price - Desktop */}
                          <span className="hidden md:inline-block font-display text-[1.25rem] whitespace-nowrap">
                            {item.price}
                          </span>
                        </div>
                        
                        <p className="font-body text-base md:text-sm text-muted mt-2 md:mt-1 max-w-md">
                          {item.desc}
                        </p>
                        
                        {/* Price - Mobile */}
                        <span className="inline-block md:hidden font-display text-[1.25rem] mt-3 whitespace-nowrap text-foreground">
                          {item.price}
                        </span>
                      </div>
                      
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}