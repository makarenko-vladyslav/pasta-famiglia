"use client";

import { Reveal, HorizontalPan } from "@/components/mechanics";

const gallery = [
  { url: "https://images.pexels.com/photos/13366358/pexels-photo-13366358.png", aspect: "aspect-[3/4]", time: "18:42:01" },
  { url: "https://images.pexels.com/photos/248420/pexels-photo-248420.jpeg", aspect: "aspect-[16/9]", time: "19:15:22" },
  { url: "https://images.pexels.com/photos/5490976/pexels-photo-5490976.jpeg", aspect: "aspect-[4/5]", time: "19:30:45" },
  { url: "https://images.pexels.com/photos/38499051/pexels-photo-38499051.jpeg", aspect: "aspect-[16/10]", time: "20:05:11" },
  { url: "https://images.pexels.com/photos/3663058/pexels-photo-3663058.jpeg", aspect: "aspect-[3/4]", time: "20:42:19" },
  { url: "https://images.pexels.com/photos/36963804/pexels-photo-36963804.jpeg", aspect: "aspect-[4/5]", time: "21:10:05" },
  { url: "https://images.pexels.com/photos/12938994/pexels-photo-12938994.jpeg", aspect: "aspect-[16/9]", time: "21:45:30" },
  { url: "https://images.pexels.com/photos/10054908/pexels-photo-10054908.jpeg", aspect: "aspect-[3/5]", time: "22:15:00" },
];

const copy = {
  headline: "Таймінг та вогонь",
  subcopy: "Ми перетворили хаос класичної кухні на точну систему. Ви бачите процес через відкриту стійку, а ми фіксуємо час кожного замовлення.",
  items: [
    "30 секунд на підтвердження броні",
    "20 хвилин від чека до тарілки",
    "Якщо довше — напій за наш рахунок"
  ]
};

export function SectionConcept() {
  return (
    <section className="relative w-full overflow-hidden bg-surface py-[var(--space-act)]">
      {/* Absolute Protect Plate */}
      <div className="relative z-20 w-full px-4 mb-10 md:mb-0 md:absolute md:top-[var(--space-act)] md:left-6 lg:left-12 md:w-[26rem] lg:w-[30rem]">
        <div 
          className="bg-surface p-6 md:p-8 lg:p-10 border border-foreground/10 md:shadow-2xl"
          style={{ borderRadius: "var(--radius-surface)" }}
        >
          <Reveal delay={0.1}>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] text-foreground leading-[1.05]">
              {copy.headline}
            </h2>
          </Reveal>
          
          <Reveal delay={0.2}>
            <p className="mt-5 text-lg text-foreground font-body leading-relaxed">
              {copy.subcopy}
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-col">
              {copy.items.map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-4 border-t border-foreground/10 py-4 first:border-t-0"
                >
                  <span className="font-display text-base text-foreground shrink-0 leading-none mt-0.5">
                    0{idx + 1}
                  </span>
                  <span className="text-sm md:text-base text-muted font-body leading-tight">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* Mandatory Gallery Pan Track */}
      <HorizontalPan>
        <div 
          className="flex items-center h-[60vh] md:h-[75vh] w-max gap-4 md:gap-[5rem] px-4 md:pl-[38vw] lg:pl-[35vw] md:pr-[10vw] overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {gallery.map((img, idx) => (
            <div 
              key={idx} 
              className={`relative h-[90%] shrink-0 snap-center overflow-hidden group ${img.aspect}`}
              style={{ borderRadius: "var(--radius-surface)" }}
            >
              <img
                src={img.url}
                alt={`Process frame ${idx + 1}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 ease-[var(--ease-out-cubic)] group-hover:scale-[1.04]"
              />
              
              {/* Image Scrim & Caption */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background/60 to-transparent opacity-80 pointer-events-none" />
              
              <div 
                className="absolute bottom-5 left-5 z-10 bg-surface/95 px-3 py-1.5 border border-foreground/10 shadow-sm"
                style={{ borderRadius: "var(--radius-control)" }}
              >
                <span className="font-mono text-[0.875rem] text-muted tracking-wider">
                  {img.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </HorizontalPan>
    </section>
  );
}