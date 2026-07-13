"use client";
import { Reveal, CountUp } from "@/components/mechanics";

export function SectionThePromise() {
  return (
    <section id="the_promise" className="relative bg-surface py-24 lg:py-0">
      <div className="mx-auto grid max-w-[92rem] items-stretch lg:grid-cols-2">
        {/* photo bleeds to the section edge; type block overlaps it on lg */}
        <div className="relative min-h-[44vh] bg-surface lg:min-h-[92vh]">
          <img 
            src="https://images.pexels.com/photos/35819050/pexels-photo-35819050.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
            alt="Свіжа паста власного виробництва" 
            className="rp-graded absolute inset-0 h-full w-full object-cover" 
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface/30" />
        </div>
        
        <div className="relative flex flex-col justify-center px-4 py-16 lg:-ml-24 lg:px-0 lg:py-28 overflow-hidden">
          {/* Decorative watermark behind content (desktop only) */}
          <div className="absolute -right-10 top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block opacity-[0.03] rotate-90">
            <span className="rp-watermark text-[14rem] font-display uppercase leading-none">
              FRESH
            </span>
          </div>

          <div className="relative z-10 bg-surface p-8 lg:p-14 lg:shadow-[0_40px_80px_-40px_rgba(0,0,0,0.35)]">
            <span className="rp-actno mb-5">Обіцянка</span>
            
            <Reveal>
              <h2 className="font-display font-bold leading-[0.92] text-[clamp(2.4rem,5vw,4.5rem)]">
                Свіжа паста за 20 хвилин
              </h2>
            </Reveal>
            
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-muted lg:text-lg">
                Ми готуємо пасту вручну кожного ранку з добірних сортів пшениці, щоб ви відчули справжній смак Італії. Наша команда гарантує подачу основних страв протягом 20 хвилин, не втрачаючи жодної нотки якості.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {/* STAT 1: SPEED */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={20} suffix=" хв" locale="uk" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">Швидкість</p>
              </div>

              {/* STAT 2: RATING */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={4.9} locale="uk" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">Рейтинг</p>
              </div>

              {/* STAT 3: REVIEWS */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={127} suffix="+" locale="uk" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">Відгуків</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}