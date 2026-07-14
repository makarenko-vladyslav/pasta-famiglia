"use client";
import { Reveal } from "@/components/mechanics";

/**
 * ACT III: The Soul. 
 * Inverted dark act focusing on the artisanal process of pasta making.
 * Uses editorial numbered rows with poster-scale numerals.
 */
export function SectionProcess() {
  return (
    <section id="process" className="relative overflow-hidden bg-foreground text-background pt-0 pb-[var(--space-act)] lg:pt-[var(--space-act)]">
      {/* Background Media Decoration */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img 
          src="https://images.pexels.com/photos/5903444/pexels-photo-5903444.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1200" 
          alt="Процес приготування" 
          className="h-full w-full object-cover grayscale"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-foreground/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <span className="rp-actno mb-5 text-background/60">Процес</span>
        
        <Reveal>
          <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)] max-w-[16ch]">
            Магія створення нашої пасти
          </h2>
        </Reveal>

        <div className="mt-14 divide-y divide-foreground/10 border-t border-foreground/10">
          {/* STEP 01 */}
          <Reveal>
            <div className="grid gap-4 py-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,7fr)_minmax(0,3fr)] lg:items-baseline">
              <span className="font-display text-[clamp(2.6rem,5vw,4.5rem)] font-extrabold leading-none text-accent">01</span>
              <div>
                <h3 className="font-display text-2xl font-semibold">Замішування</h3>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-background/70">
                  Використовуємо лише італійське борошно твердих сортів (Semola) та свіжі фермерські жовтки для досягнення ідеальної текстури та кольору.
                </p>
              </div>
              <span className="text-sm uppercase tracking-[0.2em] text-background/40 lg:text-right">борошно Doppio Zero</span>
            </div>
          </Reveal>

          {/* STEP 02 */}
          <Reveal delay={0.1}>
            <div className="grid gap-4 py-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,7fr)_minmax(0,3fr)] lg:items-baseline">
              <span className="font-display text-[clamp(2.6rem,5vw,4.5rem)] font-extrabold leading-none text-accent">02</span>
              <div>
                <h3 className="font-display text-2xl font-semibold">Відпочинок</h3>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-background/70">
                  Тісто «відпочиває» при контрольованій температурі, щоб клейковина розслабилася. Це гарантує ту саму пружність Al Dente.
                </p>
              </div>
              <span className="text-sm uppercase tracking-[0.2em] text-background/40 lg:text-right">30 хвилин спокою</span>
            </div>
          </Reveal>

          {/* STEP 03 */}
          <Reveal delay={0.2}>
            <div className="grid gap-4 py-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,7fr)_minmax(0,3fr)] lg:items-baseline">
              <span className="font-display text-[clamp(2.6rem,5vw,4.5rem)] font-extrabold leading-none text-accent">03</span>
              <div>
                <h3 className="font-display text-2xl font-semibold">Формування</h3>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-background/70">
                  Кожна порція формується вручну нашими майстрами. Ми нарізаємо тальятеле та ліпимо равіолі безпосередньо перед вашим замовленням.
                </p>
              </div>
              <span className="text-sm uppercase tracking-[0.2em] text-background/40 lg:text-right">Тільки вручну</span>
            </div>
          </Reveal>

          {/* STEP 04 */}
          <Reveal delay={0.3}>
            <div className="grid gap-4 py-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,7fr)_minmax(0,3fr)] lg:items-baseline">
              <span className="font-display text-[clamp(2.6rem,5vw,4.5rem)] font-extrabold leading-none text-accent">04</span>
              <div>
                <h3 className="font-display text-2xl font-semibold">Подача</h3>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-background/70">
                  Паста миттєво потрапляє в окріп, змішується з авторським соусом і подається гарячою, зберігаючи весь аромат італійських традицій.
                </p>
              </div>
              <span className="text-sm uppercase tracking-[0.2em] text-background/40 lg:text-right">Миттєвий сервіс</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}