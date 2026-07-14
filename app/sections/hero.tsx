"use client";
import { Reveal, Magnetic, Marquee } from "@/components/mechanics";

export function SectionHero() {
  const headline = "ПАСТА РУЧНОЇ РОБОТИ";
  const words = headline.split(" ");
  const marqueeItems = [
    "PASTA FRESCA",
    "KYIV",
    "VINO ROSSO",
    "EST. 2024",
    "TRATTORIA",
    "DOLCI",
    "PIZZA ROMANA",
    "FAMIGLIA"
  ];

  return (
    <section id="hero" className="relative min-h-[100svh] overflow-hidden bg-foreground text-background">
      {/* full-bleed photo, graded dark — the room you walk into */}
      <img 
        src="https://images.pexels.com/photos/14590691/pexels-photo-14590691.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
        alt="Pasta Famiglia - ресторан у Києві" 
        className="rp-graded absolute inset-0 h-full w-full object-cover opacity-90" 
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/45 to-foreground/70" />
      <div className="rp-grain absolute inset-0" />
      
      {/* vertical locality label */}
      <span className="absolute right-4 top-28 hidden lg:block text-xs tracking-[0.35em] uppercase text-background/60 [writing-mode:vertical-rl]">
        КИЇВ • 50.4501° N
      </span>
      
      {/* type collides with the photo bottom — poster scale, breaks the safe box */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[92rem] flex-col justify-end px-4 pb-28 lg:px-10 lg:pb-16">
        <Reveal delay={0.1}>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-accent">
            PASTA FAMIGLIA
          </p>
        </Reveal>
        
        {/* trust line: ONLY real facts (rating/reviews) */}
        <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-background/75">
          <Reveal delay={0.2}>
            <div className="flex items-center gap-1.5">
              <span className="text-accent">★</span>
              <span className="font-display">4.9</span>
              <span className="opacity-40"></span>
              <span>127 відгуків</span>
            </div>
          </Reveal>
        </div>
        
        <h1 className="font-display font-extrabold text-background [text-wrap:balance] text-[clamp(3.2rem,11vw,10rem)] max-w-[12ch]">
          {words.map((word, i) => (
            <span key={i} className="inline-block  mr-[0.2em] last:mr-0">
              <span 
                className="word-rise inline-block" 
                style={{ animationDelay: `${0.3 + i * 0.09}s` }}
              >
                {word}
              </span>
            </span>
          ))}
        </h1>
        
        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <Reveal delay={0.6}>
            <p className="max-w-md text-base leading-relaxed text-background/80">
              Готуємо з італійського борошна твердих сортів за рецептами 1924 року. Власне виробництво пасти у центрі міста.
            </p>
          </Reveal>
          
          <Reveal delay={0.7}>
            <Magnetic>
              <a 
                href="#booking" 
                className="inline-flex items-center gap-3 bg-accent px-8 py-4 text-base font-semibold text-accent-foreground transition-colors hover:bg-accent/90" 
                style={{ borderRadius: "var(--radius-control)" }}
              >
                ЗАБРОНЮВАТИ СТІЛ<span aria-hidden className="text-xl">→</span>
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