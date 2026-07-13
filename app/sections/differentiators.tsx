"use client";

import { Reveal, CountUp } from "@/components/mechanics";

export function SectionDifferentiators() {
  return (
    <section id="differentiators" className="relative bg-surface py-24 lg:py-0">
      <div className="mx-auto grid max-w-[92rem] items-stretch lg:grid-cols-2">
        {/* photo bleeds to the section edge; type block overlaps it on lg */}
        <div className="relative min-h-[44vh] bg-surface lg:min-h-[92vh]">
          <img 
            src="https://images.pexels.com/photos/38499051/pexels-photo-38499051.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
            alt="Відкрита кухня та свіжа паста Pasta Famiglia" 
            className="rp-graded absolute inset-0 h-full w-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface/30" />
        </div>
        <div className="relative flex flex-col justify-center px-4 py-16 lg:-ml-24 lg:px-0 lg:py-28">
          <div className="bg-surface p-8 lg:p-14 lg:shadow-[0_40px_80px_-40px_rgba(0,0,0,0.35)]">
            <span className="rp-actno mb-5 block text-sm uppercase tracking-[0.3em] text-muted">
              Принципи
            </span>
            <Reveal>
              <h2 className="font-display font-bold leading-[0.92] text-[clamp(2.4rem,5vw,4.5rem)]">
                Готуємо швидко та відкрито
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-muted lg:text-lg">
                Якщо не винесемо замовлення за 20 хвилин — пригостимо напоєм. У нас немає прихованих зборів за сервіс чи упаковку.
              </p>
            </Reveal>
            <div className="mt-10 grid grid-cols-3 gap-6">
              {/* STAT CELL 1 */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={20} suffix="хв" locale="uk" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">Час видачі</p>
              </div>

              {/* STAT CELL 2 */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={4.9} suffix="" locale="uk" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">Рейтинг Google</p>
              </div>

              {/* STAT CELL 3 */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={127} suffix="" locale="uk" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">Відгуків гостей</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}