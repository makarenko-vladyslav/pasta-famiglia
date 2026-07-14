"use client";
import { Reveal, CountUp } from "@/components/mechanics";

/**
 * SectionStory — ACT III The Soul: Heritage
 * Layout: Photo bleeding to edge with overlapping text plate.
 * Logic: Uses specific stats from FACTS (rating, reviewsCount).
 */
export function SectionStory() {
  return (
    <section id="story" className="relative bg-background pt-0 pb-16 lg:py-0">
      <div className="mx-auto grid max-w-[92rem] items-stretch lg:grid-cols-2">
        {/* photo bleeds to the section edge; type block overlaps it on lg */}
        <div className="relative min-h-[44vh] bg-surface lg:min-h-[92vh] overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/8178895/pexels-photo-8178895.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
            alt="Pasta Famiglia Heritage" 
            className="rp-graded absolute inset-0 h-full w-full object-cover transition-transform duration-[2000ms] ease-out hover:scale-[1.05]" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface/30" />
        </div>

        <div className="relative flex flex-col justify-center px-4 py-16 lg:-ml-24 lg:px-0 lg:py-28">
          <div className="bg-surface p-8 lg:p-14 lg:shadow-[0_40px_80px_-40px_rgba(0,0,0,0.35)]">
            <span className="rp-actno mb-5 block text-sm uppercase tracking-[0.3em] text-muted">
              Історія
            </span>
            
            <Reveal>
              <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)] text-foreground">
                Родинна Спадщина
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-muted lg:text-lg">
                Pasta Famiglia — це втілення італійських традицій у центрі Києва. Кожен рецепт нашої пасти та соусів передавався з покоління в покоління, щоб сьогодні ви могли відчути справжній смак домашньої італійської кухні, створеної з любов’ю.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {/* STAT CELL 1: Rating */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent leading-none">
                  <CountUp to={4.9} decimals={1} locale="uk" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted leading-tight">
                  Рейтинг
                </p>
              </div>

              {/* STAT CELL 2: Review Count */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent leading-none">
                  <CountUp to={127} locale="uk" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted leading-tight">
                  Відгуків
                </p>
              </div>

              {/* STAT CELL 3: Placeholder/Empty (Only 2 real facts available) */}
              <div aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}