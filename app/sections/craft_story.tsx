"use client";
import { Reveal, CountUp } from "@/components/mechanics";

export function SectionCraftStory() {
  return (
    <section id="craft_story" className="relative bg-surface py-24 lg:py-0">
      <div className="mx-auto grid max-w-[92rem] items-stretch lg:grid-cols-2">
        {/* photo bleeds to the section edge; type block overlaps it on lg */}
        <div className="relative min-h-[44vh] bg-surface lg:min-h-[92vh]">
          <img 
            src="https://images.pexels.com/photos/11566309/pexels-photo-11566309.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
            alt="Процес приготування справжньої італійської пасти" 
            className="rp-graded absolute inset-0 h-full w-full object-cover" 
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface/30" />
        </div>
        
        <div className="relative flex flex-col justify-center px-4 py-16 lg:-ml-24 lg:px-0 lg:py-28">
          <div className="bg-surface p-8 lg:p-14 lg:shadow-[0_40px_80px_-40px_rgba(0,0,0,0.35)]">
            <span className="rp-actno mb-5 block text-sm uppercase tracking-[0.3em] text-muted">
              Душа
            </span>
            
            <Reveal>
              <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)] text-foreground">
                Традиції, що оживають
              </h2>
            </Reveal>
            
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-muted lg:text-lg max-w-[50ch]">
                Ми віримо, що справжня італійська кухня починається з поваги до інгредієнтів. 
                Кожна страва в нашому меню — це історія, розказана мовою смаків, 
                від ручного замісу тіста до останньої краплі оливкової олії першого віджиму.
              </p>
            </Reveal>
            
            <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3">
              {/* STAT CELL: RATING */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={4.9} decimals={1} locale="uk" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">
                  Рейтинг
                </p>
              </div>

              {/* STAT CELL: REVIEWS */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={127} suffix="+" locale="uk" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">
                  Відгуків
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}