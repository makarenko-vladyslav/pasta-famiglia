"use client";
import { Reveal, CountUp } from "@/components/mechanics";

export function SectionStory() {
  return (
    <section id="story" className="relative overflow-hidden bg-surface py-[var(--space-act)] lg:py-0">
      {/* Background Watermark - lg only as per platform rules */}
      <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
        <span className="rp-watermark opacity-[0.03]">FAMIGLIA</span>
      </div>

      <div className="mx-auto grid max-w-[92rem] items-stretch lg:grid-cols-2">
        {/* Photo bleeds to the section edge; type block overlaps it on lg */}
        <div className="relative min-h-[44vh] bg-surface lg:min-h-[92vh]">
          <img 
            src="https://images.pexels.com/photos/402007/pexels-photo-402007.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
            alt="Процес приготування автентичної пасти ручної роботи" 
            className="rp-graded absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface/30" />
        </div>

        <div className="relative flex flex-col justify-center px-4 py-16 lg:-ml-24 lg:px-0 lg:py-28">
          <div className="z-10 bg-surface p-8 lg:p-14 lg:shadow-[0_40px_80px_-40px_rgba(0,0,0,0.35)]">
            <span className="rp-actno mb-5 block text-sm uppercase tracking-[0.3em] text-muted">Історія</span>
            
            <Reveal>
              <h2 className="font-display font-bold leading-tight text-[clamp(2.4rem,5vw,4.5rem)]">
                Мистецтво відкритої долоні
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-muted lg:text-lg">
                Кожна порція нашої пасти створюється вручну за рецептами, що передавалися крізь покоління. Ми віримо, що справжня італійська душа розкривається через простоту інгредієнтів, тепло людських рук та чесне ставлення до своєї справи.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-foreground/10 pt-10 lg:grid-cols-3">
              {/* Stat 1: Rating */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={4.9} decimals={1} locale="uk" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">Рейтинг закладу</p>
              </div>

              {/* Stat 2: Review Count */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={127} locale="uk" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">Відгуків гостей</p>
              </div>

              {/* Stat 3: Removed due to lack of verified facts */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}