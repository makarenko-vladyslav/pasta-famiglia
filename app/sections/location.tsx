"use client";
import { Reveal, Magnetic } from "@/components/mechanics";
import { Phone, MapPin } from "@phosphor-icons/react";

export function SectionLocation() {
  const address = "вул. Антоновича, 44, Київ";
  const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  const phone = "+380 (44) 333-22-11";
  const phoneClean = "+380443332211";
  const hours = "11:00–22:00";
  const days = "Пн–Нд";

  return (
    <section id="location" className="relative overflow-hidden bg-surface pt-0 pb-[var(--space-act)] lg:pt-[var(--space-act)]">
      {/* Background Garnish */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5 grayscale">
        <img 
          src="https://images.pexels.com/photos/35380430/pexels-photo-35380430.png?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
          alt="" 
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="relative z-10 mx-auto grid max-w-[88rem] gap-12 px-4 lg:grid-cols-2 lg:px-10">
        <div>
          <span className="rp-actno mb-5 inline-block">Локація</span>
          <Reveal>
            <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)]">
              Завітайте до нас
            </h2>
          </Reveal>
          
          <Reveal delay={0.1}>
            <p className="mt-8 font-display text-[clamp(1.4rem,2.4vw,2rem)] font-semibold leading-snug">
              {address}
            </p>
          </Reveal>

          {/* Google map */}
          <div className="relative mt-8 overflow-hidden bg-surface" style={{ borderRadius: "var(--radius-surface)" }}>
            {/* styled underlay */}
            <div aria-hidden className="absolute inset-0 grid place-items-center bg-background/50">
              <div className="flex flex-col items-center gap-2">
                <MapPin size={32} className="text-muted" />
                <span className="px-6 text-center font-display text-lg font-semibold text-muted">{address}</span>
              </div>
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
              className="text-sm font-semibold uppercase tracking-widest text-foreground hover:text-accent transition-colors duration-300"
            >
              Відкрити в картах →
            </a>
          </div>
        </div>

        {/* Right column: Contacts and Hours */}
        <div className="flex flex-col justify-center gap-12 lg:pl-12 lg:border-l lg:border-foreground/10">
          <Reveal delay={0.2}>
            <div>
              <h3 className="mb-6 text-sm uppercase text-muted">Години роботи</h3>
              <div className="divide-y divide-foreground/10 border-t border-foreground/10">
                <div className="flex items-baseline justify-between py-4 text-base lg:text-lg">
                  <span className="text-muted">{days}</span>
                  <span className="font-semibold font-display tracking-tight">{hours}</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col gap-6">
              <h3 className="text-sm uppercase text-muted">Контакти</h3>
              <div>
                <a 
                  href={`tel:${phoneClean}`} 
                  className="font-display text-[clamp(2rem,4vw,3.5rem)] font-bold leading-none tracking-tighter hover:text-accent transition-colors duration-300 block"
                >
                  {phone}
                </a>
                <p className="mt-2 text-muted font-body">e2e-pasta-client@example.com</p>
              </div>

              <div className="pt-4">
                <Magnetic>
                  <a 
                    href={`tel:${phoneClean}`} 
                    className="inline-flex items-center gap-3 bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground transition-transform duration-300" 
                    style={{ borderRadius: "var(--radius-control)" }}
                  >
                    Забронювати стіл
                    <span aria-hidden className="text-lg">→</span>
                  </a>
                </Magnetic>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
                  Рекомендуємо бронювати столи заздалегідь, особливо у вечірній час та на вихідні.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}