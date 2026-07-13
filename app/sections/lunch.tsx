"use client";

import { Reveal, Magnetic, Marquee } from "@/components/mechanics";
import { ArrowRight } from "@phosphor-icons/react";

/**
 * SECTION: LUNCH (ACT II)
 * A utility-focused section highlighting the lunch offer.
 * Features massive display typography, asymmetric image placement, and an editorial menu list.
 */
export function SectionLunch() {
  const lunchItems = [
    "Суп дня (мінестроне або крем-суп)",
    "Паста дня на вибір шефа",
    "Домашній лимонад або узвар"
  ];

  const marqueeWords = [
    "LUNCH TIME",
    "320₴",
    "BUON APPETITO",
    "ПО БУДНЯХ",
    "12:00–16:00",
    "PASTA FAMIGLIA",
    "FRESH PASTA"
  ];

  return (
    <section className="relative overflow-hidden bg-background py-[var(--space-act)] flex flex-col items-center">
      {/* Background Watermark Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <span className="rp-watermark text-[40vw] opacity-5 font-display leading-none translate-y-1/4">
          320
        </span>
      </div>

      <div className="container max-w-6xl mx-auto px-4 lg:px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left/Main Column: Headline & Menu */}
          <div className="lg:col-span-8 flex flex-col items-start">
            <Reveal>
              <h2 className="font-display text-[clamp(4rem,12vw,10rem)] leading-[0.85] tracking-[-0.06em] text-foreground mb-12">
                Обід за <br /> 
                <span className="text-accent">320</span> гривень
              </h2>
            </Reveal>

            <div className="max-w-xl w-full">
              <Reveal delay={0.2}>
                <p className="text-xl lg:text-2xl font-body text-foreground mb-2">
                  По буднях з 12:00 до 16:00.
                </p>
                <p className="text-sm lg:text-base font-body text-muted mb-12 uppercase tracking-wider">
                  Для тих, у кого на перерву лише пів години.
                </p>
              </Reveal>

              {/* Editorial List */}
              <div className="w-full border-t border-foreground/10">
                {lunchItems.map((item, index) => (
                  <Reveal key={index} delay={0.1 * index}>
                    <div className="flex items-center justify-between py-6 border-b border-foreground/10 group">
                      <span className="font-display text-xl lg:text-3xl tracking-tight">
                        {item}
                      </span>
                      <span className="font-display text-muted text-lg opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                        0{index + 1}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>

              <div className="mt-12">
                <Reveal delay={0.5}>
                  <Magnetic>
                    <a 
                      href="#contacts" 
                      className="inline-flex items-center gap-4 bg-accent text-accent-foreground px-10 py-5 rounded-[var(--radius-control)] hover:scale-[1.02] transition-all duration-300 font-display text-lg uppercase tracking-widest"
                    >
                      Забронювати стіл
                      <ArrowRight weight="bold" size={20} />
                    </a>
                  </Magnetic>
                </Reveal>
              </div>
            </div>
          </div>

          {/* Right Column: Asymmetric Image */}
          <div className="lg:col-span-4 mt-12 lg:mt-32">
            <Reveal delay={0.4}>
              <div className="relative aspect-[2/3] w-full overflow-hidden rounded-[var(--radius-surface)] group shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/28308021/pexels-photo-28308021.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
                  alt="Lunch offering at Pasta Famiglia"
                  className="object-cover w-full h-full transition-transform duration-[1000ms] ease-out-cubic group-hover:scale-[1.04] loading-lazy"
                />
                <div className="absolute inset-0 bg-foreground/5 pointer-events-none mix-blend-overlay" />
                <div className="rp-grain absolute inset-0 pointer-events-none" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Marquee transition to next section */}
      </section>
  );
}