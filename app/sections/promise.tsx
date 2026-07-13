"use client";

import { Reveal } from "@/components/mechanics";

/**
 * ACT I: The Promise.
 * A high-contrast layout where editorial typography meets full-bleed imagery.
 * The design features a text plate that overlaps the lead image, 
 * communicating the brand's transparency and values.
 */
export function SectionPromise() {
  return (
    <section id="promise" className="relative bg-surface py-24 lg:py-0 overflow-hidden">
      {/* Background Watermark as per SPEC animations */}
      <div 
        className="rp-watermark absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 text-[10rem] lg:text-[14rem] pointer-events-none opacity-5 font-display font-black leading-none"
        style={{ transformOrigin: 'center left' }}
      >
        AUTHENTIC
      </div>

      <div className="mx-auto grid max-w-[92rem] items-stretch lg:grid-cols-2">
        {/* photo bleeds to the section edge; type block overlaps it on lg */}
        <div className="relative min-h-[54vh] lg:min-h-[92vh] overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/19098019/pexels-photo-19098019.png?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
            alt="Інтер'єр ресторану Pasta Famiglia" 
            className="rp-graded absolute inset-0 h-full w-full object-cover transition-transform duration-[2000ms] ease-out hover:scale-[1.04]" 
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[hsl(var(--color-surface))]/30" />
        </div>

        <div className="relative flex flex-col justify-center px-4 py-16 lg:-ml-24 lg:px-0 lg:py-28 z-10">
          <div className="bg-surface p-8 lg:p-14 lg:shadow-[0_40px_80px_-40px_rgba(0,0,0,0.35)] border-t border-foreground/5 lg:border-none">
            <span className="rp-actno mb-5 block text-xs tracking-widest uppercase text-muted">Обіцянка</span>
            
            <Reveal>
              <h2 className="font-display font-bold leading-[0.92] tracking-[-0.03em] text-[clamp(2.4rem,5vw,4.5rem)] text-foreground">
                Стіл без таємниць
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-muted lg:text-lg max-w-xl font-light">
                Ми прибрали все, що заважає спокійному обіду: шум, довге очікування та несподівані суми в чеку.
              </p>
            </Reveal>

            {/* Stat Grid - characters rendered verbatim from COPY and FACTS */}
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-foreground/10 pt-10">
              {/* STAT 1: 20 хв */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent leading-none">
                  20
                </span>
                <span className="font-display text-xl font-bold text-accent ml-1">хв</span>
                <p className="mt-1 text-[10px] lg:text-xs uppercase tracking-[0.18em] text-muted leading-tight">
                  Гарантована подача
                </p>
              </div>

              {/* STAT 2: 0 % */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent leading-none">127</span>
                
                <p className="mt-1 text-[10px] lg:text-xs uppercase tracking-[0.18em] text-muted leading-tight">Відгуків у Google</p>
              </div>

              {/* STAT 3: 4.9 Rating */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent leading-none">
                  4.9
                </span>
                <p className="mt-1 text-[10px] lg:text-xs uppercase tracking-[0.18em] text-muted leading-tight">
                  Рейтинг Google
                </p>
              </div>
            </div>

            {/* Quiet items from COPY */}
            <div className="mt-12 space-y-4">
              <div className="flex items-center gap-4 py-3 border-b border-foreground/5">
                <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span className="text-sm font-light text-foreground">Тісто al dente з борошна Semola</span>
              </div>
              <div className="flex items-center gap-4 py-3 border-b border-foreground/5">
                <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span className="text-sm font-light text-foreground">Дитяча кімната з аніматором</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}