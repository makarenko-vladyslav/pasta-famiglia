"use client";
import { Reveal } from "@/components/mechanics";

/**
 * SectionFaq: ACT IV - The Proof (Part B)
 * Layout: Sticky intro + Native details accordion
 * Business: Pasta Famiglia (Italian Restaurant)
 */
export function SectionFaq() {
  return (
    <section id="faq" className="relative bg-background py-[var(--space-act)]">
      <div className="mx-auto grid max-w-[88rem] gap-12 px-4 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:px-10">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="rp-actno mb-5 block text-sm uppercase tracking-[0.3em] text-muted">
            Часті запитання
          </span>
          <Reveal>
            <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)]">
              Деталі вашого візиту
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
              Ми прагнемо, щоб кожна хвилина у Pasta Famiglia була для вас насолодою. Тут ми зібрали відповіді на питання, які допоможуть вам спланувати ідеальний вечір.
            </p>
          </Reveal>
        </div>

        <div className="divide-y divide-foreground/10">
          {/* Item 1: Booking */}
          <details className="group py-6">
            <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 [&::-webkit-details-marker]:hidden">
              <h3 className="font-display text-[clamp(1.2rem,2vw,1.7rem)] font-semibold leading-snug transition-colors duration-200 group-open:text-accent">
                Чи потрібно бронювати столик заздалегідь?
              </h3>
              <span aria-hidden className="font-display text-2xl leading-none text-accent transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Ми наполегливо рекомендуємо бронювати столик, особливо у вечірній час та на вихідних. Ви можете зробити це за телефоном або через форму на сайті. Для великих компаній від 8 осіб бронювання є обов&apos;язковим.
            </p>
          </details>

          {/* Item 2: Special Diets */}
          <details className="group py-6">
            <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 [&::-webkit-details-marker]:hidden">
              <h3 className="font-display text-[clamp(1.2rem,2vw,1.7rem)] font-semibold leading-snug transition-colors duration-200 group-open:text-accent">
                Чи є у вас безглютенові або веганські страви?
              </h3>
              <span aria-hidden className="font-display text-2xl leading-none text-accent transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Так, наше меню включає позиції для вегетаріанців, а також ми можемо приготувати більшість видів пасти у безглютеновому варіанті. Будь ласка, повідомте офіціанта про ваші вподобання чи алергії перед замовленням.
            </p>
          </details>

          {/* Item 3: Pets */}
          <details className="group py-6">
            <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 [&::-webkit-details-marker]:hidden">
              <h3 className="font-display text-[clamp(1.2rem,2vw,1.7rem)] font-semibold leading-snug transition-colors duration-200 group-open:text-accent">
                Чи можна відвідати ресторан з домашнім улюбленцем?
              </h3>
              <span aria-hidden className="font-display text-2xl leading-none text-accent transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Pasta Famiglia — це pet-friendly простір. Ми завжди раді гостям з вихованими маленькими та середніми улюбленцями. Обов&apos;язково запропонуємо вашому другу миску зі свіжою водою.
            </p>
          </details>

          {/* Item 4: Events */}
          <details className="group py-6">
            <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 [&::-webkit-details-marker]:hidden">
              <h3 className="font-display text-[clamp(1.2rem,2vw,1.7rem)] font-semibold leading-snug transition-colors duration-200 group-open:text-accent">
                Чи проводите ви закриті заходи?
              </h3>
              <span aria-hidden className="font-display text-2xl leading-none text-accent transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Ми з радістю допоможемо організувати день народження, сімейне свято чи корпоратив. У нас є можливість зонування простору для вашої приватності та спеціальне бенкетне меню від шеф-кухаря.
            </p>
          </details>

          {/* Item 5: Delivery */}
          <details className="group py-6">
            <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 [&::-webkit-details-marker]:hidden">
              <h3 className="font-display text-[clamp(1.2rem,2vw,1.7rem)] font-semibold leading-snug transition-colors duration-200 group-open:text-accent">
                Чи працює у вас доставка?
              </h3>
              <span aria-hidden className="font-display text-2xl leading-none text-accent transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Так, ми здійснюємо доставку по Києву через власну кур&apos;єрську службу та партнерів. Ви також можете замовити страви на винос зі знижкою 10%. Пакуємо все дбайливо, щоб зберегти автентичний смак Італії.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}