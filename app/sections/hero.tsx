"use client";
import { Reveal, Magnetic, Marquee } from "@/components/mechanics";

/**
 * SectionHero - ACT I: Arrival
 * A high-impact entrance for Pasta Famiglia.
 * Features a full-bleed graded photo room, poster H1 collision, and real-time facts.
 */
export function SectionHero() {
  const h1Text = "ПАСТА FAMIGLIA НА АНТОНОВИЧА";
  const marqueeItems = [
    "ПАСТА РУЧНОЇ РОБОТИ",
    "ВИННА КАРТА",
    "ВЛАСНЕ ВИРОБНИЦТВО",
    "СІМЕЙНІ ВЕЧЕРІ",
    "КЛАСИЧНІ РЕЦЕПТИ",
    "DOLCI",
    "ANTIPASTI"
  ];

  return (
    <section id="hero" className="relative min-h-[100svh] overflow-hidden bg-foreground text-background">
      {/* full-bleed photo, graded dark — the room you walk into */}
      <img 
        src="https://images.pexels.com/photos/6287375/pexels-photo-6287375.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1200" 
        alt="Інтер'єр ресторану Pasta Famiglia" 
        className="rp-graded absolute inset-0 h-full w-full object-cover opacity-70 mix-blend-multiply"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/45 to-foreground/70" />
      <div className="rp-grain absolute inset-0 pointer-events-none" />

      {/* vertical locality label */}
      <span className="absolute right-4 top-28 hidden lg:block text-xs tracking-[0.35em] uppercase text-background/60 [writing-mode:vertical-rl]">
        КИЇВ
      </span>

      {/* type collides with the photo bottom — poster scale, breaks the safe box */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[92rem] flex-col justify-end px-4 pb-28 lg:px-10 lg:pb-24">
        <Reveal delay={0.1}>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-accent">
            ІТАЛІЙСЬКА КУХНЯ
          </p>
        </Reveal>

        {/* trust line: ONLY real facts (rating/reviews/street) */}
        <Reveal delay={0.2}>
          <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-background/75 font-body">
            <span>★ 4.9</span>
            <span className="opacity-40">·</span>
            <span>127 відгуків</span>
            <span className="opacity-40">·</span>
            <span>вул. Антоновича, 44</span>
          </div>
        </Reveal>

        <h1 className="font-display font-extrabold text-background [text-wrap:balance] text-[clamp(3.2rem,11vw,10rem)] max-w-[12ch] leading-[0.92]">
          {h1Text.split(" ").map((word, i) => (
            <span 
              key={i} 
              className="word-rise inline-block mr-[0.2em]" 
              style={{ animationDelay: `${0.15 + i * 0.09}s` }}
            >
              {word}{" "}
            </span>
          ))}
        </h1>

        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <Reveal delay={0.5}>
            <p className="max-w-md text-base lg:text-lg leading-relaxed text-background/80 font-body">
              Рецепти італійської родини у центрі столиці. Готуємо свіжу пасту вручну щодня з 11:00 до 22:00.
            </p>
          </Reveal>
          
          <Reveal delay={0.6}>
            <Magnetic>
              <a 
                href="#booking" 
                className="inline-flex items-center gap-3 bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground transition-transform duration-300 hover:scale-[1.02]" 
                style={{ borderRadius: "var(--radius-control)" }}
              >
                ПЕРЕГЛЯНУТИ МЕНЮ
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="translate-y-[1px]">
                  <path d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </Magnetic>
          </Reveal>
        </div>
      </div>

      {/* living idle layer: marquee riding the hero's bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-background/15 bg-foreground/70 py-3 backdrop-blur-sm">
        <Marquee 
          items={marqueeItems} 
          className="font-display text-sm uppercase tracking-[0.25em] text-background/70" 
        />
      </div>
    </section>
  );
}