"use client";
import { Reveal, Marquee } from "@/components/mechanics";

/**
 * SECTION: ACT II Interstitial — Living Layer.
 * ROLE: A high-kinetic typography band bridging the signature dishes and the full menu.
 * STYLE: Full-width, surface background, italic display type.
 */
export function SectionMarqueeBrand() {
  // Verbatim translation of spec items into Ukrainian to match SITE LANGUAGE "uk"
  // "FRESH PASTA DAILY • AL DENTE PERFECTION • NO HIDDEN FEES • BY HAND WITH LOVE"
  const marqueeItems = [
    "СВІЖА ПАСТА ЩОДНЯ",
    "•",
    "ДОСКОНАЛІСТЬ AL DENTE",
    "•",
    "БЕЗ ПРИХОВАНИХ НАЦІНОК",
    "•",
    "РУЧНА РОБОТА З ЛЮБОВ'Ю",
    "•",
  ];

  return (
    <section 
      className="relative w-full overflow-hidden bg-surface py-[var(--space-act)] border-y border-foreground/10"
      aria-label="Брендові цінності"
    >
      <Reveal delay={0.1}>
        <div className="flex items-center">
          <Marquee 
            items={marqueeItems}
            duration={15}
            className="font-display italic text-muted text-[clamp(1.5rem,5vw,2.5rem)] leading-[1.1] uppercase tracking-wider"
          />
        </div>
      </Reveal>

      {/* Subtle hairline detail for premium feel as per CONSTANTS */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-foreground/5" />
      <div className="absolute inset-x-0 top-0 h-px bg-foreground/5" />
    </section>
  );
}