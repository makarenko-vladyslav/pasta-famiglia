"use client";
import { Reveal, CountUp } from "@/components/mechanics";

export function SectionCraft() {
  return (
    <section id="craft" className="relative bg-surface py-24 lg:py-0 overflow-hidden">
      {/* Decorative Watermark */}
      <div className="hidden lg:block select-none pointer-events-none">
        <span className="rp-watermark opacity-[0.03]">FRESH</span>
      </div>
      
      {/* Grain Overlay */}
      <div className="rp-grain pointer-events-none absolute inset-0 z-10 opacity-20" />

      <div className="mx-auto grid max-w-[92rem] items-stretch lg:grid-cols-2 relative z-0">
        {/* photo bleeds to the section edge; type block overlaps it on lg */}
        <div className="relative min-h-[44vh] bg-surface lg:min-h-[92vh] overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/8893616/pexels-photo-8893616.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
            alt="Процес ручного замішування тіста" 
            className="rp-graded absolute inset-0 h-full w-full object-cover transition-transform duration-[2000ms] hover:scale-[1.05]" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface/30" />
        </div>

        <div className="relative flex flex-col justify-center px-4 py-16 lg:-ml-24 lg:px-0 lg:py-28">
          <div className="bg-surface p-8 lg:p-14 lg:shadow-[0_40px_80px_-40px_rgba(0,0,0,0.35)] relative z-20">
            <span className="rp-actno mb-5">Ремесло</span>
            
            <Reveal>
              <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)] text-foreground">
                Мистецтво ручної роботи
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-muted lg:text-lg max-w-xl font-body font-light">
                В Pasta Famiglia ми віримо, що справжня паста не терпить поспіху. Кожна стрічка тіста створюється вручну нашими майстрами за автентичними рецептами, зберігаючи текстуру та характер, які неможливо відтворити машиною.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {/* STAT CELL: RATING */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={4.9} locale="uk" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">Рейтинг</p>
              </div>

              {/* STAT CELL: REVIEWS */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={127} suffix="+" locale="uk" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">Відгуків</p>
              </div>

              {/* STAT CELL: EMPTY/RESERVED AS PER STAT RULE */}
              <div className="opacity-0 pointer-events-none" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}