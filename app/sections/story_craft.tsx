"use client";
import { Reveal, CountUp } from "@/components/mechanics";

export function SectionStoryCraft() {
  return (
    <section id="story_craft" className="relative bg-surface py-[var(--space-act)] lg:py-0">
      <div className="mx-auto grid max-w-[92rem] items-stretch lg:grid-cols-2">
        {/* photo bleeds to the section edge; type block overlaps it on lg */}
        <div className="relative min-h-[44vh] bg-surface lg:min-h-[92vh]">
          <img 
            src="https://images.pexels.com/photos/16774290/pexels-photo-16774290.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
            alt="Руки майстра за приготуванням свіжої домашньої пасти" 
            className="rp-graded rp-grain absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface/30" />
        </div>
        <div className="relative flex flex-col justify-center px-4 py-16 lg:-ml-24 lg:px-0 lg:py-28">
          <div className="bg-surface p-8 lg:p-14 lg:shadow-[0_40px_80px_-40px_rgba(0,0,0,0.35)]">
            <span className="rp-actno mb-5 text-sm uppercase tracking-[0.3em] text-muted">Філософія</span>
            
            <Reveal>
              <h2 className="font-display font-bold leading-tight text-[clamp(2.4rem,5vw,4.5rem)]">
                Секрет у кожному русі
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-muted lg:text-lg">
                Ми віримо, що справжня італійська вечеря починається не з рецепта, а з поваги до інгредієнтів. 
                Кожна порція пасти в Pasta Famiglia створюється вручну з добірного борошна та фермерських яєць, 
                зберігаючи традиції, які передавалися поколіннями. Це не просто їжа — це історія нашої родини, 
                яку ми розділяємо з вами у самому серці Києва.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {/* STAT CELL 1: Rating */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={4.9} suffix="" locale="uk" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">Рейтинг Google</p>
              </div>

              {/* STAT CELL 2: Reviews */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={127} suffix="+" locale="uk" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">Відгуків гостей</p>
              </div>

              {/* STAT CELL 3: Placeholder to maintain grid (No fact available) */}
              <div className="hidden lg:block opacity-0" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}