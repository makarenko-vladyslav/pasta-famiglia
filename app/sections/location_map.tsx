"use client";

import { Reveal, Magnetic } from "@/components/mechanics";
import { ArrowUpRight } from "@phosphor-icons/react";

export function SectionLocationMap() {
  const address = "вул. Антоновича, 44, Київ";
  const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  const googleMapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section id="location_map" className="relative overflow-hidden bg-surface pt-0 pb-[var(--space-act)] lg:pt-[var(--space-act)]">
      {/* Subtle architectural background as requested in Spec */}
      <div className="absolute inset-0 z-0 opacity-[0.06] grayscale pointer-events-none">
        <img 
          src="https://images.pexels.com/photos/10059904/pexels-photo-10059904.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
          alt="" 
          className="h-full w-full object-cover" 
          loading="lazy"
        />
      </div>
      
      <div className="relative z-10 mx-auto grid max-w-[88rem] gap-12 px-4 lg:grid-cols-2 lg:px-10">
        <div>
          <span className="rp-actno mb-5">Контакти</span>
          <Reveal>
            <h2 className="font-display font-bold leading-[0.9] text-[clamp(2.4rem,5vw,4.5rem)]">
              Чекаємо на вас у гості
            </h2>
          </Reveal>
          
          <Reveal delay={0.1}>
            <p className="mt-8 font-display text-[clamp(1.4rem,2.4vw,2rem)] font-semibold leading-snug">
              {address}
            </p>
          </Reveal>
          
          <div className="relative mt-8 overflow-hidden bg-surface" style={{ borderRadius: "var(--radius-surface)" }}>
            <div aria-hidden className="absolute inset-0 grid place-items-center">
              <span className="px-6 text-center font-display text-lg font-semibold text-muted">
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

          <div className="mt-8">
            <Magnetic>
              <a 
                href={googleMapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-foreground/10 px-5 py-3 text-sm font-medium transition-colors hover:bg-foreground hover:text-background lg:text-base"
                style={{ borderRadius: "var(--radius-control)" }}
              >
                Побудувати маршрут
                <ArrowUpRight size={18} weight="bold" />
              </a>
            </Magnetic>
          </div>
        </div>

        <div className="lg:pt-16">
          <div className="divide-y divide-foreground/10">
            {/* Hours Row from Facts */}
            <div className="flex items-baseline justify-between py-5 text-base">
              <span className="font-mono text-xs uppercase tracking-widest text-muted">Графік роботи</span>
              <span className="font-display text-xl font-medium">Пн–Нд 11:00–22:00</span>
            </div>
          </div>

          <div className="mt-16 space-y-12">
            <Reveal delay={0.2}>
              <div className="space-y-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">Резерв столів</span>
                <a 
                  href="tel:+380443332211" 
                  className="block font-display text-3xl transition-colors hover:text-muted lg:text-5xl"
                >
                  +380 (44) 333-22-11
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="space-y-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">Для запитань</span>
                <a 
                  href="mailto:e2e-pasta-client@example.com" 
                  className="block font-display text-xl transition-colors hover:text-muted lg:text-2xl"
                >
                  e2e-pasta-client@example.com
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}