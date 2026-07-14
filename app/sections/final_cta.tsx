"use client";
import { Reveal, Magnetic } from "@/components/mechanics";
import { ArrowRight } from "@phosphor-icons/react";

/**
 * Section: Final CTA (ACT V: The Close)
 * Role: Single goal booking moment with high energy accent background.
 */
export function SectionFinalCta() {
  const h2Text = "Ваш стіл у Pasta Famiglia";
  const h2Words = h2Text.split(" ");

  return (
    <section 
      id="final_cta" 
      className="relative overflow-hidden bg-accent py-[var(--space-act)] text-accent-foreground"
    >
      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <span className="rp-actno mb-6 block text-sm uppercase tracking-[0.3em]">
          Резерв
        </span>
        
        <Reveal delay={0.1}>
          <h2 className="font-display font-extrabold text-[clamp(3rem,9vw,8rem)] max-w-[14ch]">
            {h2Words.map((word, i) => (
              <span 
                key={i} 
                className="word-rise inline-block mr-[0.2em] last:mr-0" 
                style={{ animationDelay: `${0.15 + i * 0.09}s` }}
              >
                {word}{" "}
              </span>
            ))}
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-wrap items-center gap-8">
          <Magnetic>
            <a 
              href="tel:+380443332211" 
              className="inline-flex items-center gap-3 bg-foreground px-10 py-5 text-lg font-semibold text-background transition-transform duration-300 hover:scale-[1.02]" 
              style={{ borderRadius: "var(--radius-control)" }}
            >
              Забронювати стіл
              <ArrowRight size={20} weight="bold" aria-hidden />
            </a>
          </Magnetic>
          
          <a 
            href="#hero" 
            className="text-lg font-medium border-b border-accent-foreground/30 pb-1 transition-colors hover:border-accent-foreground"
          >
            Наше меню
          </a>
        </div>

        <div className="mt-14 grid gap-4 text-sm font-medium text-accent-foreground/80 lg:grid-cols-3 border-t border-accent-foreground/10 pt-8">
          <div className="flex flex-col gap-1">
            <span className="uppercase tracking-widest text-[10px] opacity-60">Якість</span>
            <p>Традиційна італійська кухня за сімейними рецептами</p>
          </div>
          <div className="flex flex-col gap-1">
            <span className="uppercase tracking-widest text-[10px] opacity-60">Продукти</span>
            <p>Свіжа паста власного виробництва та фермерські інгредієнти</p>
          </div>
          <div className="flex flex-col gap-1">
            <span className="uppercase tracking-widest text-[10px] opacity-60">Атмосфера</span>
            <p>Затишок італійського дому для найважливіших моментів</p>
          </div>
        </div>
      </div>

      {/* Subtle brand watermark background for premium feel */}
      <div className="absolute -bottom-10 -right-10 pointer-events-none select-none opacity-[0.03] lg:opacity-[0.05]">
        <span className="font-display text-[20vw] leading-none whitespace-nowrap">
          FAMIGLIA
        </span>
      </div>
    </section>
  );
}