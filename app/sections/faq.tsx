"use client";
import { Reveal } from "@/components/mechanics";

export function SectionFaq() {
  return (
    <section id="faq" className="relative bg-surface py-[var(--space-act)] overflow-hidden">
      {/* Decorative Watermark for Large Screens */}
      <div className="pointer-events-none absolute inset-0 z-0 hidden lg:block" aria-hidden="true">
        <span className="rp-watermark absolute -left-20 top-20 opacity-5 select-none uppercase">
          ПИТАННЯ
        </span>
      </div>

      <div className="relative z-10 mx-auto grid max-w-[88rem] gap-12 px-4 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:px-10">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="rp-actno mb-5 inline-block text-sm uppercase tracking-[0.3em] text-foreground/60">
            Питання
          </span>
          <Reveal>
            <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)]">
              Відповіді на ваші запитання
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
              Ми цінуємо ваш час та комфорт. Тут ми зібрали відповіді на найчастіші запитання наших гостей про бронювання, кухню та атмосферу Pasta Famiglia.
            </p>
          </Reveal>
        </div>

        <div className="divide-y divide-foreground/10 border-t border-foreground/10 lg:border-t-0">
          <details className="group py-6" open>
            <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 [&::-webkit-details-marker]:hidden">
              <h3 className="font-display text-[clamp(1.2rem,2vw,1.7rem)] font-semibold leading-snug transition-colors duration-200 group-open:text-accent">
                Чи потрібно бронювати столик заздалегідь?
              </h3>
              <span 
                aria-hidden 
                className="font-display text-2xl leading-none text-accent transition-transform duration-300 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Ми рекомендуємо бронювати столики заздалегідь, особливо у вечірній час та на вихідні. Це гарантує вам найкраще місце та дозволяє нашій команді підготуватися до вашого візиту.
            </p>
          </details>

          <details className="group py-6">
            <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 [&::-webkit-details-marker]:hidden">
              <h3 className="font-display text-[clamp(1.2rem,2vw,1.7rem)] font-semibold leading-snug transition-colors duration-200 group-open:text-accent">
                Чи є у вас вегетаріанські страви?
              </h3>
              <span 
                aria-hidden 
                className="font-display text-2xl leading-none text-accent transition-transform duration-300 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Так, італійська кухня багата на овочеві страви. У нашому меню ви знайдете широкий вибір пасти, автентичну піцу та салати, приготовані виключно з рослинних інгредієнтів.
            </p>
          </details>

          <details className="group py-6">
            <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 [&::-webkit-details-marker]:hidden">
              <h3 className="font-display text-[clamp(1.2rem,2vw,1.7rem)] font-semibold leading-snug transition-colors duration-200 group-open:text-accent">
                Чи можна замовити їжу з собою?
              </h3>
              <span 
                aria-hidden 
                className="font-display text-2xl leading-none text-accent transition-transform duration-300 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Звичайно. Ви можете оформити замовлення в ресторані або за телефоном, і ми запакуємо ваші улюблені страви у спеціальне пакування, що зберігає температуру та аромат.
            </p>
          </details>

          <details className="group py-6">
            <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 [&::-webkit-details-marker]:hidden">
              <h3 className="font-display text-[clamp(1.2rem,2vw,1.7rem)] font-semibold leading-snug transition-colors duration-200 group-open:text-accent">
                Чи підходить ресторан для сімей з дітьми?
              </h3>
              <span 
                aria-hidden 
                className="font-display text-2xl leading-none text-accent transition-transform duration-300 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Pasta Famiglia — це сімейний ресторан. У нас є зручні дитячі стільчики, спеціальне збалансоване меню для малечі та затишна атмосфера для великих родин.
            </p>
          </details>

          <details className="group py-6">
            <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 [&::-webkit-details-marker]:hidden">
              <h3 className="font-display text-[clamp(1.2rem,2vw,1.7rem)] font-semibold leading-snug transition-colors duration-200 group-open:text-accent">
                Чи проводите ви приватні заходи?
              </h3>
              <span 
                aria-hidden 
                className="font-display text-2xl leading-none text-accent transition-transform duration-300 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Так, ми з радістю допоможемо організувати день народження, невелике сімейне свято або корпоратив. Ми пропонуємо спеціальне банкетне меню та індивідуальний підхід до кожного гостя.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}