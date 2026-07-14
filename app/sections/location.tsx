"use client";
import { Reveal, Magnetic } from "@/components/mechanics";

export function SectionLocation() {
  const address = "вул. Антоновича, 44, Київ";
  const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  const phone = "+380 (44) 333-22-11";
  const phoneHref = "tel:+380443332211";

  return (
    <section id="location" className="relative overflow-hidden bg-surface py-[var(--space-act)]">
      <div className="relative z-10 mx-auto grid max-w-[88rem] gap-12 px-4 lg:grid-cols-2 lg:px-10">
        <div>
          <span className="rp-actno mb-5 block text-sm uppercase tracking-[0.3em] text-muted">Локація</span>
          <Reveal>
            <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)]">
              Завітайте до нас
            </h2>
          </Reveal>
          
          <Reveal delay={0.2}>
            <p className="mt-8 font-display text-[clamp(1.4rem,2.4vw,2rem)] font-semibold leading-snug">
              {address}
            </p>
          </Reveal>

          <div 
            className="relative mt-8 overflow-hidden bg-background/5" 
            style={{ borderRadius: "var(--radius-surface)" }}
          >
            {/* styled underlay so a slow/blocked map never reads as a grey void */}
            <div aria-hidden className="absolute inset-0 grid place-items-center bg-foreground/5">
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
          
          <div className="mt-6">
            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium underline underline-offset-4 transition-colors hover:text-muted"
            >
              Відкрити в Google Maps
            </a>
          </div>
        </div>

        {/* right column is a COMPLETE contact card — hours + phone + booking CTA */}
        <div className="flex flex-col justify-center gap-10 lg:pl-12">
          <div>
            <h3 className="mb-6 text-sm uppercase text-muted">Години роботи</h3>
            <div className="divide-y divide-foreground/10 border-t border-foreground/10">
              <div className="flex items-baseline justify-between py-4 text-base lg:text-lg">
                <span className="text-muted">Понеділок — Неділя</span>
                <span className="font-display font-semibold">11:00 — 22:00</span>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex flex-col gap-2">
              <span className="text-sm uppercase tracking-[0.25em] text-muted">Бронювання та зв'язок</span>
              <a 
                href={phoneHref} 
                className="font-display text-2xl font-bold transition-colors hover:text-muted lg:text-3xl"
              >
                {phone}
              </a>
            </div>

            <div>
              <Magnetic>
                <a 
                  href="#booking" 
                  className="inline-flex items-center gap-3 bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground transition-transform duration-300" 
                  style={{ borderRadius: "var(--radius-control)" }}
                >
                  Забронювати стіл
                  <span aria-hidden className="text-xl">→</span>
                </a>
              </Magnetic>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
                Для компаній більше 6 осіб ми рекомендуємо бронювати столик за 2-3 дні до візиту.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}