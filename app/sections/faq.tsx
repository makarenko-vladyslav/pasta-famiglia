"use client";
import { Reveal } from "@/components/mechanics";

/**
 * ACT IV: FAQ Section
 * Italian restaurant context: Pasta Famiglia (Kyiv).
 * Focus on friction removal: reservations, kids, dietary, parking.
 */
export function SectionFaq() {
  const faqItems = [
    {
      question: "Чи потрібно бронювати столик заздалегідь?",
      answer: "Ми рекомендуємо бронювати столик, особливо у вечірній час та вихідні дні, щоб ми могли підготувати найкраще місце для вашої родини. Ви можете зробити це за телефоном або через соціальні мережі."
    },
    {
      question: "Чи є у вас спеціальні страви для дітей?",
      answer: "Так, ми маємо дитяче меню з легкими пастами, домашніми сирниками та ніжними десертами. Кожна страва готується з урахуванням потреб маленьких гостей — менше солі та виключно свіжі інгредієнти."
    },
    {
      question: "Чи пропонуєте ви безглютенову пасту?",
      answer: "Звісно. Ми цінуємо здоров'я кожного гостя, тому за вашим бажанням можемо замінити класичну пасту на безглютеновий варіант. Будь ласка, повідомте про ваші вподобання офіціанту."
    },
    {
      question: "Де можна залишити автомобіль поруч із закладом?",
      answer: "Навколо ресторану розташовані міські паркувальні зони. У вечірній час та на вихідних зазвичай достатньо вільних місць у безпосередній близькості до входу."
    },
    {
      question: "Чи можна замовити вашу пасту додому?",
      answer: "Так, ви можете оформити доставку через популярні сервіси або замовити страви з собою (take-away) безпосередньо в ресторані зі знижкою."
    },
    {
      question: "Чи проводите ви майстер-класи для гостей?",
      answer: "Ми регулярно організовуємо сімейні майстер-класи з виготовлення справжньої італійської пасти. Слідкуйте за нашими анонсами, щоб провести час весело та смачно всією родиною."
    }
  ];

  return (
    <section id="faq" className="relative bg-background py-[var(--space-act)]">
      <div className="mx-auto grid max-w-[88rem] gap-12 px-4 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:px-10">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="rp-actno mb-5 block font-display text-sm uppercase tracking-[0.3em]">
            Запитання
          </span>
          <Reveal>
            <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)]">
              Деталі візиту
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
              Ми подбали про кожну дрібницю вашого вечора. Якщо у вас залишилися запитання, ми завжди раді відповісти.
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