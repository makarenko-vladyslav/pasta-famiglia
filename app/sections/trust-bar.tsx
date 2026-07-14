"use client";

import { Reveal, CountUp } from "@/components/mechanics";
import { Star, ChatText, MapPin } from "@phosphor-icons/react";

/**
 * SECTION: Trust Bar (ACT I: Support)
 * A narrow, high-credibility band positioned below the hero to establish immediate trust.
 * Features live counters for rating and reviews, alongside the physical location.
 */
export function SectionTrustBar() {
  const MARKET_LOCALE = "uk-UA";

  return (
    <section className="relative overflow-hidden bg-surface border-y border-foreground/10 py-[var(--space-act)]">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Trust Message */}
          <div className="lg:col-span-6 space-y-4">
            <Reveal>
              <h2 className="text-[clamp(2.2rem,4.5vw,4rem)] font-display leading-[1.1] tracking-tight">
                4.9 бала від гостей
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-foreground/80 max-w-xl">
                На основі 127 відгуків у Google. Готуємо на відкритій кухні, щоб ви бачили процес приготування на власні очі.
              </p>
            </Reveal>
          </div>

          {/* Stats Grid */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-4">
              
              {/* Rating Stat */}
              <div className="relative group">
                <Reveal delay={0.2}>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-accent">
                      <Star weight="fill" size={20} />
                      <span className="text-[clamp(2rem,4vw,2.5rem)] font-display leading-none">
                        <CountUp to={4.9} decimals={1} locale={MARKET_LOCALE} />
                      </span>
                    </div>
                    <p className="text-sm uppercase tracking-[0.2em] text-muted">
                      Рейтинг
                    </p>
                  </div>
                </Reveal>
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-10 bg-foreground/10" />
              </div>

              {/* Reviews Stat */}
              <div className="relative group lg:pl-8">
                <Reveal delay={0.3}>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <ChatText weight="light" size={20} className="text-foreground/40" />
                      <span className="text-[clamp(2rem,4vw,2.5rem)] font-display leading-none">
                        <CountUp to={127} locale={MARKET_LOCALE} />
                      </span>
                    </div>
                    <p className="text-sm uppercase tracking-[0.2em] text-muted">
                      Відгуків
                    </p>
                  </div>
                </Reveal>
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-10 bg-foreground/10" />
              </div>

              {/* Location Stat */}
              <div className="lg:pl-8">
                <Reveal delay={0.4}>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <MapPin weight="light" size={20} className="text-foreground/40" />
                      <span className="text-[clamp(2rem,4vw,2.5rem)] font-display leading-none">
                        Київ
                      </span>
                    </div>
                    <p className="text-sm uppercase tracking-[0.2em] text-muted">
                      Локація
                    </p>
                  </div>
                </Reveal>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}