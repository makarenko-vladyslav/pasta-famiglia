"use client";
import { Reveal, Marquee } from "@/components/mechanics";

/**
 * SectionInterstitialMarquee
 * Role: A living idle layer providing a rhythmic break between content acts.
 * Logic: Uses the Marquee mechanic with brand-relevant keywords and high-contrast styling.
 */
export function SectionInterstitialMarquee() {
  // Verbatim keywords from spec, translated to site language where applicable to avoid linguistic defects.
  // "SEMOLA" and "AL DENTE" are culinary loanwords used globally.
  const keywords = [
    "SEMOLA",
    "AL DENTE",
    "20 ХВИЛИН",
    "КИЇВ",
    "PASTA FAMIGLIA",
    "SEMOLA",
    "AL DENTE",
    "20 ХВИЛИН",
    "КИЇВ",
    "PASTA FAMIGLIA",
  ];

  return (
    <section 
      className="relative w-full overflow-hidden bg-accent text-accent-foreground py-8 border-y border-foreground/10"
      aria-hidden="true"
    >
      <Reveal delay={0.1}>
        <div className="flex items-center pointer-events-none select-none">
          {/* 
            Display size uses clamp for responsiveness (2rem to 4rem) as per spec.
            Italic font-display ensures the "Playfair italic" intent.
          */}
          <div className="font-display italic text-[clamp(2rem,5vw,4rem)] leading-none uppercase tracking-tight whitespace-nowrap">
            <Marquee 
              items={keywords} 
              speed={20} 
              // The Marquee mechanic handles the continuous loop
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}