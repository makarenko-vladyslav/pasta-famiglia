"use client";

import { Reveal, HorizontalPan } from "@/components/mechanics";

/**
 * SectionMarqueeDishes - Interstitial Rhythm
 * A sideways-scrolling editorial strip showcasing pasta varieties.
 * Follows the horizontal-pan layout law with strict token adherence.
 */
export function SectionMarqueeDishes() {
  const dishes = [
    { name: "Carbonara", id: "01" },
    { name: "Fettuccine", id: "02" },
    { name: "Tagliatelle", id: "03" },
    { name: "Lasagna", id: "04" },
    { name: "Pappardelle", id: "05" },
    { name: "Ravioli", id: "06" },
    { name: "Bucatini", id: "07" },
    { name: "Gnocchi", id: "08" },
    { name: "Tortellini", id: "09" },
    { name: "Rigatoni", id: "10" },
  ];

  const photoUrl = "https://images.pexels.com/photos/226633/pexels-photo-226633.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200";

  return (
    <section id="marquee_dishes" className="relative overflow-hidden bg-surface">
      <div className="mx-auto max-w-[92rem] px-4 pt-[var(--space-act)] lg:px-10">
        <span className="rp-actno mb-5 text-sm uppercase tracking-[0.3em] block">Меню</span>
        <Reveal>
          <h2 className="font-display font-bold leading-[0.9] text-[clamp(2.4rem,5vw,4.5rem)] max-w-[16ch]">
            Досконалість ручної роботи
          </h2>
        </Reveal>
      </div>

      <HorizontalPan heightVh={220}>
        <div className="flex h-full items-center gap-6 px-4 lg:gap-12 lg:px-20">
          {dishes.map((dish, index) => (
            <figure 
              key={`${dish.id}-${index}`} 
              className="rp-pan-item relative shrink-0 overflow-hidden w-[75vw] md:w-[45vw] lg:w-[30vw]"
            >
              <div className="overflow-hidden group">
                <img 
                  src={photoUrl} 
                  alt={dish.name} 
                  className="rp-graded aspect-[4/5] w-full object-cover transition-transform duration-1000 group-hover:scale-[1.04]" 
                  loading="lazy" 
                />
              </div>
              <figcaption className="mt-3 flex items-baseline justify-between text-sm text-muted">
                <span className="font-display italic text-lg lg:text-xl text-foreground/90">{dish.name}</span>
                <span className="font-display text-muted/60">{dish.id}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </HorizontalPan>
    </section>
  );
}