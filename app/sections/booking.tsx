"use client";
import { Reveal, Magnetic } from "@/components/mechanics";

/**
 * SECTION: Booking (Act V: The Close)
 * ROLE: Final conversion point. High-contrast accent flood with brand value statements.
 * STYLING: bg-accent + pexels overlay, poster-scale typography.
 */
export function SectionBooking() {
  return (
    <section 
      id="booking" 
      className="relative overflow-hidden bg-accent py-[var(--space-act)] text-accent-foreground"
    >
      {/* ATMOSPHERIC BACKGROUND */}
      <img
        src="https://images.pexels.com/photos/16716576/pexels-photo-16716576.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
        alt="Atmospheric pasta dinner"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
        loading="lazy"
      />

      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <span className="mb-6 block text-sm font-medium uppercase tracking-[0.3em] opacity-80">
          Бронювання
        </span>

        <Reveal>
          <h2 className="font-display font-extrabold text-[clamp(3rem,9vw,8rem)] max-w-[14ch]">
            Чекаємо на вашу родину
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-wrap items-center gap-8">
          <Magnetic>
            <a 
              href="tel:+380443332211" 
              className="inline-flex items-center gap-3 bg-foreground px-10 py-5 text-lg font-semibold text-background transition-transform hover:scale-[1.02]" 
              style={{ borderRadius: "var(--radius-control)" }}
            >
              Забронювати стіл
              <svg 
                viewBox="0 0 20 20" 
                fill="currentColor" 
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </a>
          </Magnetic>
        </div>

        <div className="mt-14 grid gap-8 border-t border-accent-foreground/15 pt-10 text-sm font-medium uppercase tracking-widest text-accent-foreground/80 lg:grid-cols-3">
          <p>Автентичні рецепти</p>
          <p>Локальні інгредієнти</p>
          <p>Родинний затишок</p>
        </div>
      </div>
    </section>
  );
}