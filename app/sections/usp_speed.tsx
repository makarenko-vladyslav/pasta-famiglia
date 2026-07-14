"use client";
import { Reveal } from "@/components/mechanics";

/**
 * SECTION: USP Speed
 * ROLE: ACT II: The Offer (Part A)
 * DESCRIPTION: Highlight the speed and freshness of the service with a high-impact visual grid.
 */
export function SectionUspSpeed() {
  return (
    <section className="relative overflow-hidden bg-background py-[var(--space-act)] px-4 lg:px-6">
      {/* Decorative Watermark - Hidden on mobile per spec */}
      <div 
        className="rp-watermark pointer-events-none absolute right-0 bottom-0 hidden font-display text-[25vw] leading-none opacity-5 lg:block"
        aria-hidden="true"
      >
        PASTA
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        
        {/* Text Content Column */}
        <div className="relative z-10 flex flex-col gap-6 text-center md:text-left">
          <Reveal delay={0.1}>
            <span className="text-sm font-medium tracking-[0.3em] uppercase text-muted">
              Швидкість та якість
            </span>
          </Reveal>

          <Reveal delay={0.2}>
            <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] leading-none tracking-tight">
              Свіжа паста без довгих очікувань
            </h2>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="text-lg text-foreground lg:text-xl">
              Ми перетворили процес приготування на мистецтво швидкості, не втрачаючи жодної ноти автентичного смаку.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="max-w-prose text-sm text-muted lg:text-base">
              У Pasta Famiglia ми готуємо кожну страву з нуля. Наші кухарі працюють злагоджено, щоб ви могли насолодитися обідом навіть у найдинамічніший день у Києві. Лише свіжі інгредієнти та італійська пристрасть у кожній тарілці.
            </p>
          </Reveal>
        </div>

        {/* Media Frame Column */}
        <Reveal delay={0.5}>
          <div className="relative aspect-[4/5] overflow-hidden" style={{ borderRadius: "var(--radius-surface)" }}>
            <div className="rp-grain pointer-events-none absolute inset-0 z-10 opacity-20" />
            <img
              src="https://images.pexels.com/photos/5403020/pexels-photo-5403020.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
              alt="Свіжоприготовлена італійська паста"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-1000 ease-[var(--ease-out-cubic)] hover:scale-[1.04]"
            />
            {/* Subtle Overlay for depth */}
            <div className="absolute inset-0 bg-linear-to-t from-background/20 to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}