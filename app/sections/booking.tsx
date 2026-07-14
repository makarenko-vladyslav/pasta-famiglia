"use client";
import { Reveal, Magnetic, AmbientCanvas } from "@/components/mechanics";

/**
 * ACT V: The Close — The Invitation
 * Section: Booking / Finale
 * Purpose: A high-impact, accent-flooded curtain call inviting the guest to take action.
 */
export function SectionBooking() {
  return (
    <section id="booking" className="relative overflow-hidden bg-accent py-[var(--space-act)] text-accent-foreground">
      {/* Background visual element for depth */}
      <div className="absolute inset-0 z-0 opacity-40">
        <AmbientCanvas />
      </div>

      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <span className="rp-actno mb-6 block text-sm uppercase tracking-[0.3em]">
          Бронювання
        </span>
        
        <Reveal>
          <h2 className="font-display font-extrabold text-[clamp(3rem,9vw,8rem)] max-w-[14ch] lg:leading-[0.85]">
            Ваш стіл уже готовий
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-wrap items-center gap-8">
          <Magnetic>
            <a 
              href="tel:+380443332211" 
              className="inline-flex items-center gap-3 bg-foreground px-10 py-5 text-lg font-semibold text-background transition-colors hover:bg-foreground/90" 
              style={{ borderRadius: "var(--radius-control)" }}
            >
              Забронювати стіл
              <span aria-hidden className="text-xl">→</span>
            </a>
          </Magnetic>
          
          <a 
            href="#menu" 
            className="text-base font-medium underline underline-offset-4 decoration-accent-foreground/30 hover:decoration-accent-foreground transition-colors"
          >
            Переглянути меню
          </a>
        </div>

        <div className="mt-14 grid gap-4 border-t border-accent-foreground/10 pt-8 text-sm text-accent-foreground/80 lg:grid-cols-3 lg:gap-8">
          <p className="max-w-[28ch]">
            Автентичні рецепти, що передаються нашою родиною з покоління в покоління.
          </p>
          <p className="max-w-[28ch]">
            Тільки найкращі інгредієнти, доставлені безпосередньо від італійських фермерів.
          </p>
          <p className="max-w-[28ch]">
            Створюємо атмосферу затишку та італійської гостинності для кожного гостя.
          </p>
        </div>
      </div>
    </section>
  );
}