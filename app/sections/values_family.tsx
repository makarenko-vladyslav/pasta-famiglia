"use client";

import { Reveal, CountUp } from "@/components/mechanics";

export function SectionValuesFamily() {
  return (
    <section id="values_family" className="relative bg-background py-24 lg:py-0">
      <div className="mx-auto grid max-w-[92rem] items-stretch lg:grid-cols-2">
        <div className="relative order-2 flex flex-col justify-center px-4 py-16 lg:order-1 lg:-mr-24 lg:px-0 lg:py-28">
          <div className="relative z-10 bg-surface p-8 lg:p-14 lg:shadow-[0_40px_80px_-40px_rgba(0,0,0,0.35)]">
            <span className="rp-actno mb-5 text-sm uppercase tracking-[0.3em] text-muted">Душа</span>
            <Reveal>
              <h2 className="font-display font-bold leading-[0.92] text-[clamp(2.4rem,5vw,4.5rem)]">
                Сімейні цінності та затишок
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-muted lg:text-lg">
                Pasta Famiglia — це простір, де кожен гість відчуває себе частиною великої родини. Ми створили ідеальні умови для відпочинку з дітьми: від безпечної ігрової зони до спеціально розробленого меню. Поки малеча розважається, ви можете насолодитися автентичними смаками Італії в атмосфері спокою та щирої турботи.
              </p>
            </Reveal>
            <div className="mt-10 grid grid-cols-3 gap-6">
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

              {/* STAT CELL: Hours (Using '11' from opening hours) */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={11} suffix=":00" locale="uk" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">Відчинено</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative order-1 min-h-[44vh] lg:order-2 lg:min-h-[92vh] overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/4350219/pexels-photo-4350219.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
            alt="Сімейна атмосфера в ресторані Pasta Famiglia" 
            className="rp-graded absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-surface/30" />
        </div>
      </div>
    </section>
  );
}