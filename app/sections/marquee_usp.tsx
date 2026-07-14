"use client";
import { Reveal, Marquee } from "@/components/mechanics";

/**
 * SectionMarqueeUsp: Interstitial brand beat.
 * Features a high-contrast scrolling marquee with brand USPs.
 * 
 * DESIGN SPEC:
 * - bg-foreground (dark/brand-primary) with text-background
 * - font-display, uppercase, tracking-widest
 * - py-8 as per skeleton
 * - Subdued photo texture for premium feel
 */
export function SectionMarqueeUsp() {
  const uspItems = [
    "СВІЖА ПАСТА ЩОРАНКУ •",
    "ПІЦА З ДРОВ’ЯНОЇ ПЕЧІ •",
    "БЕЗ ПРИХОВАНИХ ПЛАТЕЖІВ •",
    "ГАРАНТІЯ 20 ХВИЛИН •",
    "СВІЖА ПАСТА ЩОРАНКУ •",
    "ПІЦА З ДРОВ’ЯНОЇ ПЕЧІ •",
    "БЕЗ ПРИХОВАНИХ ПЛАТЕЖІВ •",
    "ГАРАНТІЯ 20 ХВИЛИН •"
  ];

  return (
    <section className="relative w-full overflow-hidden bg-foreground text-background">
      {/* Subtle Asset Integration */}
      <div className="absolute inset-0 z-0 opacity-10 grayscale pointer-events-none">
        <img 
          src="https://images.pexels.com/photos/20483146/pexels-photo-20483146.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
          alt="" 
          className="w-full h-full object-cover" 
          loading="lazy"
        />
        <div className="rp-grain absolute inset-0 opacity-30" />
      </div>

      {/* Marquee Content */}
      <div className="relative z-10 py-8 border-y border-background/10">
        <Reveal delay={0.1}>
          <div className="font-display text-[clamp(1.5rem,4vw,2.25rem)] uppercase tracking-widest leading-none">
            <Marquee items={uspItems} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}