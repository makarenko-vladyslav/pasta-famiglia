"use client";
import { Reveal, Magnetic } from "@/components/mechanics";
import { MapPin, Phone, Clock, EnvelopeSimple, ArrowSquareOut } from "@phosphor-icons/react";

/**
 * SECTION: Location Map (ACT V)
 * Role: The Close (Part 1). Location mandate and schedule.
 * Layout: Inverted locality act with display-scale address and typographic hours.
 */
export function SectionLocationMap() {
  const address = "вул. Антоновича, 44, Київ";
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  const googleMapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section id="location_map" className="relative overflow-hidden bg-surface py-[var(--space-act)]">
      <div className="relative z-10 mx-auto grid max-w-[88rem] gap-12 px-4 lg:grid-cols-2 lg:px-10">
        {/* Left Column: Heading, Address & Map */}
        <div>
          <span className="rp-actno mb-5 inline-block text-sm uppercase tracking-[0.3em] text-muted">Локація</span>
          <Reveal>
            <h2 className="font-display font-bold leading-[0.9] text-[clamp(2.4rem,5vw,4.5rem)]">
              Чекаємо на <br /> вас у гості
            </h2>
          </Reveal>
          
          <Reveal delay={0.2}>
            <p className="mt-8 font-display text-[clamp(1.4rem,2.4vw,2rem)] font-semibold leading-snug text-foreground">
              {address}
            </p>
          </Reveal>

          {/* Map Frame */}
          <Reveal delay={0.3}>
            <div className="relative mt-8 overflow-hidden bg-muted/10 border border-foreground/10" style={{ borderRadius: "var(--radius-surface)" }}>
              {/* Styled underlay for loading state */}
              <div aria-hidden className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <MapPin size={32} weight="thin" className="mb-3 opacity-20" />
                <span className="font-display text-lg font-semibold text-muted/40 uppercase tracking-widest">{address}</span>
              </div>
              
              <iframe 
                src={mapEmbedUrl} 
                title={address} 
                loading="lazy" 
                className="relative aspect-[4/3] w-full border-0 grayscale-[0.25] contrast-[1.04]" 
                referrerPolicy="no-referrer-when-downgrade" 
              />
            </div>
          </Reveal>

          <div className="mt-6">
            <Magnetic>
              <a 
                href={googleMapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest hover:text-accent transition-colors duration-300"
              >
                <span>Відкрити в картах</span>
                <ArrowSquareOut size={16} />
              </a>
            </Magnetic>
          </div>
        </div>

        {/* Right Column: Hours & Contacts */}
        <div className="lg:pt-16">
          <div className="divide-y divide-foreground/10 border-t border-foreground/10 lg:border-t-0">
            {/* Hours Row */}
            <div className="flex items-baseline justify-between py-6 text-base lg:text-lg">
              <div className="flex items-center gap-3">
                <Clock size={20} className="text-muted" />
                <span className="text-muted">Години роботи</span>
              </div>
              <span className="font-semibold text-accent">Пн–Нд 11:00–22:00</span>
            </div>
            
            <div className="flex items-baseline justify-between py-6 text-base lg:text-lg">
              <span className="text-muted">Кухня працює до</span>
              <span className="font-semibold">21:30</span>
            </div>
          </div>

          <div className="mt-16 space-y-10">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-muted">Зателефонувати</p>
              <Reveal>
                <a 
                  href="tel:+380443332211" 
                  className="mt-3 block font-display text-[clamp(1.5rem,3vw,2.5rem)] font-bold leading-none hover:text-accent transition-colors duration-500"
                >
                  +380 (44) 333-22-11
                </a>
              </Reveal>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-muted">Написати нам</p>
              <Reveal delay={0.1}>
                <a 
                  href="mailto:e2e-pasta-client@example.com" 
                  className="mt-3 block text-lg font-medium border-b border-foreground/20 pb-1 w-fit hover:border-accent hover:text-accent transition-all duration-300"
                >
                  e2e-pasta-client@example.com
                </a>
              </Reveal>
            </div>

            <div className="flex gap-6 pt-4">
              <Magnetic>
                <a href="#" className="p-3 border border-foreground/10 rounded-full hover:bg-foreground hover:text-background transition-colors duration-500">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              </Magnetic>
              <Magnetic>
                <a href="#" className="p-3 border border-foreground/10 rounded-full hover:bg-foreground hover:text-background transition-colors duration-500">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                </a>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute right-0 top-1/2 -z-10 translate-x-1/4 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none hidden lg:block">
        <span className="font-display text-[20rem] font-bold whitespace-nowrap uppercase leading-none">
          Famiglia
        </span>
      </div>
    </section>
  );
}