"use client";
import { Reveal, Magnetic, Marquee, AmbientCanvas } from "@/components/mechanics";

export function SectionHero() {
  const h1Words = ["СВІЖА", "ПАСТА", "РУЧНОЇ", "РОБОТИ"];
  const marqueeItems = [
    "ВЛАСНЕ ВИРОБНИЦТВО",
    "ЦЕНТР КИЄВА",
    "ВУЛИЦЯ АНТОНОВИЧА, 44",
    "ВИННА КАРТА",
    "ПН–НД 11:00–22:00",
    "OPEN KITCHEN"
  ];

  return (
    <section id="hero" className="relative min-h-[100svh] overflow-hidden bg-foreground text-background">
      {/* Background drifting layer from spec */}
      <div className="absolute inset-0 z-0 opacity-40">
        <AmbientCanvas />
      </div>

      {/* full-bleed photo, graded dark — the room you walk into */}
      <img 
        src="https://images.pexels.com/photos/14590691/pexels-photo-14590691.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
        alt="Свіже борошно та процес приготування пасти" 
        className="rp-graded absolute inset-0 h-full w-full object-cover opacity-70 mix-blend-multiply" 
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/45 to-foreground/70" />
      <div className="rp-grain absolute inset-0 pointer-events-none" />

      {/* vertical locality label */}
      <span className="absolute right-4 top-28 hidden lg:block text-xs font-medium tracking-[0.35em] uppercase text-background/60 [writing-mode:vertical-rl]">
        Київ, Україна
      </span>

      {/* type collides with the photo bottom — poster scale, breaks the safe box */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[92rem] flex-col justify-end px-4 pb-28 lg:px-10 lg:pb-16">
        <Reveal delay={0.1}>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-accent">
            Pasta Famiglia
          </p>
        </Reveal>

        {/* trust line: real facts from business data */}
        <Reveal delay={0.2}>
          <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-background/75">
            <span className="flex items-center gap-1">★ 4.9</span>
            <span className="opacity-40">•</span>
            <span>127 відгуків</span>
            <span className="opacity-40">•</span>
            <span>вул. Антоновича, 44</span>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <h1 className="font-display font-extrabold leading-[0.88] text-background [text-wrap:balance] text-[clamp(3.2rem,11vw,10rem)] max-w-[12ch]">
            {h1Words.map((word, i) => (
              <span key={i} className="inline-block mr-[0.25em] last:mr-0">
                <span 
                  className="word-rise inline-block" 
                  style={{ animationDelay: `${0.15 + i * 0.09}s` }}
                >
                  {word}
                </span>
              </span>
            ))}
          </h1>
        </Reveal>

        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <Reveal delay={0.5}>
            <p className="max-w-md text-base leading-relaxed text-background/80 font-body">
              Щодня готуємо тісто з твердих сортів пшениці за відкритим процесом. 
              Подаємо з добірним вином у серці Києва на Антоновича, 44.
            </p>
          </Reveal>
          
          <Reveal delay={0.6}>
            <Magnetic>
              <a 
                href="#booking" 
                className="inline-flex items-center gap-3 bg-accent px-8 py-4 text-base font-semibold text-accent-foreground transition-transform hover:scale-[1.02]" 
                style={{ borderRadius: "var(--radius-control)" }}
              >
                ЗАБРОНЮВАТИ СТІЛ
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