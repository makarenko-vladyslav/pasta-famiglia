"use client";
import { Reveal, Magnetic, Marquee } from "@/components/mechanics";

export function SectionHero() {
  const headline = "ПАСТА ТА ВИНО";
  const marqueeItems = [
    "PASTA FAMIGLIA",
    "СВІЖА ПАСТА",
    "ВИННА КАРТА",
    "КИЇВ",
    "ПОДІЛ",
    "PASTA FAMIGLIA",
    "ВЕЧЕРІ НА ПОДОЛІ",
    "ІТАЛІЙСЬКА КУХНЯ"
  ];

  return (
    <section id="hero" className="relative min-h-[100svh] overflow-hidden bg-foreground text-background">
      {/* full-bleed photo, graded dark — the room you walk into */}
      <img 
        src="https://images.pexels.com/photos/36909413/pexels-photo-36909413.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
        alt="Інтер'єр ресторану Pasta Famiglia" 
        className="rp-graded absolute inset-0 h-full w-full object-cover opacity-90" 
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/45 to-foreground/70" />
      <div className="rp-grain absolute inset-0" />

      {/* vertical locality label */}
      <span className="absolute right-4 top-28 hidden lg:block text-xs tracking-[0.35em] uppercase text-background/60 [writing-mode:vertical-rl]">
        Київ • Поділ
      </span>

      {/* type collides with the photo bottom — poster scale, breaks the safe box */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[92rem] flex-col justify-end px-4 pb-28 lg:px-10 lg:pb-16">
        <Reveal delay={0.1}>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-accent">
            PASTA FAMIGLIA
          </p>
        </Reveal>

        {/* trust line: ONLY real facts (rating/reviews/street) */}
        <Reveal delay={0.2}>
          <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-background/75">
            <span className="flex items-center gap-1">
              <span className="text-accent">★</span> 4.9
            </span>
            <span className="opacity-30"></span>
            <span>127 відгуків у Google</span>
          </div>
        </Reveal>

        <h1 className="font-display font-extrabold text-background [text-wrap:balance] text-[clamp(3.2rem,11vw,10rem)] max-w-[12ch]">
          {headline.split(" ").map((word, i) => (
            <span 
              key={i} 
              className="word-rise inline-block mr-[0.2em] last:mr-0" 
              style={{ animationDelay: `${0.4 + i * 0.12}s` }}
            >
              {word}{" "}
            </span>
          ))}
        </h1>

        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <Reveal delay={0.6}>
            <p className="max-w-md text-base lg:text-lg leading-relaxed text-background/80">
              Ресторан італійської кухні. Готуємо пасту власного виробництва та пропонуємо карту вин з різних регіонів Італії.
            </p>
          </Reveal>
          
          <Reveal delay={0.8}>
            <Magnetic>
              <a 
                href="tel:+380443332211" 
                className="inline-flex items-center gap-3 bg-accent px-8 py-4 text-base font-semibold text-accent-foreground transition-transform hover:scale-105" 
                style={{ borderRadius: "var(--radius-control)" }}
              >
                РЕЗЕРВ СТОЛУ <span aria-hidden className="text-xl">→</span>
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