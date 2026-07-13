"use client";

import { Reveal, Magnetic } from "@/components/mechanics";
import { ArrowUpRight } from "@phosphor-icons/react";

/**
 * ACT IV: The Proof (Location Section)
 * Layout Law: Inverted locality act with interactive map and typographic schedule.
 */
export function SectionLocation() {
  const address = "вул. Антоновича, 44, Київ";
  const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  const mapExternalUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section id="location" className="relative overflow-hidden bg-background py-[var(--space-act)]">
      <div className="relative z-10 mx-auto grid max-w-[88rem] gap-12 px-4 lg:grid-cols-2 lg:px-10">
        {/* Left Column: Heading & Map */}
        <div>
          <span className="mb-5 block text-sm font-medium uppercase tracking-[0.3em] text-muted">
            Локація
          </span>
          
          <Reveal>
            <h2 className="font-display text-[clamp(2.4rem,5vw,4.5rem)] font-bold leading-[0.9] text-foreground">
              Заходьте в гості
            </h2>
          </Reveal>
          
          <p className="mt-8 font-display text-[clamp(1.4rem,2.4vw,2rem)] font-semibold leading-snug">
            вул. Антоновича, 44
          </p>

          {/* Google Map Embed */}
          <div className="relative mt-8 overflow-hidden bg-background/5" style={{ borderRadius: "var(--radius-surface)" }}>
            {/* Styled Underlay */}
            <div aria-hidden className="absolute inset-0 grid place-items-center bg-background/5">
              <span className="max-w-[200px] px-6 text-center font-display text-lg font-semibold text-muted/40">
                вул. Антоновича, 44
              </span>
            </div>
            
            <iframe 
              src={mapEmbedSrc} 
              title="вул. Антоновича, 44" 
              loading="lazy" 
              className="relative aspect-[4/3] w-full border-0 grayscale-[0.2] contrast-[1.04] transition-all duration-700" 
              referrerPolicy="no-referrer-when-downgrade" 
            />
          </div>

          <div className="mt-6">
            <Magnetic>
              <a 
                href={mapExternalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest transition-colors hover:text-muted"
              >
                Відкрити в Картах
                <ArrowUpRight size={18} className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            </Magnetic>
          </div>
        </div>

        {/* Right Column: Schedule & Contacts */}
        <div className="lg:pt-16">
          <div className="divide-y divide-foreground/10 border-t border-foreground/10 lg:border-t-0">
            {/* Hours Row */}
            <div className="flex items-baseline justify-between py-5 text-base lg:text-lg">
              <span className="text-muted">Пн – Нд</span>
              <span className="font-display font-semibold">11:00 – 22:00</span>
            </div>
            
            {/* Example of additional split if needed, otherwise following the single fact string */}
            <div className="flex items-baseline justify-between py-5 text-base lg:text-lg">
              <span className="text-muted">Кухня працює до</span>
              <span className="font-display font-semibold">21:30</span>
            </div>
          </div>

          {/* Phone Block */}
          <div className="mt-16 lg:mt-24">
            <span className="text-sm font-medium uppercase tracking-[0.3em] text-muted">
              Бронювання та питання
            </span>
            
            <div className="mt-6 space-y-4">
              <Reveal delay={0.2}>
                <a 
                  href="tel:+380443332211" 
                  className="block font-display text-[clamp(1.5rem,3vw,2.8rem)] font-bold leading-none transition-opacity hover:opacity-60"
                >
                  +380 (44) 333-22-11
                </a>
              </Reveal>
              
              <Reveal delay={0.3}>
                <a 
                  href="mailto:e2e-pasta-client@example.com" 
                  className="block text-lg text-muted transition-opacity hover:opacity-60"
                >
                  e2e-pasta-client@example.com
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}