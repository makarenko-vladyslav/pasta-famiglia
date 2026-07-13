"use client";

import { Reveal, Magnetic, Marquee, AmbientCanvas } from "@/components/mechanics";

export function SectionHero() {
  const businessName = "Pasta Famiglia";
  const city = "Київ";
  const address = "вул. Антоновича, 44";
  const rating = 4.9;
  const reviewsCount = 127;
  const hours = "11:00–22:00";
  
  const h1Words = ["Pasta", "Famiglia:", "Римська", "Кухня", "На", "Антоновича"];
  const marqueeItems = [
    "СВІЖА ПАСТА", 
    "ВИННА КАРТА", 
    "РИМСЬКА КУХНЯ", 
    "КИЇВ", 
    "ВУЛ. АНТОНОВИЧА, 44", 
    "ЩОДЕННО 11:00-22:00",
    "ІТАЛІЙСЬКЕ БОРОШНО"
  ];

  return (
    <section id="hero" className="relative min-h-[100svh] overflow-hidden bg-foreground text-background">
      {/* Background Layer: Ambient drift */}
      <div className="absolute inset-0 z-0 opacity-40">
        <AmbientCanvas />
      </div>

      {/* full-bleed photo, graded dark — the room you walk into */}
      <img 
        src="https://images.pexels.com/photos/37322866/pexels-photo-37322866.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
        alt="Pasta Famiglia - інтер'єр ресторану та подача пасти" 
        className="rp-graded absolute inset-0 h-full w-full object-cover opacity-70 mix-blend-multiply" 
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/45 to-foreground/70" />
      <div className="rp-grain absolute inset-0 pointer-events-none" />

      {/* vertical locality label */}
      <span className="absolute right-4 top-28 hidden lg:block text-xs font-body tracking-[0.35em] uppercase text-background/60 [writing-mode:vertical-rl] select-none">
        {city} · {address}
      </span>

      {/* type collides with the photo bottom — poster scale, breaks the safe box */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[92rem] flex-col justify-end px-4 pb-28 lg:px-10 lg:pb-16">
        <Reveal delay={0.1}>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-accent">
            Ресторан італійської кухні
          </p>
        </Reveal>

        {/* trust line: ONLY real facts (rating/reviews/street) */}
        <Reveal delay={0.2}>
          <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-body text-background/75">
            <span className="text-accent">★ {rating}</span>
            <span className="opacity-40">/</span>
            <span>{reviewsCount} відгуків</span>
            <span className="opacity-40">/</span>
            <span>{address}</span>
          </div>
        </Reveal>

        <h1 className="font-display font-extrabold leading-[0.88] text-background [text-wrap:balance] text-[clamp(3.2rem,11vw,10rem)] max-w-[12ch]">
          {h1Words.map((word, i) => (
            <span 
              key={i} 
              className="word-rise inline-block mr-[0.25em]" 
              style={{ animationDelay: `${0.2 + i * 0.08}s` }}
            >
              {word}{" "}
            </span>
          ))}
        </h1>

        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <Reveal delay={0.6}>
            <p className="max-w-md text-base leading-relaxed text-background/80 font-body">
              Щоденне приготування свіжої пасти з італійського борошна сорту Semola. 
              Відкрита кухня, винна карта регіону Лаціо та вечері у центрі міста з {hours}.
            </p>
          </Reveal>
          
          <Reveal delay={0.7}>
            <Magnetic>
              <a 
                href="#booking_final" 
                className="inline-flex items-center gap-3 bg-accent px-8 py-4 text-base font-semibold text-accent-foreground transition-transform duration-300 hover:scale-[1.02]" 
                style={{ borderRadius: "var(--radius-control)" }}
              >
                ЗАБРОНЮВАТИ СТІЛ <span aria-hidden className="text-xl">→</span>
              </a>
            </Magnetic>
          </Reveal>
        </div>
      </div>

      {/* living idle layer: marquee riding the hero's bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-background/15 bg-foreground/70 py-3 backdrop-blur-sm">
        <Marquee 
          items={marqueeItems} 
          className="font-display text-xs lg:text-sm uppercase tracking-[0.25em] text-background/70" 
        />
      </div>
    </section>
  );
}