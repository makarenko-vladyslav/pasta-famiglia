"use client";
import { Reveal, Magnetic, TiltCard } from "@/components/mechanics";
import { ArrowRight } from "@phosphor-icons/react";

/**
 * SectionLunchSpecial - ACT II: The Offer
 * Fast-paced lunch for business in Pasta Famiglia.
 * Asymmetric 5/7 split.
 */
export function SectionLunchSpecial() {
  return (
    <section className="relative overflow-hidden bg-background py-[var(--space-act)]">
      {/* Massive watermark (lg only) */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none select-none overflow-hidden">
        <span className="rp-watermark absolute -right-20 top-1/2 -translate-y-1/2 opacity-[0.03] text-foreground font-display text-[30rem]">
          350
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 lg:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
          
          {/* Left Column: Image with Tilt Effect */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <Reveal delay={0.2}>
              <TiltCard>
                <div 
                  className="relative overflow-hidden bg-surface"
                  style={{ borderRadius: "var(--radius-surface)" }}
                >
                  <img
                    src="https://images.pexels.com/photos/35994509/pexels-photo-35994509.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
                    alt="Італійський бізнес-ланч"
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]"
                  />
                  {/* Film grain overlay */}
                  <div className="rp-grain absolute inset-0 pointer-events-none opacity-20" />
                </div>
              </TiltCard>
            </Reveal>
          </div>

          {/* Right Column: Text Block */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start lg:pl-10">
            <Reveal delay={0.1}>
              <span className="mb-6 block text-sm font-body uppercase tracking-[0.3em] text-muted">
                Пропозиція
              </span>
            </Reveal>

            <Reveal delay={0.2}>
              <h2 className="mb-8 font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-tight">
                Бізнес-ланч
              </h2>
            </Reveal>

            <div className="space-y-6 max-w-lg">
              <Reveal delay={0.3}>
                <p className="font-body text-lg lg:text-xl leading-relaxed text-foreground">
                  Компактне італійське меню, створене для продуктивної паузи посеред робочого дня.
                </p>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="flex flex-col gap-4">
                  <div className="flex items-baseline justify-between border-b border-foreground/10 pb-4">
                    <span className="font-display text-2xl">Фіксована ціна</span>
                    <span className="font-display text-4xl">350 грн</span>
                  </div>
                  <p className="text-sm text-muted">
                    Три курси страв на вибір: від класичної пасти до легких салатів та авторських десертів. Швидка подача гарантована.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.5} className="pt-6">
                <Magnetic>
                  <a
                    href="tel:+380440000000"
                    className="group inline-flex items-center gap-3 bg-foreground px-5 py-3 text-sm text-background transition-colors hover:bg-accent hover:text-accent-foreground lg:text-base"
                    style={{ borderRadius: "var(--radius-control)" }}
                  >
                    Забронювати стіл
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </a>
                </Magnetic>
              </Reveal>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}