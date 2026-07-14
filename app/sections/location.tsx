"use client";
import { Reveal, Magnetic } from "@/components/mechanics";

export function SectionLocation() {
  const address = "вул. Антоновича, 44, Київ";
  const phone = "+380 (44) 333-22-11";
  const phoneClean = phone.replace(/[^0-9+]/g, "");
  const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  const mapsEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  return (
    <section id="location" className="relative overflow-hidden bg-surface pt-0 pb-[var(--space-act)] lg:pt-[var(--space-act)]">
      {/* Background decoration from URL 11 */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] lg:w-1/2">
        <img 
          src="https://images.pexels.com/photos/14295998/pexels-photo-14295998.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
          alt="" 
          className="h-full w-full object-cover" 
          loading="lazy" 
        />
      </div>

      <div className="relative z-10 mx-auto grid max-w-[88rem] gap-12 px-4 lg:grid-cols-2 lg:px-10">
        <div className="relative">
          <span className="rp-actno mb-5">Локація</span>
          <Reveal>
            <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)]">
              Чекаємо на вас
            </h2>
          </Reveal>
          
          <p className="mt-8 font-display text-[clamp(1.4rem,2.4vw,2rem)] font-semibold leading-snug">
            {address}
          </p>

          <div 
            className="relative mt-8 overflow-hidden bg-surface ring-1 ring-foreground/5" 
            style={{ borderRadius: "var(--radius-surface)" }}
          >
            {/* Styled underlay for loading state */}
            <div aria-hidden className="absolute inset-0 grid place-items-center bg-foreground/[0.02]">
              <span className="max-w-[200px] px-6 text-center font-display text-lg font-semibold text-muted">
                {address}
              </span>
            </div>
            
            <iframe 
              src={mapsEmbedSrc} 
              title={address} 
              loading="lazy" 
              className="relative aspect-[4/3] w-full border-0 grayscale-[0.25] contrast-[1.04] transition-all duration-700 hover:grayscale-0" 
              referrerPolicy="no-referrer-when-downgrade" 
            />
          </div>

          <a 
            href={mapsSearchUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-6 inline-block text-sm font-semibold uppercase tracking-widest text-muted transition-colors hover:text-foreground"
          >
            Відкрити в Картах Google
          </a>
        </div>

        <div className="flex flex-col justify-center gap-12 lg:pl-12">
          <div>
            <h3 className="mb-4 text-sm uppercase text-muted">Графік роботи</h3>
            <div className="divide-y divide-foreground/10">
              <div className="flex items-baseline justify-between py-4 text-base lg:text-lg">
                <span className="text-muted">Понеділок — Неділя</span>
                <span className="font-display font-semibold">11:00 – 22:00</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-sm uppercase text-muted">Забронювати стіл</h3>
              <a 
                href={`tel:${phoneClean}`} 
                className="font-display text-3xl font-semibold tracking-tight transition-colors duration-300 hover:text-accent lg:text-4xl"
              >
                {phone}
              </a>
            </div>

            <Magnetic>
              <a 
                href="#hero" 
                className="inline-flex items-center gap-3 bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground transition-transform hover:scale-[1.02]" 
                style={{ borderRadius: "var(--radius-control)" }}
              >
                Забронювати візит <span aria-hidden className="text-xl">→</span>
              </a>
            </Magnetic>
            
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Для компаній понад 6 осіб ми рекомендуємо бронювати столик принаймні за 24 години до візиту.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}