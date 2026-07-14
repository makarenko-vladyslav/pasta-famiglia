"use client";
import { Reveal } from "@/components/mechanics";

export function SectionProcess() {
  return (
    <section id="process" className="relative overflow-hidden bg-background py-[var(--space-act)]">
      <div className="mx-auto max-w-[88rem] px-4 lg:px-10">
        <span className="rp-actno mb-5 text-sm uppercase tracking-[0.3em] text-muted">Процес</span>
        <Reveal>
          <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)] max-w-[16ch]">
            Мистецтво швидкої досконалості
          </h2>
        </Reveal>

        <div className="mt-14 divide-y divide-foreground/10">
          {/* STEP 01 */}
          <Reveal>
            <div className="grid gap-4 py-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,7fr)_minmax(0,3fr)] lg:items-baseline">
              <span className="font-display text-[clamp(2.6rem,5vw,4.5rem)] font-extrabold leading-none text-accent">
                01
              </span>
              <div>
                <h3 className="font-display text-2xl font-semibold">Відбірні інгредієнти</h3>
                <div className="mt-4 grid gap-6 lg:grid-cols-2 lg:items-start">
                  <p className="max-w-xl text-base leading-relaxed text-muted">
                    Ми використовуємо виключно італійське борошно твердих сортів Semola та фермерські продукти, що проходять щоденний контроль якості.
                  </p>
                  <div className="overflow-hidden aspect-[16/10] lg:aspect-video" style={{ borderRadius: "var(--radius-surface)" }}>
                    <img 
                      src="https://images.pexels.com/photos/3661200/pexels-photo-3661200.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
                      alt="Свіжа паста"
                      className="h-full w-full object-cover transition-transform duration-1000 hover:scale-[1.04]"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <span className="text-sm uppercase tracking-[0.2em] text-muted lg:text-right">Традиція</span>
            </div>
          </Reveal>

          {/* STEP 02 */}
          <Reveal>
            <div className="grid gap-4 py-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,7fr)_minmax(0,3fr)] lg:items-baseline">
              <span className="font-display text-[clamp(2.6rem,5vw,4.5rem)] font-extrabold leading-none text-accent">
                02
              </span>
              <div>
                <h3 className="font-display text-2xl font-semibold">Власне виробництво</h3>
                <div className="mt-4 grid gap-6 lg:grid-cols-2 lg:items-start">
                  <p className="max-w-xl text-base leading-relaxed text-muted">
                    Кожна стрічка пасти народжується на нашій відкритій кухні. Ми замішуємо тісто вручну, зберігаючи автентичну текстуру та смак.
                  </p>
                  <div className="overflow-hidden aspect-[16/10] lg:aspect-video" style={{ borderRadius: "var(--radius-surface)" }}>
                    <img 
                      src="https://images.pexels.com/photos/10059904/pexels-photo-10059904.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
                      alt="Процес приготування"
                      className="h-full w-full object-cover transition-transform duration-1000 hover:scale-[1.04]"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <span className="text-sm uppercase tracking-[0.2em] text-muted lg:text-right">Майстерність</span>
            </div>
          </Reveal>

          {/* STEP 03 */}
          <Reveal>
            <div className="grid gap-4 py-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,7fr)_minmax(0,3fr)] lg:items-baseline">
              <span className="font-display text-[clamp(2.6rem,5vw,4.5rem)] font-extrabold leading-none text-accent">
                03
              </span>
              <div>
                <h3 className="font-display text-2xl font-semibold">20-хвилинна обіцянка</h3>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-muted">
                  Ми оптимізували кожен рух на кухні, щоб ви отримали свою ідеальну страву гарячою рівно за 20 хвилин. Свіжість не терпить очікування.
                </p>
              </div>
              <span className="text-sm uppercase tracking-[0.2em] text-muted lg:text-right">Сервіс</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}