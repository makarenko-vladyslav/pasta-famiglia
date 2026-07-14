"use client";

import { Reveal, CountUp } from "@/components/mechanics";

export function SectionSocialProof() {
  return (
    <section className="py-[var(--space-act)] bg-foreground text-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header Block */}
        <div className="mb-16 md:mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-12">
          <Reveal>
            <h2 className="font-display text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.1]">
              4.9 із <CountUp to={127} locale="uk-UA" /> відгуків
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-body text-surface/70 text-lg md:text-xl max-w-md lg:text-right">
              Оцінки з Google Maps від гостей, які вже перевірили нашу пунктуальність.
            </p>
          </Reveal>
        </div>

        {/* Main Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12">
          
          {/* Spotlight Quote */}
          <div className="md:col-span-7 pb-[3rem] md:pb-0 border-b border-surface/15 md:border-b-0 flex flex-col justify-center">
            <Reveal delay={0.2}>
              <figure className="flex flex-col gap-8 md:pr-12">
                <svg
                  className="w-10 h-10 md:w-14 md:h-14 text-surface/15"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] text-surface">
                  «Забігаю на ланч, завжди вкладаюся у 40 хвилин разом з дорогою»
                </blockquote>
                <figcaption className="font-mono text-[14px] text-surface/60 uppercase tracking-[0.25em] mt-2">
                  Google Maps
                </figcaption>
              </figure>
            </Reveal>
          </div>

          {/* Desktop Divider Column */}
          <div className="hidden md:flex md:col-span-1 justify-center items-center">
            <div className="w-px h-full bg-surface/15"></div>
          </div>

          {/* Small Quotes Stack */}
          <div className="md:col-span-4 flex flex-col pt-[3rem] md:pt-0">
            
            <div className="pb-[3rem] border-b border-surface/15 flex flex-col justify-center">
              <Reveal delay={0.3}>
                <figure className="flex flex-col gap-4">
                  <blockquote className="font-body text-[18px] leading-relaxed text-surface/90">
                    «Нарешті місце, де тісто роблять при тобі, а не дістають з морозилки»
                  </blockquote>
                  <figcaption className="font-mono text-[14px] text-surface/60 uppercase tracking-[0.25em]">
                    Google Maps
                  </figcaption>
                </figure>
              </Reveal>
            </div>

            <div className="pt-[3rem] flex flex-col justify-center">
              <Reveal delay={0.4}>
                <figure className="flex flex-col gap-4">
                  <blockquote className="font-body text-[18px] leading-relaxed text-surface/90">
                    «Діти з аніматором, ми з кавою Lavazza. Просто відпочиваємо.»
                  </blockquote>
                  <figcaption className="font-mono text-[14px] text-surface/60 uppercase tracking-[0.25em]">
                    Google Maps
                  </figcaption>
                </figure>
              </Reveal>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}