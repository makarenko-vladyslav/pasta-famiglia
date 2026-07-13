"use client";

import { Reveal, TiltCard, CountUp } from "@/components/mechanics";

export function SectionCraft() {
  return (
    <section id="craft" className="relative bg-background py-24 lg:py-0">
      <div className="mx-auto grid max-w-[92rem] items-stretch lg:grid-cols-2">
        {/* Content Block with Overlap */}
        <div className="relative order-2 flex flex-col justify-center px-4 py-16 lg:order-1 lg:-mr-24 lg:px-0 lg:py-28">
          <div className="relative z-10 bg-surface p-8 lg:p-14 lg:shadow-[0_40px_80px_-40px_rgba(0,0,0,0.35)]">
            <span className="rp-actno mb-5 block font-display text-sm tracking-widest text-muted">ACT III</span>
            
            <Reveal>
              <h2 className="font-display font-bold leading-[0.92] tracking-[-0.03em] text-[clamp(2.4rem,5vw,4.5rem)]">
                Тісто о шостій ранку
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-muted lg:text-lg">
                Я не вірю в заготовки на тиждень. Кожен ранок починається з мішка італійського борошна Semola та свіжих жовтків. О першій годині ця паста вже у вашій тарілці.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-foreground/10 pt-10">
              {/* Stat 1: Rating */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={4.9} decimals={1} locale="uk" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">Рейтинг</p>
              </div>

              {/* Stat 2: Reviews */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={127} locale="uk" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">Відгуків</p>
              </div>

              {/* Stat 3: Freshness Metric */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={100} suffix="%" locale="uk" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">Свіжість</p>
              </div>
            </div>

            {/* Trust Line */}
            <p className="mt-12 text-[10px] tracking-widest text-muted/60 uppercase">
              ★ 4.9 · 127 відгуків · вул. Антоновича, 44, Київ
            </p>
          </div>
        </div>

        {/* Media Block */}
        <div className="relative order-1 min-h-[54vh] overflow-hidden lg:order-2 lg:min-h-[92vh]">
          <TiltCard className="h-full w-full">
            <div className="h-full w-full overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/28733281/pexels-photo-28733281.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
                alt="Процес приготування свіжої пасти Pasta Famiglia" 
                className="rp-graded absolute inset-0 h-full w-full object-cover transition-transform duration-[2000ms] ease-out-cubic hover:scale-105" 
                loading="lazy"
              />
              <div className="rp-grain absolute inset-0 pointer-events-none opacity-20" />
            </div>
          </TiltCard>
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[hsl(var(--color-surface))]/30 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}