"use client";

import { Reveal, Magnetic, Marquee } from "@/components/mechanics";

export function SectionHero() {
  const h1Words = "СІМЕЙНА ПАСТА У ЦЕНТРІ КИЄВА".split(" ");
  const marqueeItems = [
    "СВІЖА ПАСТА",
    "ВЛАСНЕ ВИРОБНИЦТВО",
    "ВИННА КАРТА",
    "ВІДКРИТА КУХНЯ",
    "АНТОНОВИЧА 44",
    "PASTA FAMIGLIA",
    "ПН-НД 11:00-22:00"
  ];

  return (
    <section id="hero" className="relative min-h-[100svh] overflow-hidden bg-foreground text-background">
      {/* full-bleed photo, graded dark — the room you walk into */}
      <img 
        src="https://images.pexels.com/photos/6287450/pexels-photo-6287450.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
        alt="Інтер'єр ресторану Pasta Famiglia в Києві" 
        className="absolute inset-0 h-full w-full object-cover opacity-70 mix-blend-multiply" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/45 to-foreground/70" />
      <div className="rp-grain absolute inset-0" />
      
      {/* vertical locality label */}
      <span className="absolute right-4 top-28 hidden lg:block text-xs tracking-[0.35em] uppercase text-background/60 [writing-mode:vertical-rl]">
        Київ • Антоновича 44
      </span>

      {/* type collides with the photo bottom — poster scale, breaks the safe box */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[92rem] flex-col justify-end px-4 pb-28 lg:px-10 lg:pb-16">
        <Reveal delay={0.1}>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-accent">
            Pasta Famiglia
          </p>
        </Reveal>

        {/* trust line: ONLY real facts (rating/reviews/street) */}
        <Reveal delay={0.2}>
          <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-background/75 font-body">
            <span>★ 4.9</span>
            <span className="opacity-40">/</span>
            <span>127 відгуків</span>
            <span className="opacity-40">/</span>
            <span>вул. Антоновича, 44</span>
          </div>
        </Reveal>

        <h1 className="font-display font-extrabold leading-[0.88] text-background [text-wrap:balance] text-[clamp(3.2rem,11vw,10rem)] max-w-[12ch]">
          {h1Words.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden mr-[0.2em] last:mr-0">
              <span 
                className="inline-block animate-word-rise" 
                style={{ animationDelay: `${0.15 + i * 0.09}s`, animationFillMode: 'both' }}
              >
                {word}
              </span>
            </span>
          ))}
        </h1>

        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <Reveal delay={0.4}>
            <p className="max-w-md text-base leading-relaxed text-background/80 font-body">
              Готуємо власну пасту щодня з 11:00 до 22:00. Відкрита кухня, італійське борошно та локальні фермерські продукти у центрі столиці.
            </p>
          </Reveal>
          
          <Reveal delay={0.5}>
            <Magnetic>
              <a 
                href="#booking_final" 
                className="inline-flex items-center gap-3 bg-accent px-8 py-4 text-base font-semibold text-accent-foreground transition-transform duration-300 hover:scale-[1.02]" 
                style={{ borderRadius: "var(--radius-control)" }}
              >
                Дивитись меню <span aria-hidden className="text-xl">→</span>
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

      <style jsx global>{`
        @keyframes word-rise {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .animate-word-rise {
          animation: word-rise 0.8s var(--ease-out-cubic);
        }
      `}</style>
    </section>
  );
}