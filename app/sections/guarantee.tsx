"use client";

import { Reveal, CountUp } from "@/components/mechanics";

export function SectionGuarantee() {
  return (
    <section id="guarantee" className="relative bg-surface pt-0 pb-16 lg:py-0">
      <div className="mx-auto grid max-w-[92rem] items-stretch lg:grid-cols-2">
        <div className="relative order-2 flex flex-col justify-center px-4 py-16 lg:order-1 lg:-mr-24 lg:px-0 lg:py-28">
          <div 
            className="relative z-10 bg-surface p-8 lg:p-14 lg:shadow-[0_40px_80px_-40px_rgba(0,0,0,0.35)]"
            style={{ borderRadius: "var(--radius-surface)" }}
          >
            <span className="rp-actno mb-5 text-sm uppercase tracking-[0.3em] text-muted">Гарантія</span>
            
            <Reveal>
              <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)] leading-[1.0]">
                Страва за 20 хвилин
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-muted lg:text-lg max-w-xl">
                Ми цінуємо ваш час у пікові години. Якщо офіціант не принесе замовлення вчасно — пригощаємо фірмовим напоєм.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-foreground/10 pt-10">
              {/* STAT 1: Wait Time */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={20} suffix=" хв" locale="uk" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">Очікування</p>
              </div>

              {/* STAT 2: Rating */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={4.9} decimals={1} locale="uk" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">Рейтинг</p>
              </div>

              {/* STAT 3: Reviews */}
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
            src="https://images.pexels.com/photos/17216559/pexels-photo-17216559.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
            alt="Фірмова подача страв у Pasta Famiglia" 
            className="rp-graded absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-surface/30 pointer-events-none" />
          <div className="rp-grain absolute inset-0 opacity-20 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}