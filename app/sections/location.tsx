"use client";

import { Reveal, Magnetic } from "@/components/mechanics";

export function SectionLocation() {
  const address = "вул. Антоновича, 44, Київ";
  const hours = "Пн–Нд 11:00–22:00";
  const phone = "+380 (44) 333-22-11";
  const email = "e2e-pasta-client@example.com";

  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section className="bg-accent text-accent-foreground py-[var(--space-act)] px-4 lg:px-6 relative overflow-hidden">
      <div className="mx-auto max-w-6xl flex flex-col items-center text-center">
        
        {/* Header Block */}
        <Reveal delay={0.1}>
          <h2 className="font-display text-[clamp(3rem,7vw,6rem)] leading-[0.9] mb-6">
            Як нас знайти
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="font-body text-lg lg:text-xl text-accent-foreground/80 max-w-2xl mx-auto mb-10 lg:mb-12">
            Замовляйте доставку, приходьте на обід або забирайте пасту з собою.
          </p>
        </Reveal>

        <Reveal delay={0.3} className="w-full md:w-auto z-10">
          <Magnetic>
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-foreground text-background px-6 py-3.5 text-base uppercase tracking-[0.2em] font-display hover:scale-[1.04] transition-transform duration-300 ease-[var(--ease-out-cubic)] w-full md:w-auto group"
              style={{ borderRadius: "var(--radius-control)" }}
            >
              Прокласти маршрут
              <svg
                className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 ease-[var(--ease-out-cubic)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </Magnetic>
        </Reveal>

        {/* 8-Column Grid Layout */}
        <div className="w-full max-w-5xl mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-8 gap-10 md:gap-12 lg:gap-16 items-start text-left relative z-0">
          
          {/* Left Column: Info Editiorial Rows */}
          <div className="md:col-span-3 flex flex-col w-full border-t border-accent-foreground/15 mt-2 md:mt-0">
            {[
              { label: "Адреса", val: address, link: null },
              { label: "Години", val: hours, link: null },
              { label: "Телефон", val: phone, link: "tel:+380443332211" },
              { label: "Email", val: email, link: `mailto:${email}` }
            ].map((item, idx) => (
              <Reveal delay={0.4 + idx * 0.1} key={idx}>
                <div className="flex flex-col py-5 border-b border-accent-foreground/15 group">
                  <span className="text-xs uppercase tracking-[0.25em] text-accent-foreground/50 mb-2">
                    {item.label}
                  </span>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="font-mono text-base lg:text-lg text-accent-foreground group-hover:text-accent-foreground/60 transition-colors duration-200 ease-[var(--ease-out-cubic)]"
                    >
                      {item.val}
                    </a>
                  ) : (
                    <span className="font-mono text-base lg:text-lg text-accent-foreground">
                      {item.val}
                    </span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          {/* Right Column: Google Maps Iframe */}
          <Reveal delay={0.5} className="md:col-span-5 w-full aspect-square md:aspect-[16/10] relative overflow-hidden group">
            <div
              className="absolute inset-0 bg-accent-foreground/10 z-10 pointer-events-none group-hover:bg-transparent transition-colors duration-700 ease-[var(--ease-out-cubic)]"
              style={{ borderRadius: "var(--radius-surface)" }}
            />
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "var(--radius-surface)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 contrast-125 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-[var(--ease-out-cubic)]"
            ></iframe>
          </Reveal>
          
        </div>
      </div>
    </section>
  );
}