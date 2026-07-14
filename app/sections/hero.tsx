"use client";
import { Reveal, Magnetic, Marquee, AmbientCanvas } from "@/components/mechanics";

/**
 * SectionHero - ACT I: Arrival
 * A full-viewport immersive arrival featuring high-key pasta textures,
 * poster-scale typography, and a drifting ambient background.
 */
export function SectionHero() {
  const h1Words = "Свіжа паста власного виробництва".split(" ");

  return (
    <section 
      id="hero" 
      className="relative min-h-[100svh] overflow-hidden bg-foreground text-background"
    >
      {/* Full-bleed photo, graded dark — the room you walk into */}
      <img 
        src="https://images.pexels.com/photos/16716576/pexels-photo-16716576.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1920" 
        alt="Текстура свіжої пасти Pasta Famiglia" 
        className="absolute inset-0 h-full w-full object-cover opacity-70 mix-blend-multiply"
        loading="eager"
      />
      
      {/* Drifting atmospheric layer */}
      <div className="absolute inset-0 z-[1] opacity-30">
        <AmbientCanvas />
      </div>

      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-foreground via-foreground/45 to-foreground/70" />
      <div className="rp-grain absolute inset-0 z-[3]" />

      {/* Vertical locality label */}
      <span className="absolute right-4 top-28 z-10 hidden lg:block text-xs tracking-[0.35em] uppercase text-background/60 [writing-mode:vertical-rl]">
        Київ</span>

      {/* Type collides with the photo bottom — poster scale */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[92rem] flex-col justify-end px-4 pb-28 lg:px-10 lg:pb-16">
        <Reveal delay={0.1}>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-accent">
            PASTA FAMIGLIA
          </p>
        </Reveal>

        {/* Trust line: ONLY real facts (rating/reviews) */}
        <Reveal delay={0.2}>
          <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-background/75 font-display uppercase tracking-widest">
            <span className="text-accent">★ 4.9</span>
            <span className="opacity-20">/</span>
            <span>127 відгуків клієнтів</span>
          </div>
        </Reveal>

        <h1 className="font-display font-extrabold text-background [text-wrap:balance] text-[clamp(3.2rem,11vw,10rem)] max-w-[12ch]">
          {h1Words.map((word, i) => (
            <span 
              key={i} 
              className="inline-block  align-top"
            >
              <span 
                className="word-rise inline-block" 
                style={{ animationDelay: `${0.25 + i * 0.1}s` }}
              >
                {word}&nbsp;
              </span>
            </span>
          ))}
        </h1>

        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <Reveal delay={0.6}>
            <p className="max-w-md text-base lg:text-lg leading-relaxed text-background/80">
              Готуємо тісто щоранку з італійського борошна твердих сортів. 
              Відкрита кухня у центрі Києва, де кожна порція створюється вручну.
            </p>
          </Reveal>
          
          <Reveal delay={0.7}>
            <Magnetic>
              <a 
                href="#booking" 
                className="inline-flex items-center gap-3 bg-accent px-8 py-4 text-base font-semibold text-accent-foreground transition-colors hover:bg-accent/90" 
                style={{ borderRadius: "var(--radius-control)" }}
              >
                Забронювати стіл
                <svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  className="h-5 w-5" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </Magnetic>
          </Reveal>
        </div>
      </div>

      {/* Living idle layer: marquee riding the hero's bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-background/10 bg-foreground/50 py-3 backdrop-blur-sm">
        <Marquee 
          items={[
            "PASTA FAMIGLIA", 
            "КИЇВ 2024", 
            "", 
            "FRESH HANDMADE PASTA", 
            "ITALIAN FLOUR ONLY"
          ]} 
          className="font-display text-xs lg:text-sm uppercase tracking-[0.25em] text-background/60" 
        />
      </div>
    </section>
  );
}