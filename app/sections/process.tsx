"use client";
import { Reveal } from "@/components/mechanics";

export function SectionProcess() {
  return (
    <section id="process" className="relative overflow-hidden bg-background py-[var(--space-act)]">
      <div className="mx-auto max-w-[88rem] px-4 lg:px-10">
        <span className="rp-actno mb-5">Процес</span>
        
        <Reveal>
          <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)] max-w-[16ch]">
            Приготування пасти на відкритій кухні
          </h2>
        </Reveal>

        {/* Media Block based on Spec (4:5 on mobile, arched mask concept via surface radius) */}
        <Reveal delay={0.2}>
          <div className="mt-12 overflow-hidden" style={{ borderRadius: "var(--radius-surface)" }}>
            <div className="aspect-[4/5] lg:aspect-[21/9]">
              <img
                src="https://images.pexels.com/photos/3661268/pexels-photo-3661268.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt="Процес роботи на кухні Pasta Famiglia"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-1000 ease-[var(--ease-out-cubic)] hover:scale-[1.04]"
              />
            </div>
          </div>
        </Reveal>

        <div className="mt-14 divide-y divide-foreground/10 border-t border-foreground/10">
          {/* STEP 01 */}
          <Reveal>
            <div className="grid gap-4 py-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,7fr)_minmax(0,3fr)] lg:items-baseline">
              <span className="font-display text-[clamp(2.6rem,5vw,4.5rem)] font-extrabold leading-none text-accent">01</span>
              <div>
                <h3 className="font-display text-2xl font-semibold">Сортування борошна Semola</h3>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-muted">
                  Використовуємо італійське борошно твердих сортів пшениці для створення щільної текстури тіста.
                </p>
              </div>
              <span className="text-sm uppercase tracking-[0.2em] text-muted lg:text-right">Зерно</span>
            </div>
          </Reveal>

          {/* STEP 02 */}
          <Reveal>
            <div className="grid gap-4 py-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,7fr)_minmax(0,3fr)] lg:items-baseline">
              <span className="font-display text-[clamp(2.6rem,5vw,4.5rem)] font-extrabold leading-none text-accent">02</span>
              <div>
                <h3 className="font-display text-2xl font-semibold">Витримка тіста 24 години</h3>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-muted">
                  Тісто відпочиває рівно добу при температурі +4°C, що забезпечує ферментацію та легке засвоєння.
                </p>
              </div>
              <span className="text-sm uppercase tracking-[0.2em] text-muted lg:text-right">+4°C</span>
            </div>
          </Reveal>

          {/* STEP 03 */}
          <Reveal>
            <div className="grid gap-4 py-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,7fr)_minmax(0,3fr)] lg:items-baseline">
              <span className="font-display text-[clamp(2.6rem,5vw,4.5rem)] font-extrabold leading-none text-accent">03</span>
              <div>
                <h3 className="font-display text-2xl font-semibold">Нарізка та формування</h3>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-muted">
                  Кухарі Pasta Famiglia нарізають тальятеле та ліплять равіолі вручну безпосередньо перед вашим замовленням.
                </p>
              </div>
              <span className="text-sm uppercase tracking-[0.2em] text-muted lg:text-rightHandmade">Ручна робота</span>
            </div>
          </Reveal>

          {/* STEP 04 */}
          <Reveal>
            <div className="grid gap-4 py-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,7fr)_minmax(0,3fr)] lg:items-baseline">
              <span className="font-display text-[clamp(2.6rem,5vw,4.5rem)] font-extrabold leading-none text-accent">04</span>
              <div>
                <h3 className="font-display text-2xl font-semibold">Технологія Al Dente</h3>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-muted">
                  Кожна порція пасти вариться рівно 180 секунд у киплячій воді для збереження пружної текстури.
                </p>
              </div>
              <span className="text-sm uppercase tracking-[0.2em] text-muted lg:text-right">180 Секунд</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}