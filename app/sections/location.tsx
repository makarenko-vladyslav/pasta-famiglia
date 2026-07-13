"use client";

import { Reveal, Magnetic } from "@/components/mechanics";
import { MapPin, Phone, ArrowUpRight } from "@phosphor-icons/react";

export function SectionLocation() {
  const address = "вул. Антоновича, 44, Київ";
  const phone = "+380 (44) 333-22-11";
  const googleMapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  return (
    <section id="location" className="relative overflow-hidden bg-surface py-[var(--space-act)]">
      <div className="relative z-10 mx-auto grid max-w-[88rem] gap-12 px-4 lg:grid-cols-2 lg:px-10">
        <div>
          <span className="rp-actno mb-5 block">13. Локація</span>
          <Reveal>
            <h2 className="font-display font-bold leading-[0.9] tracking-[-0.03em] text-[clamp(2.4rem,5vw,4.5rem)]">
              Чекаємо на вас у серці Києва
            </h2>
          </Reveal>
          
          <p className="mt-8 font-display text-[clamp(1.4rem,2.4vw,2rem)] font-semibold leading-snug">
            {address}
          </p>
          
          <p className="mt-2 text-sm text-muted">
            ★ 4.9 · 127 відгуків · {address}
          </p>

          <div className="relative mt-8 overflow-hidden bg-surface" style={{ borderRadius: "var(--radius-surface)" }}>
            {/* styled underlay so a slow/blocked map never reads as a grey void */}
            <div aria-hidden className="absolute inset-0 grid place-items-center bg-foreground/5">
              <span className="px-6 text-center font-display text-lg font-semibold text-muted opacity-40">
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

          <div className="mt-6">
            <Magnetic>
              <a 
                href={googleMapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-widest hover:text-muted transition-colors duration-200"
              >
                Відкрити в Google Maps <ArrowUpRight size={16} />
              </a>
            </Magnetic>
          </div>
        </div>

        <div className="lg:pt-16">
          <div className="divide-y divide-foreground/10 border-t border-foreground/10 lg:border-t-0">
            <div className="flex items-baseline justify-between py-6 text-base">
              <span className="text-muted font-display uppercase tracking-widest text-sm">Понеділок — Неділя</span>
              <span className="font-display text-xl font-semibold">11:00 — 22:00</span>
            </div>
            
            <div className="flex items-baseline justify-between py-6 text-base">
              <span className="text-muted font-display uppercase tracking-widest text-sm">Кухня працює до</span>
              <span className="font-display text-xl font-semibold">21:30</span>
            </div>
          </div>

          <div className="mt-12 space-y-8">
            <Reveal delay={0.2}>
              <div className="group flex flex-col gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-muted">Резерв столів</span>
                <a 
                  href={`tel:${phone.replace(/\s/g, '')}`} 
                  className="font-display text-[clamp(1.5rem,3vw,2.5rem)] font-bold transition-colors hover:text-muted"
                >
                  {phone}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="group flex flex-col gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-muted">Електронна пошта</span>
                <a 
                  href="mailto:e2e-pasta-client@example.com" 
                  className="font-display text-xl font-medium transition-colors hover:text-muted"
                >
                  e2e-pasta-client@example.com
                </a>
              </div>
            </Reveal>
            
            <div className="pt-8">
              <div className="relative aspect-video w-full overflow-hidden" style={{ borderRadius: "var(--radius-surface)" }}>
                <img 
                  src="https://images.pexels.com/photos/6249015/pexels-photo-6249015.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
                  alt="Інтер'єр Pasta Famiglia"
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10" />
                <div className="rp-grain pointer-events-none absolute inset-0 opacity-30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}