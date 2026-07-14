
"use client";

import { Reveal } from "@/components/mechanics";

export function SectionSpeed() {
  return (
    <section id="speed" className="mx-auto max-w-6xl px-4 lg:px-6 relative">
      <Reveal>
        <div className="rp-actno mb-8">Як працює</div>
        <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold md:text-5xl">Швидкість та якість</h2>
      </Reveal>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <Reveal delay={0.1}>
          <div className="p-8 border border-border bg-surface/30" style={{ borderRadius: "var(--radius-surface)" }}>
            <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold mb-4">Швидка подача</h3>
            <p className="text-muted text-lg">Завдяки оптимізованим процесам та власному виробництву, ми гарантуємо подачу страв до 15 хвилин.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
