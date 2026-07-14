"use client";
import { Reveal, Marquee } from "@/components/mechanics";

/**
 * Section: ACT II Interstitial — Living Layer
 * Role: A rhythmic, high-frequency visual break between the lunch menu and the story.
 * Typography: Poster-scale Playfair Display (font-display) ticker.
 */
export function SectionMarqueeItems() {
  const items = [
    "Carbonara •",
    "Tagliatelle •",
    "Cacio e Pepe •",
    "Ravioli •",
    "Pappardelle •",
    "Gnocchi •"
  ];

  const photoUrl = "https://images.pexels.com/photos/18411462/pexels-photo-18411462.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800";

  return (
    <section 
      className="relative w-full border-y border-foreground/10 py-6 overflow-hidden bg-background"
      aria-label="Pasta selection"
    >
      {/* Living Layer Background Photo */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10 grayscale">
        <img 
          src={photoUrl} 
          alt="" 
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Marquee Content */}
      <div className="relative z-10">
        <Reveal delay={0.1}>
          <div className="font-display italic text-[clamp(2.5rem,6vw,4rem)] leading-none flex items-center">
            <Marquee 
              items={items} 
              // Note: The mechanic handles the glide and scroll-speed-up logic internally
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}