
"use client";

import { Reveal } from "@/components/mechanics";

export function SectionCraft() {
  return (
    {/* [FIXED] Added id="craft" to link correctly with navigation */}
    <section id="craft" className="mx-auto max-w-6xl px-4 lg:px-6 relative">
      <Reveal>
        <div className="rp-actno mb-8">Про нас</div>
        <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold md:text-5xl">Майстерність у кожній деталі</h2>
        <p className="mt-6 max-w-2xl text-xl text-muted">
          Наша паста створюється щодня. Ми не використовуємо суху пасту з магазину — тільки італійське борошно Semola та ретельна праця.
        </p>
      </Reveal>
    </section>
  );
}
