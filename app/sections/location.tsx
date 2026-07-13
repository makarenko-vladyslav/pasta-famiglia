"use client";
import { Reveal, Magnetic } from "@/components/mechanics";
import { MapPin, Phone, ArrowUpRight } from "@phosphor-icons/react";

/**
 * SECTION: Location (Act V)
 * Role: Contextual facts and map for Pasta Famiglia.
 * Logic: Inverted layout with a prominent typographic address and styled Google Maps embed.
 */
export function SectionLocation() {
  const address = "вул. Антоновича, 44, Київ";
  const phone = "+380 (44) 333-22-11";
  const phoneClean = "+380443332211";
  const hours = "11:00 – 22:00";
  const days = "Понеділок — Неділя";
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  const gMapsDirect = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section id="location" className="relative overflow-hidden bg-surface py-[var(--space-act)]">
      <div className="relative z-10 mx-auto grid max-w-[88rem] gap-12 px-4 lg:grid-cols-2 lg:px-10">
        <div>
          <span className="rp-actno mb-5 text-sm uppercase tracking-[0.3em] text-muted">Локація</span>
          <Reveal>
            <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)]">
              Чекаємо на вас у гості
            </h2>
          </Reveal>
          
          <p className="mt-8 font-display text-[clamp(1.4rem,2.4vw,2rem)] font-semibold leading-snug">
            {address}
          </p>

          <div className="relative mt-8 overflow-hidden bg-background/5" style={{ borderRadius: "var(--radius-surface)" }}>
            {/* Styled underlay for loading state */}
            <div aria-hidden className="absolute inset-0 grid place-items-center bg-foreground/5">
              <div className="flex flex-col items-center gap-3">
                <MapPin size={32} weight="thin" className="text-muted" />
                <span className="px-6 text-center font-display text-lg font-semibold text-muted">
                  {address}
                </span>
              </div>
            </div>
            
            <iframe 
              src={mapUrl} 
              title={address} 
              loading="lazy" 
              className="relative aspect-[4/3] w-full border-0 grayscale-[0.25] contrast-[1.04] opacity-90 transition-opacity duration-700 hover:opacity-100" 
              referrerPolicy="no-referrer-when-downgrade" 
            />
          </div>

          <div className="mt-6">
            <Magnetic>
              <a 
                href={gMapsDirect}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest hover:text-muted transition-colors duration-200"
              >
                <span>Побудувати маршрут</span>
                <ArrowUpRight size={16} />
              </a>
            </Magnetic>
          </div>
        </div>

        <div className="lg:pt-24">
          <div className="divide-y divide-foreground/10 border-t border-foreground/10">
            <div className="flex items-baseline justify-between py-6 text-base lg:py-8">
              <span className="text-muted font-body uppercase tracking-wider text-xs">Графік роботи</span>
              <div className="text-right">
                <span className="block font-display text-xl font-semibold lg:text-2xl">{days}</span>
                <span className="block font-display text-lg text-muted">{hours}</span>
              </div>
            </div>
            
            <div className="flex items-baseline justify-between py-6 text-base lg:py-8">
              <span className="text-muted font-body uppercase tracking-wider text-xs">Місто</span>
              <span className="font-display text-xl font-semibold lg:text-2xl">Київ, Україна</span>
            </div>
          </div>

          <div className="mt-16 lg:mt-24">
            <span className="mb-4 block text-sm uppercase tracking-[0.25em] text-muted">
              Резерв столів та довідка
            </span>
            <Magnetic>
              <a 
                href={`tel:${phoneClean}`} 
                className="group flex items-center gap-4 font-display text-[clamp(1.75rem,4vw,3.5rem)] font-bold leading-none transition-colors duration-300 hover:text-muted"
              >
                <Phone size={32} weight="fill" className="text-foreground/20 group-hover:text-muted transition-colors" />
                <span>{phone}</span>
              </a>
            </Magnetic>
            <p className="mt-6 max-w-md text-sm text-muted/80">
              Рекомендуємо бронювати столи заздалегідь, особливо у вечірній час та на вихідні дні.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}