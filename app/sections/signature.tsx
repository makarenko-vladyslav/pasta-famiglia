"use client";

import { Reveal, HorizontalPan } from "@/components/mechanics";

/**
 * SectionSignature - ACT II: The Offer
 * Layout: Sideways-scrolling editorial strip with popular restaurant offers.
 * Logic: Uses HorizontalPan for high-impact visual storytelling of the menu sets.
 */
export function SectionSignature() {
  const items = [
    {
      caption: "Бізнес-ланч: суп, паста дня та напій — 320 грн",
      photo: "https://images.pexels.com/photos/37169557/pexels-photo-37169557.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      index: "01"
    },
    {
      caption: "Сімейний обід: 2 піци, 2 пасти та лимонад — 1150 грн",
      photo: "https://images.pexels.com/photos/37169557/pexels-photo-37169557.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      index: "02"
    },
    {
      caption: "Романтична вечеря: Prosecco, антипасті та десерти — 1450 грн",
      photo: "https://images.pexels.com/photos/37169557/pexels-photo-37169557.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      index: "03"
    }
  ];

  return (
    <section id="signature" className="relative overflow-hidden bg-surface">
      {/* Header Block */}
      <div className="mx-auto max-w-[92rem] px-4 pt-[var(--space-act)] lg:px-10">
        <span className="rp-actno mb-5 block text-sm font-medium uppercase tracking-[0.3em] text-muted">
          Пропозиції
        </span>
        <Reveal>
          <h2 className="font-display text-[clamp(2.4rem,5vw,4.5rem)] font-bold leading-[0.9] text-foreground max-w-[16ch]">
            Популярні вибори
          </h2>
        </Reveal>
      </div>

      {/* Horizontal Scroll Experience */}
      <HorizontalPan heightVh={220}>
        <div className="flex h-full items-center gap-6 px-4 lg:gap-12 lg:px-10">
          {items.map((item, idx) => (
            <figure 
              key={idx} 
              className="rp-pan-item relative w-[75vw] shrink-0 overflow-hidden md:w-[45vw] lg:w-[32vw]"
            >
              <div className="overflow-hidden bg-surface">
                <img 
                  src={item.photo} 
                  alt={item.caption} 
                  className="rp-graded aspect-[4/5] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
                  loading="lazy" 
                />
              </div>
              <figcaption className="mt-4 flex items-baseline justify-between gap-4 text-sm text-muted">
                <span className="max-w-[28ch] leading-relaxed">{item.caption}</span>
                <span className="font-display text-lg font-medium opacity-40">{item.index}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </HorizontalPan>
    </section>
  );
}