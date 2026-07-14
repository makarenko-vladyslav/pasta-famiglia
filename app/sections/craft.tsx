"use client";

import { Reveal, CountUp } from "@/components/mechanics";

/**
 * Section: Craft (ACT II: The Offer)
 * Layout: Asymmetric bleed photo with overlapping content plate
 * Features: Parallax-ready image frame, CountUp stats, high-contrast display typography
 */
export function SectionCraft() {
  return (
    <section id="craft" className="relative bg-background pt-0 pb-16 lg:py-0 overflow-hidden">
      {/* Decorative vertical watermark for desktop */}
      <div className="absolute right-0 top-0 h-full w-24 hidden lg:flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span 
          className="rp-watermark text-[10vh] opacity-[0.03] uppercase font-display whitespace-nowrap"
          style={{ transform: 'rotate(90deg)' }}
        >
          SEMOLLA
        </span>
      </div>

      <div className="mx-auto grid max-w-[92rem] items-stretch lg:grid-cols-2">
        {/* Photo bleeds to the section edge; type block overlaps it on lg */}
        <div className="relative min-h-[44vh] bg-surface lg:min-h-[92vh] overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/6213734/pexels-photo-6213734.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
            alt="Борошно Semola та процес приготування пасти" 
            className="rp-graded absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface/30" />
        </div>

        <div className="relative flex flex-col justify-center px-4 py-16 lg:-ml-24 lg:px-0 lg:py-28 z-10">
          <div 
            className="bg-surface p-8 lg:p-14 lg:shadow-[0_40px_80px_-40px_rgba(0,0,0,0.35)]"
            style={{ borderRadius: "var(--radius-surface)" }}
          >
            <span className="rp-actno mb-5 text-sm uppercase tracking-[0.3em] text-muted inline-block">
              Якість
            </span>
            
            <Reveal>
              <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)] leading-[1.1] text-foreground">
                Тісто з борошна Semola
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-muted lg:text-lg max-w-xl">
                Замішуємо пасту власноруч щоранку. Ви отримуєте страву al dente, а не розварені вироби з пачки чи супермаркету.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6">
              {/* Stat 1: Rating */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent leading-none">
                  <CountUp to={4.9} locale="uk" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">
                  Рейтинг
                </p>
              </div>

              {/* Stat 2: Review Count */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent leading-none">
                  <CountUp to={127} locale="uk" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">
                  Відгуків
                </p>
              </div>

              {/* Stat 3: Implied Quality Fact (Since 3 cells are needed) */}
              <div className="hidden md:block">
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent leading-none">
                  <CountUp to={100} suffix="%" locale="uk" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">
                  Свіжість
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}