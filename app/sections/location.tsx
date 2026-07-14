"use client";
import { Reveal, Magnetic } from "@/components/mechanics";

export function SectionLocation() {
  const address = "вул. Антоновича, 44, Київ";
  const phone = "+380 (44) 333-22-11";
  const hours = "11:00–22:00";
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  const gmapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section id="location" className="relative overflow-hidden bg-surface py-[var(--space-act)]">
      <div className="relative z-10 mx-auto grid max-w-[88rem] gap-12 px-4 lg:grid-cols-2 lg:px-10">
        <div>
          <span className="rp-actno mb-5 block text-sm uppercase tracking-[0.25em] text-muted">Локація</span>
          <Reveal>
            <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)]">
              Чекаємо в гості
            </h2>
          </Reveal>
          <p className="mt-8 font-display text-[clamp(1.4rem,2.4vw,2rem)] font-semibold leading-snug">
            {address}
          </p>
          
          {/* Google map container */}
          <div className="relative mt-8 overflow-hidden bg-background" style={{ borderRadius: "var(--radius-surface)" }}>
            {/* styled underlay so a slow/blocked map never reads as a grey void */}
            <div aria-hidden className="absolute inset-0 grid place-items-center bg-foreground/5">
              <span className="px-6 text-center font-display text-lg font-semibold text-muted">
                {address}
              </span>
            </div>
            <iframe 
              src={mapSrc} 
              title={address} 
              loading="lazy" 
              className="relative aspect-[4/3] w-full border-0 grayscale-[0.25] contrast-[1.04]" 
              referrerPolicy="no-referrer-when-downgrade" 
            />
          </div>
          
          <div className="mt-4">
            <a 
              href={gmapsUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm font-medium underline underline-offset-4 opacity-70 transition-opacity hover:opacity-100"
            >
              Відкрити в Google Maps
            </a>
          </div>
        </div>

        {/* right column is a COMPLETE contact card — hours + phone + booking CTA */}
        <div className="flex flex-col justify-center gap-8 lg:pl-6">
          <div>
            <h3 className="mb-4 text-sm uppercase text-muted">Графік роботи</h3>
            <div className="divide-y divide-foreground/10 border-t border-foreground/10">
              <div className="flex items-baseline justify-between py-4 text-base lg:text-lg">
                <span className="text-muted">Понеділок — Неділя</span>
                <span className="font-display font-semibold tracking-wide">{hours}</span>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <h3 className="mb-4 text-sm uppercase text-muted">Контакти</h3>
            <div className="mb-8">
              <p className="font-display text-[clamp(1.5rem,3vw,2.5rem)] font-medium leading-none">
                {phone}
              </p>
              <p className="mt-2 text-sm text-muted">e2e-pasta-client@example.com</p>
            </div>
            
            <Magnetic>
              <a 
                href={`tel:${phone.replace(/\D/g, '')}`} 
                className="mt-6 inline-flex items-center gap-3 bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground transition-transform active:scale-95" 
                style={{ borderRadius: "var(--radius-control)" }}
              >
                Забронювати стіл<span aria-hidden className="text-xl">→</span>
              </a>
            </Magnetic>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted italic">
              Рекомендуємо бронювати столик заздалегідь для особливого вечора в колі Pasta Famiglia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}