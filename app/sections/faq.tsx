"use client";
import { Reveal } from "@/components/mechanics";

/**
 * SectionFaq - ACT IV: The Proof - Utility
 * Features a sticky intro and native details-based accordions for restaurant FAQs.
 * Language: Ukrainian (uk)
 */
export function SectionFaq() {
  const faqItems = [
    {
      question: "Ви справді готуєте пасту власноруч?",
      answer: "Так, кожного ранку наші кухарі готують свіжу пасту, використовуючи лише борошно з твердих сортів пшениці та добірні фермерські яйця. Це дозволяє досягти тієї самої текстури al dente, якою славиться італійська кухня."
    },
    {
      question: "Чи потрібно бронювати столик заздалегідь?",
      answer: "Ми рекомендуємо бронювати столик, особливо на вечір п'ятниці та у вихідні дні. Ви можете зателефонувати нам за номером +380 (44) 333-22-11 або написати у соціальних мережах, щоб ми підготували для вас найкраще місце."
    },
    {
      question: "Чи є у вас вегетаріанські або пісні страви?",
      answer: "Звісно. У нашому меню представлений широкий вибір паст без м'яса, овочеві антипасті та традиційні італійські салати. Ми також можемо адаптувати деякі класичні страви за вашим бажанням."
    },
    {
      question: "Як працює ваша служба доставки?",
      answer: "Ми доставляємо замовлення по всьому Києву. Всі страви упаковуються в спеціальну термічну тару, щоб паста залишалася гарячою та зберігала свій смак під час транспортування. Замовити можна на сайті або телефоном."
    },
    {
      question: "Чи можна провести у вас сімейне свято?",
      answer: "Pasta Famiglia — ідеальне місце для затишних святкувань. Ми допомагаємо в організації невеликих банкетів, днів народжень та сімейних обідів, пропонуючи спеціальне меню для компаній від 6 осіб."
    }
  ];

  return (
    <section id="faq" className="relative bg-background py-[var(--space-act)]">
      <div className="mx-auto grid max-w-[88rem] gap-12 px-4 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:px-10">
        {/* Sticky Intro Column */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="mb-5 inline-block text-sm font-medium uppercase tracking-[0.3em] text-foreground/60">
            Запитання
          </span>
          <Reveal>
            <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)]">
              Питання та відповіді
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
              Ми цінуємо вашу цікавість та комфорт. Тут ми зібрали відповіді на найчастіші запитання про нашу кухню, сервіс та умови замовлень у Pasta Famiglia.
            </p>
          </Reveal>
        </div>

        {/* Accordion List Column */}
        <div className="divide-y divide-foreground/10 border-t border-foreground/10 lg:border-t-0">
          {faqItems.map((item, index) => (
            <Reveal key={index} delay={index * 0.05}>
              <details className="group py-6 lg:py-8">
                <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 [&::-webkit-details-marker]:hidden">
                  <h3 className="font-display text-[clamp(1.2rem,2vw,1.7rem)] font-semibold leading-snug transition-colors duration-200 group-hover:text-accent group-open:text-accent">
                    {item.question}
                  </h3>
                  <span 
                    aria-hidden 
                    className="font-display text-2xl leading-none text-accent transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <div className="mt-4 max-w-2xl overflow-hidden">
                  <p className="text-base leading-relaxed text-muted lg:text-lg">
                    {item.answer}
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