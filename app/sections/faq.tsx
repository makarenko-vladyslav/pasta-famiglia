"use client";
import { Reveal } from "@/components/mechanics";

/**
 * SectionFaq - Act IV: The Proof - Logistics
 * Styled editorially with a sticky intro and native-details accordion.
 */
export function SectionFaq() {
  const faqItems = [
    {
      question: "Чи потрібно бронювати столик заздалегідь?",
      answer: "Ми наполегливо рекомендуємо бронювати столик завчасно, особливо у вечірній час та у вихідні дні. Це дозволить нам підготувати найкраще місце для вашого візиту та забезпечити бездоганний сервіс."
    },
    {
      question: "Чи готуєте ви пасту власноруч?",
      answer: "Так, це серце нашої кухні. Щоранку ми замішуємо тісто за автентичними італійськими рецептами, використовуючи лише борошно твердих сортів пшениці та фермерські яйця."
    },
    {
      question: "Чи є у вашому меню вегетаріанські страви?",
      answer: "Безумовно. Наше меню включає різноманітні позиції для вегетаріанців: від класичної пасти з домашнім песто та овочами гриль до вишуканих салатів та антипасті."
    },
    {
      question: "Чи можна замовити страву з собою?",
      answer: "Ви можете оформити замовлення на самовивіз безпосередньо в закладі. Ми дбайливо запакуємо ваші улюблені страви так, щоб вони зберегли свій смак та температуру до вашого столу."
    },
    {
      question: "Чи підходить ресторан для приватних подій?",
      answer: "Наш інтер'єр ідеально підходить для камерних святкувань, сімейних обідів або ділових зустрічей. Ми з радістю допоможемо вам скласти спеціальне меню для вашого свята."
    }
  ];

  return (
    <section id="faq" className="relative bg-surface py-[var(--space-act)]">
      <div className="mx-auto grid max-w-[88rem] gap-12 px-4 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:px-10">
        {/* Sticky Intro Sidebar */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="text-sm uppercase tracking-[0.3em] text-muted mb-5 block">
            Запитання
          </span>
          <Reveal>
            <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)]">
              Смачні деталі візиту
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
              Ми подбали про те, щоб ваш досвід у Pasta Famiglia був ідеальним. Тут ми зібрали відповіді на найпоширеніші запитання наших гостей.
            </p>
          </Reveal>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-foreground/10">
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