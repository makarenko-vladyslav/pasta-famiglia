"use client";

import { Reveal, Marquee } from "@/components/mechanics";

/**
 * SECTION: Marquee Interstitial
 * ROLE: The living idle layer between Acts II and III.
 * STYLING: Low-contrast display type, surface background, hairline dividers.
 */
export function SectionMarqueeInterstitial() {
  const marqueeItems = [
    "Свіжа паста",
    "Борошно Semola",
    "Al Dente",
    "Доставка за 20 хв",
    "Без сервісного збору",
    "Відкрита кухня",
  ];

  return (
    <section className="w-full py-8 border-y border-foreground/5 bg-background overflow-hidden">
      <Reveal delay={0.1}>
        <div className="flex items-center">
          <Marquee 
            items={marqueeItems.map((item, idx) => (
              <span 
                key={idx} 
                className="font-display italic text-4xl lg:text-6xl text-foreground/20 whitespace-nowrap px-8"
              >
                {item}
              </span>
            ))}
            speed="slow"
            direction="left"
          />
        </div>
      </Reveal>
    </section>
  );
}