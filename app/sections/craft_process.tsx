"use client";

import { Reveal, CountUp } from "@/components/mechanics";

export function SectionCraftProcess() {
  return (
    <section id="craft_process" className="relative bg-surface py-24 lg:py-0 overflow-hidden">
      {/* Decorative Watermark for LG+ */}
      <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
        <span className="rp-watermark font-display font-extrabold text-[15vw] text-foreground/5 opacity-5">
          ARTIGIANALE
        </span>
      </div>

      <div className="mx-auto grid max-w-[92rem] items-stretch lg:grid-cols-2">
        {/* photo bleeds to the section edge; type block overlaps it on lg */}
        <div className="relative min-h-[44vh] lg:min-h-[92vh] overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/5082875/pexels-photo-5082875.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
            alt="Процес виготовлення свіжої пасти на кухні Pasta Famiglia" 
            className="rp-graded absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface/30" />
        </div>

        <div className="relative flex flex-col justify-center px-4 py-16 lg:-ml-24 lg:z-10 lg:px-0 lg:py-28">
          <div className="bg-surface p-8 lg:p-14 lg:shadow-[0_40px_80px_-40px_rgba(0,0,0,0.35)]">
            <span className="rp-actno mb-5 inline-block text-sm uppercase tracking-[0.3em] text-muted">
              Душа
            </span>
            
            <Reveal>
              <h2 className="font-display font-bold leading-[0.92] text-[clamp(2.4rem,5vw,4.5rem)]">
                Ритуал свіжої пасти
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-muted lg:text-lg">
                Кожного ранку на нашій відкритій кухні ми перетворюємо добірне борошно та свіжі фермерські яйця на справжню італійську пасту. Це не просто приготування — це традиція Pasta Famiglia, яку ми плекаємо заради кожного гостя.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-foreground/10 pt-10">
              {/* Stat 1: Rating */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={4.9} locale="uk" decimals={1} />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">Рейтинг</p>
              </div>

              {/* Stat 2: Review Count */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={127} locale="uk" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">Відгуків</p>
              </div>

              {/* Stat 3: Opening Hour */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={11} locale="uk" suffix=":00" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">Початок</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}