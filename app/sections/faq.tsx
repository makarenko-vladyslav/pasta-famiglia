"use client";

import { Reveal } from "@/components/mechanics";

export function SectionFaq() {
  const faqItems = [
    {
      q: "Чи є де поставити машину?",
      a: "Так, біля входу є гостьова зона для паркування на 5 місць."
    },
    {
      q: "Чи можна з собакою?",
      a: "Ми pet-friendly. Принесемо води вашому другу."
    },
    {
      q: "Скільки чекати на пасту в обід?",
      a: "Наша гарантія — 20 хвилин. Якщо не встигнемо, напій безкоштовний."
    },
    {
      q: "Як забронювати стіл?",
      a: "Тисніть кнопку на сайті. Підтвердження прийде в Telegram за 30 секунд."
    }
  ];

  return (
    <section id="faq" className="relative bg-background py-[var(--space-act)]">
      <div className="mx-auto grid max-w-[88rem] gap-12 px-4 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:px-10">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="rp-actno mb-5 block font-display text-sm tracking-widest text-muted uppercase">
            Докази
          </span>
          <Reveal>
            <h2 className="font-display font-bold leading-[0.9] tracking-[-0.03em] text-[clamp(2.4rem,5vw,4.5rem)]">
              Відповіді на запитання
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-6">
              <p className="max-w-sm text-base leading-relaxed text-muted">
                Ми дбаємо про ваш комфорт у Pasta Famiglia. Тут зібрані найпопулярніші запитання від наших гостей у Києві.
              </p>
              <p className="mt-4 font-display text-sm tracking-wide text-accent/80">
                ★ 4.9 · 127 відгуків · вул. Антоновича, 44
              </p>
            </div>
          </Reveal>
        </div>

        <div className="divide-y divide-foreground/10 border-t border-foreground/10 lg:border-t-0">
          {faqItems.map((item, index) => (
            <Reveal key={index} delay={0.05 * index}>
              <details className="group py-6 lg:py-8">
                <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 outline-none transition-colors duration-300 hover:text-accent [&::-webkit-details-marker]:hidden">
                  <h3 className="font-display text-[clamp(1.2rem,2vw,1.7rem)] font-semibold leading-snug transition-colors duration-200 group-open:text-accent">
                    {item.q}
                  </h3>
                  <span 
                    aria-hidden 
                    className="font-display text-2xl leading-none text-accent transition-transform duration-500 ease-[var(--ease-out-cubic)] group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <div className="overflow-hidden transition-all duration-500 ease-[var(--ease-out-cubic)]">
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
                    {item.a}
                  </p>
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}