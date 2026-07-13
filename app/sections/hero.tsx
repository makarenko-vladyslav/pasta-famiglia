"use client";

import { Reveal, Magnetic, Marquee } from "@/components/mechanics";
import { Star } from "@phosphor-icons/react";

export function SectionHero() {
  const h1Words = ["ПАСТА", "РУЧНОЇ", "РОБОТИ", "ТА", "ВИНО"];
  const marqueeItems = [
    "PASTA FAMIGLIA",
    "ВУЛ. АНТОНОВИЧА, 44",
    "ПН–НД 11:00–22:00",
    "OPEN KITCHEN",
    "VINO E CUCINA",
    "HANDMADE DAILY",
  ];

  return (
    <section id="hero" className="relative min-h-[100svh] overflow-hidden bg-foreground text-background">
      {/* full-bleed photo, graded dark — the room you walk into */}
      <img 
        src="https://images.pexels.com/photos/30754469/pexels-photo-30754469.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
        alt="Інтер'єр ресторану Pasta Famiglia" 
        className="rp-graded absolute inset-0 h-full w-full object-cover opacity-70 mix-blend-multiply" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/45 to-foreground/70" />
      <div className="rp-grain absolute inset-0" />
      
      {/* vertical locality label */}
      <span className="absolute right-4 top-28 hidden lg:block text-xs tracking-[0.35em] uppercase text-background/60 [writing-mode:vertical-rl]">
        КИЇВ · УКРАЇНА
      </span>
      
      {/* type collides with the photo bottom — poster scale, breaks the safe box */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[92rem] flex-col justify-end px-4 pb-28 lg:px-10 lg:pb-16">
        <Reveal delay={0.1}>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-accent">
            ІТАЛІЙСЬКИЙ РЕСТОРАН
          </p>
        </Reveal>

        {/* trust line: ONLY real facts (rating/reviews/street) */}
        <Reveal delay={0.2}>
          <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-background/75">
            <span className="flex items-center gap-1">
              <Star weight="fill" className="text-accent" size={14} />
              4.9
            </span>
            <span className="opacity-40">·</span>
            <span>127 відгуків</span>
            <span className="opacity-40 hidden sm:inline">·</span>
            <span className="hidden sm:inline">вул. Антоновича, 44</span>
          </div>
        </Reveal>

        <h1 className="font-display font-extrabold leading-[0.88] text-background [text-wrap:balance] text-[clamp(3.2rem,11vw,10rem)] max-w-[12ch]">
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

        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <Reveal delay={0.4}>
            <p className="max-w-md text-base leading-relaxed text-background/80">
              Готуємо свіжу пасту щоранку за рецептами італійських регіонів. Відкрита кухня, добірна винна карта та атмосфера київського середмістя.
            </p>
          </Reveal>
          
          <Reveal delay={0.5}>
            <Magnetic>
              <a 
                href="tel:+380443332211" 
                className="inline-flex items-center gap-3 bg-accent px-8 py-4 text-base font-semibold text-accent-foreground transition-transform hover:scale-[1.02]" 
                style={{ borderRadius: "var(--radius-control)" }}
              >
                Бронювання
                <span aria-hidden className="text-xl">→</span>
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