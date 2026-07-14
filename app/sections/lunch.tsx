"use client";

import { Reveal, TiltCard } from "@/components/mechanics";

/**
 * ACT II: The Offer (Specialty) - Lunch Section
 * Features an asymmetric split with a text block and a floating TiltCard containing the menu.
 */
export function SectionLunch() {
  return (
    <section 
      id="lunch"
      className="relative py-[var(--space-act)] bg-background overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* Left Side: Copy and Details */}
        <div className="lg:col-span-5 flex flex-col">
          <Reveal>
            <span className="text-sm uppercase tracking-[0.3em] text-muted mb-6 block">
              12:00 — 16:00
            </span>
          </Reveal>
          
          <Reveal delay={0.1}>
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-display leading-[0.9] mb-8">
              Обід за 320 гривень
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-lg lg:text-xl font-body text-foreground mb-10 max-w-md">
              Для тих, хто цінує якість у межах 40-хвилинної перерви. Подаємо комплексні ланчі по буднях з 12:00 до 16:00.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex items-baseline gap-4 pt-8 border-t border-foreground/10">
              <span className="text-4xl font-display">320</span>
              <span className="text-sm uppercase tracking-wider text-muted">грн / повний сет</span>
            </div>
          </Reveal>
        </div>

        {/* Right Side: TiltCard with Photo and Menu Items */}
        <div className="lg:col-span-7">
          <TiltCard>
            <div 
              className="bg-background overflow-hidden shadow-2xl border border-foreground/5 flex flex-col"
              style={{ borderRadius: "var(--radius-surface)" }}
            >
              {/* Media Frame */}
              <div className="aspect-[16/10] overflow-hidden group">
                <img 
                  src="https://images.pexels.com/photos/6913194/pexels-photo-6913194.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
                  alt="Бізнес-ланч у Pasta Famiglia"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                  loading="lazy"
                />
              </div>

              {/* Menu List Content */}
              <div className="p-6 lg:p-10">
                <ul className="space-y-4">
                  {["Суп дня", "Домашня паста на вибір", "Фірмовий напій"].map((item, index) => (
                    <li key={index} className="flex flex-col">
                      <div className="flex justify-between items-baseline py-3 border-b border-foreground/10">
                        <span className="font-display text-xl lg:text-2xl">{item}</span>
                        {index === 0 && <span className="text-xs uppercase tracking-widest text-muted">Щодня інший</span>}
                      </div>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 flex justify-between items-center text-sm text-muted uppercase tracking-[0.2em]">
                  <span>Понеділок — П’ятниця</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                </div>
              </div>
            </div>
          </TiltCard>
        </div>

      </div>

      {/* Decorative vertical label for desktop */}
      <div className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 rotate-90 origin-right">
        <span className="text-[clamp(4rem,10vw,8rem)] font-display text-foreground/[0.03] whitespace-nowrap select-none pointer-events-none uppercase">
          LUNCH BREAK
        </span>
      </div>
    </section>
  );
}