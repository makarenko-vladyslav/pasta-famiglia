"use client";
import { Reveal } from "@/components/mechanics";

/**
 * ACT IV: The Proof — The Verdict
 * A high-impact spotlight section featuring a single authoritative review
 * and the brand's rating performance.
 */
export function SectionProofStats() {
  return (
    <section 
      id="proof_stats" 
      className="relative overflow-hidden bg-foreground py-[var(--space-act)] text-background"
    >
      {/* Film grain overlay for texture depth */}
      <div className="rp-grain absolute inset-0 opacity-50" />

      {/* Large watermark '4.9' behind content — hidden on mobile to maintain focus */}
      <div 
        className="rp-watermark pointer-events-none absolute -bottom-10 right-0 z-0 hidden font-display text-[25vw] font-extrabold leading-none text-background opacity-5 lg:block"
        aria-hidden="true"
      >
        4.9
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 lg:px-10">
        {/* Short human rubric */}
        <span className="rp-actno mb-8 block text-sm tracking-[0.3em] uppercase text-background/70">
          Відгуки
        </span>

        {/* Decorative quote mark in accent color */}
        <span aria-hidden className="block font-display text-[clamp(4rem,10vw,8rem)] leading-none text-accent">
          “
        </span>

        <Reveal>
          <blockquote className="font-display font-semibold italic leading-[1.1] text-[clamp(1.9rem,4.2vw,3.6rem)]">
            Найкраща паста в моєму житті. Атмосфера Pasta Famiglia переносить тебе прямо на вузькі вулички Риму — це справжня магія автентичного смаку в центрі Києва.
          </blockquote>
        </Reveal>

        <Reveal delay={0.15}>
          <figcaption className="mt-8 flex items-center gap-4 text-sm font-medium tracking-wide text-background/70 lg:text-base">
            <span className="h-px w-12 bg-accent" aria-hidden />
            <span>Олександр Коваленко</span>
            <span className="text-accent/50"></span>
            <span className="flex items-center gap-2">
              <span className="text-accent">4.9 ★</span>
              <span>на основі 127 відгуків</span>
            </span>
          </figcaption>
        </Reveal>

        {/* 
          As per spec: "single, high-impact review quote". 
          The skeleton's grid for extra quotes is removed to maintain the spotlight focus.
        */}
      </div>
    </section>
  );
}