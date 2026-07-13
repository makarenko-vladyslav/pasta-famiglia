"use client";

import { Reveal, Magnetic, AmbientCanvas } from "@/components/mechanics";

/**
 * SECTION: booking_final
 * ROLE: ACT V: The Close. The final conversion.
 * DESIGN: Accent-flooded curtain call with factual question and direct CTA.
 */
export function SectionBookingFinal() {
  return (
    <section 
      id="booking_final" 
      className="relative overflow-hidden bg-accent pt-0 pb-[var(--space-act)] lg:pt-[var(--space-act)] text-accent-foreground"
    >
      {/* Background Layer with Grain and Ambient Effects */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/26729398/pexels-photo-26729398.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
          alt="Restaurant atmosphere"
          className="h-full w-full object-cover opacity-20 mix-blend-overlay"
          loading="lazy"
        />
        <div className="rp-grain absolute inset-0 opacity-40" />
        <AmbientCanvas />
      </div>

      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <span className="mb-6 block text-sm font-medium uppercase tracking-[0.3em] opacity-70">
          Резерв
        </span>
        
        <Reveal>
          <h2 className="font-display font-extrabold leading-[0.88] text-[clamp(3rem,9vw,8rem)] max-w-[14ch]">
            Чекаємо вас на Антоновича, 44?
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-wrap items-center gap-8">
          <Magnetic>
            <a 
              href="tel:+380443332211" 
              className="inline-flex items-center gap-3 bg-foreground px-10 py-5 text-lg font-semibold text-background transition-colors duration-300 hover:bg-foreground/90" 
              style={{ borderRadius: "var(--radius-control)" }}
            >
              ЗАБРОНЮВАТИ <span aria-hidden>→</span>
            </a>
          </Magnetic>
          
          <a 
            href="tel:+380443332211" 
            className="font-display text-xl underline underline-offset-8 decoration-foreground/30 transition-all hover:decoration-foreground"
          >
            +380 (44) 333-22-11
          </a>
        </div>

        <div className="mt-14 grid gap-4 border-t border-foreground/10 pt-10 text-sm font-medium text-accent-foreground/80 lg:grid-cols-3">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-wider opacity-50">Локація</span>
            <span>Київ, вул. Антоновича, 44</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-wider opacity-50">Графік</span>
            <span>Пн–Нд 11:00–22:00</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-wider opacity-50">Рейтинг</span>
            <span>★ 4.9 · 127 відгуків у Google</span>
          </div>
        </div>
      </div>
    </section>
  );
}