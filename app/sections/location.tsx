"use client";
import { Reveal, Magnetic } from "@/components/mechanics";
import { ArrowUpRight } from "@phosphor-icons/react";

/**
 * ACT V: The Close — The Map
 * A premium location section featuring an embedded map and operational hours.
 */
export function SectionLocation() {
  const address = "вул. Антоновича, 44, Київ";
  const phone = "+380 (44) 333-22-11";
  const hours = "11:00–22:00";
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  const googleMapsUrl = "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(address);

  return (
    <section id="location" className="relative overflow-hidden bg-surface py-[var(--space-act)]">
      <div className="relative z-10 mx-auto grid max-w-[88rem] gap-12 px-4 lg:grid-cols-2 lg:px-10">
        <div>
          <span className="rp-actno mb-5 inline-block text-sm uppercase tracking-[0.3em] text-muted">Локація</span>
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

          {/* Google map block */}
          <Reveal delay={0.3}>
            <div className="relative mt-8 overflow-hidden bg-surface" style={{ borderRadius: "var(--radius-surface)" }}>
              {/* Styled underlay for loading states */}
              <div aria-hidden className="absolute inset-0 grid place-items-center">
                <span className="px-6 text-center font-display text-lg font-semibold text-muted">
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
          </Reveal>

          <div className="mt-6">
            <Magnetic>
              <a 
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-foreground transition-opacity hover:opacity-70"
              >
                <span>Відкрити в Google Maps</span>
                <ArrowUpRight size={16} />
              </a>
            </Magnetic>
          </div>
        </div>

        <div className="lg:pt-16">
          <Reveal>
            <div className="divide-y divide-foreground/10 border-t border-foreground/10">
              {/* HOURS ROWS */}
              <div className="flex items-baseline justify-between py-5 text-base lg:text-lg">
                <span className="text-sm uppercase tracking-widest text-muted">Понеділок — Неділя</span>
                <span className="font-display font-semibold text-xl lg:text-2xl">{hours}</span>
              </div>
              <div className="flex items-baseline justify-between py-5 text-base lg:text-lg">
                <span className="text-sm uppercase tracking-widest text-muted">Кухня працює до</span>
                <span className="font-display font-semibold text-xl lg:text-2xl">21:30</span>
              </div>
            </div>
          </Reveal>

          <div className="mt-12 lg:mt-24">
            <Reveal delay={0.4}>
              <span className="mb-4 block text-sm uppercase tracking-widest text-muted">Бронювання та питання</span>
              <Magnetic>
                <a 
                  href={`tel:${phone.replace(/\s/g, '')}`} 
                  className="inline-block font-display text-[clamp(1.5rem,4vw,3.5rem)] font-bold transition-colors hover:text-accent"
                >
                  {phone}
                </a>
              </Magnetic>
              <p className="mt-4 max-w-sm text-sm text-muted">
                Зателефонуйте нам, щоб забронювати столик для вашої родини або особливої події.
              </p>
            </Reveal>
          </div>
          
          {/* Decorative imagery context */}
          <div className="mt-12 hidden overflow-hidden lg:block" style={{ borderRadius: "var(--radius-surface)" }}>
            <img 
              src="https://images.pexels.com/photos/9829424/pexels-photo-9829424.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
              alt="Інтер'єр Pasta Famiglia"
              loading="lazy"
              className="aspect-[16/10] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}