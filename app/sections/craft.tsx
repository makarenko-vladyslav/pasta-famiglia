"use client";

import { Reveal, CountUp } from "@/components/mechanics";

export function SectionCraft() {
  return (
    <section id="craft" className="relative overflow-hidden bg-background pt-0 pb-16 lg:py-0">
      {/* Decorative Watermark for Desktop */}
      <div className="pointer-events-none absolute inset-0 z-0 hidden overflow-hidden lg:block">
        <span className="rp-watermark opacity-[0.03]">SEMOLA</span>
      </div>

      <div className="mx-auto grid max-w-[92rem] items-stretch lg:grid-cols-2">
        {/* Content Block: Overlaps the photo on desktop */}
        <div className="relative order-2 flex flex-col justify-center px-4 py-16 lg:order-1 lg:-mr-24 lg:px-0 lg:py-28">
          <div className="relative z-10 bg-surface p-8 lg:p-14 lg:shadow-[0_40px_80px_-40px_rgba(0,0,0,0.35)]">
            <span className="rp-actno mb-5 text-sm uppercase tracking-[0.3em] text-muted">Майстерність</span>
            
            <Reveal>
              <h2 className="font-display font-bold text-accent text-[clamp(2.4rem,5vw,4.5rem)] leading-[1.1]">
                Тісто замішуємо щоранку
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 font-body font-light text-base leading-[1.6] text-muted lg:text-lg">
                Ви бачите процес на відкритій кухні: від італійського борошна Caputo до моменту, коли страва опиняється на столі.
              </p>
            </Reveal>

            {/* Stat Cells from Facts and Copy Context */}
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-foreground/10 pt-10">
              {/* Stat 1: Rating Fact */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={4.9} decimals={1} locale="uk" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted leading-tight">Рейтинг закладу</p>
              </div>

              {/* Stat 2: Reviews Fact */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={127} locale="uk" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted leading-tight">Відгуків гостей</p>
              </div>

              {/* Stat 3: Quality Marker from Copy */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={100} suffix="%" locale="uk" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted leading-tight">Ручна робота</p>
              </div>
            </div>

            {/* Additional items from copy as a quiet list */}
            <div className="mt-12 space-y-3">
              {["Тільки тверді сорти Semola", "Томати Mutti для соусів", "Жодної сухої пасти з пачки"].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="h-px w-4 bg-accent/40" />
                  <span className="text-sm font-body text-muted">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Media Block */}
        <div className="relative order-1 min-h-[50vh] bg-surface lg:order-2 lg:min-h-[92vh] overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/6213734/pexels-photo-6213734.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
            alt="Процес виготовлення свіжої пасти" 
            className="rp-graded absolute inset-0 h-full w-full object-cover transition-transform duration-[2000ms] ease-out hover:scale-[1.04]" 
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-surface/30 lg:to-surface/50" />
          <div className="rp-grain pointer-events-none absolute inset-0 opacity-20" />
        </div>
      </div>
    </section>
  );
}