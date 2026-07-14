"use client";
import { Reveal, TiltCard } from "@/components/mechanics";

/**
 * ACT III: Process — The 20-Min Promise
 * Editorial numbered list showcasing the speed and precision of Pasta Famiglia.
 * Adheres strictly to the vetted award composition skeleton.
 */
export function SectionProcess() {
  return (
    <section id="process" className="relative overflow-hidden bg-surface py-[var(--space-act)]">
      <div className="mx-auto max-w-[88rem] px-4 lg:px-10">
        <span className="rp-actno mb-5 block text-sm uppercase tracking-[0.3em] text-muted">
          Процес
        </span>
        
        <Reveal>
          <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)] max-w-[16ch]">
            20 хвилин від замовлення
          </h2>
        </Reveal>

        <div className="mt-14 divide-y divide-foreground/10">
          {/* STEP 01 */}
          <Reveal delay={0.1}>
            <div className="grid gap-4 py-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,7fr)_minmax(0,3fr)] lg:items-baseline">
              <span className="font-display text-[clamp(2.6rem,5vw,4.5rem)] font-extrabold leading-none text-accent">
                01
              </span>
              <div>
                <h3 className="font-display text-2xl font-semibold">Замішування тіста</h3>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-muted">
                  Використовуємо борошно сорту 00 та жовтки фермерських яєць для створення еластичної основи, що готується щоранку.
                </p>
              </div>
              <span className="text-sm uppercase tracking-[0.2em] text-muted lg:text-right">
                03 хвилини
              </span>
            </div>
          </Reveal>

          {/* STEP 02 */}
          <Reveal delay={0.2}>
            <div className="grid gap-4 py-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,7fr)_minmax(0,3fr)] lg:items-baseline">
              <span className="font-display text-[clamp(2.6rem,5vw,4.5rem)] font-extrabold leading-none text-accent">
                02
              </span>
              <div>
                <h3 className="font-display text-2xl font-semibold">Ручне формування</h3>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-muted">
                  Нарізаємо таджителле або ліпимо равіолі безпосередньо після отримання чека, зберігаючи вологість продукту.
                </p>
              </div>
              <span className="text-sm uppercase tracking-[0.2em] text-muted lg:text-right">
                05 хвилин
              </span>
            </div>
          </Reveal>

          {/* STEP 03 */}
          <Reveal delay={0.3}>
            <div className="grid gap-4 py-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,7fr)_minmax(0,3fr)] lg:items-baseline">
              <span className="font-display text-[clamp(2.6rem,5vw,4.5rem)] font-extrabold leading-none text-accent">
                03
              </span>
              <div>
                <h3 className="font-display text-2xl font-semibold">Варка Al Dente</h3>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-muted">
                  Варимо у киплячій підсоленій воді до моменту, коли центр залишається твердим для правильної текстури.
                </p>
              </div>
              <span className="text-sm uppercase tracking-[0.2em] text-muted lg:text-right">
                06 хвилин
              </span>
            </div>
          </Reveal>

          {/* STEP 04 */}
          <Reveal delay={0.4}>
            <div className="grid gap-4 py-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,7fr)_minmax(0,3fr)] lg:items-baseline">
              <span className="font-display text-[clamp(2.6rem,5vw,4.5rem)] font-extrabold leading-none text-accent">
                04
              </span>
              <div>
                <h3 className="font-display text-2xl font-semibold">Фіналізація страви</h3>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-muted">
                  Об’єднуємо пасту з соусом на інтенсивному вогні до повної емульгації та додаємо витриманий сир.
                </p>
              </div>
              <span className="text-sm uppercase tracking-[0.2em] text-muted lg:text-right">
                06 хвилин
              </span>
            </div>
          </Reveal>
        </div>

        {/* Process Image Visualization */}
        <Reveal delay={0.5}>
          <div className="mt-20">
            <TiltCard>
              <div className="aspect-16/10 overflow-hidden lg:aspect-21/9" style={{ borderRadius: "var(--radius-surface)" }}>
                <img 
                  src="https://images.pexels.com/photos/36753771/pexels-photo-36753771.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
                  alt="Процес приготування свіжої пасти на відкритій кухні" 
                  className="h-full w-full object-cover transition-transform duration-1000 hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/40 to-transparent" />
              </div>
            </TiltCard>
          </div>
        </Reveal>
      </div>
    </section>
  );
}