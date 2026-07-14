"use client";
import { Reveal, Magnetic } from "@/components/mechanics";

/**
 * ACT V: The Close. Rich location act.
 * Premium location section featuring an interactive map, operational hours, 
 * and a direct booking call-to-action.
 */
export function SectionLocation() {
  const address = "вул. Антоновича, 44, Київ";
  const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  
  return (
    <section id="location" className="relative overflow-hidden bg-background py-[var(--space-act)]">
      <div className="relative z-10 mx-auto grid max-w-[88rem] gap-12 px-4 lg:grid-cols-2 lg:px-10">
        {/* Left Column: Context & Map */}
        <div>
          <span className="rp-actno mb-5 block text-sm uppercase tracking-[0.3em] text-muted">Локація</span>
          <Reveal>
            <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)]">
              Чекаємо на вас
            </h2>
          </Reveal>
          
          <Reveal delay={0.1}>
            <p className="mt-8 font-display text-[clamp(1.4rem,2.4vw,2rem)] font-semibold leading-snug">
              {address}
            </p>
          </Reveal>

          {/* Google map container */}
          <div 
            className="relative mt-8 overflow-hidden bg-foreground/5" 
            style={{ borderRadius: "var(--radius-surface)" }}
          >
            {/* Styled underlay for loading state */}
            <div aria-hidden className="absolute inset-0 grid place-items-center bg-foreground/[0.02]">
              <span className="px-6 text-center font-display text-lg font-semibold text-muted/40">
                {address}
              </span>
            </div>
            
            <iframe 
              src={mapEmbedSrc} 
              title={address} 
              loading="lazy" 
              className="relative aspect-[4/3] w-full border-0 grayscale-[0.25] contrast-[1.04]" 
              referrerPolicy="no-referrer-when-downgrade" 
            />
          </div>

          <a 
            href="https://maps.google.com/?q=вул.+Антоновича%2C+44%2C+Київ" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-6 inline-block text-sm font-medium underline underline-offset-4 opacity-70 transition-opacity hover:opacity-100"
          >
            Відкрити в Google Maps
          </a>
        </div>

        {/* Right Column: Contact Details & CTA */}
        <div className="flex flex-col justify-center gap-8 lg:pl-12">
          <Reveal delay={0.2}>
            <div>
              <h3 className="mb-4 text-sm uppercase text-muted">Години роботи</h3>
              <div className="divide-y divide-foreground/10 border-t border-foreground/10">
                <div className="flex items-baseline justify-between py-4 text-base">
                  <span className="text-muted">Понеділок — Неділя</span>
                  <span className="font-display font-semibold">11:00 — 22:00</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col items-start gap-6">
              <div>
                <h3 className="mb-2 text-sm uppercase text-muted">Контакти</h3>
                <a 
                  href="tel:+380443332211" 
                  className="font-display text-2xl font-bold transition-colors hover:text-accent"
                >
                  +380 (44) 333-22-11
                </a>
              </div>

              <div className="flex flex-col items-start">
                <Magnetic>
                  <a 
                    href="#booking" 
                    className="inline-flex items-center gap-3 bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground transition-transform duration-300" 
                    style={{ borderRadius: "var(--radius-control)" }}
                  >
                    Забронювати стіл
                    <svg 
                      width="18" 
                      height="14" 
                      viewBox="0 0 18 14" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path d="M1 7H17M17 7L11 1M17 7L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </Magnetic>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
                  Рекомендуємо бронювати столик заздалегідь для вечірніх візитів та святкових подій.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}