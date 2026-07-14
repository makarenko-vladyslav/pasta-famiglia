"use client";
import { Reveal, Magnetic, Marquee } from "@/components/mechanics";

/**
 * ACT I: Arrival
 * A dark immersive entrance featuring a full-bleed graded photo, 
 * poster-scale typography, and a living marquee edge.
 */
export function SectionHero() {
  const businessName = "Pasta Famiglia";
  const words = businessName.split(" ");
  const marqueeItems = [
    "PASTA FRESCA",
    "VINO ITALIANO",
    "PIZZA NAPOLETANA",
    "ANTIPASTI",
    "TRADIZIONE",
    "DOLCI",
    "FAMIGLIA"
  ];

  return (
    <section id="hero" className="relative min-h-[100svh] overflow-hidden bg-foreground text-background">
      {/* Full-bleed photo, graded dark — the room you walk into */}
      <img 
        src="https://images.pexels.com/photos/26729398/pexels-photo-26729398.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
        alt="Pasta Famiglia Interior" 
        className="rp-graded absolute inset-0 h-full w-full object-cover opacity-90" 
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/45 to-foreground/70" />
      <div className="rp-grain absolute inset-0 pointer-events-none" />

      {/* Vertical locality label */}
      <span className="absolute right-4 top-28 hidden lg:block text-xs tracking-[0.35em] uppercase text-background/60 [writing-mode:vertical-rl]">
        КИЇВ
      </span>

      {/* Type collides with the photo bottom — poster scale */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[92rem] flex-col justify-end px-4 pb-28 lg:px-10 lg:pb-16">
        <Reveal delay={0.1}>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-accent">
            ІТАЛІЙСЬКИЙ РЕСТОРАН
          </p>
        </Reveal>

        {/* Trust line: real facts (rating/reviews) */}
        <Reveal delay={0.2}>
          <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-background/75 font-medium">
            <div className="flex items-center gap-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-accent">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <span>4.9</span>
            </div>
            <span className="opacity-30"></span>
            <span className="tracking-wider">127 ВІДГУКІВ</span>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <h1 className="font-display font-extrabold text-background [text-wrap:balance] text-[clamp(3.2rem,11vw,10rem)] max-w-[12ch]">
            {words.map((word, i) => (
              <span 
                key={i} 
                className="inline-block mr-[0.2em] word-rise" 
                style={{ animationDelay: `${0.15 + i * 0.09}s` }}
              >
                {word}{" "}
              </span>
            ))}
          </h1>
        </Reveal>

        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <Reveal delay={0.5}>
            <p className="max-w-md text-base lg:text-lg leading-relaxed text-background/80">
              Сімейні рецепти, домашня паста та атмосфера сонячної Італії в самому серці Києва. Кожна страва — це історія нашої родини.
            </p>
          </Reveal>

          <Reveal delay={0.6}>
            <Magnetic>
              <a 
                href="tel:+380443332211" 
                className="inline-flex items-center gap-3 bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground transition-transform active:scale-95" 
                style={{ borderRadius: "var(--radius-control)" }}
              >
                ЗАБРОНЮВАТИ СТІЛ
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14m-7-7 7 7-7 7" />
                </svg>
              </a>
            </Magnetic>
          </Reveal>
        </div>
      </div>

      {/* Living idle layer: marquee riding the hero's bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-background/15 bg-foreground/70 py-3 backdrop-blur-sm">
        <Marquee 
          items={marqueeItems} 
          className="font-display text-xs lg:text-sm uppercase tracking-[0.25em] text-background/70" 
        />
      </div>
    </section>
  );
}