"use client";

import { Reveal, CountUp } from "@/components/mechanics";

/**
 * SectionTransparency: ACT II
 * A focused typographic section emphasizing the restaurant's "honest pricing" policy.
 * Features a high-impact photo bleed and overlapping content plate.
 */
export function SectionTransparency() {
  return (
    <section 
      id="transparency" 
      className="relative bg-surface pt-0 pb-16 lg:py-0 border-y border-foreground/10 overflow-hidden"
    >
      {/* Background Watermark - Parallax treatment handled by layout-engine through rp-watermark class */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none select-none">
        <span className="rp-watermark absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-foreground/5 opacity-[0.03] uppercase font-display text-[20vw] whitespace-nowrap">
          PROZORIST
        </span>
      </div>

      <div className="mx-auto grid max-w-[92rem] items-stretch lg:grid-cols-2">
        {/* Photo bleeds to the section edge; type block overlaps it on lg */}
        <div className="relative min-h-[44vh] bg-surface lg:min-h-[92vh] overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/29021743/pexels-photo-29021743.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
            alt="Свіжі інгредієнти Pasta Famiglia" 
            className="rp-graded absolute inset-0 h-full w-full object-cover transition-transform duration-[2000ms] ease-out-cubic hover:scale-[1.04]" 
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface/30" />
        </div>

        {/* Content Plate */}
        <div className="relative flex flex-col justify-center px-4 py-16 lg:-ml-24 lg:px-0 lg:py-28 z-10">
          <div 
            className="bg-surface p-8 lg:p-14 lg:shadow-[0_40px_80px_-40px_rgba(0,0,0,0.35)]"
            style={{ borderRadius: "var(--radius-surface)" }}
          >
            <span className="rp-actno mb-5 inline-block text-sm uppercase tracking-[0.3em] text-muted">
              Прозорість
            </span>

            <Reveal>
              <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)] leading-[1.05] text-foreground">
                Чесна ціна без доплат
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-muted lg:text-lg max-w-xl">
                Ви платите лише суму, вказану в меню. Ми не додаємо 10–15% за обслуговування та не беремо гроші за упаковку страв із собою.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-foreground/10 pt-10">
              {/* STAT CELL 1: Service Fee */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent leading-none">
                  <CountUp to={0} suffix="%" locale="uk" />
                </span>
                <p className="mt-2 text-[10px] lg:text-xs font-mono uppercase tracking-[0.18em] text-muted leading-tight">
                  Сервісний збір
                </p>
              </div>

              {/* STAT CELL 2: Transparency */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent leading-none">
                  <CountUp to={100} suffix="%" locale="uk" />
                </span>
                <p className="mt-2 text-[10px] lg:text-xs font-mono uppercase tracking-[0.18em] text-muted leading-tight">
                  Чесна ціна
                </p>
              </div>

              {/* STAT CELL 3: Rating */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent leading-none">
                  <CountUp to={4.9} locale="uk" />
                </span>
                <p className="mt-2 text-[10px] lg:text-xs font-mono uppercase tracking-[0.18em] text-muted leading-tight">
                  Рейтинг Kyiv
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}