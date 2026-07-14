"use client";
import { Reveal, Magnetic, Marquee } from "@/components/mechanics";

/**
 * SectionHero - ACT I: Arrival
 * Dark immersive room with full-bleed media and poster-scale typography.
 * Follows the vetted award composition skeleton.
 */
export function SectionHero() {
  const h1Words = ["Pasta", "Famiglia"];
  const marqueeItems = [
    "ПАСТА ВЛАСНОГО ВИРОБНИЦТВА",
    "ВИННА КАРТА",
    "ЦЕНТР КИЄВА",
    "ВЕЧЕРІ ТА ОБІДИ",
    "ІТАЛІЙСЬКА КУХНЯ",
    "ВУЛИЦЯ ВЕЛИКА ВАСИЛЬКІВСЬКА",
    "ДОМАШНІ РЕЦЕПТИ"
  ];

  return (
    <section id="hero" className="relative min-h-[100svh] overflow-hidden bg-foreground text-background">
      {/* Full-bleed photo, graded dark — the room you walk into */}
      <img 
        src="https://images.pexels.com/photos/6287379/pexels-photo-6287379.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
        alt="Pasta Famiglia atmosphere" 
        className="rp-graded absolute inset-0 h-full w-full object-cover opacity-70 mix-blend-multiply" 
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/45 to-foreground/70" />
      <div className="rp-grain absolute inset-0" />

      {/* Vertical locality label */}
      <span className="absolute right-4 top-28 hidden lg:block text-xs tracking-[0.35em] uppercase text-background/60 [writing-mode:vertical-rl]">
        Київ
      </span>

      {/* Content Layer: Poster scale typography colliding with the photo bottom */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[92rem] flex-col justify-end px-4 pb-28 lg:px-10 lg:pb-16">
        <Reveal delay={0.1}>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-accent">
            Італійський ресторан
          </p>
        </Reveal>

        {/* Trust line: Facts only (rating and review count) */}
        <Reveal delay={0.2}>
          <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-background/75">
            <span className="font-display">★ 4.9</span>
            <span className="h-px w-4 bg-background/20" />
            <span>127 відгуків у Google</span>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <h1 className="font-display font-extrabold text-background [text-wrap:balance] text-[clamp(3.2rem,11vw,10rem)] max-w-[12ch]">
            {h1Words.map((word, i) => (
              <span 
                key={i} 
                className="word-rise inline-block mr-[0.2em]" 
                style={{ animationDelay: `${0.15 + i * 0.09}s` }}
              >
                {word}{" "}
              </span>
            ))}
          </h1>
        </Reveal>

        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <Reveal delay={0.4}>
            <p className="max-w-md text-base leading-relaxed text-background/80">
              Ресторан італійської кухні у центрі Києва. Готуємо домашню пасту власного виробництва та подаємо вина з сонячних регіонів Італії щодня з .
            </p>
          </Reveal>
          
          <Reveal delay={0.5}>
            <Magnetic>
              <a 
                href="#booking" 
                className="inline-flex items-center gap-3 bg-accent px-8 py-4 text-base font-semibold text-accent-foreground transition-transform hover:scale-[1.02]" 
                style={{ borderRadius: "var(--radius-control)" }}
              >
                Забронювати стіл<span aria-hidden className="text-lg">→</span>
              </a>
            </Magnetic>
          </Reveal>
        </div>
      </div>

      {/* Living idle layer: Marquee riding the hero's bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-background/15 bg-foreground/70 py-3 backdrop-blur-sm">
        <Marquee 
          items={marqueeItems} 
          className="font-display text-sm uppercase tracking-[0.25em] text-background/70" 
        />
      </div>
    </section>
  );
}