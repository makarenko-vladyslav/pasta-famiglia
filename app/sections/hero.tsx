"use client";
import { Reveal, Magnetic, Marquee } from "@/components/mechanics";

export function SectionHero() {
  const headline = "СПРАВЖНЯ ІТАЛІЙСЬКА ДУША";
  const words = headline.split(" ");
  
  const marqueeItems = [
    "СВІЖА ПАСТА",
    "ПІЦА З ПЕЧІ",
    "ВЛАСНЕ ВИНО",
    "ЗАТИШНА АТМОСФЕРА",
    "ІТАЛІЙСЬКІ ТРАДИЦІЇ",
    "СІМЕЙНИЙ РЕСТОРАН"
  ];

  return (
    <section id="hero" className="relative min-h-[100svh] overflow-hidden bg-foreground text-background">
      {/* full-bleed photo, graded dark — the room you walk into */}
      <img 
        src="https://images.pexels.com/photos/29819295/pexels-photo-29819295.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
        alt="Свіжа паста в Pasta Famiglia" 
        className="rp-graded absolute inset-0 h-full w-full object-cover opacity-70 mix-blend-multiply" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/45 to-foreground/70" />
      <div className="rp-grain absolute inset-0" />

      {/* vertical locality label */}
      <span className="absolute right-4 top-28 hidden lg:block text-xs tracking-[0.35em] uppercase text-background/60 [writing-mode:vertical-rl]">
        КИЇВ • АНТОНОВИЧА, 44
      </span>

      {/* type collides with the photo bottom — poster scale, breaks the safe box */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[92rem] flex-col justify-end px-4 pb-28 lg:px-10 lg:pb-16">
        <Reveal delay={0.1}>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-accent">
            СІМЕЙНІ ТРАДИЦІЇ
          </p>
        </Reveal>

        {/* trust line: real facts (rating/reviews) */}
        <Reveal delay={0.2}>
          <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-background/75">
            <div className="flex items-center gap-1 text-accent">
              {[...Array(5)].map((_, i) => (
                <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <span className="font-display">4.9</span>
            <span className="opacity-40">•</span>
            <span className="uppercase tracking-wider text-xs">127 ВІДГУКІВ</span>
          </div>
        </Reveal>

        <h1 className="font-display font-extrabold text-background [text-wrap:balance] text-[clamp(3.2rem,11vw,10rem)] max-w-[12ch] uppercase">
          {words.map((word, i) => (
            <span 
              key={i} 
              className="word-rise inline-block mr-[0.2em] last:mr-0" 
              style={{ animationDelay: `${0.15 + i * 0.09}s` }}
            >
              {word}{" "}
            </span>
          ))}
        </h1>

        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <Reveal delay={0.5}>
            <p className="max-w-md text-base lg:text-lg leading-relaxed text-background/80">
              Відкрийте для себе смак автентичної пасти ручної роботи в самому серці Києва. Місце, де кожна страва розповідає історію італійських поколінь.
            </p>
          </Reveal>
          
          <Reveal delay={0.6}>
            <Magnetic>
              <a 
                href="#booking" 
                className="inline-flex items-center gap-3 bg-accent px-8 py-4 text-base font-semibold text-accent-foreground transition-transform hover:scale-[1.02]" 
                style={{ borderRadius: "var(--radius-control)" }}
              >
                ЗАМОВИТИ СТІЛ
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </Magnetic>
          </Reveal>
        </div>
      </div>

      {/* living idle layer: marquee riding the hero's bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-background/15 bg-foreground/70 py-4 backdrop-blur-sm">
        <Marquee 
          items={marqueeItems} 
          className="font-display text-xs lg:text-sm uppercase tracking-[0.3em] text-background/70" 
        />
      </div>
    </section>
  );
}