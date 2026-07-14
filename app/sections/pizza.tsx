
"use client";

import { Reveal, Magnetic, TiltCard } from "@/components/mechanics";

export function SectionPizza() {
  return (
    <section id="pizza" className="mx-auto max-w-6xl px-4 lg:px-6 relative">
      <Reveal>
        <div className="rp-actno mb-8">Меню</div>
        <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold md:text-5xl">Справжня піца та паста</h2>
      </Reveal>
      <div className="mt-12 grid gap-12 md:grid-cols-2 items-center">
        <TiltCard>
          <img 
            src="https://images.unsplash.com/photo-1604068549290-dea0e4a30536?q=80&w=1200&auto=format&fit=crop" 
            alt="Свіжа піца" 
            className="w-full aspect-square object-cover" 
            style={{ borderRadius: "var(--radius-surface)" }}
          />
        </TiltCard>
        <div className="flex flex-col justify-center">
          <Reveal delay={0.1}>
            <h3 className="font-[family-name:var(--font-display)] text-3xl font-semibold">З печі до столу</h3>
            <p className="mt-4 text-lg text-muted">
              Ми готуємо піцу в неаполітанському стилі на тонкому тісті з пухкими бортиками. Усі інгредієнти ретельно відбираються для створення автентичного смаку.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10">
              <Magnetic>
                {/* [FIXED] Routed generic href="#top" placeholder directly to the booking conversion section */}
                <a href="#booking" className="inline-flex items-center justify-center bg-foreground px-8 py-4 text-base font-semibold text-background transition-opacity hover:opacity-90" style={{ borderRadius: "var(--radius-control)" }}>
                  Замовити доставку
                </a>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
