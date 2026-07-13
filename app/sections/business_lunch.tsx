"use client";

import { Reveal, Magnetic } from "@/components/mechanics";
import { Clock, ArrowRight } from "@phosphor-icons/react/dist/ssr";

/**
 * SECTION: Business Lunch (Act II)
 * ROLE: Targeted office worker offer
 * STYLING: bg-surface, editorial list, 20-min guarantee focus.
 */
export function SectionBusinessLunch() {
  return (
    <section className="relative overflow-hidden bg-background py-[var(--space-act)]">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="grid grid-cols-12 gap-y-12 lg:gap-y-0">
          
          {/* MEDIA BLOCK: Photo 3 */}
          <div className="col-span-12 lg:col-start-2 lg:col-end-6">
            <Reveal delay={0.1}>
              <div className="group relative aspect-[4/5] overflow-hidden rounded-[var(--radius-surface)] lg:aspect-[3/4]">
                <div className="rp-grain pointer-events-none absolute inset-0 z-10 opacity-30" />
                <img
                  src="https://images.pexels.com/photos/14537702/pexels-photo-14537702.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                  alt="Італійський бізнес-ланч"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                />
              </div>
            </Reveal>
          </div>

          {/* CONTENT BLOCK: Offer & Terms */}
          <div className="relative col-span-12 flex flex-col justify-center text-center lg:col-start-7 lg:col-end-12 lg:text-left">
            
            {/* Watermark: Hidden on lg as per spec */}
            <div className="rp-watermark pointer-events-none select-none text-foreground/5 lg:hidden">
              350
            </div>

            <div className="relative z-10 space-y-8">
              <Reveal delay={0.2}>
                <span className="text-sm tracking-[0.3em] uppercase text-muted">
                  Ланч
                </span>
              </Reveal>

              <Reveal delay={0.3}>
                <h2 className="font-display leading-tight text-foreground clamp(2.2rem,4.5vw,4rem)">
                  Бізнес-ланч у Pasta Famiglia
                </h2>
              </Reveal>

              <Reveal delay={0.4}>
                <p className="text-lg text-foreground lg:text-xl">
                  Спеціальна пропозиція для продуктивного дня: швидкість без компромісів зі смаком.
                </p>
              </Reveal>

              {/* Editorial List of Terms (Lora/Display Font for Terms) */}
              <div className="space-y-4 pt-4">
                <Reveal delay={0.5}>
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-baseline justify-between border-b border-foreground/10 pb-2">
                      <span className="font-display text-xl text-foreground">Повний сет</span>
                      <span className="font-display text-xl text-foreground">350 ₴</span>
                    </div>
                    <p className="text-sm text-muted">Перша страва, основна страва та напій</p>
                  </div>
                </Reveal>

                <Reveal delay={0.6}>
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-baseline justify-between border-b border-foreground/10 pb-2">
                      <span className="font-display text-xl text-foreground">Графік</span>
                      <span className="font-display text-xl text-foreground">12:00 – 16:00</span>
                    </div>
                    <p className="text-sm text-muted">Кожного буднього дня з понеділка по п'ятницю</p>
                  </div>
                </Reveal>
              </div>

              {/* 20-min Guarantee Block */}
              <Reveal delay={0.7}>
                <div className="inline-flex items-center gap-3 rounded-full bg-foreground/5 px-4 py-2 text-foreground">
                  <Clock size={20} weight="light" className="text-accent" />
                  <span className="text-sm font-medium uppercase tracking-wider">
                    20-хвилинна гарантія подачі
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.8}>
                <div className="flex justify-center lg:justify-start pt-4">
                  <Magnetic>
                    <a
                      href="tel:+380443332211"
                      className="group flex items-center gap-2 bg-foreground px-6 py-3.5 text-base text-background transition-colors hover:bg-foreground/90"
                    >
                      Замовити стіл
                      <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </a>
                  </Magnetic>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}