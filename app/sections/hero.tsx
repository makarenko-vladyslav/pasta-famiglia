"use client";
import { Reveal, Magnetic, Marquee } from "@/components/mechanics";

export function SectionHero() {
  const h1Text = "РУЧНА ПАСТА ТА ВИНО";
  const marqueeContent = [
    "ВЛАСНЕ ВИРОБНИЦТВО",
    "СВІЖІ ТОМАТИ",
    "ВЕЧЕРІ З 2018 РОКУ",
    "ВИНО ВЛАСНОГО ІМПОРТУ",
    "КИЇВ, ЦЕНТР",
    "ВІСІМ ВИДІВ ПАСТИ"
  ];

  return (
    <section id="hero" className="relative min-h-[100svh] overflow-hidden bg-foreground text-background">
      {/* full-bleed photo, graded dark — the room you walk into */}
      <img 
        src="https://images.pexels.com/photos/9553941/pexels-photo-9553941.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
        alt="Pasta Famiglia Interior" 
        className="rp-graded absolute inset-0 h-full w-full object-cover opacity-70 mix-blend-multiply" 
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/45 to-foreground/70" />
      <div className="rp-grain absolute inset-0" />
      
      {/* vertical locality label */}
      <span className="absolute right-4 top-28 hidden lg:block text-xs tracking-[0.35em] uppercase text-background/60 [writing-mode:vertical-rl]">
        КИЇВ
      </span>

      {/* type collides with the photo bottom — poster scale, breaks the safe box */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[92rem] flex-col justify-end px-4 pb-28 lg:px-10 lg:pb-16">
        <Reveal delay={0.1}>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-accent">
            МАЙСТЕРНЯ ПАСТИ
          </p>
        </Reveal>

        {/* trust line: ONLY real facts (rating/reviews) */}
        <Reveal delay={0.2}>
          <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-background/75">
            <span className="font-display text-lg">4.9</span>
            <div className="flex gap-0.5 text-accent">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-3 w-3 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="opacity-50">/</span>
            <span className="uppercase tracking-wider">127 ВІДГУКІВ</span>
          </div>
        </Reveal>

        <h1 className="font-display font-extrabold text-background [text-wrap:balance] text-[clamp(3.2rem,11vw,10rem)] max-w-[12ch]">
          {h1Text.split(" ").map((word, i) => (
            <span key={i} className="word-rise inline-block mr-[0.2em]" style={{ animationDelay: `${0.15 + i * 0.09}s` }}>
              {word}{" "}
            </span>
          ))}
        </h1>

        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <Reveal delay={0.4}>
            <p className="max-w-md text-base lg:text-lg leading-relaxed text-background/80">
              Готуємо вісім видів пасти щодня за рецептами італійських регіонів. Подаємо з вином власного імпорту в самому центрі Києва.
            </p>
          </Reveal>
          
          <Reveal delay={0.5}>
            <Magnetic>
              <a 
                href="#booking_final" 
                className="inline-flex items-center gap-3 bg-accent px-8 py-4 text-base font-semibold text-accent-foreground transition-transform hover:scale-[1.02]" 
                style={{ borderRadius: "var(--radius-control)" }}
              >
                ЗАБРОНЮВАТИ СТІЛ
                <span className="text-xl" aria-hidden>→</span>
              </a>
            </Magnetic>
          </Reveal>
        </div>
      </div>

      {/* living idle layer: marquee riding the hero's bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-background/15 bg-foreground/70 py-3 backdrop-blur-sm">
        <Marquee items={marqueeContent} className="font-display text-sm uppercase tracking-[0.25em] text-background/70" />
      </div>
    </section>
  );
}