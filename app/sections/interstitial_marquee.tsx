"use client";
import { Marquee, Reveal } from "@/components/mechanics";

/**
 * SECTION: Interstitial Marquee
 * ROLE: ACT II: Transition. Visual pulse.
 * LAYOUT: Full-width band with zero vertical padding.
 * TYPOGRAPHY: Playfair Display (font-display), italic, tracking-tighter.
 */
export function SectionInterstitialMarquee() {
  const marqueeContent = [
    "СВІЖА ПАСТА",
    "ДРОВ'ЯНА ПІЧ",
    "SEMOLA",
    "ТРАДИЦІЇ РОДИНИ",
    "AL DENTE",
    "20 ХВИЛИН",
  ];

  return (
    <section 
      className="relative w-full bg-background py-0 border-y border-foreground/10 overflow-hidden"
      aria-hidden="true"
    >
      <Reveal delay={0.1}>
        <div className="py-6 lg:py-10 flex items-center">
          <Marquee 
            duration={40} 
            reverse={false}
            items={marqueeContent.map((text, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-8 lg:gap-16 px-4 lg:px-8"
              >
                <span className="font-display italic text-[clamp(2.5rem,6vw,4rem)] leading-[1.1] whitespace-nowrap text-foreground tracking-tighter">
                  {text}
                </span>
                <span className="text-[clamp(1.5rem,4vw,2.5rem)] text-foreground/30 font-display"></span>
              </div>
            ))}
          />
        </div>
      </Reveal>
    </section>
  );
}