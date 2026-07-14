"use client";
import { Reveal, CountUp } from "@/components/mechanics";

export function SectionProcessGuarantee() {
  return (
    <section id="process_guarantee" className="relative overflow-hidden bg-surface py-24 lg:py-0">
      {/* Signature Moment: Giant Watermark Background */}
      <div className="pointer-events-none absolute inset-0 z-0 hidden lg:block">
        <span className="rp-watermark font-display absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] opacity-[0.03]">
          20
        </span>
      </div>

      <div className="mx-auto grid max-w-[92rem] items-stretch lg:grid-cols-2">
        <div className="relative order-2 flex flex-col justify-center px-4 py-16 lg:order-1 lg:-mr-24 lg:px-0 lg:py-28">
          <div className="relative z-10 bg-surface p-8 lg:p-14 lg:shadow-[0_40px_80px_-40px_rgba(0,0,0,0.35)]">
            <span className="rp-actno mb-5 inline-block text-sm uppercase tracking-[0.3em] text-muted">
              Гарантія
            </span>
            
            <Reveal>
              <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)] tracking-tight">
                Ваша піца за 20 хвилин
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-muted lg:text-lg">
                Ми цінуємо ваш час так само сильно, як і традиції італійської кухні. 
                Якщо ваше замовлення не буде готове протягом двадцяти хвилин — ви отримуєте 
                його повністю за наш рахунок. Без жодних компромісів щодо якості.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {/* STAT_CELL 1: The Guarantee */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={20} suffix=" хв" locale="uk" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">Очікування</p>
              </div>

              {/* STAT_CELL 2: Rating from FACTS */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={4.9} decimals={1} locale="uk" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">Рейтинг</p>
              </div>

              {/* STAT_CELL 3: Reviews from FACTS */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={127} suffix="+" locale="uk" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">Відгуків</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative order-1 min-h-[44vh] bg-surface lg:order-2 lg:min-h-[92vh] overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/31742770/pexels-photo-31742770.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
            alt="Свіжа італійська піца в Pasta Famiglia" 
            className="rp-graded absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-surface/30" />
          <div className="rp-grain pointer-events-none absolute inset-0 opacity-20" />
        </div>
      </div>
    </section>
  );
}