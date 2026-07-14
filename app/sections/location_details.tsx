"use client";
import { Reveal, Magnetic } from "@/components/mechanics";
import { Phone, MapPin } from "@phosphor-icons/react";

/**
 * SECTION: Location Details
 * ROLE: ACT V: The Close. Find Us.
 * BUSINESS: Pasta Famiglia
 * LANGUAGE: Ukrainian (uk)
 */
export function SectionLocationDetails() {
  const address = "вул. Антоновича, 44, Київ";
  const phone = "+380 (44) 333-22-11";
  const hours = "11:00–22:00";
  const days = "Пн–Нд";
  const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  const mapSearchUrl = `https://www.google.com/maps/search/${encodeURIComponent(address)}`;

  return (
    <section id="location_details" className="relative overflow-hidden bg-surface py-[var(--space-act)]">
      <div className="relative z-10 mx-auto grid max-w-[88rem] gap-12 px-4 lg:grid-cols-2 lg:px-10">
        {/* Left Column: Heading, Address & Map */}
        <div>
          <span className="rp-actno mb-5 inline-block text-[12px] uppercase tracking-[0.3em] font-mono">Локація</span>
          
          <Reveal>
            <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)]">
              Смак Італії зовсім поруч
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-8 font-display text-[clamp(1.4rem,2.4vw,2rem)] font-semibold leading-snug">
              {address}
            </p>
          </Reveal>

          {/* Google map iframe block */}
          <div className="relative mt-8 overflow-hidden bg-background" style={{ borderRadius: "var(--radius-surface)" }}>
            {/* Styled underlay for slow loading */}
            <div aria-hidden className="absolute inset-0 grid place-items-center bg-foreground/5">
              <div className="text-center px-6">
                <MapPin size={32} weight="light" className="mx-auto mb-3 text-muted" />
                <span className="font-display text-lg font-semibold text-muted">{address}</span>
              </div>
            </div>
            
            <iframe 
              src={mapEmbedSrc} 
              title={address} 
              loading="lazy" 
              className="relative aspect-[4/3] w-full border-0 grayscale-[0.2] contrast-[1.05] z-10" 
              referrerPolicy="no-referrer-when-downgrade" 
            />
          </div>

          <div className="mt-6">
            <a 
              href={mapSearchUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm uppercase tracking-widest text-muted hover:text-foreground transition-colors duration-300"
            >
              <span className="border-b border-muted/30 group-hover:border-foreground">Відкрити в картах</span>
              <span className="text-xs">↗</span>
            </a>
          </div>
        </div>

        {/* Right Column: Schedule & Contact */}
        <div className="lg:pt-16 flex flex-col justify-between">
          <div>
            <Reveal>
              <h3 className="mb-8 font-display text-xs uppercase text-muted">Години роботи</h3>
            </Reveal>
            
            <div className="divide-y divide-foreground/10 border-t border-foreground/10">
              {/* HOURS ROW */}
              <div className="flex items-baseline justify-between py-6 text-base lg:text-lg">
                <span className="text-muted font-body">{days}</span>
                <span className="font-display font-semibold text-[1.5rem]">{hours}</span>
              </div>
            </div>
          </div>

          <div className="mt-16 lg:mt-0 pt-12 border-t border-foreground/10">
            <Reveal>
              <span className="mb-4 block font-display text-xs uppercase tracking-[0.2em] text-muted">Бронювання та питання</span>
            </Reveal>
            
            <Magnetic>
              <a 
                href={`tel:${phone.replace(/\s+/g, '')}`}
                className="group flex items-center gap-4 py-2"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-foreground/10 bg-background transition-colors group-hover:bg-foreground group-hover:text-background">
                  <Phone size={20} weight="fill" />
                </div>
                <span className="font-display text-[clamp(1.5rem,3vw,2.5rem)] font-bold tracking-tight hover:underline transition-all">
                  {phone}
                </span>
              </a>
            </Magnetic>
            
            <p className="mt-6 text-sm text-muted max-w-xs font-body">
              Радимо бронювати столики заздалегідь, особливо у вечірній час та вихідні дні.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}