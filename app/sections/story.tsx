"use client";
import { Reveal, CountUp } from "@/components/mechanics";

export function SectionStory() {
  return (
    <section id="story" className="relative bg-background pt-0 pb-16 lg:py-0">
      <div className="mx-auto grid max-w-[92rem] items-stretch lg:grid-cols-2">
        {/* photo bleeds to the section edge; type block overlaps it on lg */}
        <div className="relative min-h-[44vh] bg-surface lg:min-h-[92vh] overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/23496947/pexels-photo-23496947.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
            alt="Процес приготування автентичної італійської пасти" 
            className="rp-graded rp-grain absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface/30" />
        </div>

        <div className="relative flex flex-col justify-center px-4 py-16 lg:-ml-24 lg:px-0 lg:py-28">
          <div className="bg-surface p-8 lg:p-14 lg:shadow-[0_40px_80px_-40px_rgba(0,0,0,0.35)]">
            <span className="rp-actno mb-5 inline-block text-sm uppercase tracking-[0.3em] text-muted">
              Історія
            </span>
            
            <Reveal>
              <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)] leading-tight">
                Душа італійської традиції
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-muted lg:text-lg">
                Pasta Famiglia — це простір, де італійська пристрасть зустрічається з київською гостинністю. Кожна стрічка нашої пасти створюється вручну з найкращих сортів пшениці та фермерських інгредієнтів. Ми зберігаємо секрети сімейної кухні, щоб ви могли відчути справжній смак Італії у кожному шматочку, розділяючи теплі моменти з найближчими людьми.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-foreground/10 pt-10">
              {/* STAT CELL: Rating */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={4.9} locale="uk" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">Рейтинг</p>
              </div>

              {/* STAT CELL: Reviews */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={127} locale="uk" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">Відгуків</p>
              </div>
              
              {/* STAT CELL: Context (City focus) */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  1
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">Київ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}