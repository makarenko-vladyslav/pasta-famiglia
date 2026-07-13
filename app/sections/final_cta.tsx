"use client";

import { Reveal, Magnetic, AmbientCanvas } from "@/components/mechanics";

/**
 * SectionFinalCta - ACT V: The Close
 * A focused call-to-action using the accent flood treatment.
 * Follows the strict layout skeleton for a premium curtain call.
 */
export function SectionFinalCta() {
  return (
    <section id="final_cta" className="relative overflow-hidden bg-accent py-[var(--space-act)] text-accent-foreground">
      {/* Background decoration as per spec */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <AmbientCanvas />
      </div>

      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <span className="inline-block mb-6 text-sm uppercase tracking-[0.3em] opacity-70">
          Резерв
        </span>
        
        <Reveal>
          <h2 className="font-display font-extrabold leading-[0.88] text-[clamp(3rem,9vw,8rem)] max-w-[14ch]">
            Стіл чекає на вас
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-wrap items-center gap-8">
          <Magnetic>
            <a 
              href="#hero" 
              className="inline-flex items-center gap-3 bg-foreground px-10 py-5 text-lg font-semibold text-background transition-transform duration-300 hover:scale-[1.02]" 
              style={{ borderRadius: "var(--radius-control)" }}
            >
              Забронювати стіл
              <span className="text-xl" aria-hidden>→</span>
            </a>
          </Magnetic>
        </div>

        <div className="mt-14 grid gap-2 text-sm text-accent-foreground/80 lg:grid-cols-3 border-t border-accent-foreground/10 pt-8">
          <div className="lg:col-span-2">
            <Reveal delay={0.2}>
              <p className="text-lg lg:text-xl leading-relaxed text-accent-foreground font-medium">
                Забронюйте місце заздалегідь, щоб ми підготували найкращий столик для вашої компанії.
              </p>
            </Reveal>
          </div>
          <div className="hidden lg:flex justify-end items-end">
            {/* Visual spacer to respect the 3-column skeleton grid without prohibited facts */}
            <span className="text-xs uppercase tracking-widest opacity-30">Pasta Famiglia © 2024</span>
          </div>
        </div>
      </div>

      {/* Decorative oversized number as allowed by DESIGN SYSTEM */}
      <div className="absolute -bottom-12 -right-8 hidden lg:block select-none pointer-events-none opacity-5">
        <span className="font-display text-[20rem] leading-none">05</span>
      </div>
    </section>
  );
}