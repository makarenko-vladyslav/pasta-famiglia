"use client";

import { Reveal, Magnetic } from "@/components/mechanics";
import { Star } from "@phosphor-icons/react";

/**
 * SECTION: ACT IV: The Proof
 * Layout: Minimalist spotlight. One giant quote in Playfair Italic.
 * Character-for-character rendering of COPY and FACTS.
 */
export function SectionSocialProof() {
  return (
    <section 
      id="social_proof" 
      className="relative overflow-hidden bg-foreground py-[var(--space-act)] text-background"
    >
      {/* Film grain overlay for premium texture */}
      <div className="rp-grain absolute inset-0 pointer-events-none opacity-40" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 lg:px-10">
        {/* Act identifier */}
        <span className="rp-actno mb-8 block text-sm uppercase tracking-[0.3em] text-background/50">
          ВІДГУКИ
        </span>

        {/* Decorative opening quote mark */}
        <span 
          aria-hidden 
          className="block font-display text-[7rem] leading-none text-accent"
        >
          “
        </span>

        {/* Primary spotlight quote - Subcopy from COPY verbatim */}
        <Reveal>
          <blockquote className="font-display font-semibold italic text-[clamp(1.9rem,4.2vw,3.6rem)] leading-[1.1] text-background">
            На основі 127 відгуків гостей, які шукали затишок і відкритість у самому серці міста.
          </blockquote>
        </Reveal>

        {/* Rating and Meta Information */}
        <Reveal delay={0.15}>
          <figcaption className="mt-10 flex flex-wrap items-center gap-6 text-sm lg:text-base text-background/70">
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-accent" aria-hidden />
              <span className="font-display text-lg text-background">Google Reviews</span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="flex text-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} weight="fill" size={18} />
                ))}
              </div>
              {/* Headline from COPY verbatim */}
              <span className="font-display text-lg text-background">4.9 зірок у Google</span>
            </div>
          </figcaption>
        </Reveal>

        {/* CTA Section - Magnetic call to action using COPY verbatim */}
        <div className="mt-16">
          <Reveal delay={0.3}>
            <Magnetic>
              <a 
                href="https://www.google.com/maps" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-accent px-5 py-3 text-sm lg:text-base text-accent-foreground transition-transform hover:scale-105"
                style={{ borderRadius: "var(--radius-control)" }}
              >
                Читати відгуки
              </a>
            </Magnetic>
          </Reveal>
        </div>

        {/* The grid for more quotes is removed as per SPEC/COPY availability 
            to prevent inventing non-existent testimonials. */}
      </div>
    </section>
  );
}