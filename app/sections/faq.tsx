"use client";
import { Reveal } from "@/components/mechanics";

export function SectionFaq() {
  const faqs = [
    {
      question: "Чи обов'язково бронювати столик заздалегідь?",
      answer: "Ми завжди раді гостям, проте у вечірній час та вихідні дні ми рекомендуємо забронювати столик завчасно. Це гарантує вам найкраще місце в нашому залі для комфортного відпочинку."
    },
    {
      question: "Чи готуєте ви страви для дітей?",
      answer: "Так, Pasta Famiglia — це сімейний простір. Ми розробили спеціальне дитяче меню з легкими та корисними італійськими стравами, які подобаються навіть найменшим гостям."
    },
    {
      question: "Чи виготовляєте ви пасту самостійно?",
      answer: "Кожного ранку наші майстри готують свіжу пасту вручну, використовуючи лише італійське борошно твердих сортів та фермерські яйця. Ми віримо, що лише так можна передати справжній смак Італії."
    },
    {
      question: "Чи є у вас вегетаріанські позиції?",
      answer: "Безумовно. Наша кухня пропонує широкий вибір страв без м'яса — від класичної пасти з томатами та базиліком до вишуканих салатів та автентичних італійських сирів."
    },
    {
      question: "Як організувати у вас сімейне свято?",
      answer: "Ми з радістю допоможемо організувати ваш день народження чи сімейну вечерю. Для обговорення меню та бронювання зручного часу, будь ласка, зв'яжіться з нашими адміністраторами."
    }
  ];

  return (
    <section id="faq" className="relative bg-background py-[var(--space-act)]">
      <div className="mx-auto grid max-w-[88rem] gap-12 px-4 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:px-10">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="rp-actno mb-5 text-sm uppercase tracking-[0.3em]">Питання</span>
          <Reveal>
            <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)]">
              Важливі деталі нашої родини
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
              Відповіді на запитання, які допоможуть вам краще пізнати Pasta Famiglia та спланувати ідеальний візит до нашого ресторану.
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
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}