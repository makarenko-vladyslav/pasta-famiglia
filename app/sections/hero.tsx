"use client";

import { Reveal, Magnetic, Marquee, AmbientCanvas } from "@/components/mechanics";
import { Star } from "@phosphor-icons/react";

/**
 * SectionHero - ACT I: Arrival
 * 1:1 Translation of SKELETON and SPEC.
 * Business: Pasta Famiglia (Italian Restaurant)
 */
export function SectionHero() {
  const headline = "Свіжа паста ручної роботи";
  const words = headline.split(" ");
  
  const marqueeItems = [
    "Pasta Fresca",
    "Semola di Grano Duro",
    "Kyiv Center",
    "Authentic Recipes",
    "Handmade with Love",
    "Pasta Famiglia",
    "Київ Центр"
  ];

  return (
    <section id="hero" className="relative min-h-[100svh] overflow-hidden bg-foreground text-background">
      {/* Background Layer: Ambient Drift + Graded Photo */}
      <div className="absolute inset-0 z-0 opacity-40">
        <AmbientCanvas />
      </div>
      
      <img 
        src="https://images.pexels.com/photos/36909413/pexels-photo-36909413.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
        alt="Процес виготовлення свіжої пасти Pasta Famiglia" 
        className="rp-graded absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-[1500ms] ease-out scale-100 hover:scale-[1.04]" 
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/45 to-foreground/70" />
      <div className="rp-grain absolute inset-0 pointer-events-none" />

      {/* Vertical locality label */}
      <span className="absolute right-4 top-28 hidden lg:block text-xs tracking-[0.35em] uppercase text-background/60 [writing-mode:vertical-rl] font-body">
        КИЇВ
      </span>

      {/* Hero Content Container */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[92rem] flex-col justify-end px-4 pb-28 lg:px-10 lg:pb-20">
        <Reveal delay={0.1}>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-accent">
            італійський ресторан
          </p>
        </Reveal>

        {/* Trust line: real facts (rating/reviews) */}
        <Reveal delay={0.2}>
          <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium text-background/75">
            <div className="flex items-center gap-1 text-accent">
              <Star weight="fill" size={16} />
              <span className="font-display text-base">4.9</span>
            </div>
            <span className="opacity-20">/</span>
            <span className="uppercase tracking-wider">127 відгуків</span>
            <span className="opacity-20 hidden md:inline">/</span>
            <span className="uppercase tracking-wider hidden md:inline">Центр міста</span>
          </div>
        </Reveal>

        <h1 className="font-display font-extrabold text-background [text-wrap:balance] text-[clamp(3.2rem,11vw,10rem)] max-w-[12ch] leading-[0.95] tracking-[-0.02em]">
          {words.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden mr-[0.2em] last:mr-0">
              <span 
                className="word-rise inline-block" 
                style={{ animationDelay: `${0.25 + i * 0.1}s` }}
              >
                {word}
              </span>
            </span>
          ))}
        </h1>

        <div className="mt-10 flex flex-wrap items-end justify-between gap-8">
          <Reveal delay={0.6}>
            <p className="max-w-md text-base lg:text-lg leading-relaxed text-background/80 font-body">
              Подача за 20 хвилин або напій у подарунок. Готуємо з італійського борошна Semola в центрі Києва.
            </p>
          </Reveal>

          <Reveal delay={0.75}>
            <Magnetic>
              <a 
                href="#hero" 
                className="inline-flex items-center gap-3 bg-accent px-8 py-4 text-base font-semibold text-accent-foreground transition-transform active:scale-95" 
                style={{ borderRadius: "var(--radius-control)" }}
              >
                Забронювати стіл
                <span className="text-xl" aria-hidden>→</span>
              </a>
            </Magnetic>
          </Reveal>
        </div>
      </div>

      {/* Marquee edge */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-background/10 bg-foreground/30 py-4 backdrop-blur-md">
        <Marquee 
          items={marqueeItems} 
          className="font-display text-[0.7rem] lg:text-xs uppercase tracking-[0.3em] text-background/60" 
        />
      </div>
      
      <style jsx global>{`
        @keyframes word-rise {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .word-rise {
          animation: word-rise 1.2s var(--ease-out-cubic) forwards;
          transform: translateY(100%);
        }
      `}</style>
    </section>
  );
}