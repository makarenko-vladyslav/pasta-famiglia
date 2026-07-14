"use client";
import { Reveal } from "@/components/mechanics";

/**
 * SECTION: process_craft
 * ROLE: ACT III: The Soul. The Flour & Water.
 * DESCRIPTION: High-impact inverted act showcasing the craft and ingredients.
 */
export function SectionProcessCraft() {
  return (
    <section id="process_craft" className="relative bg-foreground py-24 lg:py-0 overflow-hidden">
      <div className="mx-auto grid max-w-[92rem] items-stretch lg:grid-cols-2">
        {/* photo bleeds to the section edge; type block overlaps it on lg */}
        <div className="relative min-h-[44vh] bg-foreground lg:min-h-[92vh] overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/5907555/pexels-photo-5907555.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
            alt="Макро текстура італійського борошна семола" 
            className="rp-graded absolute inset-0 h-full w-full object-cover transition-transform duration-[3000ms] hover:scale-[1.05]" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-foreground/30" />
        </div>

        <div className="relative flex flex-col justify-center px-4 py-16 lg:-ml-24 lg:px-0 lg:py-28">
          <div className="relative bg-foreground p-8 lg:p-14 lg:shadow-[0_40px_80px_-40px_rgba(0,0,0,0.5)] overflow-hidden">
            {/* Watermark Implementation as per Spec */}
            <div className="rp-watermark pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.04] select-none overflow-hidden">
              <span className="font-display text-[14vw] uppercase tracking-widest text-background">Semola</span>
            </div>

            <span className="rp-actno mb-5 text-background/50 block">Душа</span>
            
            <Reveal>
              <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)] text-background">
                Борошно та вода
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-background/70 lg:text-lg max-w-xl">
                Ми створюємо пасту вручну за старовинними рецептами, використовуючи виключно італійське борошно грубого помелу. Кожна лінія, кожна форма — це результат терпіння та поваги до інгредієнтів.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-3">
              {/* STAT CELL: Rating */}
              <div className="relative z-10">
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent leading-none">
                  4.9
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-background/50">Рейтинг</p>
              </div>

              {/* STAT CELL: Reviews */}
              <div className="relative z-10">
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent leading-none">
                  127
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-background/50">Відгуків</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}