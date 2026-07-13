"use client";

import { Reveal } from "@/components/mechanics";

/**
 * ACT IV: The Proof — FAQ Section
 * A trust-building component featuring an editorial accordion layout.
 * Translates the Pasta Famiglia brand into a clear, functional dialogue with the guest.
 */
export function SectionFaq() {
  const faqData = [
    {
      question: "Чи потрібно бронювати столик заздалегідь?",
      answer: "Ми рекомендуємо бронювати столик за 1-2 дні до візиту, особливо якщо ви плануєте завітати до нас у вечір п'ятниці або вихідні. Для невеликих компаній у будні дні зазвичай завжди знайдеться вільне місце."
    },
    {
      question: "Яка кухня представлена у вашому закладі?",
      answer: "Наша основа — автентична італійська кухня. Ми готуємо домашню пасту за сімейними рецептами, неаполітанську піцу на дровах та класичні десерти. Кожна страва готується з використанням італійського борошна та локальних фермерських продуктів."
    },
    {
      question: "Чи працює ресторан під час вимкнень світла?",
      answer: "Так, Pasta Famiglia повністю енергонезалежна. Ми встановили потужний генератор, тому світло, гарячі страви та затишна атмосфера у нас є завжди, незалежно від графіків енергопостачання."
    },
    {
      question: "Чи є у вас вегетаріанські або безглютенові страви?",
      answer: "У нашому меню є широкий вибір вегетаріанських позицій. Також ми можемо приготувати будь-яку пасту з безглютенової муки на ваше прохання. Будь ласка, попередьте офіціанта про ваші дієтичні вподобання."
    },
    {
      question: "Чи можна замовити ресторан для святкування події?",
      answer: "Звичайно. Ми маємо досвід у проведенні днів народжень, камерних весіль та корпоративних вечорів. Наш шеф-кухар допоможе скласти індивідуальне банкетне меню, яке вразить ваших гостей."
    }
  ];

  return (
    <section id="faq" className="relative bg-background py-[var(--space-act)]">
      <div className="mx-auto grid max-w-[88rem] gap-12 px-4 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:px-10">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="rp-actno mb-5 text-sm uppercase tracking-[0.3em]">Питання</span>
          <Reveal>
            <h2 className="font-display font-bold leading-[0.9] text-[clamp(2.4rem,5vw,4.5rem)]">
              Відповіді на ваші запитання
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
              Ми зібрали відповіді на питання, які найчастіше цікавлять наших гостей, щоб ви могли спланувати ідеальний візит до нашої родини.
            </p>
          </Reveal>
        </div>
        
        <div className="divide-y divide-foreground/10">
          {faqData.map((item, index) => (
            <details key={index} className="group py-6">
              <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 [&::-webkit-details-marker]:hidden">
                <h3 className="font-display text-[clamp(1.2rem,2vw,1.7rem)] font-semibold leading-snug transition-colors duration-200 group-open:text-accent">
                  {item.question}
                </h3>
                <span aria-hidden className="font-display text-2xl leading-none text-accent transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="overflow-hidden transition-all duration-300">
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
                  {item.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}