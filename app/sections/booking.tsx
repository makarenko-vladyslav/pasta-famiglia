"use client";

import { Reveal, Magnetic } from "@/components/mechanics";
import { ArrowRight } from "@phosphor-icons/react";

/**
 * ACT V: The Close - Final Invitation.
 * A high-contrast, accent-flooded finale to drive conversions.
 */
export function SectionBooking() {
  return (
    <section
      id="booking"
      className="relative overflow-hidden bg-accent py-[var(--space-act)] text-accent-foreground min-h-[70vh] flex items-center"
    >
      {/* Background Media Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/9829424/pexels-photo-9829424.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
          alt="Atmospheric pasta dinner"
          className="h-full w-full object-cover opacity-15 grayscale select-none pointer-events-none"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-accent/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10 w-full">
        <span className="rp-actno mb-6 block font-body uppercase tracking-[0.3em] text-sm opacity-80">
          Резерв
        </span>

        <Reveal>
          <h2 className="font-display font-extrabold leading-[0.88] tracking-[-0.055em] text-[clamp(3rem,9vw,8rem)] max-w-[14ch]">
            Смак Італії чекає на вас. Забронюйте вечір для найближчих.
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-wrap items-center gap-8">
          <Magnetic>
            <a
              href="tel:+380443332211"
              className="group inline-flex items-center gap-3 bg-foreground px-10 py-5 text-lg font-semibold text-background transition-transform duration-300 hover:scale-105"
              style={{ borderRadius: "var(--radius-control)" }}
            >
              ЗАБРОНЮВАТИ СТІЛ
              <ArrowRight weight="bold" className="transition-transform group-hover:translate-x-1" />
            </a>
          </Magnetic>
          
          <a 
            href="tel:+380443332211" 
            className="font-display text-2xl lg:text-3xl hover:opacity-70 transition-opacity"
          >
            +380 (44) 333-22-11
          </a>
        </div>

        <div className="mt-14 grid gap-4 text-sm text-accent-foreground/80 lg:grid-cols-3 border-t border-accent-foreground/10 pt-8">
          <div className="flex flex-col gap-1">
            <p className="font-medium">ЛОКАЦІЯ ТА РЕЙТИНГ</p>
            <p>★ 4.9 · 127 відгуків · вул. Антоновича, 44</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-medium">ГРАФІК РОБОТИ</p>
            <p>Відчинено щодня: Пн–Нд 11:00–22:00</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-medium">PASTA FAMIGLIA</p>
            <p>Справжній італійський ресторан у серці Києва</p>
          </div>
        </div>
      </div>
    </section>
  );
}