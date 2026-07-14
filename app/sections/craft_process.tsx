"use client";
import { Reveal, CountUp } from "@/components/mechanics";

/**
 * SectionCraftProcess - ACT III: The Soul.
 * Uses the vetted award composition: Photo bleeding to the edge with a text plate overlap.
 * Strictly follows the SKELETON and DESIGN SYSTEM.
 */
export function SectionCraftProcess() {
  return (
    <section id="craft_process" className="relative bg-surface pt-0 pb-16 lg:py-0">
      <div className="mx-auto grid max-w-[92rem] items-stretch lg:grid-cols-2">
        {/* Photo bleeds to the section edge */}
        <div className="relative min-h-[44vh] bg-surface lg:min-h-[92vh] overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/8093330/pexels-photo-8093330.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
            alt="Процес приготування свіжої пасти вручну" 
            className="rp-graded absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface/30" />
        </div>

        {/* Text block overlapping the photo on desktop */}
        <div className="relative flex flex-col justify-center px-4 py-16 lg:-ml-24 lg:px-0 lg:py-28 z-10">
          <div className="bg-surface p-8 lg:p-14 lg:shadow-[0_40px_80px_-40px_rgba(0,0,0,0.35)]">
            <span className="rp-actno mb-5 block text-sm uppercase tracking-[0.3em] text-muted">
              Філософія
            </span>
            
            <Reveal>
              <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)] leading-tight">
                Відкриті руки
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-muted lg:text-xl font-light">
                Ми віримо, що справжня італійська кухня не потребує таємниць. 
                Кожна стрічка пасти створюється вручну з добірного борошна твердих сортів та фермерських яєць, 
                поєднуючи багатовікові традиції з теплом наших долонь спеціально для вашого столу.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-foreground/10 pt-10">
              {/* Stat 1: Rating from FACTS */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={4.9} decimals={1} locale="uk-UA" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">
                  Рейтинг
                </p>
              </div>

              {/* Stat 2: Reviews from FACTS */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={127} locale="uk-UA" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">
                  Відгуків
                </p>
              </div>

              {/* Note: Third stat omitted to comply with "Numbers are facts" rule and avoid inventing metrics */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}