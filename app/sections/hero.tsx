"use client";
import { Reveal, Magnetic, Marquee, AmbientCanvas } from "@/components/mechanics";

export function SectionHero() {
  const h1Text = "Pasta Famiglia у Києві";

  return (
    <section id="hero" className="relative min-h-[100svh] overflow-hidden bg-foreground text-background">
      {/* Ambient drifting layer behind content */}
      <div className="absolute inset-0 z-0">
        <AmbientCanvas />
      </div>

      {/* full-bleed photo, graded dark — the room you walk into */}
      <img 
        src="https://images.pexels.com/photos/26729398/pexels-photo-26729398.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
        alt="Свіжа паста власного приготування" 
        className="rp-graded absolute inset-0 h-full w-full object-cover opacity-90" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/45 to-foreground/70" />
      <div className="rp-grain absolute inset-0 pointer-events-none" />

      {/* vertical locality label */}
      <span className="absolute right-4 top-28 hidden lg:block text-xs tracking-[0.35em] uppercase text-background/60 [writing-mode:vertical-rl]">
        Київ • Україна
      </span>

      {/* type collides with the photo bottom — poster scale, breaks the safe box */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[92rem] flex-col justify-end px-4 pb-28 lg:px-10 lg:pb-16">
        <Reveal delay={0.1}>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-accent">Італійський ресторан</p>
        </Reveal>
        
        {/* trust line: ONLY real facts (rating/reviews) */}
        <Reveal delay={0.2}>
          <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-mono text-background/75">
            <span className="flex items-center gap-1">★ 4.9</span>
            <span className="opacity-30">/</span>
            <span>127 ВІДГУКІВ</span>
          </div>
        </Reveal>

        <h1 className="font-display font-extrabold text-background [text-wrap:balance] text-[clamp(3.2rem,11vw,10rem)] max-w-[12ch]">
          {h1Text.split(" ").map((word, i) => (
            <span key={i} className="inline-block  pb-[0.1em] -mb-[0.1em]">
              <span 
                className="word-rise inline-block" 
                style={{ animationDelay: `${0.15 + i * 0.09}s` }}
              >
                {word}&nbsp;
              </span>
            </span>
          ))}
        </h1>

        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <Reveal delay={0.4}>
            <p className="max-w-md text-base lg:text-lg leading-relaxed text-background/80 font-body">
              Ресторан італійської кухні на кожен день. Паста власного виробництва, добірна винна карта та атмосфера сімейної вечері.
            </p>
          </Reveal>
          
          <Reveal delay={0.5}>
            <Magnetic>
              <a 
                href="tel:+380443332211" 
                className="inline-flex items-center gap-3 bg-accent px-8 py-4 text-base font-semibold text-accent-foreground transition-transform duration-500 hover:scale-[1.02]" 
                style={{ borderRadius: "var(--radius-control)" }}
              >
                ПЕРЕГЛЯНУТИ МЕНЮ <span aria-hidden className="text-xl">→</span>
              </a>
            </Magnetic>
          </Reveal>
        </div>
      </div>

      {/* living idle layer: marquee riding the hero's bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-background/15 bg-foreground/70 py-3 backdrop-blur-sm">
        <Marquee 
          items={["PASTA FAMIGLIA", "KYIV", "VINO", "DAL 2024", "ITALIANO", "FAMIGLIA", "PIZZA"]} 
          className="font-display text-sm uppercase tracking-[0.25em] text-background/70" 
        />
      </div>
    </section>
  );
}