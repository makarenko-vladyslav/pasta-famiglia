"use client";

import { Reveal, Magnetic } from "@/components/mechanics";

export function SectionLocation() {
  const facts = {
    address: "вул. Антоновича, 44, Київ",
    phone: "+380 (44) 333-22-11"
  };

  const copy = {
    headline: "Де нас знайти",
    items: [
      "вул. Антоновича, 44, Київ",
      "Пн–Нд 11:00–22:00",
      "+380 (44) 333-22-11",
      "e2e-pasta-client@example.com"
    ],
    cta: "Прокласти маршрут"
  };

  const mapImage = "https://images.pexels.com/photos/35380430/pexels-photo-35380430.png?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800";
  const mapsSearchUrl = `https://maps.google.com/?q=${encodeURIComponent(facts.address)}`;

  return (
    <section className="py-[var(--space-act)] px-4 md:px-8 bg-accent text-accent-foreground relative overflow-hidden">
      <div className="mx-auto max-w-6xl w-full flex flex-col gap-12 md:gap-16 lg:px-6">
        
        {/* Headline Row */}
        <div className="w-full">
          <Reveal>
            <h2 className="text-[clamp(3rem,7vw,6.5rem)] font-display leading-[0.92] uppercase">
              {copy.headline}
            </h2>
          </Reveal>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          
          {/* Contacts & CTA Column (Cols 1-4) */}
          <div className="md:col-span-4 md:col-start-1 flex flex-col justify-between h-full gap-10">
            <Reveal delay={0.1}>
              <ul className="flex flex-col border-t border-accent-foreground/15">
                {copy.items.map((item, index) => (
                  <li 
                    key={index}
                    className="py-4 lg:py-5 border-b border-accent-foreground/15 flex items-center justify-between"
                  >
                    <span className="font-mono text-sm lg:text-base leading-tight tracking-tight">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.2}>
              <Magnetic>
                <a 
                  href={mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium bg-accent-foreground text-accent w-full md:w-auto hover:opacity-90 transition-opacity duration-200"
                  style={{ borderRadius: "var(--radius-control)" }}
                >
                  {copy.cta}
                  <svg 
                    className="ml-2 w-4 h-4" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </Magnetic>
            </Reveal>
          </div>

          {/* Map / Image Container Column (Cols 6-12) */}
          <div className="md:col-span-7 md:col-start-6">
            <Reveal delay={0.3}>
              <div 
                className="relative w-full aspect-[4/5] md:aspect-[16/10] overflow-hidden group bg-accent-foreground/5"
                style={{ borderRadius: "var(--radius-surface)" }}
              >
                {/* Simulated scale-down entrance overlay mask */}
                <div className="absolute inset-0 z-10 pointer-events-none mix-blend-overlay bg-accent-foreground/10 transition-opacity duration-1000 group-hover:opacity-0" />
                
                <img 
                  src={mapImage} 
                  alt={copy.headline}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale-[20%] transition-transform duration-1000 ease-out hover:scale-[1.04]"
                />
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}