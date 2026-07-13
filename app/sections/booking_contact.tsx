"use client";

import { Reveal, Magnetic, AmbientCanvas } from "@/components/mechanics";
import { ArrowRight } from "@phosphor-icons/react";

/**
 * SectionBookingContact
 * ACT V The Close: Final CTA (Accent Ground)
 * 
 * Composition: Accent-flooded curtain call with oversized typography and direct action.
 */
export function SectionBookingContact() {
  const phone = "+380 (44) 333-22-11";
  const phoneClean = phone.replace(/[^0-9+]/g, "");

  return (
    <section 
      id="booking_contact" 
      className="relative overflow-hidden bg-accent py-[var(--space-act)] text-accent-foreground"
    >
      {/* Ambient grain/drift layer as per spec */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <AmbientCanvas />
      </div>

      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <span className="rp-actno mb-6 block text-sm uppercase tracking-[0.3em]">
          Бронювання
        </span>

        <Reveal delay={0.1}>
          <h2 className="font-display font-extrabold leading-[0.88] text-[clamp(3rem,9vw,8rem)] max-w-[14ch]">
            Ваш столик у серці Києва вже чекає
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-wrap items-center gap-8">
          <Magnetic>
            <a 
              href={`tel:${phoneClean}`}
              className="inline-flex items-center gap-3 bg-foreground px-10 py-5 text-lg font-semibold text-background transition-transform hover:scale-[1.02] active:scale-[0.98]" 
              style={{ borderRadius: "var(--radius-control)" }}
            >
              Забронювати стіл
              <ArrowRight size={20} weight="bold" aria-hidden="true" />
            </a>
          </Magnetic>

          <Reveal delay={0.3}>
            <a 
              href={`tel:${phoneClean}`} 
              className="text-xl font-display lg:text-2xl transition-opacity hover:opacity-70 underline underline-offset-8 decoration-foreground/20"
            >
              {phone}
            </a>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-6 text-sm text-accent-foreground/80 lg:grid-cols-3 lg:mt-32">
          <Reveal delay={0.4}>
            
          </Reveal>

          <Reveal delay={0.5}>
            
          </Reveal>

          <Reveal delay={0.6}>
            <div className="space-y-1">
              <p className="uppercase tracking-wider opacity-60">Рейтинг</p>
              <p className="text-base font-medium">★ 4.9 · 127 відгуків у Google</p>
            </div>
          </Reveal>
        </div>
      </div>
      
      {/* Decorative large text for larger screens */}
      <div className="absolute -bottom-10 -right-10 hidden lg:block select-none opacity-5 pointer-events-none">
        <span className="font-display text-[20rem] whitespace-nowrap leading-none">
          Pasta Famiglia
        </span>
      </div>
    </section>
  );
}