"use client";

import { Reveal } from "@/components/mechanics";

export function SectionProcess() {
  return (
    <section id="process" className="relative overflow-hidden bg-background py-[var(--space-act)]">
      {/* Background Media Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/4353620/pexels-photo-4353620.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
          alt="Справжня піч на дровах"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-brightness-75" />
        <div className="rp-grain absolute inset-0 opacity-30" />
      </div>

      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <span className="mb-5 block text-sm font-medium uppercase tracking-[0.3em] text-accent-foreground/70">
          Процес
        </span>
        
        <Reveal>
          <h2 className="font-display font-bold leading-[0.9] text-[clamp(2.4rem,5vw,4.5rem)] max-w-[16ch] text-accent-foreground">
            Справжня піч на дровах
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
                <h3 className="font-display text-2xl font-semibold text-accent-foreground">Борошно Caputo</h3>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-accent-foreground/80">
                  Використовуємо італійське борошно Caputo типу 00 для створення легкого, повітряного тіста з ідеальною еластичністю.
                </p>
              </div>
              <span className="text-sm uppercase tracking-[0.2em] text-accent-foreground/50 lg:text-right">
                ОСНОВА
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
                <h3 className="font-display text-2xl font-semibold text-accent-foreground">Томати Mutti</h3>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-accent-foreground/80">
                  Ми випікаємо піцу з томатами Mutti, що зберігають природну солодкість та автентичний смак італійського сонця.
                </p>
              </div>
              <span className="text-sm uppercase tracking-[0.2em] text-accent-foreground/50 lg:text-right">
                НАПОВНЕННЯ
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
                <h3 className="font-display text-2xl font-semibold text-accent-foreground">Живий вогонь</h3>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-accent-foreground/80">
                  Висока температура в печі створює ту саму хрустку скоринку та неповторний аромат, який дарує лише натуральне дерево.
                </p>
              </div>
              <span className="text-sm uppercase tracking-[0.2em] text-accent-foreground/50 lg:text-right">
                ВИПІКАННЯ
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}