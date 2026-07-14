"use client";
import { Reveal } from "@/components/mechanics";

/**
 * Section: FAQ & Trust
 * Role: ACT IV — Overcoming objections with concrete facts.
 * Layout: Sticky title + Editorial accordion list.
 */
export function SectionFaqTrust() {
  return (
    <section id="faq_trust" className="relative bg-background py-[var(--space-act)]">
      <div className="mx-auto grid max-w-[88rem] gap-12 px-4 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:px-10">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="rp-actno mb-5">Питання</span>
          <Reveal>
            <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)]">
              Відповіді на ваші запитання
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
              Організаційні деталі візиту до Pasta Famiglia: від режиму роботи та паркування до особливостей нашого меню в Києві.
            </p>
          </Reveal>
        </div>

        <div className="divide-y divide-foreground/10">
          <details className="group py-6">
            <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 [&::-webkit-details-marker]:hidden">
              <h3 className="font-display text-[clamp(1.2rem,2vw,1.7rem)] font-semibold leading-snug transition-colors duration-200 group-open:text-accent">
                Чи є у вас власна парковка?
              </h3>
              <span aria-hidden className="font-display text-2xl leading-none text-accent transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Так, для гостей ресторану передбачена зона паркування безпосередньо біля входу. Для заїзду достатньо попередити хостес за телефоном або прибути за адресою.
            </p>
          </details>

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
              Ми рекомендуємо резервувати місця за 1-2 дні до візиту, особливо у вечірній час п'ятниці та вихідні дні, щоб гарантувати наявність вільного столу.
            </p>
          </details>

          <details className="group py-6">
            <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 [&::-webkit-details-marker]:hidden">
              <h3 className="font-display text-[clamp(1.2rem,2vw,1.7rem)] font-semibold leading-snug transition-colors duration-200 group-open:text-accent">
                Чи нараховуєте ви сервісний збір?
              </h3>
              <span aria-hidden className="font-display text-2xl leading-none text-accent transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Так, у фінальний рахунок включається сервісний збір у розмірі 10% від вартості замовлення за обслуговування персоналом.
            </p>
          </details>

          <details className="group py-6">
            <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 [&::-webkit-details-marker]:hidden">
              <h3 className="font-display text-[clamp(1.2rem,2vw,1.7rem)] font-semibold leading-snug transition-colors duration-200 group-open:text-accent">
                Чи можна замовити страви з собою?
              </h3>
              <span aria-hidden className="font-display text-2xl leading-none text-accent transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Будь-яку страву з меню можна замовити на винос. Ми використовуємо упаковку, що зберігає температуру та текстуру пасти протягом 30-40 хвилин транспортування.
            </p>
          </details>

          <details className="group py-6">
            <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 [&::-webkit-details-marker]:hidden">
              <h3 className="font-display text-[clamp(1.2rem,2vw,1.7rem)] font-semibold leading-snug transition-colors duration-200 group-open:text-accent">
                Чи є у меню вегетаріанські позиції?
              </h3>
              <span aria-hidden className="font-display text-2xl leading-none text-accent transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              У нашому меню понад 8 видів пасти, закусок та салатів готуються без використання м'яса та риби, з використанням італійських сирів та свіжих овочів.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}