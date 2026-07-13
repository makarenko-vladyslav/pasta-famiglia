"use client";

import { Reveal, Magnetic, Marquee, ScrollScene } from "@/components/mechanics";

/**
 * ACT I: Arrival.
 * Full-viewport immersive hero with scroll-driven parallax and word-rise typography.
 * Layout adheres to the provided Skeleton law.
 */
export function SectionHero() {
  const headline = "Свіжа паста на Антоновича";
  const marqueeItems = [
    "PASTA FAMIGLIA",
    "HANDMADE EVERY MORNING",
    "ВУЛИЦЯ АНТОНОВИЧА 44",
    "OPEN KITCHEN",
    "TRADIZIONE ITALIANA",
    "СВІЖЕ ТІСТО",
    "20 ХВИЛИН АБО НАПІЙ"
  ];

  return (
    <section id="hero" className="relative bg-foreground text-background overflow-hidden">
      <ScrollScene heightVh={230}>
        {/* Photo layer: Parallax scale and position shift handled by scene-p utility */}
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/14590691/pexels-photo-14590691.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
            alt="Процес приготування свіжої пасти в Pasta Famiglia" 
            className="rp-graded absolute inset-0 h-full w-full object-cover opacity-70 mix-blend-multiply"
            style={{ 
              transform: "scale(calc(1.18 - var(--scene-p) * 0.18))",
              objectPosition: "center 40%"
            }}
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--color-foreground))] via-[hsl(var(--color-foreground))]/40 to-[hsl(var(--color-foreground))]/65" />
          <div className="rp-grain absolute inset-0 opacity-40" />
        </div>

        {/* Content Layer: Poster typography and interactive elements */}
        <div className="relative z-10 flex h-full flex-col justify-between px-4 pb-24 pt-28 lg:px-10">
          <div 
            className="my-auto" 
            style={{ 
              transform: "translateY(calc(var(--scene-p) * 8vh)) scale(calc(1 - var(--scene-p) * 0.22))", 
              transformOrigin: "left center" 
            }}
          >
            <Reveal delay={0.1}>
              <p 
                className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-accent" 
                style={{ opacity: "calc(1 - var(--scene-p) * 1.6)" }}
              >
                PASTA FAMIGLIA · КИЇВ
              </p>
            </Reveal>

            <h1 className="font-display font-extrabold leading-[0.88] tracking-[-0.055em] text-background [text-wrap:balance] text-[clamp(3.4rem,12vw,11rem)] max-w-[11ch]">
              {headline.split(" ").map((word, i) => (
                <span 
                  key={i} 
                  className="word-rise inline-block mr-[0.2em]" 
                  style={{ animationDelay: `${0.15 + i * 0.09}s` }}
                >
                  {word}
                </span>
              ))}
            </h1>
          </div>

          <div 
            className="flex flex-wrap items-end justify-between gap-6" 
            style={{ 
              opacity: "var(--scene-p)", 
              transform: "translateY(calc((1 - var(--scene-p)) * 3vh))" 
            }}
          >
            <div className="flex flex-col gap-4">
              <Reveal delay={0.3}>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-background/75 font-medium tracking-tight">
                  <span className="flex text-accent">★★★★★</span>
                  <span>4.9</span>
                  <span className="opacity-40">/</span>
                  <span>127 відгуків</span>
                  <span className="opacity-40">/</span>
                  <span>вул. Антоновича, 44, Київ</span>
                </div>
              </Reveal>
              
              <Reveal delay={0.4}>
                <p className="max-w-md text-base md:text-lg leading-relaxed text-background/80 font-body">
                  Замішуємо тісто щоранку на відкритій кухні. Подаємо страву за 20 хвилин або пригощаємо напоєм.
                </p>
              </Reveal>
            </div>

            <div className="shrink-0">
              <Magnetic>
                <a 
                  href="#contacts" 
                  className="inline-flex items-center gap-3 bg-accent px-8 py-4 text-base font-semibold text-accent-foreground transition-colors hover:bg-accent/90" 
                  style={{ borderRadius: "var(--radius-control)" }}
                >
                  Забронювати стіл за 30 секунд
                  <svg 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    aria-hidden="true"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </Magnetic>
            </div>
          </div>
        </div>

        {/* Edge Marquee: Riding the hero boundary */}
        <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-background/15 py-4 bg-foreground/10 backdrop-blur-sm">
          <Marquee 
            items={marqueeItems} 
            className="font-display text-xs md:text-sm uppercase tracking-[0.25em] text-background/70" 
          />
        </div>
      </ScrollScene>
    </section>
  );
}