"use client";
import { Reveal, HorizontalPan } from "@/components/mechanics";

/**
 * SECTION: signature
 * ROLE: ACT II: The Offer — Signature Dishes
 * LAYOUT: Horizontal Pan Strip (Editorial)
 * NOTE: Skeleton outranks styling intent on structure; utilizing HorizontalPan for a sideways-scrolling editorial experience.
 */
export function SectionSignature() {
  const photos = [
    "https://images.pexels.com/photos/5710178/pexels-photo-5710178.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    "https://images.pexels.com/photos/5710178/pexels-photo-5710178.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800&q=80",
    "https://images.pexels.com/photos/5710178/pexels-photo-5710178.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800&q=60",
    "https://images.pexels.com/photos/5710178/pexels-photo-5710178.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800&q=40",
  ];

  const items = [
    {
      caption: "Класична італійська рецептура",
      index: "01",
    },
    {
      caption: "Гарантована подача за 20 хвилин",
      index: "20",
    },
    {
      caption: "Виключно свіжі інгредієнти",
      index: "03",
    },
    {
      caption: "Серце нашої відкритої кухні",
      index: "04",
    },
  ];

  return (
    <section id="signature" className="relative overflow-hidden bg-surface py-[var(--space-act)] pt-0 lg:pt-[var(--space-act)]">
      {/* Decorative '20' Watermark - Integrated as per styling intent into the background of this act */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 select-none lg:block">
        <span className="font-display text-[22rem] leading-none tracking-tighter text-foreground/5 opacity-5">
          20
        </span>
      </div>

      <div className="mx-auto max-w-[92rem] px-4 pt-[var(--space-act)] lg:px-10">
        <Reveal delay={0.1}>
          <span className="rp-actno mb-5 inline-block text-sm uppercase tracking-[0.3em] text-muted">
            Фірмові страви
          </span>
        </Reveal>
        
        <Reveal delay={0.2}>
          <h2 className="max-w-[16ch] font-display text-[clamp(2.4rem,5vw,4.5rem)] font-bold leading-[0.9]">
            Мистецтво смаку та швидкості
          </h2>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-8 max-w-xl font-body text-lg text-foreground/80 lg:text-xl">
            Ми знаємо ціну часу. Кожна страва — це поєднання багаторічних традицій та сучасної динаміки міста. Гарантуємо подачу ваших улюблених страв протягом 20 хвилин.
          </p>
        </Reveal>
      </div>

      <div className="mt-12 lg:mt-20">
        <HorizontalPan heightVh={220}>
          {items.map((item, i) => (
            <figure key={i} className="rp-pan-item relative shrink-0 overflow-hidden px-4 lg:px-6">
              <div className="overflow-hidden" style={{ borderRadius: "var(--radius-surface)" }}>
                <img
                  src={photos[i % photos.length]}
                  alt={`Signature Dish ${item.index}`}
                  className="rp-graded aspect-[4/5] w-[75vw] object-cover transition-transform duration-1000 hover:scale-[1.04] lg:w-[450px]"
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-4 flex items-baseline justify-between border-t border-foreground/10 pt-3 text-sm text-muted">
                <span className="font-body tracking-wide uppercase">{item.caption}</span>
                <span className="font-display text-lg text-foreground">{item.index}</span>
              </figcaption>
            </figure>
          ))}
        </HorizontalPan>
      </div>
    </section>
  );
}