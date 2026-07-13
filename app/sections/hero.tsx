"use client";
import { Reveal, Magnetic, Marquee, AmbientCanvas } from "@/components/mechanics";

export function SectionHero() {
  const h1Text = "Свіжа паста та вино";
  const h1Words = h1Text.split(" ");

  const marqueeItems = [
    "ПАСТА РУЧНОЇ РОБОТИ",
    "ВИННА КАРТА",
    "КЛАСИЧНА КАРБОНАРА",
    "ДОМАШНЄ ТІРАМІСУ",
    "РИЗОТО З ГРИБАМИ",
    "КИЇВ",
    "ВІДКРИТА КУХНЯ"
  ];

  return (
    <section id="hero" className="relative min-h-[100svh] overflow-hidden bg-foreground text-background">
      {/* Living background: AmbientCanvas with drifting terracotta/olive tones */}
      <div className="absolute inset-0 z-0 opacity-15">
        <AmbientCanvas />
      </div>

      {/* full-bleed photo, graded dark — the room you walk into */}
      <img 
        src="https://images.pexels.com/photos/36909413/pexels-photo-36909413.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
        alt="Pasta Famiglia італійський ресторан" 
        className="rp-graded absolute inset-0 h-full w-full object-cover opacity-70 mix-blend-multiply" 
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/45 to-foreground/70" />
      <div className="rp-grain absolute inset-0 pointer-events-none" />

      {/* vertical locality label */}
      <span className="absolute right-4 top-28 hidden lg:block text-xs font-medium tracking-[0.35em] uppercase text-background/60 [writing-mode:vertical-rl]relative z-10 mx-auto flex min-h-[100svh] max-w-[92rem] flex-col justify-end px-4 pb-28 lg:px-10 lg:pb-16">
        <Reveal delay={0.1}>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-accent">ІТАЛІЙСЬКА ВЕЧЕРЯ</p>
        </Reveal>

        {/* trust line: ONLY real facts (rating/reviews) */}
        <Reveal delay={0.2}>
          <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-background/75">
            <span className="flex items-center gap-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-accent">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              4.</span>
            <span className="opacity-40">/</span>
            <span>127 відгуків у Google</span>
          </div>
        </Reveal>

        <h1 className="font-display font-extrabold text-background [text-wrap:balance] text-[clamp(3.2rem,11vw,10rem)] max-w-[12ch] tracking-tight">
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
            <p className="max-w-md text-base lg:text-lg leading-relaxed text-background/80 font-light">
              Сімейний ресторан</p>
          </Reveal>
          
          <Reveal delay={0.5}>
            <Magnetic>
              <a 
                href="tel:+380443332211" 
                className="inline-flex items-center gap-3 bg-accent px-8 py-4 text-base font-semibold text-accent-foreground transition-transform active:scale-95" 
                style={{ borderRadius: "var(--radius-control)" }}
              >
                Забронювати стіл<span aria-hidden className="text-xl">→</span>
              </a>
            </Magnetic>
          </Reveal>
        </div>
      </div>

      {/* living idle layer: marquee riding the hero's bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-background/15 bg-foreground/70 py-3 backdrop-blur-sm">
        <Marquee items={marqueeItems} className="font-display text-sm uppercase tracking-[0.25em] text-background/70" />
      </div>
    </section>
  );
}