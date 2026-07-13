"use client";

import { Reveal } from "@/components/mechanics";

/**
 * ACT IV: The Proof. Transparency regarding fees/parking.
 * Editorial FAQ layout with a sticky side intro and interactive details.
 */
export function SectionFaqPolicy() {
  return (
    <section id="faq_policy" className="relative bg-background py-[var(--space-act)]">
      <div className="mx-auto grid max-w-[88rem] gap-12 px-4 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:px-10">
        {/* Sticky Intro Sidebar */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="rp-actno mb-5 block font-mono text-xs tracking-[0.3em] uppercase text-muted">
            Поширені запитання
          </span>
          <Reveal>
            <h2 className="font-display font-bold leading-[0.9] text-[clamp(2.4rem,5vw,4.5rem)] text-foreground">
              Комфорт у <br />кожному <br />візиті
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
              Ми дбаємо про ваш час та затишок. Тут зібрано відповіді на найчастіші запитання щодо роботи нашої сімейної ресторації Pasta Famiglia.
            </p>
          </Reveal>
        </div>

        {/* FAQ List Accordion */}
        <div className="divide-y divide-foreground/10 border-t border-foreground/10 lg:border-t-0">
          <details className="group py-6" open>
            <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 [&::-webkit-details-marker]:hidden">
              <h3 className="font-display text-[clamp(1.2rem,2vw,1.7rem)] font-semibold leading-snug transition-colors duration-200 group-open:text-accent">
                Чи потрібно бронювати столик заздалегідь?
              </h3>
              <span aria-hidden className="font-display text-2xl leading-none text-accent transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Ми рекомендуємо бронювати столик за 1-2 дні до візиту, особливо у вечірній час та вихідні, щоб гарантувати найкраще місце для вашої вечері на вул. Антоновича, 44.
            </p>
          </details>

          <details className="group py-6">
            <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 [&::-webkit-details-marker]:hidden">
              <h3 className="font-display text-[clamp(1.2rem,2vw,1.7rem)] font-semibold leading-snug transition-colors duration-200 group-open:text-accent">
                Чи є у вас паркування для гостей?
              </h3>
              <span aria-hidden className="font-display text-2xl leading-none text-accent transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Так, безпосередньо біля ресторану є міська зона паркування. Також поруч розташовані зручні паркувальні майданчики для вашого авто.
            </p>
          </details>

          <details className="group py-6">
            <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 [&::-webkit-details-marker]:hidden">
              <h3 className="font-display text-[clamp(1.2rem,2vw,1.7rem)] font-semibold leading-snug transition-colors duration-200 group-open:text-accent">
                Чи можна прийти з домашніми улюбленцями?
              </h3>
              <span aria-hidden className="font-display text-2xl leading-none text-accent transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Pasta Famiglia — pet-friendly заклад. Ми завжди раді гостям з вихованими собаками та з радістю запропонуємо вашому улюбленцю миску з чистою водою.
            </p>
          </details>

          <details className="group py-6">
            <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 [&::-webkit-details-marker]:hidden">
              <h3 className="font-display text-[clamp(1.2rem,2vw,1.7rem)] font-semibold leading-snug transition-colors duration-200 group-open:text-accent">
                Чи є у вас дитяче меню та стільчики?
              </h3>
              <span aria-hidden className="font-display text-2xl leading-none text-accent transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Так, ми сімейний ресторан. У нас є спеціально розроблене меню з корисними стравами для дітей, а також комфортні дитячі стільчики для найменших відвідувачів.
            </p>
          </details>

          <details className="group py-6">
            <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 [&::-webkit-details-marker]:hidden">
              <h3 className="font-display text-[clamp(1.2rem,2vw,1.7rem)] font-semibold leading-snug transition-colors duration-200 group-open:text-accent">
                Як працює доставка та самовивіз?
              </h3>
              <span aria-hidden className="font-display text-2xl leading-none text-accent transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Ви можете замовити будь-які страви з нашого меню за телефоном +380 (44) 333-22-11. При замовленні на самовивіз ми надаємо приємну знижку 10%.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}