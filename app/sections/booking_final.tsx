"use client";

import { Reveal, Magnetic, AmbientCanvas } from "@/components/mechanics";

/**
 * SectionBookingFinal: ACT V - The Close
 * A factual, high-impact final conversion section for Pasta Famiglia.
 * Focuses on location and time to drive reservations without virtue adjectives.
 */
export function SectionBookingFinal() {
  return (
    <section 
      id="booking_final" 
      className="relative overflow-hidden bg-accent pt-0 pb-[var(--space-act)] lg:pt-[var(--space-act)] text-accent-foreground rp-grain"
    >
      {/* Background Layer: Subtle flour texture and interactive ambient drift */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/1841184/pexels-photo-1841184.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
          alt="" 
          className="h-full w-full object-cover opacity-15 grayscale mix-blend-overlay"
          loading="lazy"
        />
        <AmbientCanvas />
      </div>

      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <span className="rp-actno mb-6 block">Контакти</span>
        
        <Reveal>
          <h2 className="font-display font-extrabold leading-[0.88] text-[clamp(3rem,9vw,8rem)] max-w-[14ch]">
            Ваш стіл на Антоновича, 44
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-wrap items-center gap-8 lg:gap-12">
          <Magnetic>
            <a 
              href="tel:+380443332211" 
              className="inline-flex items-center gap-3 bg-foreground px-10 py-5 text-lg font-semibold text-background transition-transform duration-200 hover:scale-[1.02]" 
              style={{ borderRadius: "var(--radius-control)" }}
            >
              Забронювати стіл
              <span aria-hidden className="text-xl">→</span>
            </a>
          </Magnetic>
          
          <a 
            href="tel:+380443332211" 
            className="font-display text-2xl tracking-tight transition-opacity hover:opacity-70 lg:text-3xl"
          >
            +380 (44) 333-22-11
          </a>
        </div>

        <div className="mt-14 grid gap-6 text-sm uppercase tracking-widest text-accent-foreground/80 md:grid-cols-2 lg:grid-cols-3 lg:gap-2">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] opacity-50">Адреса</span>
            <span className="font-medium">вул. Антоновича, 44, Київ</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] opacity-50">Графік</span>
            <span className="font-medium">Пн–Нд 11:00–22:00</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] opacity-50">Рейтинг</span>
            <span className="font-medium">★ 4.9 · 127 відгуків</span>
          </div>
        </div>
      </div>

      {/* Aesthetic garnish for large screens */}
      <div 
        className="pointer-events-none absolute -right-20 bottom-0 hidden font-display text-[20vh] leading-none opacity-5 lg:block"
        aria-hidden="true"
      >
        FAMIGLIA
      </div>
    </section>
  );
}