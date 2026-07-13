"use client";

import { Reveal } from "@/components/mechanics";

export function SectionProcessProduction() {
  return (
    <section
      id="process_production"
      className="relative overflow-hidden bg-background py-[var(--space-act)]"
    >
      <div className="mx-auto max-w-[88rem] px-4 lg:px-10">
        <span className="rp-actno mb-5 text-sm uppercase tracking-[0.3em] text-muted block">
          Виробництво
        </span>
        
        <Reveal>
          <h2 className="font-display font-bold leading-[0.9] text-[clamp(2.4rem,5vw,4.5rem)] max-w-[16ch] text-foreground">
            Від зерна до готової подачі на Антоновича
          </h2>
        </Reveal>

        <div className="mt-12 relative overflow-hidden rounded-[var(--radius-surface)] rp-grain">
          <img
            src="https://images.pexels.com/photos/3851010/pexels-photo-3851010.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
            alt="Ручний процес виготовлення пасти в ресторані Pasta Famiglia"
            className="aspect-[4/5] w-full object-cover brightness-75 lg:aspect-[21/9] transition-transform duration-1000 hover:scale-[1.04]"
            loading="lazy"
          />
        </div>

        <div className="mt-14 divide-y divide-foreground/10">
          <Reveal>
            <div className="grid gap-4 py-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,7fr)_minmax(0,3fr)] lg:items-baseline">
              <span className="font-display text-[clamp(2.6rem,5vw,4.5rem)] font-extrabold leading-none text-accent">
                01
              </span>
              <div>
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  Селекція борошна
                </h3>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-muted">
                  Використовуємо виключно борошно грубого помелу Semola di Grano Duro. Це забезпечує високий вміст білка та необхідну щільність кожного виробу.
                </p>
              </div>
              <span className="text-sm uppercase tracking-[0.2em] text-muted lg:text-right">
                08:00 РАНКУ
              </span>
            </div>
          </Reveal>

          <Reveal>
            <div className="grid gap-4 py-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,7fr)_minmax(0,3fr)] lg:items-baseline">
              <span className="font-display text-[clamp(2.6rem,5vw,4.5rem)] font-extrabold leading-none text-accent">
                02
              </span>
              <div>
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  Холодний заміс
                </h3>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-muted">
                  Тісто замішується вручну з додаванням свіжих фермерських жовтків. Процес витримки триває 12 годин при стабільній температурі для еластичності.
                </p>
              </div>
              <span className="text-sm uppercase tracking-[0.2em] text-muted lg:text-right">
                12 ГОДИН СПОКОЮ
              </span>
            </div>
          </Reveal>

          <Reveal>
            <div className="grid gap-4 py-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,7fr)_minmax(0,3fr)] lg:items-baseline">
              <span className="font-display text-[clamp(2.6rem,5vw,4.5rem)] font-extrabold leading-none text-accent">
                03
              </span>
              <div>
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  Бронзова екструзія
                </h3>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-muted">
                  Формуємо пасту за допомогою бронзових матриць. Це створює мікроскопічну шорсткість, завдяки якій соус краще утримується на поверхні.
                </p>
              </div>
              <span className="text-sm uppercase tracking-[0.2em] text-muted lg:text-right">
                AL DENTE
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}