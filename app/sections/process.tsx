"use client";
import { Reveal } from "@/components/mechanics";

/**
 * ACT III: The Soul — Step-by-step Craft
 * Layout: Editorial numbered rows with poster-scale numerals.
 * Visuals: Minimalist rows with hairline dividers and a decorative background texture on the first item.
 */
export function SectionProcess() {
  return (
    <section id="process" className="relative overflow-hidden bg-surface py-[var(--space-act)]">
      <div className="mx-auto max-w-[88rem] px-4 lg:px-10">
        <span className="rp-actno mb-5">Процес</span>
        <Reveal>
          <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)] max-w-[16ch]">
            Як ми готуємо пасту вручну
          </h2>
        </Reveal>

        <div className="mt-14 divide-y divide-foreground/10">
          {/* STEP 01 */}
          <Reveal>
            <div className="relative overflow-hidden grid gap-4 py-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,7fr)_minmax(0,3fr)] lg:items-baseline">
              {/* Decorative background texture for Step 1 */}
              <img 
                src="https://images.pexels.com/photos/10046961/pexels-photo-10046961.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
                alt=""
                className="absolute right-0 top-0 -z-10 h-full w-full lg:w-1/2 object-cover opacity-[0.05] grayscale pointer-events-none"
                loading="lazy"
              />
              <span className="font-display text-[clamp(2.6rem,5vw,4.5rem)] font-extrabold leading-none text-accent">01</span>
              <div>
                <h3 className="font-display text-2xl font-semibold">Відбір зерна</h3>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-muted font-body">
                  Ми використовуємо борошно сорту Semola з твердих сортів пшениці та свіжі фермерські жовтки для пружної текстури тіста.
                </p>
              </div>
              <span className="text-sm uppercase tracking-[0.2em] text-muted lg:text-right">Склад</span>
            </div>
          </Reveal>

          {/* STEP 02 */}
          <Reveal>
            <div className="grid gap-4 py-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,7fr)_minmax(0,3fr)] lg:items-baseline">
              <span className="font-display text-[clamp(2.6rem,5vw,4.5rem)] font-extrabold leading-none text-accent">02</span>
              <div>
                <h3 className="font-display text-2xl font-semibold">Замішування</h3>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-muted font-body">
                  Тісто витримується 30 хвилин за контрольованої температури для досягнення потрібної еластичності та насиченого кольору.
                </p>
              </div>
              <span className="text-sm uppercase tracking-[0.2em] text-muted lg:text-right">30 Хв</span>
            </div>
          </Reveal>

          {/* STEP 03 */}
          <Reveal>
            <div className="grid gap-4 py-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,7fr)_minmax(0,3fr)] lg:items-baseline">
              <span className="font-display text-[clamp(2.6rem,5vw,4.5rem)] font-extrabold leading-none text-accent">03</span>
              <div>
                <h3 className="font-display text-2xl font-semibold">Формування</h3>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-muted font-body">
                  Нарізаємо пасту вручну або через бронзові форми, що створює пористу поверхню для кращого поєднання з нашими соусами.
                </p>
              </div>
              <span className="text-sm uppercase tracking-[0.2em] text-muted lg:text-right">Текстура</span>
            </div>
          </Reveal>

          {/* STEP 04 */}
          <Reveal>
            <div className="grid gap-4 py-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,7fr)_minmax(0,3fr)] lg:items-baseline">
              <span className="font-display text-[clamp(2.6rem,5vw,4.5rem)] font-extrabold leading-none text-accent">04</span>
              <div>
                <h3 className="font-display text-2xl font-semibold">Приготування</h3>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-muted font-body">
                  Варимо пасту рівно 4 хвилини до стану Al Dente у сильно киплячій воді, щоб зберегти структуру та корисні властивості зерна.
                </p>
              </div>
              <span className="text-sm uppercase tracking-[0.2em] text-muted lg:text-right">Подача</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}