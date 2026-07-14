"use client";

import { Reveal } from "@/components/mechanics";

export function SectionCraft() {
  const items = [
    "Паста з твердої Semola",
    "Піца на борошні Caputo",
    "Соуси з томатів Mutti",
    "Кава на зернах Lavazza"
  ];

  return (
    <section className="pt-0 pb-[var(--space-act)] lg:py-[var(--space-act)] bg-background text-foreground overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-8 lg:gap-x-12 items-center">
          
          {/* Mobile Image (Order 1, Full bleed), Desktop Image (Cols 7-12, Order 2) */}
          <div className="md:col-span-6 md:col-start-7 order-first md:order-last w-[calc(100%+2rem)] -ml-4 md:w-full md:ml-0 relative">
            <Reveal delay={0.1}>
              <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-t-[50vw] md:rounded-t-full bg-surface">
                <img
                  src="https://images.pexels.com/photos/248420/pexels-photo-248420.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
                  alt="Тісто місимо щоранку"
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-[1.04]"
                  style={{ transitionTimingFunction: "var(--ease-out-cubic)" }}
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>

          {/* Text Content (Cols 1-5, Order 2 on mobile, Order 1 on desktop) */}
          <div className="md:col-span-5 md:col-start-1 order-last md:order-first relative flex flex-col justify-center">
            
            {/* Giant Act Number - Hidden on mobile per spec */}
            <div className="absolute -top-10 left-0 -z-10 hidden md:block text-[clamp(10rem,15vw,15rem)] font-mono font-bold leading-none text-border/20 select-none">
              02
            </div>

            <Reveal delay={0.2}>
              <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-tight mb-8">
                Тісто місимо щоранку
              </h2>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="text-lg lg:text-xl text-foreground leading-relaxed mb-10 max-w-md">
                Замість промислових пачок — ручна нарізка. Жодних компромісів із текстурою al dente та температурою подачі.
              </p>
            </Reveal>

            {/* Editorial List Items replacing standard paragraphs for visual premium weight */}
            <div className="flex flex-col w-full">
              {items.map((item, index) => (
                <Reveal key={index} delay={0.4 + index * 0.1}>
                  <div className="py-4 border-b border-foreground/10 flex items-center group">
                    <span className="text-xs font-mono text-muted mr-6 uppercase tracking-widest shrink-0">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <span 
                      className="font-display text-lg lg:text-xl text-foreground group-hover:text-muted transition-colors duration-300"
                      style={{ transitionTimingFunction: "var(--ease-out-cubic)" }}
                    >
                      {item}
                    </span>
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