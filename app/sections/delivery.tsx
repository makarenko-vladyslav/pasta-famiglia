"use client";

import { Reveal } from "@/components/mechanics";

export function SectionDelivery() {
  return (
    <section className="bg-foreground relative w-full overflow-hidden">
      {/* 
        Desktop Full Bleed Image (Left 55%) 
        Uses absolute positioning to break out of the standard container and hit the left edge perfectly.
      */}
      <div className="hidden md:block absolute top-0 left-0 w-[55%] h-full overflow-hidden z-0">
        <img
          src="https://images.pexels.com/photos/3663058/pexels-photo-3663058.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
          alt="Гаряча коробка"
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-1000 ease-out-cubic hover:scale-[1.04]"
        />
        {/* Directional mask fading horizontally into the dark right half */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/60 to-foreground" />
      </div>

      {/* 
        Mobile Full Bleed Image 
        Occupies the top visual space and fades vertically to host the overlapping text.
      */}
      <div className="md:hidden relative w-full h-[50vh] overflow-hidden z-0">
        <img
          src="https://images.pexels.com/photos/3663058/pexels-photo-3663058.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
          alt="Гаряча коробка"
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-1000 ease-out-cubic hover:scale-[1.04]"
        />
        {/* Directional mask fading vertically to anchor the overlapping text */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/70 to-transparent" />
      </div>

      {/* 
        Content Container 
        Standard max-width limits to maintain alignment with other sections.
      */}
      <div className="mx-auto max-w-6xl px-4 lg:px-6 relative z-10">
        <div className="md:grid md:grid-cols-12 items-center">
          {/* 
            Text Block: Cols 8-12
            Overlaps the image on mobile with negative margin. 
            Uses full vertical min-height rhythm on desktop.
          */}
          <div className="relative -mt-24 md:mt-0 pt-0 pb-[var(--space-act)] md:py-[var(--space-act)] md:col-start-8 md:col-span-5 flex flex-col justify-center min-h-[45vh] md:min-h-[85vh]">
            <Reveal delay={0.1}>
              <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] text-background leading-[1.05] tracking-tight mb-6 md:mb-8">
                Гаряча коробка
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-lg md:text-xl text-background/90 leading-relaxed mb-10 max-w-lg">
                Власна доставка правим берегом. Жодних доплат за пакування — ви платите виключно за вагу їжі.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <ul className="flex flex-col border-t border-background/15">
                {["Печерськ та Центр", "Поділ та Оболонь", "Голосіїво"].map((item, idx) => (
                  <li 
                    key={idx} 
                    className="flex flex-col sm:flex-row sm:items-center py-5 border-b border-background/15 group"
                  >
                    <span className="font-mono text-accent text-sm tracking-[0.2em] uppercase mb-1 sm:mb-0 sm:w-16 shrink-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300 ease-out-cubic">
                      0{idx + 1}
                    </span>
                    <span className="font-body text-background/90 text-base md:text-lg">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}