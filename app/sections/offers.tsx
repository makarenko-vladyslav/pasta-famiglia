"use client";

import { Reveal, HorizontalPan } from "@/components/mechanics";

/**
 * ACT II: The Offer (Gallery/Sets)
 * A horizontal strip of set menus with fixed prices.
 * Features a sticky heading on desktop and native touch-scroll on mobile.
 */
export function SectionOffers() {
  const sets = [
    {
      title: "Сімейний обід",
      description: "2 піци, 2 пасти та лимонад",
      price: "1150 грн",
      image: "https://images.pexels.com/photos/5077067/pexels-photo-5077067.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Романтична вечеря",
      description: "Prosecco, антипасті та десерти",
      price: "1450 грн",
      image: "https://images.pexels.com/photos/3661365/pexels-photo-3661365.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
  ];

  return (
    <section className="py-[var(--space-act)] bg-surface overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-20">
          
          {/* Pinned Header Block */}
          <div className="lg:sticky lg:top-[var(--space-act)] lg:w-1/3 mb-12 lg:mb-0">
            <Reveal>
              <span className="text-sm uppercase tracking-[0.3em] text-muted mb-6 block">
                Пропозиції
              </span>
            </Reveal>
            
            <Reveal delay={0.1}>
              <h2 className="text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.1] font-display mb-8">
                Готові сети для компаній
              </h2>
            </Reveal>
            
            <Reveal delay={0.2}>
              <p className="text-lg lg:text-xl text-foreground leading-relaxed">
                Підібрали поєднання страв, які найкраще пасують до вашого моменту.
              </p>
            </Reveal>
          </div>

          {/* Horizontal Scroll Content */}
          <div className="lg:w-2/3 -mx-4 px-4 lg:mx-0 lg:px-0">
            <HorizontalPan>
              <div className="flex gap-6 lg:gap-8 pr-12 lg:pr-24">
                {sets.map((set, index) => (
                  <div 
                    key={index} 
                    className="flex-shrink-0 w-[80vw] md:w-[45vw] lg:w-[350px]"
                  >
                    <Reveal delay={0.1 * index}>
                      <div className="group relative overflow-hidden mb-6" style={{ borderRadius: "var(--radius-surface)" }}>
                        <div className="aspect-[3/4] overflow-hidden">
                          <img
                            src={set.image}
                            alt={set.title}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-1000 ease-out-cubic group-hover:scale-[1.04]"
                          />
                        </div>
                        <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-baseline justify-between gap-4 border-b border-foreground/10 pb-2">
                          <h3 className="font-display text-xl lg:text-2xl uppercase tracking-tight">
                            {set.title}
                          </h3>
                        </div>
                        
                        <p className="text-sm lg:text-base text-muted leading-snug min-h-[3rem]">
                          {set.description}
                        </p>
                        
                        <div className="pt-2">
                          <span className="font-display text-2xl lg:text-3xl text-foreground">
                            {set.price}
                          </span>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                ))}
              </div>
            </HorizontalPan>
          </div>
          
        </div>
      </div>
    </section>
  );
}