"use client";
import { Reveal } from "@/components/mechanics";

/**
 * ACT III: The Soul — The 20-Min Rule
 * Editorial numbered rows demonstrating the culinary process.
 * Layout: Inverted-style act with dark grounding and grainy texture.
 */
export function SectionProcessSteps() {
  return (
    <section 
      id="process_steps" 
      className="relative overflow-hidden bg-background py-[var(--space-act)]"
    >
      {/* Decorative grain overlay for the "Soul" act texture */}
      <div className="rp-grain pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <span className="rp-actno mb-5 block text-sm uppercase tracking-[0.3em] text-muted">
          ПРИГОТУВАННЯ
        </span>
        
        <Reveal>
          <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)] max-w-[16ch]">
            Правило 20 хвилин: від борошна до столу
          </h2>
        </Reveal>

        <div className="mt-14 divide-y divide-foreground/10">
          {/* STEP 1: PREP */}
          <Reveal>
            <div className="grid gap-4 py-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,7fr)_minmax(0,3fr)] lg:items-baseline">
              <span className="font-display text-[clamp(2.6rem,5vw,4.5rem)] font-extrabold leading-none text-accent">
                01
              </span>
              <div>
                <h3 className="font-display text-2xl font-semibold">Ранковий заміс</h3>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-muted">
                  Кожного ранку ми починаємо з магії: борошно твердих сортів зустрічається з фермерськими яйцями. Тісто має «відпочити» рівно стільки, скільки потрібно для набуття ідеальної еластичності та кольору.
                </p>
              </div>
              <span className="text-sm uppercase tracking-[0.2em] text-muted lg:text-right">
                ПІДГОТОВКА
              </span>
            </div>
          </Reveal>

          {/* STEP 2: BOIL + MEDIA */}
          <Reveal>
            <div className="grid gap-4 py-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,7fr)_minmax(0,3fr)] lg:items-baseline">
              <span className="font-display text-[clamp(2.6rem,5vw,4.5rem)] font-extrabold leading-none text-accent">
                02
              </span>
              <div>
                <h3 className="font-display text-2xl font-semibold">Точність Al Dente</h3>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-muted">
                  Ми не просто варимо пасту — ми контролюємо температуру води до градуса. Тільки так можна досягти легендарного стану Al Dente, коли паста залишається пружною всередині, щоб ідеально поєднатися з соусом.
                </p>
                {/* Visual anchor to fill the section as per spec feedback */}
                <div className="mt-8 overflow-hidden" style={{ borderRadius: "var(--radius-surface)" }}>
                  <img 
                    src="https://images.pexels.com/photos/31769301/pexels-photo-31769301.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                    alt="Процес варіння свіжої пасти"
                    loading="lazy"
                    className="aspect-16/10 w-full object-cover transition-transform duration-1000 hover:scale-[1.04]"
                  />
                </div>
              </div>
              <span className="text-sm uppercase tracking-[0.2em] text-muted lg:text-right">
                ВАРІННЯ
              </span>
            </div>
          </Reveal>

          {/* STEP 3: PLATE */}
          <Reveal>
            <div className="grid gap-4 py-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,7fr)_minmax(0,3fr)] lg:items-baseline">
              <span className="font-display text-[clamp(2.6rem,5vw,4.5rem)] font-extrabold leading-none text-accent">
                03
              </span>
              <div>
                <h3 className="font-display text-2xl font-semibold">Мистецтво подачі</h3>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-muted">
                  Паста не чекає на гостя, гість чекає на пасту. Миттєве поєднання з авторським соусом та подача протягом 60 секунд, щоб ви відчули справжній аромат та пікову текстуру страви.
                </p>
              </div>
              <span className="text-sm uppercase tracking-[0.2em] text-muted lg:text-right">
                ПРЕЗЕНТАЦІЯ
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}