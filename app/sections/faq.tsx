"use client";

import { Reveal } from "@/components/mechanics";

/**
 * SectionFaq - ACT IV: Clarity
 * Layout: 5fr/7fr Editorial Grid
 * Typography: Display questions + Muted body
 */
export function SectionFaq() {
  const faqItems = [
    {
      q: "Чи є приховані збори за сервіс?",
      a: "Ні. Ціна, яку ви бачите в меню, є остаточною. Жодних 10-15% зверху."
    },
    {
      q: "Чи є де припаркувати авто?",
      a: "Ми працюємо в самому центрі, тому кількість місць поруч обмежена. Радимо врахувати це."
    },
    {
      q: "Що входить у дитячу кімнату?",
      a: "Ігри, безпечний простір та аніматор, який розважає малечу по вихідних."
    },
    {
      q: "Чи можна купити пасту з собою?",
      a: "Так, ми продаємо свіжу пасту як напівфабрикат для домашнього приготування."
    }
  ];

  return (
    <section id="faq" className="relative bg-background py-[var(--space-act)]">
      <div className="mx-auto grid max-w-[88rem] gap-12 px-4 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:px-10">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="rp-actno mb-5 block text-sm uppercase tracking-[0.3em] text-muted">
            Запитання
          </span>
          <Reveal>
            <h2 className="font-display font-bold leading-[0.9] text-[clamp(2.4rem,5vw,4.5rem)]">
              Запитання та відповіді
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
              Ми цінуємо ваш час та відкритість, тому зібрали відповіді на найчастіші запитання про Pasta Famiglia.
            </p>
          </Reveal>
        </div>

        <div className="divide-y divide-foreground/10 border-t border-foreground/10 lg:border-t-0">
          {faqItems.map((item, index) => (
            <details key={index} className="group py-6 first:pt-0 lg:first:pt-6">
              <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 [&::-webkit-details-marker]:hidden">
                <h3 className="font-display text-[clamp(1.2rem,2vw,1.7rem)] font-semibold leading-snug transition-colors duration-200 group-hover:text-accent group-open:text-accent">
                  {item.q}
                </h3>
                <span 
                  aria-hidden 
                  className="font-display text-2xl leading-none text-accent transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <Reveal delay={0.05}>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
                  {item.a}
                </p>
              </Reveal>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}