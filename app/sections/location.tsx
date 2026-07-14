"use client";
import { Reveal, Magnetic } from "@/components/mechanics";
import { ArrowUpRight } from "@phosphor-icons/react";

export function SectionLocation() {
  const address = "вул. Антоновича, 44, Київ";
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  const mapExternalUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section id="location" className="relative overflow-hidden bg-surface py-[var(--space-act)]">
      <div className="relative z-10 mx-auto grid max-w-[88rem] gap-12 px-4 lg:grid-cols-2 lg:px-10">
        <div>
          <span className="rp-actno mb-5">ЛОКАЦІЯ</span>
          <Reveal>
            <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)]">
              Де ми знаходимось
            </h2>
          </Reveal>
          
          <p className="mt-8 font-display text-[clamp(1.4rem,2.4vw,2rem)] font-semibold leading-snug">
            {address}
          </p>

          <div className="relative mt-8 overflow-hidden bg-background" style={{ borderRadius: "var(--radius-surface)" }}>
            {/* Underlay with photo and grain for premium fallback */}
            <div aria-hidden className="absolute inset-0 grid place-items-center overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/14565115/pexels-photo-14565115.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
                alt="" 
                className="absolute inset-0 h-full w-full object-cover opacity-20"
                loading="lazy"
              />
              <div className="rp-grain absolute inset-0 opacity-30" />
              <span className="relative px-6 text-center font-display text-lg font-semibold text-muted">
                Завантаження карти...
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

          <div className="mt-8">
            <Magnetic>
              <a 
                href={mapExternalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] underline underline-offset-8 decoration-foreground/20 hover:decoration-accent transition-all duration-300"
              >
                Відкрити в Google Maps
                <ArrowUpRight weight="bold" className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Magnetic>
          </div>
        </div>

        <div className="lg:pt-16">
          <div className="divide-y divide-foreground/10">
            <div className="flex items-baseline justify-between py-5 text-base">
              <span className="text-muted uppercase tracking-widest text-xs">Графік роботи</span>
              <span className="font-display text-xl font-medium italic">Щодня</span>
            </div>
            
            <div className="flex items-baseline justify-between py-6 text-base lg:text-lg">
              <span className="text-muted">Понеділок — Неділя</span>
              <span className="font-display font-bold">11:00 – 22:00</span>
            </div>

            <div className="flex items-baseline justify-between py-6 text-base lg:text-lg">
              <span className="text-muted">Кухня працює до</span>
              <span className="font-display font-bold">21:30</span>
            </div>
          </div>

          <div className="mt-16 border-t border-foreground/10 pt-10">
            <span className="text-xs uppercase tracking-[0.3em] text-muted block mb-4">Бронювання столів</span>
            <div className="flex flex-col gap-1">
              <a 
                href="tel:+380443332211" 
                className="font-display text-3xl lg:text-4xl transition-colors duration-300 hover:text-accent"
              >
                +380 (44) 333-22-11
              </a>
              <p className="text-muted text-sm mt-2 opacity-70">
                Радимо бронювати столик заздалегідь для вечірніх візитів.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}