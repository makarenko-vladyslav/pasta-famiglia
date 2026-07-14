
"use client";

import { Reveal, Magnetic } from "@/components/mechanics";

export function SectionBooking() {
  return (
    <section id="booking" className="mx-auto max-w-5xl px-4 lg:px-6 relative">
      <div className="bg-foreground text-background p-10 md:p-16 text-center relative overflow-hidden" style={{ borderRadius: "var(--radius-surface)" }}>
        <div className="relative z-10">
          <Reveal>
            <div className="rp-actno mb-6 text-background/50">Контакти</div>
            <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold md:text-5xl">Забронювати стіл</h2>
            <p className="mt-4 text-lg text-background/80 max-w-xl mx-auto">
              Чекаємо на вас за адресою вул. Антоновича, 44, Київ. Забронюйте столик заздалегідь, щоб насолодитися ідеальною італійською вечерею.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Magnetic>
                <a href="tel:+380443332211" className="inline-flex items-center justify-center bg-accent px-8 py-4 text-lg font-semibold text-accent-foreground transition-opacity hover:opacity-90 w-full sm:w-auto" style={{ borderRadius: "var(--radius-control)" }}>
                  Зателефонувати
                </a>
              </Magnetic>
              <span className="text-xl font-medium text-background/90">+380 (44) 333-22-11</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
