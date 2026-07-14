"use client";
import { Marquee } from "@/components/mechanics";

/**
 * SectionMarqueeInterstitial
 * Role: Transition band "The Rhythm of the Kitchen"
 * Logic: Horizontal typographic scroll separating the Hero and the Menu.
 * Layout: Full-width, fixed-height band (80px desktop / 60px mobile).
 */
export function SectionMarqueeInterstitial() {
  // Items translated to Ukrainian as per SITE LANGUAGE requirements
  // Derived from the SPEC's styling intent list
  const marqueeItems = [
    "СВІЖА ПАСТА РУЧНОЇ РОБОТИ ЩОДНЯ",
    "ПІЦА З ПЕЧІ НА ДРОВАХ",
    "БЕЗ ПЛАТИ ЗА ОБСЛУГОВУВАННЯ",
    "АВТЕНТИЧНІ ІТАЛІЙСЬКІ РЕЦЕПТИ",
    "ТІЛЬКИ СВІЖІ ІНГРЕДІЄНТИ",
    "СІМЕЙНІ ТРАДИЦІЇ PASTA FAMIGLIA",
  ];

  return (
    <section 
      className="relative w-full overflow-hidden bg-accent text-accent-foreground border-y border-foreground/10 h-[60px] lg:h-[80px] flex items-center"
      aria-hidden="true"
    >
      <div className="flex w-full items-center font-display text-sm lg:text-[18px] uppercase tracking-[0.2em]">
        <Marquee 
          items={marqueeItems} 
        />
      </div>
    </section>
  );
}