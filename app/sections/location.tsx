"use client";
import { Reveal, Magnetic } from "@/components/mechanics";

/**
 * ACT V: Location
 * Split 50/50 layout. Left: Map & Address. Right: Hours & Contacts.
 * Following SKELETON and SITE LANGUAGE (uk).
 */
export function SectionLocation() {
  const address = "вул. Антоновича, 44, Київ";
  const phone = "+380 (44) 333-22-11";
  const phoneRaw = "+380443332211";
  const hours = "11:00–22:00";
  const days = "Пн–Нд";
  const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  const mapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section id="location" className="relative overflow-hidden bg-background py-[var(--space-act)]">
      <div className="relative z-10 mx-auto grid max-w-[88rem] gap-12 px-4 lg:grid-cols-2 lg:px-10">
        <div>
          <span className="rp-actno mb-5 block text-sm uppercase tracking-[0.3em] font-medium opacity-60">Локація</span>
          <Reveal>
            <h2 className="font-display font-bold leading-[0.9] text-[clamp(2.4rem,5vw,4.5rem)]">
              Смак Італії у серці Києва
            </h2>
          </Reveal>
          
          <p className="mt-8 font-display text-[clamp(1.4rem,2.4vw,2rem)] font-semibold leading-snug">
            {address}
          </p>

          {/* Google map frame */}
          <div className="relative mt-8 overflow-hidden bg-background/5" style={{ borderRadius: "var(--radius-surface)" }}>
            {/* styled underlay so a slow/blocked map never reads as a grey void */}
            <div aria-hidden className="absolute inset-0 grid place-items-center">
              <span className="px-6 text-center font-display text-lg font-semibold text-muted/40">
                {address}
              </span>
            </div>
            <iframe 
              src={mapEmbedSrc} 
              title={address} 
              loading="lazy" 
              className="relative aspect-[4/3] w-full border-0 grayscale-[0.25] contrast-[1.04] transition-all duration-700 hover:grayscale-0" 
              referrerPolicy="no-referrer-when-downgrade" 
            />
          </div>

          <div className="mt-6">
            <Magnetic>
              <a 
                href={mapSearchUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block text-sm font-semibold uppercase tracking-widest border-b border-foreground/20 pb-1 hover:border-foreground transition-colors"
              >
                Відкрити в Картах
              </a>
            </Magnetic>
          </div>
        </div>

        <div className="lg:pt-16">
          <div className="divide-y divide-foreground/10 border-t border-foreground/10 lg:border-t-0">
            {/* HOURS ROW */}
            <div className="flex items-baseline justify-between py-5 text-base lg:text-lg">
              <span className="text-muted uppercase tracking-wider text-sm">Години роботи</span>
              <div className="text-right">
                <span className="block font-semibold">{days}</span>
                <span className="block font-display text-2xl mt-1">{hours}</span>
              </div>
            </div>
          </div>

          {/* PHONE BLOCK */}
          <div className="mt-12 pt-12 border-t border-foreground/10">
            <Reveal>
              <span className="text-sm uppercase tracking-[0.25em] text-muted block mb-6">Бронювання столів</span>
              <div className="relative inline-block">
                <Magnetic>
                  <a 
                    href={`tel:${phoneRaw}`} 
                    className="font-display text-[clamp(1.8rem,4vw,3.2rem)] leading-none hover:text-foreground/70 transition-colors"
                  >
                    {phone}
                  </a>
                </Magnetic>
              </div>
            </Reveal>
            
            <p className="mt-8 text-sm text-muted max-w-xs leading-relaxed">
              Рекомендуємо бронювати столик заздалегідь, особливо для вечірнього візиту у вихідні дні.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}