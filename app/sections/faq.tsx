"use client";
import { Reveal } from "@/components/mechanics";

export function SectionFaq() {
  const faqs = [
    {
      question: "Чи потрібно бронювати столик заздалегідь?",
      answer: "Ми рекомендуємо бронювати столик за 1-2 дні, особливо для вечірніх візитів та вихідних днів, щоб гарантувати найкраще місце для вашої родини."
    },
    {
      question: "Чи є у вас зручна парковка для гостей?",
      answer: "Так, безпосередньо поруч із рестораном Pasta Famiglia є власна зона паркування під охороною, доступна для всіх наших відвідувачів."
    },
    {
      question: "Чи пропонуєте ви вегетаріанське меню?",
      answer: "Безумовно. Наш шеф-кухар розробив спеціальні позиції: від пасти з лісовими грибами до класичної Маргарити за автентичним рецептом."
    },
    {
      question: "Як працює ваша служба доставки?",
      answer: "Ви можете замовити улюблені страви через наших партнерів або скористатися послугою take-away зі знижкою 10% на все меню."
    },
    {
      question: "Чи можна провести у вас приватне свято?",
      answer: "Ми маємо окрему затишну залу для святкувань до 20 осіб. Наш менеджер допоможе скласти індивідуальне меню для вашої події."
    }
  ];

  return (
    <section id="faq" className="relative bg-background py-[var(--space-act)]">
      <div className="mx-auto grid max-w-[88rem] gap-12 px-4 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:px-10">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="rp-actno mb-5 inline-block text-sm uppercase tracking-[0.3em] text-muted">
            Запитання
          </span>
          <Reveal>
            <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)]">
              Ми відповімо <br /> на все
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
              Все, що потрібно знати перед візитом до Pasta Famiglia — від особливостей меню до умов комфортного відпочинку.
            </p>
          </Reveal>
        </div>

        <div className="divide-y divide-foreground/10">
          {faqs.map((faq, index) => (
            <details key={index} className="group py-6">
              <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 [&::-webkit-details-marker]:hidden">
                <h3 className="font-display text-[clamp(1.2rem,2vw,1.7rem)] font-semibold leading-snug transition-colors duration-200 group-open:text-accent">
                  {faq.question}
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
                  {faq.answer}
                </p>
              </Reveal>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}