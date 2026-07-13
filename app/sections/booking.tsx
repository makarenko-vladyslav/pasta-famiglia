"use client";
import { Reveal, Magnetic, AmbientCanvas } from "@/components/mechanics";
import { ArrowRight } from "@phosphor-icons/react";

/**
 * SECTION: Booking (Closing Act)
 * ROLE: ACT V: Closing (Action)
 * DESIGN: Accent-flooded curtain call with one massive H2 and a Magnetic button.
 */
export function SectionBooking() {
  return (
    <section
      id="booking"
      className="relative overflow-hidden bg-accent py-[var(--space-act)] text-accent-foreground"
    >
      {/* Background pulsates slightly via the ambient mechanic */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <AmbientCanvas />
      </div>

      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <span className="rp-actno mb-6 block text-sm uppercase tracking-[0.3em]">
          Резерв
        </span>
        
        <Reveal>
          <h2 className="font-display font-extrabold text-[clamp(3rem,9vw,8rem)] max-w-[14ch] leading-[0.95]">
            Ваш вечір починається тут
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-wrap items-center gap-8">
          <Magnetic>
            <a
              href="tel:+380443332211"
              className="inline-flex items-center gap-3 bg-foreground px-10 py-5 text-lg font-semibold text-background transition-transform duration-300 hover:scale-[1.02]"
              style={{ borderRadius: "var(--radius-control)" }}
            >
              Забронювати стіл
              <ArrowRight weight="bold" size={20} aria-hidden />
            </a>
          </Magnetic>

          <a 
            href="mailto:e2e-pasta-client@example.com" 
            className="text-lg font-medium underline underline-offset-4 decoration-foreground/20 hover:decoration-foreground transition-colors"
          >
            Написати нам
          </a>
        </div>

        <div className="mt-14 grid gap-6 text-sm text-accent-foreground/80 lg:grid-cols-3 lg:gap-2">
          <Reveal delay={0.2}>
            <p className="max-w-[28ch]">Автентична італійська гостинність у самому серці столиці</p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="max-w-[28ch]">Спеціальні умови та меню для ваших особливих дат</p>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="max-w-[28ch]">Авторська винна карта та традиційні рецепти родини</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}