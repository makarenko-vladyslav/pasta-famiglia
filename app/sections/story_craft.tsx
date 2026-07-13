"use client";

import { Reveal, CountUp } from "@/components/mechanics";

/**
 * SectionStoryCraft: ACT III The Soul
 * A heritage-focused layout where the text plate overlaps the primary media.
 * Uses Lora-style light body text with a display drop-cap.
 */
export function SectionStoryCraft() {
  return (
    <section id="story_craft" className="relative bg-surface py-24 lg:py-0 overflow-hidden">
      <div className="mx-auto grid max-w-[92rem] items-stretch lg:grid-cols-2">
        {/* Photo bleeds to the section edge; text block overlaps it on lg */}
        <div className="relative min-h-[44vh] lg:min-h-[92vh] overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/27669096/pexels-photo-27669096.png?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
            alt="Процес виготовлення ручної пасти у Pasta Famiglia" 
            className="rp-graded absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface/30" />
          
          {/* Subtle grain overlay for a film-like heritage feel */}
          <div className="rp-grain absolute inset-0 pointer-events-none opacity-40" />
        </div>

        <div className="relative flex flex-col justify-center px-4 py-16 lg:-ml-24 lg:px-0 lg:py-28 z-10">
          <div className="bg-surface p-8 lg:p-14 lg:shadow-[0_40px_80px_-40px_rgba(0,0,0,0.35)]">
            <span className="rp-actno mb-5 block text-sm uppercase tracking-[0.3em] text-muted">Історія</span>
            
            <Reveal>
              <h2 className="font-display font-bold leading-[0.92] text-[clamp(2.4rem,5vw,4.5rem)] text-foreground">
                Традиції, що оживають <br /> у кожній страві
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 font-body font-light text-base leading-relaxed text-muted lg:text-lg first-letter:text-6xl first-letter:font-display first-letter:float-left first-letter:mr-4 first-letter:mt-2 first-letter:text-foreground">
                Ми віримо, що справжня італійська кухня починається з поваги до коріння. У Pasta Famiglia ми поєднуємо фермерські продукти Київщини з автентичними техніками, переданими крізь покоління. Кожна стрічка нашої пасти створюється вручну, щоб ви відчули тепло справжньої сімейної справи та любов до деталей.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-foreground/10 pt-10">
              {/* Stat 1: Rating from FACTS */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent leading-none block">
                  <CountUp to={4.9} decimals={1} locale="uk-UA" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">Рейтинг</p>
              </div>

              {/* Stat 2: Review Count from FACTS */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent leading-none block">
                  <CountUp to={127} suffix="+" locale="uk-UA" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">Відгуків</p>
              </div>

              {/* Stat 3: Derived from opening hours (11:00-22:00 = 11 hours) */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent leading-none block">
                  <CountUp to={11} locale="uk-UA" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">Годин/день</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative vertical label for desktop */}
      <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 rotate-90 origin-right pointer-events-none">
        <span className="text-sm uppercase tracking-[0.5em] text-foreground/5 whitespace-nowrap font-display text-[8rem]">
          HANDMADE
        </span>
      </div>
    </section>
  );
}