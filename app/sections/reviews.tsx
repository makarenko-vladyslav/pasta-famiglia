"use client";

import { Reveal } from "@/components/mechanics";

export function SectionReviews() {
  const copy = {
    headline: "Оцінка 4.9 у Google",
    subcopy: "127 гостей вже залишили відгуки про швидкість нашої кухні та текстуру тіста.",
    items: [
      "«Паста не розварена. Принесли за 15 хвилин, як і обіцяли.»",
      "«Дуже зручно бронювати онлайн. Прийшли, а стіл вже чекає.»",
      "«Діти гралися з аніматором, а ми нарешті спокійно поїли.»"
    ]
  };

  const photo = "https://images.pexels.com/photos/12938994/pexels-photo-12938994.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200";

  return (
    <section className="py-[var(--space-act)] bg-background text-foreground relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-foreground/10 pb-8">
          <Reveal>
            <h2 className="font-display text-[clamp(2.2rem,4.5vw,4rem)] leading-tight max-w-xl">
              {copy.headline}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-muted max-w-sm md:text-right font-body">
              {copy.subcopy}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
          
          {/* Spotlight Quote (Col 1-9) */}
          <div className="md:col-span-9 relative">
            <div className="rp-watermark hidden md:block absolute -top-12 -left-8 text-[clamp(8rem,18vw,16rem)] font-display text-foreground/[0.03] select-none pointer-events-none z-0 tracking-tighter">
              4.9
            </div>
            
            <div className="relative z-10 flex flex-col gap-8 md:gap-10 md:pr-16">
              <Reveal delay={0.2}>
                <div className="flex flex-col gap-6 md:gap-8">
                  <img
                    src={photo}
                    alt="Гість закладу"
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border border-foreground/10 shadow-sm"
                    loading="lazy"
                  />
                  <blockquote className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-tight text-foreground">
                    {copy.items[0]}
                  </blockquote>
                  <div className="text-sm uppercase tracking-[0.25em] font-mono text-muted">
                    Гість
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Smaller Quotes Stack (Col 10-12) */}
          <div className="md:col-span-3 flex flex-col gap-8 md:gap-0 md:justify-between h-full pt-2 md:pt-4">
            <Reveal delay={0.3}>
              <div className="flex flex-col gap-4">
                <blockquote className="text-base text-muted font-body leading-relaxed">
                  {copy.items[1]}
                </blockquote>
                <div className="text-sm uppercase tracking-[0.25em] font-mono text-foreground">
                  Гість
                </div>
              </div>
            </Reveal>

            {/* Hairline Divider - Hidden below md as per spec */}
            <div className="hidden md:block w-full border-t border-foreground/10 my-8" />

            <Reveal delay={0.4}>
              <div className="flex flex-col gap-4">
                <blockquote className="text-base text-muted font-body leading-relaxed">
                  {copy.items[2]}
                </blockquote>
                <div className="text-sm uppercase tracking-[0.25em] font-mono text-foreground">
                  Гість
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}