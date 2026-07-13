"use client";
import { Reveal } from "@/components/mechanics";

export function SectionFaq() {
  const faqData = [
    {
      question: "Чи готуєте ви пасту власноруч?",
      answer: "Так, щоранку наші кухарі замішують свіже тісто, використовуючи виключно італійське борошно твердих сортів (Semola) та фермерські яйця. Це дозволяє нам досягти ідеальної текстури 'al dente'."
    },
    {
      question: "Чи є у вашому меню вегетаріанські страви?",
      answer: "Звичайно. Ми пропонуємо широкий вибір автентичних овочевих закусок, салатів та кілька видів пасти, включаючи класичну 'Pomodoro' та нашу фірмову пасту з лісовими грибами та трюфельною олією."
    },
    {
      question: "Як забронювати столик для великої компанії?",
      answer: "Для компаній від 6 осіб ми рекомендуємо бронювати стіл за кілька днів до візиту. Це допоможе нам підготувати комфортну зону та забезпечити найкращий сервіс для вашого свята."
    },
    {
      question: "Чи пропонуєте ви безглютенові варіанти?",
      answer: "Ми розуміємо важливість дієтичних потреб, тому будь-яку пасту з нашого меню ми можемо приготувати на основі якісного безглютенового борошна за вашим запитом."
    },
    {
      question: "Чи можна замовити страви з собою?",
      answer: "Так, ви можете оформити замовлення безпосередньо в ресторані або за телефоном. Ми ретельно пакуємо кожну страву, щоб вона зберегла свій смак та температуру до вашого столу."
    }
  ];

  return (
    <section id="faq" className="relative bg-surface py-[var(--space-act)]">
      <div className="mx-auto grid max-w-[88rem] gap-12 px-4 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:px-10">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="rp-actno mb-5 block text-sm uppercase tracking-[0.3em] text-muted">Запитання</span>
          <Reveal>
            <h2 className="font-display font-bold leading-[0.9] text-[clamp(2.4rem,5vw,4.5rem)]">
              Відвертість <br />у кожній <br />деталі
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
              Ми прагнемо, щоб кожен візит до Pasta Famiglia був наповнений комфортом. Тут ми зібрали відповіді на запитання, які найчастіше цікавлять наших гостей.
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
                <span 
                  aria-hidden 
                  className="font-mono text-2xl leading-none text-accent transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}