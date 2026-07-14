"use client";
import { Reveal, Magnetic } from "@/components/mechanics";

export function SectionLocation() {
  const address = "вул. Антоновича, 44, Київ";
  const phone = "+380 (44) 333-22-11";
  const phoneClean = "+380443332211";
  const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  return (
    <section id="location" className="relative overflow-hidden bg-surface py-[var(--space-act)]">
      <div className="relative z-10 mx-auto grid max-w-[88rem] gap-12 px-4 lg:grid-cols-2 lg:px-10">
        <div>
          <span className="rp-actno mb-5 block text-sm uppercase tracking-[0.3em] text-muted">Локація</span>
          <Reveal>
            <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)]">
              Чекаємо на вас у гості
            </h2>
          </Reveal>
          
          <div className="mt-8">
            <p className="font-display text-[clamp(1.4rem,2.4vw,2rem)] font-semibold leading-snug">
              {address}
            </p>
            {/* Trust Line: Stars + Reviews */}
            <p className="mt-2 flex items-center gap-2 text-sm font-medium">
              <span className="text-accent">★★★★★</span>
              <span>4.9 / 127 відгуків</span>
            </p>
          </div>

          <div className="relative mt-8 overflow-hidden bg-background/5" style={{ borderRadius: "var(--radius-surface)" }}>
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
              className="relative aspect-[4/3] w-full border-0 grayscale-[0.25] contrast-[1.04] lg:aspect-video" 
              referrerPolicy="no-referrer-when-downgrade" 
            />
          </div>
          
          <a 
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-semibold underline decoration-foreground/20 underline-offset-4 transition-colors hover:decoration-foreground"
          >
            Відкрити в Google Maps
          </a>
        </div>

        {/* right column is a COMPLETE contact card — hours + phone + booking CTA */}
        <div className="flex flex-col justify-center gap-12 lg:pl-12">
          <div>
            <h3 className="mb-4 text-sm uppercase text-muted">Графік роботи</h3>
            <div className="divide-y divide-foreground/10 border-y border-foreground/10">
              <div className="flex items-baseline justify-between py-4 text-base lg:text-lg">
                <span className="text-muted">Понеділок — Неділя</span>
                <span className="font-display font-bold">11:00 — 22:00</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <h3 className="mb-4 text-sm uppercase text-muted">Телефон</h3>
              <a 
                href={`tel:${phoneClean}`} 
                className="font-display text-[clamp(1.8rem,3vw,2.5rem)] font-bold transition-colors duration-300 hover:text-accent"
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
                Радимо бронювати столик заздалегідь, особливо для великих компаній та у вихідні дні.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}