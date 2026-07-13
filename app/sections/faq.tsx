"use client";

import { Reveal } from "@/components/mechanics";

export function SectionFaq() {
  const faqItems = [
    {
      q: "Чи є у вас паркування?",
      a: "Так, для наших гостей передбачені місця для авто поруч із рестораном."
    },
    {
      q: "Чи можна з собакою?",
      a: "Звісно, ми дружні до тварин і завжди запропонуємо воду вашому улюбленцю."
    },
    {
      q: "Як швидко підтверджуєте бронь?",
      a: "Надсилаємо підтвердження у Telegram або Viber протягом 30 секунд після заявки."
    },
    {
      q: "Чи є знижка на самовивіз?",
      a: "Так, забирайте замовлення самі та отримуйте знижку на все меню."
    }
  ];

  return (
    <section id="faq" className="relative bg-surface py-[var(--space-act)]">
      <div className="mx-auto grid max-w-[88rem] gap-12 px-4 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:px-10">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="mb-5 block text-sm uppercase tracking-[0.3em] text-muted">
            Питання
          </span>
          <Reveal>
            <h2 className="font-display font-bold leading-[0.9] text-[clamp(2.4rem,5vw,4.5rem)]">
              Відповіді на питання
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
              Ми подбали про те, щоб ваш візит до Pasta Famiglia був максимально комфортним, та зібрали відповіді на найчастіші запитання.
            </p>
          </Reveal>
        </div>

        <div className="divide-y divide-foreground/10">
          {faqItems.map((item, index) => (
            <details key={index} className="group py-6">
              <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 [&::-webkit-details-marker]:hidden">
                <h3 className="font-display text-[clamp(1.2rem,2vw,1.7rem)] font-semibold leading-snug transition-colors duration-200 group-open:text-accent">
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