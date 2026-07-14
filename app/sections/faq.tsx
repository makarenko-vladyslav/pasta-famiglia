"use client";

import { Reveal } from "@/components/mechanics";

export function SectionFaq() {
  const faqItems = [
    {
      question: "Ваша паста точно не з супермаркету?",
      answer: "Так, ми використовуємо борошно Semola і робимо свіже тісто щодня прямо в ресторані."
    },
    {
      question: "Чи є приховані збори за сервіс?",
      answer: "Ні, ціна в меню остаточна. Ми проти автоматичних 10% чайових у чеку."
    },
    {
      question: "Що робити, якщо я поспішаю на зустріч?",
      answer: "Повідомте офіціанта. Наша кухня працює за стандартом 20-хвилинної видачі."
    },
    {
      question: "Чи доїде піца гарячою?",
      answer: "Так, завдяки випіканню на дровах тісто тримає тепло довше, а термосумки кур’єрів завершують справу."
    }
  ];

  return (
    <section id="faq" className="relative bg-background py-[var(--space-act)]">
      <div className="mx-auto grid max-w-[88rem] gap-12 px-4 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:px-10">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="text-sm uppercase tracking-[0.3em] text-muted block mb-5">ПИТАННЯ</span>
          <Reveal>
            <h2 className="font-display font-bold leading-[0.9] text-[clamp(2.4rem,5vw,4.5rem)]">
              Відповіді на питання
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
              Ми дбаємо про кожну деталь вашого візиту — від походження борошна до швидкості подачі страв та комфорту в залі.
            </p>
          </Reveal>
        </div>
        
        <div className="divide-y divide-foreground/10 border-t border-foreground/10 lg:border-t-0">
          {faqItems.map((item, index) => (
            <details key={index} className="group py-6">
              <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 [&::-webkit-details-marker]:hidden">
                <h3 className="font-display text-[clamp(1.2rem,2vw,1.7rem)] font-semibold leading-snug transition-colors duration-200 group-open:text-accent">
                  {item.question}
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
                  {item.answer}
                </p>
              </Reveal>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}