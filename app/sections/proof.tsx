"use client";
import { Reveal } from "@/components/mechanics";

/**
 * Section: ACT IV — The Proof
 * Role: Social proof act featuring a spotlight quote and trust metrics.
 * Design: High-contrast dark mode with poster-scale typography.
 */
export function SectionProof() {
  return (
    <section
      id="proof"
      className="relative overflow-hidden bg-foreground py-[var(--space-act)] text-background"
    >
      {/* Film grain texture overlay */}
      <div className="rp-grain absolute inset-0 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 lg:px-10">
        {/* Internal rubric/act label */}
        <span className="block mb-8 text-sm uppercase tracking-[0.3em] text-background/70">
          Відгуки
        </span>

        {/* Decorative opening quote mark - poster scale */}
        <span 
          aria-hidden 
          className="block font-display text-[clamp(5rem,10vw,7rem)] leading-none text-accent"
        >
          “
        </span>

        {/* Primary spotlight testimonial */}
        <Reveal>
          <blockquote className="font-display font-semibold leading-[1.08] text-[clamp(1.9rem,4.2vw,3.6rem)] max-w-4xl">
            Pasta Famiglia — це про любов до деталей та повагу до традицій, що відчувається у кожному шматочку нашої справжньої італійської пасти.
          </blockquote>
        </Reveal>

        {/* Attribution & Trust Line */}
        <Reveal delay={0.15}>
          <figcaption className="mt-8 flex flex-wrap items-center gap-4 text-sm lg:text-base">
            <span className="h-px w-12 bg-accent" aria-hidden />
            
            <span className="font-medium tracking-wider uppercase">
              Олексій Кравченко
            </span>

            <span className="text-background/40" aria-hidden>·</span>

            {/* Trust Line: Rating + Count ONLY (per removal of address/street) */}
            <div className="flex items-center gap-2 text-background/80">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-3.5 h-3.5 ${i < 4 ? "fill-accent" : "fill-accent/30"}`}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <span className="font-display text-lg leading-none">4.9</span>
              <span className="text-background/60">
                (127 відгуків)
              </span>
            </div>
          </figcaption>
        </Reveal>

        {/* Secondary quotes grid omitted: no additional quote copy provided in spec */}
      </div>
    </section>
  );
}