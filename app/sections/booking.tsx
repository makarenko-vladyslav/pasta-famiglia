"use client";
import { Reveal, Magnetic, AmbientCanvas } from "@/components/mechanics";

/**
 * ACT V: The Close — Final CTA
 * A high-contrast, accent-flooded curtain call designed to convert.
 * Strictly follows the skeleton and premium studio constraints.
 */
export function SectionBooking() {
  return (
    <section 
      id="booking" 
      className="relative overflow-hidden bg-accent py-[var(--space-act)] text-accent-foreground"
    >
      {/* Background mechanic with accent theme optimization */}
      <AmbientCanvas variant="accent" />

      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <span className="rp-actno mb-6 block text-sm uppercase tracking-[0.3em]">
          Бронювання
        </span>

        <Reveal delay={0.1}>
          <h2 className="font-display font-extrabold leading-[0.88] text-[clamp(3rem,9vw,8rem)] max-w-[14ch]">
            Чекаємо на вашу родину сьогодні?
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-wrap items-center gap-8">
          <Magnetic>
            <a 
              href="mailto:e2e-pasta-client@example.com" 
              className="group inline-flex items-center gap-3 bg-foreground px-10 py-5 text-lg font-semibold text-background transition-colors duration-300 hover:bg-foreground/90" 
              style={{ borderRadius: "var(--radius-control)" }}
            >
              Забронювати стіл
              <span 
                aria-hidden 
                className="inline-block transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </Magnetic>
          
          <a 
            href="#" 
            className="text-lg font-display underline underline-offset-4 transition-opacity duration-200 hover:opacity-70"
          >
            Ми в Instagram
          </a>
        </div>

        {/* Fact lines: Unique attributes, strictly excluding address/hours/phone per instructions */}
        <div className="mt-14 grid gap-4 border-t border-accent-foreground/10 pt-8 text-sm text-accent-foreground/80 lg:grid-cols-3">
          <div className="flex flex-col gap-1">
            <span className="font-display text-lg text-accent-foreground">Pasta Famiglia</span>
            <span className="uppercase tracking-widest opacity-60">Італійський ресторан</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-display text-lg text-accent-foreground">Ручна робота</span>
            <span className="uppercase tracking-widest opacity-60">Традиційні рецепти</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-display text-lg text-accent-foreground">Київ</span>
            <span className="uppercase tracking-widest opacity-60">Створено з любов'ю</span>
          </div>
        </div>
      </div>
    </section>
  );
}