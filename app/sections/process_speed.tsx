"use client";

import { Reveal } from "@/components/mechanics";

export function SectionProcessSpeed() {
  return (
    <section id="process_speed" className="relative overflow-hidden bg-background pt-0 pb-[var(--space-act)] lg:pt-[var(--space-act)]">
      {/* Background Media Layer */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden">
        <img
          loading="lazy"
          src="https://images.pexels.com/photos/4518801/pexels-photo-4518801.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
          alt="Kitchen speed"
          className="h-full w-full object-cover opacity-10 grayscale brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface" />
      </div>

      {/* Watermark - Hidden on mobile as per spec */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 select-none font-display text-[25vw] leading-none text-foreground/5 lg:block rp-watermark">
        20MIN
      </div>

      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <span className="rp-actno mb-5 block">Процес</span>
        
        <Reveal>
          <h2 className="font-display font-bold leading-[0.9] text-[clamp(2.4rem,5vw,4.5rem)] max-w-[16ch]">
            Швидкість, яка не шкодить якості: 20 хвилин до ідеалу
          </h2>
        </Reveal>

        <div className="mt-14 divide-y divide-foreground/10">
          {/* STEP 01 */}
          <Reveal>
            <div className="grid gap-4 py-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,7fr)_minmax(0,3fr)] lg:items-baseline">
              <span className="font-display text-[clamp(2.6rem,5vw,4.5rem)] font-extrabold leading-none text-accent">01</span>
              <div>
                <h3 className="font-display text-2xl font-semibold">Прийняття</h3>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-muted">
                  Ваше замовлення миттєво потрапляє на цифрову систему управління кухнею. Шеф-кухар бачить деталі ще до того, як ви закриєте меню.
                </p>
              </div>
              <span className="text-sm uppercase tracking-[0.2em] text-muted lg:text-right">МИТТЄВО</span>
            </div>
          </Reveal>

          {/* STEP 02 */}
          <Reveal>
            <div className="grid gap-4 py-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,7fr)_minmax(0,3fr)] lg:items-baseline">
              <span className="font-display text-[clamp(2.6rem,5vw,4.5rem)] font-extrabold leading-none text-accent">02</span>
              <div>
                <h3 className="font-display text-2xl font-semibold">Al Dente</h3>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-muted">
                  Ми починаємо варити пасту власного виробництва та готувати соус з-під ножа одночасно. Тільки свіжі інгредієнти та живий вогонь.
                </p>
              </div>
              <span className="text-sm uppercase tracking-[0.2em] text-muted lg:text-right">12 ХВИЛИН</span>
            </div>
          </Reveal>

          {/* STEP 03 */}
          <Reveal>
            <div className="grid gap-4 py-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,7fr)_minmax(0,3fr)] lg:items-baseline">
              <span className="font-display text-[clamp(2.6rem,5vw,4.5rem)] font-extrabold leading-none text-accent">03</span>
              <div>
                <h3 className="font-display text-2xl font-semibold">Сервірування</h3>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-muted">
                  Фінальна перевірка текстури, додавання свіжого базиліку, пармезану та краплі олії холодного віджиму для завершення смаку.
                </p>
              </div>
              <span className="text-sm uppercase tracking-[0.2em] text-muted lg:text-right">5 ХВИЛИН</span>
            </div>
          </Reveal>

          {/* STEP 04 */}
          <Reveal>
            <div className="grid gap-4 py-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,7fr)_minmax(0,3fr)] lg:items-baseline">
              <span className="font-display text-[clamp(2.6rem,5vw,4.5rem)] font-extrabold leading-none text-accent">04</span>
              <div>
                <h3 className="font-display text-2xl font-semibold">Подача</h3>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-muted">
                  Офіціант доставляє страву до вашого столу, поки вона ще парує. У Pasta Famiglia ми цінуємо ваш час так само, як і автентичний смак.
                </p>
              </div>
              <span className="text-sm uppercase tracking-[0.2em] text-muted lg:text-right">3 ХВИЛИНИ</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.4}>
          <div className="mt-12 flex justify-center lg:justify-start">
            <a 
              href="#booking_final" 
              className="font-mono text-sm uppercase tracking-widest text-accent underline underline-offset-8 transition-opacity hover:opacity-70"
            >
              Переглянути меню
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}