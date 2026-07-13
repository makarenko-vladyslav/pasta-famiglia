"use client";
import { Reveal, Magnetic } from "@/components/mechanics";

export function SectionLocation() {
  const address = "вул. Антоновича, 44, Київ";
  const hours = "Пн–Нд 11:00–22:00";
  const phone = "+380 (44) 333-22-11";
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  return (
    <section id="location" className="relative overflow-hidden bg-surface py-[var(--space-act)]">
      <div className="relative z-10 mx-auto grid max-w-[88rem] gap-12 px-4 lg:grid-cols-2 lg:px-10">
        <div>
          <span className="rp-actno mb-5 inline-block text-sm uppercase tracking-[0.3em] text-muted">
            Локація
          </span>
          <Reveal>
            <h2 className="font-display font-bold leading-[0.9] text-[clamp(2.4rem,5vw,4.5rem)]">
              Чекаємо на <br /> вас у гості
            </h2>
          </Reveal>
          
          <p className="mt-8 font-display text-[clamp(1.4rem,2.4vw,2rem)] font-semibold leading-snug">
            {address}
          </p>

          <div className="relative mt-8 overflow-hidden bg-background/5" style={{ borderRadius: "var(--radius-surface)" }}>
            {/* Styled underlay so a slow/blocked map never reads as a grey void */}
            <div aria-hidden className="absolute inset-0 grid place-items-center bg-foreground/5">
              <span className="px-6 text-center font-display text-lg font-semibold text-muted/40">
                {address}
              </span>
            </div>
            <iframe 
              src={mapEmbedUrl} 
              title={address} 
              loading="lazy" 
              className="relative aspect-[4/3] w-full border-0 grayscale-[0.25] contrast-[1.04]" 
              referrerPolicy="no-referrer-when-downgrade" 
            />
          </div>

          <div className="mt-6">
            <Magnetic>
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-foreground hover:opacity-70 transition-opacity"
              >
                <span>Відкрити на картах</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </Magnetic>
          </div>
        </div>

        <div className="lg:pt-16">
          <div className="divide-y divide-foreground/10">
            <div className="flex items-baseline justify-between py-5 text-base lg:text-lg">
              <span className="text-muted font-body uppercase tracking-wider text-xs lg:text-sm">Графік роботи</span>
              <span className="font-display font-semibold text-xl lg:text-2xl">{hours}</span>
            </div>
            <div className="flex items-baseline justify-between py-5 text-base lg:text-lg">
              <span className="text-muted font-body uppercase tracking-wider text-xs lg:text-sm">Кухня зачиняється</span>
              <span className="font-display font-semibold text-xl lg:text-2xl">21:30</span>
            </div>
          </div>

          <div className="mt-12 pt-12 border-t border-foreground/10">
            <p className="text-sm uppercase tracking-widest text-muted mb-4">Бронювання та питання</p>
            <Reveal delay={0.2}>
              <a 
                href={`tel:${phone.replace(/\s/g, '')}`} 
                className="font-display text-[clamp(1.8rem,3vw,3.5rem)] font-bold leading-none hover:text-muted transition-colors"
              >
                {phone}
              </a>
            </Reveal>
          </div>
        </div>
      </div>
      
      {/* Decorative background element for large screens */}
      <div className="pointer-events-none absolute -bottom-20 -right-20 hidden lg:block select-none opacity-[0.03]">
        <span className="font-display text-[25rem] font-bold leading-none">PASTA</span>
      </div>
    </section>
  );
}