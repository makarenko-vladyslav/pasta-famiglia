"use client";
import { Reveal } from "@/components/mechanics";

export function SectionProcess() {
  return (
    <section id="process" className="relative overflow-hidden bg-background pt-0 pb-[var(--space-act)] lg:pt-[var(--space-act)]">
      {/* Background Media */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/6223167/pexels-photo-6223167.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
          alt="Процес приготування"
          className="h-full w-full object-cover opacity-20 grayscale transition-transform duration-1000"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-surface/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <span className="rp-actno mb-5 block text-sm uppercase tracking-[0.3em] text-muted">
          Процес
        </span>
        <Reveal>
          <h2 className="font-display text-[clamp(2.4rem,5vw,4.5rem)] font-bold max-w-[16ch]">
            Секрети нашої кухні
          </h2>
        </Reveal>

        <div className="mt-14 divide-y divide-foreground/10 border-t border-foreground/10">
          {/* STEP 01 */}
          <Reveal>
            <div className="grid gap-4 py-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,7fr)_minmax(0,3fr)] lg:items-baseline">
              <span className="font-display text-[clamp(2.6rem,5vw,4.5rem)] font-extrabold leading-none text-accent">
                01
              </span>
              <div>
                <h3 className="font-display text-2xl font-semibold">Відбір борошна</h3>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-muted">
                  Використовуємо виключно італійське борошно твердих сортів Semola для досягнення ідеальної текстури та пружності.
                </p>
              </div>
              <span className="text-sm uppercase tracking-[0.2em] text-muted lg:text-right">
                Інгредієнти
              </span>
            </div>
          </Reveal>

          {/* STEP 02 */}
          <Reveal>
            <div className="grid gap-4 py-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,7fr)_minmax(0,3fr)] lg:items-baseline">
              <span className="font-display text-[clamp(2.6rem,5vw,4.5rem)] font-extrabold leading-none text-accent">
                02
              </span>
              <div>
                <h3 className="font-display text-2xl font-semibold">Ручне замішування</h3>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-muted">
                  Кожна порція пасти створюється руками наших майстрів, зберігаючи тепло та автентичну форму італійської традиції.
                </p>
              </div>
              <span className="text-sm uppercase tracking-[0.2em] text-muted lg:text-right">
                Техніка
              </span>
            </div>
          </Reveal>

          {/* STEP 03 */}
          <Reveal>
            <div className="grid gap-4 py-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,7fr)_minmax(0,3fr)] lg:items-baseline">
              <span className="font-display text-[clamp(2.6rem,5vw,4.5rem)] font-extrabold leading-none text-accent">
                03
              </span>
              <div>
                <h3 className="font-display text-2xl font-semibold">Витримка тіста</h3>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-muted">
                  Тісто «відпочиває» рівно 20 хвилин перед приготуванням — це наш секрет еластичності та насиченого смаку.
                </p>
              </div>
              <span className="text-sm uppercase tracking-[0.2em] text-muted lg:text-right">
                Таймінг
              </span>
            </div>
          </Reveal>

          {/* STEP 04 */}
          <Reveal>
            <div className="grid gap-4 py-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,7fr)_minmax(0,3fr)] lg:items-baseline">
              <span className="font-display text-[clamp(2.6rem,5vw,4.5rem)] font-extrabold leading-none text-accent">
                04
              </span>
              <div>
                <h3 className="font-display text-2xl font-semibold">Подача Al Dente</h3>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-muted">
                  Ми готуємо соус та пасту синхронно, щоб ви отримали страву на самому піку її смаку та аромату.
                </p>
              </div>
              <span className="text-sm uppercase tracking-[0.2em] text-muted lg:text-right">
                Сервіс
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}