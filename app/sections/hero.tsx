"use client";
import { Reveal, Magnetic, Marquee, AmbientCanvas } from "@/components/mechanics";

export function SectionHero() {
  const headline = "Паста та вино у Києві";
  const marqueeItems = [
    "Домашня паста",
    "Римська піца",
    "Карта вин",
    "Італійські сири",
    "Київ • Поділ",
    "Pasta Famiglia",
    "Вечері при свічках"
  ];

  return (
    <section id="hero" className="relative min-h-[100svh] overflow-hidden bg-foreground text-background">
      {/* Background Layer */}
      <img 
        src="https://images.pexels.com/photos/5953526/pexels-photo-5953526.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1200" 
        alt="Інтер'єр ресторану Pasta Famiglia" 
        className="rp-graded absolute inset-0 h-full w-full object-cover opacity-70 mix-blend-multiply" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/45 to-foreground/70" />
      <div className="rp-grain absolute inset-0 pointer-events-none" />
      
      {/* Subtle Flour Particles */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <AmbientCanvas />
      </div>

      {/* Vertical locality label */}
      <span className="absolute right-4 top-28 hidden lg:block text-xs font-medium tracking-[0.35em] uppercase text-background/60 [writing-mode:vertical-rl]">
        Київ • Поділ
      </span>

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[92rem] flex-col justify-end px-4 pb-28 lg:px-10 lg:pb-16">
        <Reveal delay={0.1}>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-accent">
            Pasta Famiglia
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-background/75">
            <span className="flex items-center gap-1">★ 4.9</span>
            <span className="opacity-30">/</span>
            <span>127 відгуків у Google</span>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <h1 className="font-display font-extrabold text-background [text-wrap:balance] text-[clamp(3.2rem,11vw,10rem)] max-w-[12ch]">
            {headline.split(" ").map((word, i) => (
              <span key={i} className="inline-block  align-top">
                <span 
                  className="word-rise inline-block" 
                  style={{ animationDelay: `${0.15 + i * 0.09}s` }}
                >
                  {word}&nbsp;
                </span>
              </span>
            ))}
          </h1>
        </Reveal>

        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <Reveal delay={0.5}>
            <p className="max-w-md text-base lg:text-lg leading-relaxed text-background/80">
              Традиційні рецепти, власна свіжа паста та відбірна карта вин у затишному просторі на правому березі.
            </p>
          </Reveal>

          <Reveal delay={0.6}>
            <Magnetic>
              <a 
                href="#booking" 
                className="inline-flex items-center gap-3 bg-accent px-8 py-4 text-base font-semibold text-accent-foreground transition-colors hover:bg-accent/90" 
                style={{ borderRadius: "var(--radius-control)" }}
              >
                Забронювати стіл
                <span aria-hidden className="text-xl">→</span>
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