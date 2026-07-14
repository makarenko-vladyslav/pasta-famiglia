"use client";

import { Reveal } from "@/components/mechanics";

export function SectionConcept() {
  return (
    <section className="py-[var(--space-act)] w-full bg-background relative overflow-hidden">
      {/* 
        Watermark 
        Positioned in the right hemisphere, scales with viewport, 
        rp-watermark handles the specific CSS/parallax hooks if present 
      */}
      <div 
        className="rp-watermark hidden md:block absolute right-[-5%] top-1/2 -translate-y-1/2 text-[40vw] text-foreground/5 font-display leading-none select-none z-0 pointer-events-none"
        aria-hidden="true"
      >
        20
      </div>

      <div className="max-w-6xl mx-auto w-full px-4 lg:px-6 relative z-10">
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-6 items-center">
          
          {/* Text Block */}
          <div className="col-span-12 md:col-start-2 md:col-span-5 flex flex-col justify-center mb-12 md:mb-0">
            <Reveal delay={0.1}>
              <h2 className="font-display text-[clamp(2.2rem,5vw,4.5rem)] leading-none text-foreground">
                Ставимо таймер
              </h2>
            </Reveal>
            
            <Reveal delay={0.2}>
              <p className="font-body text-[clamp(1.125rem,1.5vw,1.5rem)] text-muted mt-6 lg:mt-8">
                Головний інструмент на нашій відкритій кухні. Якщо страва не на вашому столі через двадцять хвилин після замовлення — напій за наш рахунок.
              </p>
            </Reveal>
          </div>

          {/* Image Block */}
          <div className="col-span-12 md:col-start-8 md:col-span-4">
            <Reveal delay={0.3}>
              <div 
                className="relative w-full aspect-[3/4] overflow-hidden"
                style={{ borderRadius: "var(--radius-surface)" }}
              >
                <img 
                  src="https://images.pexels.com/photos/13068783/pexels-photo-13068783.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
                  alt="Відкрита кухня та таймер" 
                  className="w-full h-full object-cover transition-transform duration-1000 ease-[var(--ease-out-cubic)] hover:scale-[1.04]"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}