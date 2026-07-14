"use client";
import { Reveal, Marquee } from "@/components/mechanics";

/**
 * SectionMarqueeSeparator
 * Role: Interstitial - The Raw Materials
 * Layout: Horizontal marquee band highlighting high-quality Italian ingredients.
 */
export function SectionMarqueeSeparator() {
  // Using the verbatim ingredients from SPEC + regional markers of quality
  // SEMOLA, MUTTI, CAPUTO are brand/type names preserved in international form
  const ingredients = [
    "SEMOLA ·",
    "MUTTI ·",
    "CAPUTO ·",
    "DOP ·",
    "СВІЖА ПАСТА ·",
    "EXTRA VIRGIN ·",
    "GUANCIALE ·",
    "BASILICO ·",
    "PECORINO ROMANO ·",
    "SAN MARZANO ·"
  ];

  return (
    <section 
      className="relative w-full py-8 border-y border-foreground/10 bg-background overflow-hidden"
      aria-hidden="true"
    >
      <Reveal delay={0.1}>
        <div className="flex items-center">
          <Marquee
            items={ingredients}
            className="font-display italic text-2xl lg:text-4xl uppercase tracking-widest text-foreground/40 whitespace-nowrap"
          />
        </div>
      </Reveal>
    </section>
  );
}