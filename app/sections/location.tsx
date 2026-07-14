"use client";
import { Reveal, Magnetic } from "@/components/mechanics";

export function SectionLocation() {
  const address = "вул. Антоновича, 44, Київ";
  const phone = "+380 (44) 333-22-11";
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section id="location" className="relative overflow-hidden bg-surface py-[var(--space-act)]">
      <div className="relative z-10 mx-auto grid max-w-[88rem] gap-12 px-4 lg:grid-cols-2 lg:px-10">
        <div>
          <span className="rp-actno mb-5 block text-sm uppercase tracking-[0.3em] text-muted">Локація</span>
          <Reveal>
            <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)]">
              Чекаємо на вас
            </h2>
          </Reveal>
          <p className="mt-8 font-display text-[clamp(1.4rem,2.4vw,2rem)] font-semibold leading-snug">
            {address}
          </p>
          
          <div className="relative mt-8 overflow-hidden bg-background/50" style={{ borderRadius: "var(--radius-surface)" }}>
            {/* styled underlay */}
            <div aria-hidden className="absolute inset-0 grid place-items-center">
              <span className="px-6 text-center font-display text-lg font-semibold text-muted/40">
                Завантаження карти...
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

          <a 
            href={mapLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-4 inline-block text-sm font-medium tracking-wide underline underline-offset-4 opacity-70 transition-opacity hover:opacity-100"
          >
            Відкрити в Картах Google
          </a>
        </div>

        {/* right column */}
        <div className="flex flex-col justify-center gap-10 lg:pl-12">
          <div>
            <h3 className="mb-4 text-sm uppercase text-muted">Графік роботи</h3>
            <div className="divide-y divide-foreground/10">
              <div className="flex items-baseline justify-between py-4 text-base">
                <span className="text-muted">Пн — Нд</span>
                <span className="font-display text-lg font-semibold">11:00 — 22:00</span>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-2">
              <h3 className="mb-4 text-sm uppercase text-muted">Телефон</h3>
              <a 
                href={`tel:${phone.replace(/\D/g, '')}`} 
                className="font-display text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-accent transition-opacity hover:opacity-80"
              >
                {phone}
              </a>
            </div>

            <Magnetic>
              <a 
                href={`tel:${phone.replace(/\D/g, '')}`} 
                className="mt-8 inline-flex items-center gap-3 bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground" 
                style={{ borderRadius: "var(--radius-control)" }}
              >
                Забронювати стіл
                <span aria-hidden className="text-xl">→</span>
              </a>
            </Magnetic>
            
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
              Ми рекомендуємо бронювати стіл заздалегідь для вашого комфорту, особливо у вечірній час та вихідні дні.
            </p>
          </div>
        </div>
      </div>

      {/* Subtle brand watermark for desktop */}
      <div className="pointer-events-none absolute -right-20 bottom-10 hidden lg:block">
        <span className="rp-watermark select-none text-[15rem] font-display font-black leading-none opacity-[0.03]">
          PASTA
        </span>
      </div>
    </section>
  );
}