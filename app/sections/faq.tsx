"use client";
import { Reveal } from "@/components/mechanics";

/**
 * SectionFaq - ACT IV: Transparency & Details
 * Layout: 5:7 Grid with sticky editorial intro and native details-based accordion.
 * Constraints: No contact facts (phone, address, hours) allowed in this section.
 */
export function SectionFaq() {
  const faqItems = [
    {
      question: "Чи є у вас паркування для гостей?",
      answer: "Поруч із закладом розташована міська зона паркування. Оскільки ми знаходимося в центрі міста, рекомендуємо приїжджати заздалегідь у вечірні години або скористатися послугами таксі для вашого максимального комфорту."
    },
    {
      question: "Як забронювати стіл для великої компанії?",
      answer: "Ми з радістю приймаємо групи до 12 осіб. Для організації масштабних сімейних обідів або святкувань, ми пропонуємо обговорити меню та деталі посадки з нашим адміністратором для забезпечення найкращого сервісу."
    },
    {
      question: "Чи передбачений обов'язковий сервісний збір?",
      answer: "Ми підтримуємо політику повної фінансової прозорості: у нашому ресторані немає обов'язкових відсотків за обслуговування чи прихованих платежів. Винагорода команді за гарний сервіс залишається виключно на ваш розсуд."
    },
    {
      question: "Чи пристосований ресторан для дітей?",
      answer: "Так, Pasta Famiglia — це сімейний простір. У нас є зручні крісла для малечі, а наш шеф-кухар розробив спеціальне дитяче меню з корисними стравами, які подобаються навіть найвибагливішим маленьким гурманам."
    },
    {
      question: "Чи можна замовити пасту без глютену?",
      answer: "Ми дбаємо про здоров'я кожного гостя. Більшість наших класичних соусів можна поєднати з безглютеновою пастою. Будь ласка, повідомте офіціанта про ваші дієтичні обмеження перед замовленням."
    }
  ];

  return (
    <section id="faq" className="relative bg-background py-[var(--space-act)]">
      <div className="mx-auto grid max-w-[88rem] gap-12 px-4 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:px-10">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="rp-actno mb-5 block text-sm font-display uppercase tracking-[0.3em] text-muted">
            Запитання
          </span>
          <Reveal>
            <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)]">
              Важливі деталі
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
              Ми прагнемо до повної прозорості в усьому — від інгредієнтів у вашій тарілці до умов обслуговування та комфорту кожного гостя.
            </p>
          </Reveal>
        </div>
        
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