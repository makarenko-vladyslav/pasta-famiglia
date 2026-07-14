"use client";

import { Reveal, Marquee } from "@/components/mechanics";

/**
 * SectionInterstitialMarquee - ACT II: Movement
 * A high-impact typographic bridge between the menu and brand promises.
 * Uses outline text and continuous horizontal motion.
 */
export function SectionInterstitialMarquee() {
  const marqueeItems = [
    "ФІРМОВІ СТРАВИ",
    "•",
    "СВІЖА ПАСТА",
    "•",
    "ПІЦА НА ДРОВАХ",
    "•",
    "БЕЗ ПЛАТИ ЗА ОБСЛУГОВУВАННЯ",
    "•",
  ];

  return (
    <section 
      className="relative w-full overflow-hidden bg-background py-[var(--space-act)]"
      aria-label="Переваги"
    >
      <Reveal delay={0.1}>
        <div className="flex w-full items-center">
          <Marquee 
            items={marqueeItems} 
            speed={20}
            className="flex items-center"
          >
            {(item) => (
              <span 
                className={`
                  font-display leading-none uppercase tracking-tight px-4
                  text-[clamp(2.5rem,8vw,5rem)]
                  ${item === "•" ? "text-foreground/20" : "text-transparent [-webkit-text-stroke:1px_var(--color-foreground)]"}
                `}
              >
                {item}
              </span>
            )}
          </Marquee>
        </div>
      </Reveal>
    </section>
  );
}