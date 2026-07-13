"use client";
import { Reveal, CountUp } from "@/components/mechanics";

export function SectionStoryCraft() {
  return (
    <section id="story_craft" className="relative overflow-hidden bg-surface py-24 lg:py-0">
      {/* Background Decorative Type */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] hidden lg:block pointer-events-none">
        <span className="rp-watermark font-display text-[22vw] leading-none select-none uppercase">SEMOLA</span>
      </div>

      <div className="mx-auto grid max-w-[92rem] items-stretch lg:grid-cols-2">
        {/* Photo bleeds to the section edge; type block overlaps it on lg */}
        <div className="relative min-h-[44vh] bg-surface lg:min-h-[92vh]">
          <img 
            src="https://images.pexels.com/photos/17407046/pexels-photo-17407046.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
            alt="Процес ручного приготування свіжої пасти" 
            className="rp-graded absolute inset-0 h-full w-full object-cover" 
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface/30" />
        </div>

        <div className="relative flex flex-col justify-center px-4 py-16 lg:-ml-24 lg:px-0 lg:py-28">
          <div className="z-10 bg-surface p-8 lg:p-14 lg:shadow-[0_40px_80px_-40px_rgba(0,0,0,0.35)]">
            <span className="rp-actno mb-5 text-sm uppercase tracking-[0.3em] text-muted">Душа</span>
            
            <Reveal>
              <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)] leading-tight">
                Мистецтво ручної роботи
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-muted lg:text-lg max-w-xl">
                У Pasta Famiglia ми не просто готуємо їжу — ми створюємо історію в кожній тарілці. Кожна порція пасти викатується вручну щоранку, використовуючи лише традиційні італійські техніки та серце майстра. Це смак, який неможливо відтворити промисловим способом.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {/* STAT CELL 1: Rating */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={4.9} decimals={1} locale="uk-UA" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">Рейтинг</p>
              </div>

              {/* STAT CELL 2: Reviews */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={127} suffix="+" locale="uk-UA" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">Відгуків</p>
              </div>

              {/* STAT CELL 3: Placeholder to maintain grid symmetry as per skeleton instruction */}
              <div className="opacity-0 pointer-events-none">
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">0</span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">—</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}