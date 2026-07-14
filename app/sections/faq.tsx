"use client";
import { Reveal } from "@/components/mechanics";

/**
 * FAQ Section (Act IV: The Proof — Details & Service)
 * Layout: 2-column grid with sticky intro and editorial accordion.
 * Typography: Playfair Display (font-display) headings, Lora (font-body) content.
 * Role: Addresses logistics and guest comfort without cluttering the main narrative.
 */
export function SectionFaq() {
  return (
    <section id="faq" className="relative bg-background py-[var(--space-act)]">
      <div className="mx-auto grid max-w-[88rem] gap-12 px-4 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:px-10">
        {/* Sticky Intro Block */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="mb-5 block text-sm font-medium uppercase tracking-[0.3em] text-accent">
            Деталі
          </span>
          <Reveal>
            <h2 className="font-display text-[clamp(2.4rem,5vw,4.5rem)] font-bold">
              Важливі <br />
              деталі
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
              Відповіді на запитання про наш італійський дім, щоб ваш візит у Pasta Famiglia був максимально приємним та комфортним.
            </p>
          </Reveal>
        </div>

        {/* Accordion Content */}
        <div className="divide-y divide-foreground/10 border-t border-foreground/10 lg:border-t-0">
          <details className="group py-6" open>
            <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 [&::-webkit-details-marker]:hidden">
              <h3 className="font-display text-[clamp(1.2rem,2vw,1.7rem)] font-semibold leading-snug transition-colors duration-200 group-open:text-accent">
                Чи є у вас дитяча кімната?
              </h3>
              <span aria-hidden className="font-display text-2xl leading-none text-accent transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Так, ми облаштували безпечний ігровий простір для наших маленьких гостей. Кожної суботи та неділі в закладі працює професійний аніматор.
            </p>
          </details>

          <details className="group py-6">
            <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 [&::-webkit-details-marker]:hidden">
              <h3 className="font-display text-[clamp(1.2rem,2vw,1.7rem)] font-semibold leading-snug transition-colors duration-200 group-open:text-accent">
                Де можна припаркувати авто?
              </h3>
              <span aria-hidden className="font-display text-2xl leading-none text-accent transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Поруч із рестораном розташована зона для паркування. Також доступна муніципальна стоянка в межах двох хвилин пішої прогулянки від входу.
            </p>
          </details>

          <details className="group py-6">
            <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 [&::-webkit-details-marker]:hidden">
              <h3 className="font-display text-[clamp(1.2rem,2vw,1.7rem)] font-semibold leading-snug transition-colors duration-200 group-open:text-accent">
                Чи входить сервісний збір у рахунок?
              </h3>
              <span aria-hidden className="font-display text-2xl leading-none text-accent transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Для компаній від 8 осіб до суми замовлення додається 10% за обслуговування. В інших випадках винагорода офіціанту залишається на ваш особистий розсуд.
            </p>
          </details>

          <details className="group py-6">
            <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 [&::-webkit-details-marker]:hidden">
              <h3 className="font-display text-[clamp(1.2rem,2vw,1.7rem)] font-semibold leading-snug transition-colors duration-200 group-open:text-accent">
                Чи можна завітати з собакою?
              </h3>
              <span aria-hidden className="font-display text-2xl leading-none text-accent transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Ми — pet-friendly ресторан. Радо вітаємо гостей із вихованими чотирилапими друзями малих та середніх порід. Ми завжди запропонуємо мисочку води для вашого улюбленця.
            </p>
          </details>

          <details className="group py-6">
            <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 [&::-webkit-details-marker]:hidden">
              <h3 className="font-display text-[clamp(1.2rem,2vw,1.7rem)] font-semibold leading-snug transition-colors duration-200 group-open:text-accent">
                Як краще забронювати столик?
              </h3>
              <span aria-hidden className="font-display text-2xl leading-none text-accent transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Ми рекомендуємо бронювати місця заздалегідь, особливо у вечірній час та вихідні дні. Це можна зробити онлайн через форму на сайті або скориставшись кнопкою зв&apos;язку.
            </p>
          </details>

          <details className="group py-6">
            <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 [&::-webkit-details-marker]:hidden">
              <h3 className="font-display text-[clamp(1.2rem,2vw,1.7rem)] font-semibold leading-snug transition-colors duration-200 group-open:text-accent">
                Чи діє у вас corkage fee?
              </h3>
              <span aria-hidden className="font-display text-2xl leading-none text-accent transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Ми пропонуємо велику карту італійських вин, проте ви можете принести власну пляшку за умови сплати коркового збору. Детальні умови уточнюйте у нашого сомельє.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}