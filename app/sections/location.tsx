"use client";

import { Reveal, Magnetic } from "@/components/mechanics";
import { ArrowUpRight } from "@phosphor-icons/react";

/**
 * ACT V: The Close - Find the Workshop.
 * Renders the physical presence and accessibility of Pasta Famiglia.
 */
export function SectionLocation() {
  const address = "вул. Антоновича, 44, Київ";
  const phone = "+380 (44) 333-22-11";
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  const externalMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section id="location" className="relative overflow-hidden bg-surface py-[var(--space-act)]">
      <div className="relative z-10 mx-auto grid max-w-[88rem] gap-12 px-4 lg:grid-cols-2 lg:px-10">
        <div>
          <span className="rp-actno mb-5">Локація</span>
          <Reveal>
            <h2 className="font-display font-bold leading-[0.9] tracking-[-0.03em] text-[clamp(2.4rem,5vw,4.5rem)]">
              Чекаємо на <br /> вас у гості
            </h2>
          </Reveal>
          
          <p className="mt-8 font-display text-[clamp(1.4rem,2.4vw,2rem)] font-semibold leading-snug">
            {address}
          </p>

          <div 
            className="relative mt-8 overflow-hidden bg-foreground/5" 
            style={{ borderRadius: "var(--radius-surface)" }}
          >
            {/* Styled underlay so a slow/blocked map never reads as a grey void */}
            <div aria-hidden className="absolute inset-0 grid place-items-center bg-foreground/5">
              <span className="px-6 text-center font-display text-lg font-semibold text-muted">
                {address}
              </span>
            </div>
            
            <iframe 
              src={mapUrl}
              title={address} 
              loading="lazy" 
              className="relative aspect-[4/3] w-full border-0 grayscale-[0.25] contrast-[1.04]" 
              referrerPolicy="no-referrer-when-downgrade" 
            />
          </div>

          <div className="mt-8">
            <Magnetic>
              <a 
                href={externalMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase hover:opacity-70 transition-opacity"
              >
                Відкрити в картах <ArrowUpRight size={18} weight="bold" />
              </a>
            </Magnetic>
          </div>
        </div>

        <div className="lg:pt-16">
          <div className="divide-y divide-foreground/10">
            {/* HOURS ROW TEMPLATE */}
            <div className="flex items-baseline justify-between py-5 text-base lg:text-lg">
              <span className="text-muted font-body">Понеділок — Неділя</span>
              <span className="font-display font-semibold text-xl">11:00 — 22:00</span>
            </div>
          </div>

          <div className="mt-16 lg:mt-24">
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-muted mb-4">Бронювання столів</p>
                <a 
                  href="tel:+380443332211" 
                  className="font-display text-[clamp(1.5rem,3vw,2.5rem)] font-bold hover:text-muted transition-colors duration-300"
                >
                  {phone}
                </a>
              </div>
              
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-muted mb-4">Електронна пошта</p>
                <a 
                  href="mailto:e2e-pasta-client@example.com" 
                  className="font-display text-xl lg:text-2xl hover:text-muted transition-colors duration-300"
                >
                  ciao@pastafamiglia.ua
                </a>
              </div>
            </div>

            <p className="mt-12 text-sm text-muted/60 border-t border-foreground/10 pt-8">
              ★ 4.9 · 127 відгуків · вул. Антоновича, 44, Київ
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}