"use client";

import { Reveal, CountUp } from "@/components/mechanics";

export function SectionStoryValues() {
  return (
    <section id="story_values" className="relative bg-background py-24 lg:py-0">
      <div className="mx-auto grid max-w-[92rem] items-stretch lg:grid-cols-2">
        <div className="relative order-2 flex flex-col justify-center px-4 py-16 lg:order-1 lg:-mr-24 lg:px-0 lg:py-28">
          <div className="relative z-10 bg-surface p-8 lg:p-14 lg:shadow-[0_40px_80px_-40px_rgba(0,0,0,0.35)]">
            <span className="mb-5 block font-display text-sm uppercase tracking-[0.3em] text-accent">
              Цінності
            </span>
            <Reveal>
              <h2 className="font-display text-[clamp(2.4rem,5vw,4.5rem)] font-bold leading-[0.92] text-foreground">
                Сім’я, Традиції та Смак
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-muted lg:text-lg">
                У Pasta Famiglia ми віримо, що найсмачніші страви народжуються там, де панує щирість. Кожен рецепт — це спадщина, яку ми дбайливо передаємо з покоління в покоління, щоб ви відчули тепло справжнього італійського дому в самому центрі Києва.
              </p>
            </Reveal>
            <div className="mt-10 grid grid-cols-3 gap-6">
              {/* STAT CELL 1: Rating */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={4.9} decimals={1} locale="uk-UA" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">
                  Рейтинг
                </p>
              </div>

              {/* STAT CELL 2: Reviews */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={127} locale="uk-UA" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">
                  Відгуків
                </p>
              </div>

              {/* STAT CELL 3: Address Number */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={44} locale="uk-UA" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">
                  Номер дому
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative order-1 min-h-[44vh] lg:order-2 lg:min-h-[92vh]">
          <img 
            src="https://images.pexels.com/photos/3661200/pexels-photo-3661200.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
            alt="Затишний інтер'єр Pasta Famiglia" 
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-surface/30" />
          <div className="rp-grain absolute inset-0 pointer-events-none opacity-20" />
        </div>
      </div>
    </section>
  );
}