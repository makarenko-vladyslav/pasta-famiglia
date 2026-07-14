"use client";
import { Reveal, Magnetic } from "@/components/mechanics";
import { ArrowUpRight } from "@phosphor-icons/react";

export function SectionLocation() {
  const addressLine = "вул. Антоновича, 44, Київ";
  const googleMapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressLine)}`;
  const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(addressLine)}&output=embed`;

  return (
    <section id="location" className="relative overflow-hidden bg-background py-[var(--space-act)]">
      <div className="relative z-10 mx-auto grid max-w-[88rem] gap-12 px-4 lg:grid-cols-2 lg:px-10">
        <div>
          <span className="rp-actno mb-5 text-sm uppercase tracking-[0.3em] text-muted">Локація</span>
          <Reveal>
            <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)]">
              Чекаємо на вас у самому серці міста
            </h2>
          </Reveal>
          
          <p className="mt-8 font-display text-[clamp(1.4rem,2.4vw,2rem)] font-semibold leading-snug">
            {addressLine}
          </p>

          <div className="relative mt-8 overflow-hidden bg-background/5" style={{ borderRadius: "var(--radius-surface)" }}>
            {/* Styled underlay for loading states */}
            <div aria-hidden className="absolute inset-0 grid place-items-center">
              <span className="px-6 text-center font-display text-lg font-semibold text-muted/40">
                {addressLine}
              </span>
            </div>
            
            <iframe 
              src={mapEmbedSrc} 
              title={addressLine} 
              loading="lazy" 
              className="relative aspect-[4/3] w-full border-0 grayscale-[0.25] contrast-[1.04] opacity-90" 
              referrerPolicy="no-referrer-when-downgrade" 
            />
          </div>

          <div className="mt-8">
            <Magnetic>
              <a 
                href={googleMapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-foreground px-5 py-3 text-sm text-background transition-transform duration-200 hover:scale-[1.02] lg:text-base"
                style={{ borderRadius: "var(--radius-control)" }}
              >
                Маршрут у картах
                <ArrowUpRight size={18} weight="bold" />
              </a>
            </Magnetic>
          </div>
        </div>

        <div className="lg:pt-16">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px flex-1 bg-foreground/10" />
            <span className="text-sm uppercase tracking-widest text-muted">Графік роботи</span>
            <span className="h-px flex-1 bg-foreground/10" />
          </div>

          <div className="divide-y divide-foreground/10">
            <div className="flex items-baseline justify-between py-5 text-base lg:text-lg">
              <span className="text-muted">Пн – Нд</span>
              <span className="font-display font-semibold tracking-tight">11:00 – 22:00</span>
            </div>
          </div>

          <div className="mt-16 border-t border-foreground/10 pt-12">
            <span className="text-sm uppercase tracking-widest text-muted">Бронювання</span>
            <div className="mt-6 flex flex-col gap-4">
              <a 
                href="tel:+380443332211" 
                className="font-display text-[clamp(1.8rem,3vw,2.8rem)] font-bold leading-none transition-colors duration-300 hover:text-muted"
              >
                +380 (44) 333-22-11
              </a>
              <p className="text-lg text-muted">e2e-pasta-client@example.com</p>
            </div>
          </div>

          <div className="mt-12 overflow-hidden" style={{ borderRadius: "var(--radius-surface)" }}>
            <img 
              src="https://images.pexels.com/photos/6248866/pexels-photo-6248866.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
              alt="Інтер'єр ресторану Pasta Famiglia" 
              loading="lazy"
              className="aspect-video w-full object-cover transition-transform duration-1000 hover:scale-[1.04]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}