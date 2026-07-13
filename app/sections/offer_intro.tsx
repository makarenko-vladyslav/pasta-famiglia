"use client";

import { Reveal, TiltCard } from "@/components/mechanics";

/**
 * SECTION: Offer Intro (ACT II)
 * ROLE: Typographic transition into the menu.
 * LAYOUT: 12-column grid with editorial text distribution and a floating image frame.
 */
export function SectionOfferIntro() {
  return (
    <section className="relative overflow-hidden bg-background py-[var(--space-act)]">
      {/* Decorative Watermark - Hidden on mobile, subtle backdrop for desktop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none overflow-hidden select-none">
        <span className="rp-watermark text-[25vw] opacity-[0.03] text-foreground font-display leading-none">
          CUCINA
        </span>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid grid-cols-12 gap-y-12 lg:gap-x-8 items-start">
          
          {/* ACT KICKER */}
          <div className="col-span-12 mb-4 lg:mb-8">
            <Reveal>
              <span className="text-sm uppercase tracking-[0.3em] text-foreground/60 font-body">
                Гастрономія
              </span>
            </Reveal>
          </div>

          {/* MAIN HEADING - Poster scale */}
          <div className="col-span-12 lg:col-span-8">
            <Reveal delay={0.1}>
              <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] leading-[0.95] tracking-tight text-foreground">
                Секрети нашої кухні тепер відкриті для вас
              </h2>
            </Reveal>
          </div>

          {/* LEAD TEXT - Muted editorial style */}
          <div className="col-span-12 lg:col-span-4 lg:pt-4">
            <Reveal delay={0.2}>
              <p className="font-body text-muted text-lg lg:text-xl leading-relaxed">
                У Pasta Famiglia ми перетворюємо добірне борошно та фермерські інгредієнти на справжню італійську історію. Спостерігайте за магією приготування на нашій відкритій кухні, де традиції оживають у кожному русі майстра.
              </p>
            </Reveal>
          </div>

          {/* FLOATING MEDIA FRAME - Placed on the far right below the intro text */}
          <div className="col-span-12 lg:col-start-8 lg:col-span-5 mt-8 lg:-mt-12">
            <Reveal delay={0.3}>
              <TiltCard>
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[var(--radius-surface)] group shadow-2xl">
                  {/* Grain Overlay */}
                  <div className="absolute inset-0 z-20 pointer-events-none rp-grain opacity-30" />
                  
                  {/* Subtle Darkening Overlay */}
                  <div className="absolute inset-0 z-10 bg-black/10 group-hover:bg-black/0 transition-colors duration-700" />
                  
                  <img
                    src="https://images.pexels.com/photos/5903454/pexels-photo-5903454.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                    alt="Відкрита кухня Pasta Famiglia"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
                  />
                  
                  {/* Image Caption - Minimalist editorial garnish */}
                  <div className="absolute bottom-6 left-6 z-20">
                    <span className="text-white/80 text-[10px] uppercase tracking-[0.2em] font-body bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      Live Kitchen • 11:00 - 22:00
                    </span>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          </div>
          
        </div>
      </div>

      {/* Subtle bottom divider for editorial rhythm */}
      <div className="absolute bottom-0 left-0 w-full px-4 lg:px-6">
        <div className="w-full h-px bg-foreground/10" />
      </div>
    </section>
  );
}