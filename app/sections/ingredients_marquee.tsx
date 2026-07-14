"use client";
import { Reveal, Marquee } from "@/components/mechanics";

/**
 * SectionIngredientsMarquee
 * 
 * An interstitial marquee band showcasing the premium ingredients 
 * and technical standards of Pasta Famiglia.
 * 
 * ROLE: Interstitial
 * LAYOUT: w-full py-12 border-y border-foreground/10
 * TYPOGRAPHY: font-display italic, clamp(1.5rem, 4vw, 3.5rem)
 */
export function SectionIngredientsMarquee() {
  // Using Ukrainian translations for the specified technical items to maintain site language
  // Brands like Caputo/Mutti and technical terms like Semola/Al Dente are kept as recognized standards
  const ingredientItems = [
    "СВІЖА ПАСТА •",
    "SEMOLA •",
    "CAPUTO •",
    "MUTTI •",
    "AL DENTE •",
    "ДРОВ'ЯНА ПІЧ •",
    "ПШЕНИЦЯ 00 •",
    "EXTRA VIRGIN •",
    "GUANCIALE •",
    "PECORINO ROMANO •"
  ];

  return (
    <section 
      className="w-full py-[var(--space-act)] border-y border-foreground/10 bg-background overflow-hidden flex items-center"
      aria-label="Наші інгредієнти"
    >
      <Reveal delay={0.1} width="100%">
        <div className="w-full py-2 flex items-center text-foreground font-display italic text-[clamp(1.5rem,5vw,3.5rem)] leading-none uppercase tracking-tighter">
          <Marquee 
            items={ingredientItems} 
            reverse={false}
          />
        </div>
      </Reveal>
    </section>
  );
}