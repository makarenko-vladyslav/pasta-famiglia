"use client";

import { Reveal, Magnetic } from "@/components/mechanics";

/**
 * SectionLocation - ACT V: The Close
 * A premium contact and location act featuring high-contrast typography,
 * real-time map integration, and refined editorial lists for hours.
 */
export function SectionLocation() {
  const address = "вул. Антоновича, 44, Київ";
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;

  return (
    <section id="location" className="relative overflow-hidden bg-surface py-[var(--space-act)] text-foreground">
      {/* Subtle film grain effect as requested in animation spec */}
      <div className="rp-grain pointer-events-none absolute inset-0 opacity-15" />
      
      <div className="relative z-10 mx-auto grid max-w-[88rem] gap-12 px-4 lg:grid-cols-2 lg:px-10">
        <div>
          <span className="rp-actno mb-5 text-muted">Локація</span>
          
          <Reveal delay={0.1}>
            <h2 className="font-display font-bold leading-[0.9] text-[clamp(2.4rem,5vw,4.5rem)]">
              Чекаємо на вечерю
            </h2>
          </Reveal>
          
          <Reveal delay={0.2}>
            <p className="mt-8 font-display text-[clamp(1.4rem,2.4vw,2rem)] font-semibold leading-snug">
              вул. Антоновича, 44, Київ
            </p>
          </Reveal>

          {/* Google map integration */}
          <Reveal delay={0.3}>
            <div 
              className="relative mt-8 overflow-hidden bg-background/5" 
              style={{ borderRadius: "var(--radius-surface)" }}
            >
              {/* Styled underlay for loading states */}
              <div aria-hidden className="absolute inset-0 grid place-items-center bg-foreground/5">
                <span className="px-6 text-center font-display text-lg font-semibold text-muted/40">
                  {address}
                </span>
              </div>
              
              <iframe 
                src={mapEmbedUrl} 
                title={address} 
                loading="lazy" 
                className="relative aspect-[4/3] w-full border-0 grayscale-[0.3] contrast-[1.05] transition-all duration-1000" 
                referrerPolicy="no-referrer-when-downgrade" 
              />
            </div>
          </Reveal>
        </div>

        {/* Right column: Contact details & CTA */}
        <div className="flex flex-col justify-center gap-8 lg:pl-6">
          <Reveal delay={0.4}>
            <div>
              <h3 className="mb-4 text-sm uppercase tracking-[0.25em] text-muted">Графік роботи</h3>
              <div className="divide-y divide-foreground/10 border-t border-foreground/10">
                <div className="flex items-baseline justify-between py-3 text-base">
                  <span className="text-muted">Пн–Нд</span>
                  <span className="font-semibold font-display text-lg">11:00–22:00</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="flex flex-col items-start gap-6">
              <div className="space-y-2">
                <a 
                  href="tel:+380443332211" 
                  className="block font-display text-2xl font-semibold hover:text-accent transition-colors duration-300"
                >
                  +380 (44) 333-22-11
                </a>
                <a 
                  href="mailto:e2e-pasta-client@example.com" 
                  className="block text-base text-muted hover:text-foreground transition-colors duration-300"
                >
                  e2e-pasta-client@example.com
                </a>
              </div>

              <Magnetic>
                <a 
                  href={directionsUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground transition-transform hover:scale-[1.02]" 
                  style={{ borderRadius: "var(--radius-control)" }}
                >
                  Прокласти маршрут
                  <span aria-hidden className="text-xl">→</span>
                </a>
              </Magnetic>

              <p className="max-w-sm text-sm leading-relaxed text-muted/80">
                вул. Антоновича, 44, Київ. Відчинені щодня Пн–Нд з 11:00 до 22:00.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}