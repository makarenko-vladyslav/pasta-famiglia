"use client";
import { Reveal, Magnetic } from "@/components/mechanics";

export function SectionLocation() {
  const address = "вул. Антоновича, 44, Київ";
  const phone = "+380 (44) 333-22-11";
  const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section id="location" className="relative overflow-hidden bg-surface py-[var(--space-act)]">
      <div className="relative z-10 mx-auto grid max-w-[88rem] gap-12 px-4 lg:grid-cols-2 lg:px-10">
        <div>
          <Reveal>
            <span className="rp-actno mb-5 inline-block text-sm uppercase tracking-[0.3em] text-muted">
              Локація
            </span>
          </Reveal>
          
          <Reveal delay={0.1}>
            <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)]">
              Ми чекаємо на вас
            </h2>
          </Reveal>
          
          <Reveal delay={0.2}>
            <p className="mt-8 font-display text-[clamp(1.4rem,2.4vw,2rem)] font-semibold leading-snug">
              {address}
            </p>
          </Reveal>

          {/* Google map */}
          <Reveal delay={0.3}>
            <div className="relative mt-8 overflow-hidden bg-surface" style={{ borderRadius: "var(--radius-surface)" }}>
              {/* styled underlay so a slow/blocked map never reads as a grey void */}
              <div aria-hidden className="absolute inset-0 grid place-items-center">
                <span className="px-6 text-center font-display text-lg font-semibold text-muted opacity-50">
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
              href={googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-semibold underline decoration-foreground/20 underline-offset-4 transition-colors hover:decoration-foreground"
            >
              Відкрити на Google Картах
            </a>
          </Reveal>
        </div>

        {/* right column: hours + phone + booking CTA */}
        <div className="flex flex-col justify-center gap-8 lg:pl-6">
          <Reveal delay={0.2}>
            <div>
              <h3 className="mb-4 text-sm uppercase text-muted">Години роботи</h3>
              <div className="divide-y divide-foreground/10">
                <div className="flex items-baseline justify-between py-3 text-base">
                  <span className="text-muted">Понеділок — Неділя</span>
                  <span className="font-semibold">11:00 — 22:00</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="mb-2 text-sm uppercase text-muted">Контакти</h3>
                <a 
                  href={`tel:${phone.replace(/\D/g, '')}`} 
                  className="font-display text-2xl font-bold tracking-tight transition-colors hover:text-accent lg:text-3xl"
                >
                  {phone}
                </a>
              </div>

              <div>
                <Magnetic>
                  <a 
                    href="#booking" 
                    className="inline-flex items-center gap-3 bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground" 
                    style={{ borderRadius: "var(--radius-control)" }}
                  >
                    Забронювати стіл
                    <span aria-hidden className="text-xl">→</span>
                  </a>
                </Magnetic>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
                  Рекомендуємо бронювати заздалегідь, особливо у вечірній час та вихідні дні.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}