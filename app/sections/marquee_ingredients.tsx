"use client";
import { Reveal, Marquee } from "@/components/mechanics";

/**
 * SECTION: Marquee Ingredients
 * ROLE: Interstitial — The Material Layer
 * LAYOUT: Full-bleed Marquee band (h-120px) positioned between Menu and Story acts.
 */
export function SectionMarqueeIngredients() {
  const ingredients = [
    "Semola Di Grano",
    "Свіжі Яйця",
    "Оливкова Олія",
    "Морська Сіль",
    "Ручна Робота",
  ];

  return (
    <section 
      className="relative w-full bg-background border-y border-foreground/10 overflow-hidden"
      aria-label="Інгредієнти"
    >
      <div className="flex items-center h-[120px]">
        <Reveal delay={0.1} className="w-full">
          <div className="flex items-center h-full">
            <Marquee 
              items={ingredients.map((item) => (
                <span 
                  key={item} 
                  className="inline-block px-8 font-display italic uppercase text-[clamp(2rem,5vw,3rem)] tracking-tight leading-none text-foreground"
                >
                  {item}
                  <span className="ml-16 opacity-30 select-none"></span>
                </span>
              ))}
              speed={40}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}