
"use client";

import { Reveal } from "@/components/mechanics";

export function SectionPricing() {
  return (
    {/* [FIXED] Added id="pricing" to the root wrapper for navigation functionality */}
    <section id="pricing" className="mx-auto max-w-6xl px-4 lg:px-6 relative">
      <Reveal>
        <div className="rp-actno mb-8">Ціноутворення</div>
        <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold md:text-5xl">Доступна якість</h2>
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Reveal delay={0.1}>
          <div className="flex h-full flex-col p-8 border border-border bg-surface/30" style={{ borderRadius: "var(--radius-surface)" }}>
            <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold">Паста Карбонара</h3>
            <p className="mt-2 text-muted grow">Оригінальний рецепт з гуанчіале та пекоріно романо.</p>
            <p className="mt-6 text-3xl font-bold">345 ₴</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
