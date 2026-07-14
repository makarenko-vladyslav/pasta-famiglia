"use client";
import { Reveal, CountUp } from "@/components/mechanics";

/**
 * SectionStory - ACT III: The Soul
 * A premium overlap layout where the story text sits atop a bleeding photo.
 * Features stats from FACTS and the "20-minute craft" soul role.
 */
export function SectionStory() {
  return (
    <section id="story" className="relative bg-surface pt-0 pb-16 lg:py-0">
      <div className="mx-auto grid max-w-[92rem] items-stretch lg:grid-cols-2">
        {/* photo bleeds to the section edge; type block overlaps it on lg */}
        <div className="relative min-h-[44vh] bg-surface lg:min-h-[92vh] overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/12276390/pexels-photo-12276390.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
            alt="Процес приготування свіжого тіста для пасти" 
            className="rp-graded absolute inset-0 h-full w-full object-cover scale-[1.04] transition-transform duration-1000 hover:scale-100" 
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface/30" />
        </div>

        <div className="relative flex flex-col justify-center px-4 py-16 lg:-ml-24 lg:px-0 lg:py-28">
          <div className="bg-surface p-8 lg:p-14 lg:shadow-[0_40px_80px_-40px_rgba(0,0,0,0.35)]">
            <span className="rp-actno mb-5 text-sm uppercase tracking-[0.3em] text-muted block">
              Історія
            </span>
            
            <Reveal>
              <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)] leading-tight">
                Смак італійських традицій
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-muted lg:text-lg">
                Справжня паста не терпить поспіху, але обожнює свіжість. Кожного ранку наші майстри створюють основу для майбутніх шедеврів, щоб за 20 хвилин після вашого замовлення на столі з&apos;явилася та сама ідеальна Al Dente. Це душа Pasta Famiglia, втілена в кожному русі.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-foreground/10 pt-10">
              {/* STAT 1: Review Count */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent leading-none">
                  <CountUp to={127} suffix="" locale="uk" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">
                  Відгуків
                </p>
              </div>

              {/* STAT 2: Rating */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent leading-none">
                  <CountUp to={4.9} suffix="" locale="uk" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">
                  Рейтинг
                </p>
              </div>

              {/* STAT 3: The 20-Minute Craft */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent leading-none">
                  <CountUp to={20} suffix="" locale="uk" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">
                  Хв. замісу
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}