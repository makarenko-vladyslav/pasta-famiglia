"use client";
import { Reveal, CountUp } from "@/components/mechanics";

/**
 * ACT III: The Soul - Family & Kids
 * A composition highlighting the emotional core of Pasta Famiglia,
 * featuring an overlapping text plate and authentic hospitality facts.
 */
export function SectionFamilyValues() {
  return (
    <section id="family_values" className="relative bg-background py-24 lg:py-0">
      <div className="mx-auto grid max-w-[92rem] items-stretch lg:grid-cols-2">
        <div className="relative order-2 flex flex-col justify-center px-4 py-16 lg:order-1 lg:-mr-24 lg:px-0 lg:py-28">
          <div className="relative z-10 bg-surface p-8 lg:p-14 lg:shadow-[0_40px_80px_-40px_rgba(0,0,0,0.35)]">
            <span className="rp-actno mb-5 text-sm uppercase tracking-[0.3em] text-muted block">
              Цінності
            </span>
            
            <Reveal>
              <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)] leading-tight">
                Місце, де родина стає ближчою
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-muted lg:text-lg">
                У нашому домі панує атмосфера справжньої італійської гостинності. Ми створили простір, де діти мають свою територію для розваг, а дорослі можуть присвятити час теплим розмовам за тарілкою фірмової пасти та келихом витриманого вина.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-foreground/10 pt-8">
              {/* STAT CELL 1: Rating */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={4.9} suffix="" locale="uk-UA" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">
                  Рейтинг
                </p>
              </div>

              {/* STAT CELL 2: Reviews */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={127} suffix="" locale="uk-UA" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">
                  Відгуків
                </p>
              </div>

              {/* STAT CELL 3: Empty to maintain grid alignment per skeleton law */}
              <div />
            </div>
          </div>
        </div>

        <div className="relative order-1 min-h-[44vh] overflow-hidden bg-surface lg:order-2 lg:min-h-[92vh]">
          <img 
            src="https://images.pexels.com/photos/7869748/pexels-photo-7869748.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
            alt="Щаслива родина насолоджується італійською вечерею" 
            className="rp-graded absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-surface/30" />
          <div className="rp-grain absolute inset-0 pointer-events-none opacity-20" />
        </div>
      </div>
    </section>
  );
}