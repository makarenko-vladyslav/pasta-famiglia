"use client";
import { Reveal, Magnetic } from "@/components/mechanics";
import { ArrowUpRight, Phone } from "@phosphor-icons/react";

/**
 * ACT V: The Close.
 * A logistics-focused act providing the physical anchor for the brand.
 * Dark/Surface treatment to contrast with the preceding proof act.
 */
export function SectionLocation() {
  const address = "вул. Антоновича, 44, Київ";
  const phone = "+380 (44) 333-22-11";
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  const mapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section id="location" className="relative overflow-hidden bg-surface py-[var(--space-act)]">
      <div className="relative z-10 mx-auto grid max-w-[88rem] gap-12 px-4 lg:grid-cols-2 lg:px-10">
        <div>
          <span className="rp-actno mb-5">Локація</span>
          <Reveal>
            <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)]">
              Чекаємо на вас
            </h2>
          </Reveal>
          
          <Reveal delay={0.2}>
            <p className="mt-8 font-display text-[clamp(1.4rem,2.4vw,2rem)] font-semibold leading-snug">
              {address}
            </p>
          </Reveal>

          {/* Google map container */}
          <div className="relative mt-8 overflow-hidden bg-background/5" style={{ borderRadius: "var(--radius-surface)" }}>
            {/* Styled underlay for loading state */}
            <div aria-hidden className="absolute inset-0 grid place-items-center">
              <span className="px-6 text-center font-display text-lg font-semibold text-muted opacity-20">
                {address}
              </span>
            </div>
            
            <iframe 
              src={mapEmbedUrl} 
              title={address} 
              loading="lazy" 
              className="relative aspect-[4/3] w-full border-0 grayscale-[0.5] contrast-[1.04] invert-[0.05]" 
              referrerPolicy="no-referrer-when-downgrade" 
            />
          </div>

          <div className="mt-4">
            <Magnetic>
              <a
                href={mapSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium tracking-wide uppercase hover:opacity-70 transition-opacity"
              >
                Відкрити в Картах <ArrowUpRight size={16} weight="bold" />
              </a>
            </Magnetic>
          </div>
        </div>

        <div className="lg:pt-16">
          <div className="divide-y divide-foreground/10 border-t border-foreground/10">
            {/* Hours Row */}
            <div className="flex items-baseline justify-between py-6 text-base lg:text-lg">
              <span className="text-sm uppercase tracking-widest text-muted">Графік роботи</span>
              <span className="font-display font-semibold">Пн — Нд 11:00 – 22:00</span>
            </div>
          </div>

          {/* Phone Block */}
          <div className="mt-16 lg:mt-24">
            <span className="text-sm uppercase tracking-widest text-muted">Забронювати стіл</span>
            <Reveal delay={0.3}>
              <div className="mt-4">
                <Magnetic>
                  <a 
                    href={`tel:${phone.replace(/\D/g, '')}`} 
                    className="group flex items-center gap-4 font-display text-[clamp(1.8rem,4vw,3.5rem)] font-bold leading-none transition-colors hover:text-accent"
                  >
                    {phone}
                    <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-foreground/10 lg:flex">
                      <Phone size={20} weight="fill" className="transition-transform duration-500 group-hover:rotate-12" />
                    </div>
                  </a>
                </Magnetic>
              </div>
            </Reveal>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
              Для компаній від 6 осіб рекомендуємо бронювати заздалегідь, щоб ми підготували найкраще місце для вашої родини.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative background element for large screens */}
      <div className="pointer-events-none absolute right-[-5%] bottom-[-5%] hidden lg:block">
        <span className="rp-watermark text-[15rem] leading-none opacity-[0.03] select-none">
          FAMIGLIA
        </span>
      </div>
    </section>
  );
}