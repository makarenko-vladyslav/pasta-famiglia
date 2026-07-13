import { Reveal, CountUp } from "@/components/mechanics";
"use client";

// Assuming standard toolkit availability as per skeleton

export function SectionCraft() {
  return (
    <section id="craft" className="relative overflow-hidden bg-background py-24 lg:py-0">
      {/* Decorative Layer: Grain & Watermark */}
      <div className="rp-grain pointer-events-none absolute inset-0 z-20 opacity-20" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <span className="rp-watermark absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] text-[30vw] font-display font-bold lg:block hidden">
          SEMOLA
        </span>
      </div>

      <div className="mx-auto grid max-w-[92rem] items-stretch lg:grid-cols-2">
        <div className="relative order-2 flex flex-col justify-center px-4 py-16 lg:order-1 lg:-mr-24 lg:px-0 lg:py-28">
          <div className="relative z-10 bg-surface p-8 lg:p-14 lg:shadow-[0_40px_80px_-40px_rgba(0,0,0,0.35)]">
            <span className="rp-actno mb-5 block text-sm uppercase tracking-[0.3em] text-muted">
              Майстерність
            </span>
            
            <Reveal>
              <h2 className="font-display font-bold leading-[0.92] text-[clamp(2.4rem,5vw,4.5rem)]">
                Тісто замішуємо щоранку
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-muted lg:text-lg">
                Ви бачите весь процес на відкритій кухні. Використовуємо лише італійське борошно Caputo, сорт Semola та томати Mutti.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {/* STAT_CELLS */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={4.9} decimals={1} locale="uk-UA" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">Рейтинг</p>
              </div>

              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={127} suffix="+" locale="uk-UA" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">Відгуків</p>
              </div>

              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={11} suffix=":00" locale="uk-UA" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">Початок</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative order-1 min-h-[44vh] bg-surface lg:order-2 lg:min-h-[92vh] overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/10048679/pexels-photo-10048679.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
            alt="Процес приготування свіжої пасти" 
            className="rp-graded absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-surface/30 lg:to-surface/40" />
        </div>
      </div>
    </section>
  );
}