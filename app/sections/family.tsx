"use client";

import { Reveal } from "@/components/mechanics";

export function SectionFamily() {
  const items = [
    "Окремий майданчик з іграшками",
    "Аніматор працює у вихідні",
    "Меню з невеликими порціями",
  ];

  return (
    <section className="py-[var(--space-act)] bg-surface relative px-4 lg:px-6">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0">
        {/* Media Block */}
        <div
          className="relative w-full aspect-[4/3] lg:aspect-[16/10] overflow-hidden lg:col-start-1 lg:col-span-8 lg:row-start-1 self-start group"
          style={{ borderRadius: "var(--radius-surface)" }}
        >
          <div className="absolute inset-0 bg-foreground/5 z-10 pointer-events-none transition-opacity duration-1000 group-hover:opacity-0" />
          <div className="rp-grain z-10 pointer-events-none opacity-40 mix-blend-overlay" />
          <img
            src="https://images.pexels.com/photos/7287691/pexels-photo-7287691.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
            alt="Простір для родин"
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-1000 ease-[var(--ease-out-cubic)] group-hover:scale-[1.04]"
          />
        </div>

        {/* Content Block */}
        <div
          className="relative z-10 bg-surface shadow-2xl border border-foreground/10 p-6 sm:p-10 lg:p-12 lg:col-start-7 lg:col-span-5 lg:row-start-1 lg:mt-32 lg:mb-12 self-start flex flex-col"
          style={{ borderRadius: "var(--radius-surface)" }}
        >
          <Reveal delay={0.1}>
            <span className="block text-sm uppercase tracking-[0.25em] text-muted mb-6">
              Для родин
            </span>
          </Reveal>

          <Reveal delay={0.2}>
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-display leading-[1.05] text-foreground text-balance">
              Поки ви їсте, діти граються
            </h2>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mt-6 text-lg lg:text-xl text-foreground font-body leading-relaxed text-balance">
              Простір розрахований на родини, яким потрібно спокійно пообідати. Ми беремо розваги малечі на себе.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <ul className="mt-10 flex flex-col border-t border-foreground/10">
              {items.map((item, idx) => (
                <li
                  key={idx}
                  className="py-4 border-b border-foreground/10 text-base lg:text-lg text-muted font-body flex items-start gap-4"
                >
                  <span className="text-foreground/30 font-display text-sm mt-1">
                    0{idx + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}