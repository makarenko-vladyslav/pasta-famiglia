"use client";
import { Reveal, Magnetic, Marquee } from "@/components/mechanics";
import { Star } from "@phosphor-icons/react";

/**
 * ACT I: Arrival.
 * Full-viewport immersive atmosphere for Pasta Famiglia.
 * Implements the vetted skeleton with poster-scale typography and selling headline.
 */
export function SectionHero() {
  const headline = "Справжня паста ручної роботи";
  const words = headline.split(" ");

  const marqueeItems = [
    "PASTA FRESCA",
    "PIZZA NAPOLETANA",
    "VINO ITALIANO",
    "TRADIZIONE",
    "DOLCI",
    "FAMIGLIA",
    "AUTHENTIC TASTE"
  ];

  return (
    <section id="hero" className="relative min-h-[100svh] overflow-hidden bg-foreground text-background">
      {/* Full-bleed photo: The room you walk into */}
      <img 
        src="https://images.pexels.com/photos/5947611/pexels-photo-5947611.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
        alt="Свіжа паста ручної роботи в Pasta Famiglia" 
        className="absolute inset-0 h-full w-full object-cover opacity-90" 
        loading="eager"
      />
      
      {/* Scrims and Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/45 to-foreground/70" />
      <div className="rp-grain absolute inset-0 pointer-events-none" />

      {/* Vertical Locality Label */}
      <span className="absolute right-4 top-28 hidden lg:block text-xs tracking-[0.35em] uppercase text-background/60 [writing-mode:vertical-rl]">
        Київ
      </span>

      {/* Content Container */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[92rem] flex-col justify-end px-4 pb-28 lg:px-10 lg:pb-16">
        <Reveal delay={0.1}>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-accent">
            Pasta Famiglia
          </p>
        </Reveal>

        {/* Trust Line: Real facts only */}
        <Reveal delay={0.2}>
          <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-background/75">
            <div className="flex text-accent">
              {[...Array(5)].map((_, i) => (
                <Star key={i} weight="fill" size={14} />
              ))}
            </div>
            <span>4.9 рейтинг</span>
            <span className="opacity-30"></span>
            <span>127 відгуків</span>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <h1 className="font-display font-extrabold text-background [text-wrap:balance] text-[clamp(3.2rem,11vw,10rem)] max-w-[12ch]">
            {words.map((word, i) => (
              <span 
                key={i} 
                className="inline-block mr-[0.2em] last:mr-0 word-rise" 
                style={{ animationDelay: `${0.15 + i * 0.09}s` }}
              >
                {word}{" "}
              </span>
            ))}
          </h1>
        </Reveal>

        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <Reveal delay={0.5}>
            <p className="max-w-md text-base lg:text-lg leading-relaxed text-background/80 font-body">
              Відчуйте автентичний смак Італії у самому серці Києва. Традиційні рецепти, 
              добірні інгредієнти та любов у кожній страві.
            </p>
          </Reveal>
          
          <Reveal delay={0.6}>
            <Magnetic>
              <a 
                href="#booking" 
                className="inline-flex items-center gap-3 bg-accent px-8 py-4 text-base font-semibold text-accent-foreground transition-transform hover:scale-[1.02]" 
                style={{ borderRadius: "var(--radius-control)" }}
              >
                Забронювати стіл
                <span aria-hidden className="text-xl">→</span>
              </a>
            </Magnetic>
          </Reveal>
        </div>
      </div>

      {/* Living Idle Layer: Marquee riding the edge */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-background/15 bg-foreground/70 py-4 backdrop-blur-sm">
        <Marquee 
          items={marqueeItems} 
          className="font-display text-xs lg:text-sm uppercase tracking-[0.25em] text-background/70" 
        />
      </div>
    </section>
  );
}