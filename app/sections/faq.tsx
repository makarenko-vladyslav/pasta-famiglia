"use client";

import { Reveal } from "@/components/mechanics";

export function SectionFaq() {
  return (
    <section id="faq" className="relative bg-background py-[var(--space-act)]">
      <div className="mx-auto grid max-w-[88rem] gap-12 px-4 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:px-10">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="rp-actno mb-5 text-sm uppercase tracking-[0.3em] text-muted inline-block">
            Запитання
          </span>
          <Reveal>
            <h2 className="font-display font-bold leading-[0.9] tracking-[-0.03em] text-[clamp(2.4rem,5vw,4.5rem)]">
              Маєте запитання?
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
              Ми зібрали відповіді на найпопулярніші запитання наших гостей, щоб ваш візит до Pasta Famiglia був максимально комфортним та приємним.
            </p>
          </Reveal>
        </div>

        <div className="divide-y divide-foreground/10">
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
              Ми рекомендуємо бронювати столик заздалегідь, особливо у вечірні години та вихідні дні, щоб ми могли підготувати найкраще місце для вашої родини.
            </p>
          </details>

          <details className="group py-6">
            <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 [&::-webkit-details-marker]:hidden">
              <h3 className="font-display text-[clamp(1.2rem,2vw,1.7rem)] font-semibold leading-snug transition-colors duration-200 group-open:text-accent">
                Чи дозволено приходити з домашніми улюбленцями?
              </h3>
              <span aria-hidden className="font-display text-2xl leading-none text-accent transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Так, Pasta Famiglia — це dog-friendly заклад. Ми завжди раді гостям з вихованими чотирилапими друзями та обов’язково запропонуємо їм мисочку свіжої води.
            </p>
          </details>

          <details className="group py-6">
            <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 [&::-webkit-details-marker]:hidden">
              <h3 className="font-display text-[clamp(1.2rem,2vw,1.7rem)] font-semibold leading-snug transition-colors duration-200 group-open:text-accent">
                Які страви ви порадите для дітей?
              </h3>
              <span aria-hidden className="font-display text-2xl leading-none text-accent transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Наше дитяче меню розроблене з особливою увагою: ми пропонуємо ніжну лазанью, пасту «метелики» з вершковим сиром та корисні парові котлетки. Усі страви готуються без гострих спецій.
            </p>
          </details>

          <details className="group py-6">
            <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 [&::-webkit-details-marker]:hidden">
              <h3 className="font-display text-[clamp(1.2rem,2vw,1.7rem)] font-semibold leading-snug transition-colors duration-200 group-open:text-accent">
                Чи можна замовити пасту без глютену?
              </h3>
              <span aria-hidden className="font-display text-2xl leading-none text-accent transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Так, за вашим запитом ми можемо приготувати більшість позицій нашого меню з використанням безглютенових інгредієнтів. Будь ласка, повідомте офіціанта про ваші вподобання.
            </p>
          </details>

          <details className="group py-6">
            <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 [&::-webkit-details-marker]:hidden">
              <h3 className="font-display text-[clamp(1.2rem,2vw,1.7rem)] font-semibold leading-snug transition-colors duration-200 group-open:text-accent">
                Чи організовуєте ви святкові події?
              </h3>
              <span aria-hidden className="font-display text-2xl leading-none text-accent transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Звісно! Ми радо допоможемо організувати теплий сімейний день народження або камерне свято. Наш менеджер допоможе скласти спеціальне банкетне меню для вашої компанії.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}