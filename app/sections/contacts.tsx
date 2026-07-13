"use client";

import { Reveal, Magnetic, AmbientCanvas } from "@/components/mechanics";
import { ArrowRight } from "@phosphor-icons/react";

/**
 * SectionContacts - ACT V: The Close
 * A high-impact, accent-flooded curtain call for Pasta Famiglia.
 */
export function SectionContacts() {
  return (
    <section 
      id="contacts" 
      className="relative overflow-hidden bg-accent py-[var(--space-act)] text-accent-foreground"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <AmbientCanvas />
      </div>

      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <span className="rp-actno mb-6 block font-display text-sm uppercase tracking-widest opacity-60">
          14
        </span>
        
        <Reveal>
          <h2 className="font-display font-extrabold leading-[0.88] tracking-[-0.055em] text-[clamp(3rem,9vw,8rem)] max-w-[14ch]">
            Чекаємо в гості
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-wrap items-center gap-8 md:gap-12">
          <Magnetic>
            <a 
              href="tel:+380443332211" 
              className="inline-flex items-center gap-3 bg-[hsl(var(--color-foreground))] px-10 py-5 text-lg font-semibold text-[hsl(var(--color-background))] transition-transform duration-300 active:scale-95" 
              style={{ borderRadius: "var(--radius-control)" }}
            >
              Забронювати стіл
              <ArrowRight weight="bold" className="text-xl" aria-hidden />
            </a>
          </Magnetic>

          <Magnetic>
            <a 
              href="tel:+380443332211" 
              className="font-display text-2xl md:text-3xl underline underline-offset-8 transition-opacity hover:opacity-70"
            >
              +380 (44) 333-22-11
            </a>
          </Magnetic>
        </div>

        <div className="mt-14 space-y-10">
          <p className="text-sm font-medium tracking-wide">
            ★ 4.9 · 127 відгуків · вул. Антоновича, 44
          </p>

          <div className="grid gap-8 pt-10 border-t border-accent-foreground/10 text-sm text-accent-foreground/80 lg:grid-cols-3">
            <div>
              <span className="block font-display text-xs uppercase tracking-widest opacity-40 mb-3">Локація</span>
              <p className="text-lg">Київ, вул. Антоновича, 44</p>
            </div>
            <div>
              <span className="block font-display text-xs uppercase tracking-widest opacity-40 mb-3">Години роботи</span>
              <p className="text-lg">Пн–Нд 11:00–22:00</p>
            </div>
            <div>
              <span className="block font-display text-xs uppercase tracking-widest opacity-40 mb-3">Напишіть нам</span>
              <p className="text-lg">e2e-pasta-client@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}