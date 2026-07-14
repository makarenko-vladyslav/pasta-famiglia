"use client";
import { Reveal, Magnetic } from "@/components/mechanics";

/**
 * ACT V: The Close. The Finale.
 * A high-contrast curtain call with a clear call to action.
 * Focuses on brand pillars instead of repeating location data.
 */
export function SectionBooking() {
  return (
    <section 
      id="booking" 
      className="relative overflow-hidden bg-accent py-[var(--space-act)] text-accent-foreground"
    >
      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <Reveal delay={0.1}>
          <span className="rp-actno mb-6 block text-sm uppercase tracking-[0.3em]">
            Бронювання
          </span>
        </Reveal>

        <Reveal delay={0.2}>
          <h2 className="font-display font-extrabold text-[clamp(3rem,9vw,8rem)] max-w-[14ch]">
            Чекаємо на вас у гості
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-wrap items-center gap-8">
          <Reveal delay={0.3}>
            <Magnetic>
              <a 
                href="tel:+380443332211" 
                className="inline-flex items-center gap-3 bg-foreground px-10 py-5 text-lg font-semibold text-background transition-transform duration-300"
                style={{ borderRadius: "var(--radius-control)" }}
              >
                Забронювати стіл
                <span aria-hidden className="text-xl">→</span>
              </a>
            </Magnetic>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 text-sm text-accent-foreground/80 lg:grid-cols-3 border-t border-accent-foreground/10 pt-10">
          <Reveal delay={0.4}>
            <div className="flex flex-col gap-2">
              <span className="font-display text-lg text-accent-foreground">Автентичність</span>
              <p className="text-muted">Готуємо за рецептами, що передавалися в нашій родині поколіннями.</p>
            </div>
          </Reveal>
          <Reveal delay={0.5}>
            <div className="flex flex-col gap-2">
              <span className="font-display text-lg text-accent-foreground">Локальні продукти</span>
              <p className="text-muted">Використовуємо тільки найсвіжіші інгредієнти від перевірених фермерів.</p>
            </div>
          </Reveal>
          <Reveal delay={0.6}>
            <div className="flex flex-col gap-2">
              <span className="font-display text-lg text-accent-foreground">Винна карта</span>
              <p className="text-muted">Ретельно підібрана колекція вин, що ідеально доповнюють смак кожної страви.</p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Background visual - subtle texture or brand element can be here, but using simple accent flood per spec */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="rp-grain absolute inset-0" />
      </div>
    </section>
  );
}