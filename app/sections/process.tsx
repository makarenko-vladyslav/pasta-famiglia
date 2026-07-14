"use client";
import { Reveal } from "@/components/mechanics";

/**
 * ACT III: The Soul - Step-by-Step Transparency
 * Editorial numbered rows focusing on technical craft and metrics.
 */
export function SectionProcess() {
  return (
    <section id="process" className="relative overflow-hidden bg-background py-[var(--space-act)]">
      <div className="mx-auto max-w-[88rem] px-4 lg:px-10">
        <span className="rp-actno mb-5 text-sm uppercase tracking-[0.3em] text-muted">
          Ремесло
        </span>
        
        <Reveal>
          <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)] max-w-[16ch]">
            Шлях від зерна до дров'яної печі
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
                <h3 className="font-display text-2xl font-semibold">Замішування</h3>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-muted">
                  Використання борошна сорту 00 та ферментація тіста протягом 24 годин для розщеплення складних цукрів.
                </p>
              </div>
              <span className="text-sm uppercase tracking-[0.2em] text-muted lg:text-right">
                24 години
              </span>
            </div>
          </Reveal>

          {/* STEP 02 */}
          <Reveal delay={0.1}>
            <div className="grid gap-4 py-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,7fr)_minmax(0,3fr)] lg:items-baseline">
              <span className="font-display text-[clamp(2.6rem,5vw,4.5rem)] font-extrabold leading-none text-accent">
                02
              </span>
              <div>
                <h3 className="font-display text-2xl font-semibold">Формування</h3>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-muted">
                  Ручне розтягування основи без використання качалок для збереження повітряної структури бортів.
                </p>
              </div>
              <span className="text-sm uppercase tracking-[0.2em] text-muted lg:text-right">
                Ручна праця
              </span>
            </div>
          </Reveal>

          {/* STEP 03 */}
          <Reveal delay={0.2}>
            <div className="grid gap-4 py-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,7fr)_minmax(0,3fr)] lg:items-baseline">
              <span className="font-display text-[clamp(2.6rem,5vw,4.5rem)] font-extrabold leading-none text-accent">
                03
              </span>
              <div>
                <h3 className="font-display text-2xl font-semibold">Випікання</h3>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-muted">
                  Експозиція при температурі 450°C у дров'яній печі протягом 90 секунд до появи характерного малюнка на бортах.
                </p>
              </div>
              <span className="text-sm uppercase tracking-[0.2em] text-muted lg:text-right">
                450 градусів
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}