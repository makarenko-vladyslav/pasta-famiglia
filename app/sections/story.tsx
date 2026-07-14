"use client";
import { Reveal, CountUp } from "@/components/mechanics";

export function SectionStory() {
  return (
    <section id="story" className="relative overflow-hidden bg-surface pt-0 pb-16 lg:py-0">
      {/* Decorative Watermark - visible only on large screens as per spec intent */}
      <div className="rp-watermark pointer-events-none absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
        ARTIGIANALE
      </div>

      <div className="mx-auto grid max-w-[92rem] items-stretch lg:grid-cols-2">
        {/* photo bleeds to the section edge; type block overlaps it on lg */}
        <div className="relative min-h-[44vh] bg-surface lg:min-h-[92vh]">
          <img 
            src="https://images.pexels.com/photos/28767858/pexels-photo-28767858.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
            alt="Сімейна атмосфера в Pasta Famiglia" 
            className="rp-graded absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface/30" />
        </div>

        <div className="relative flex flex-col justify-center px-4 py-16 lg:-ml-24 lg:px-0 lg:py-28">
          <div 
            className="z-10 bg-surface p-8 lg:p-14 lg:shadow-[0_40px_80px_-40px_rgba(0,0,0,0.35)]"
            style={{ borderRadius: "var(--radius-surface)" }}
          >
            <span className="rp-actno mb-5 block">Історія</span>
            
            <Reveal>
              <h2 className="font-display font-bold leading-tight text-[clamp(2.4rem,5vw,4.5rem)]">
                Традиції в кожній деталі
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-muted lg:text-lg">
                Ми віримо, що справжня італійська кухня починається з поваги до інгредієнтів та часу. 
                Кожна тарілка пасти — це результат ручної роботи та пристрасті, яку ми передаємо 
                з покоління в покоління. Pasta Famiglia — це місце, де київський ритм 
                сповільнюється заради справжнього смаку.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {/* STAT_CELLS: Using only real facts (rating and reviewsCount) */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={4.9} decimals={1} locale="uk" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">Рейтинг</p>
              </div>

              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={127} locale="uk" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">Відгуків</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}