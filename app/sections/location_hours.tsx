"use client";
import { Reveal, Magnetic } from "@/components/mechanics";

export function SectionLocationHours() {
  const address = "вул. Антоновича, 44, Київ";
  const phone = "+380 (44) 333-22-11";
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  const mapExternalUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section id="location_hours" className="relative overflow-hidden bg-surface py-[var(--space-act)]">
      <div className="relative z-10 mx-auto grid max-w-[88rem] gap-12 px-4 lg:grid-cols-2 lg:px-10">
        <div>
          <span className="rp-actno mb-5 block text-sm uppercase tracking-[0.3em] text-muted">Локація</span>
          
          <Reveal>
            <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)]">
              Чекаємо на <br /> вас у гості
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-8 font-display text-[clamp(1.4rem,2.4vw,2rem)] font-semibold leading-snug">
              {address}
            </p>
          </Reveal>

          {/* Google map */}
          <div 
            className="relative mt-8 overflow-hidden bg-surface" 
            style={{ borderRadius: "var(--radius-surface)" }}
          >
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
              className="relative aspect-[4/3] w-full border-0 grayscale-[0.25] contrast-[1.04] lg:aspect-video" 
              referrerPolicy="no-referrer-when-downgrade" 
            />
          </div>

          <div className="mt-6">
            <Magnetic>
              <a 
                href={mapExternalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-semibold border-b border-foreground/20 pb-1 hover:border-foreground transition-colors duration-300"
              >
                Відкрити в Картах
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="translate-y-px">
                  <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </Magnetic>
          </div>
        </div>

        <div className="lg:pt-16">
          <div className="divide-y divide-foreground/10 border-t border-foreground/10">
            {/* HOURS_ROWS */}
            <div className="flex items-baseline justify-between py-5 text-base lg:text-lg">
              <span className="text-muted">Пн–Нд</span>
              <span className="font-display font-semibold">11:00–22:00</span>
            </div>
          </div>

          {/* PHONE_BLOCK */}
          <div className="mt-16 border-t border-foreground/10 pt-10">
            <span className="block text-sm uppercase tracking-widest text-muted mb-4">Бронювання столів</span>
            <Reveal>
              <Magnetic>
                <a 
                  href={`tel:${phone.replace(/\D/g, '')}`} 
                  className="font-display text-[clamp(1.5rem,3vw,2.5rem)] font-bold leading-none hover:text-muted transition-colors duration-300"
                >
                  {phone}
                </a>
              </Magnetic>
            </Reveal>
            <p className="mt-4 text-sm text-muted max-w-xs">
              Зателефонуйте нам або завітайте особисто. Ми завжди раді бачити нові та знайомі обличчя.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}