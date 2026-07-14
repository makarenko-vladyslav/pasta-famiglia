"use client";
import { Reveal, Magnetic } from "@/components/mechanics";

export function SectionLocation() {
  const address = "вул. Антоновича, 44, Київ";
  const phone = "+380 (44) 333-22-11";
  const phoneClean = "+380443332211";
  const hours = "11:00–22:00";
  const days = "Пн–Нд";
  const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  const mapExternalUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section id="location" className="relative overflow-hidden bg-surface py-[var(--space-act)]">
      <div className="relative z-10 mx-auto grid max-w-[88rem] gap-12 px-4 lg:grid-cols-2 lg:px-10">
        <div>
          <span className="rp-actno mb-5 text-sm uppercase tracking-[0.3em] text-muted block">Локація</span>
          <Reveal>
            <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)]">
              Місце зустрічі
            </h2>
          </Reveal>
          <p className="mt-8 font-display text-[clamp(1.4rem,2.4vw,2rem)] font-semibold leading-snug">
            {address}
          </p>
          
          <div className="relative mt-8 overflow-hidden bg-background" style={{ borderRadius: "var(--radius-surface)" }}>
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

          <div className="mt-6">
            <Magnetic>
              <a 
                href={mapExternalUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm font-semibold uppercase tracking-wider border-b border-foreground/20 pb-1 hover:border-accent transition-colors duration-300"
              >
                Відкрити на картах
              </a>
            </Magnetic>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-12 lg:pl-12">
          <div>
            <h3 className="mb-4 text-sm uppercase text-muted">Графік роботи</h3>
            <div className="divide-y divide-foreground/10">
              <div className="flex items-baseline justify-between py-4 text-base lg:text-lg">
                <span className="text-muted">{days}</span>
                <span className="font-semibold font-display tracking-tight">{hours}</span>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-6">
              <h3 className="mb-4 text-sm uppercase text-muted">Контакти</h3>
              <a 
                href={`tel:${phoneClean}`} 
                className="font-display text-[clamp(1.5rem,3vw,2.5rem)] font-bold hover:text-accent transition-colors duration-300"
              >
                {phone}
              </a>
            </div>
            
            <Magnetic>
              <a 
                href={`tel:${phoneClean}`} 
                className="mt-4 inline-flex items-center gap-3 bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground transition-transform duration-300" 
                style={{ borderRadius: "var(--radius-control)" }}
              >
                Забронювати стіл
                <span aria-hidden className="text-xl">→</span>
              </a>
            </Magnetic>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted italic">
              Рекомендуємо бронювати столик заздалегідь, особливо у вечірній час та вихідні дні.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}