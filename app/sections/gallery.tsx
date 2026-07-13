"use client";

import { Reveal, HorizontalPan } from "@/components/mechanics";

/**
 * ACT III: The Soul - Visual Immersion.
 * A sideways-scrolling editorial strip of high-grade imagery capturing the essence of Pasta Famiglia.
 */
export function SectionGallery() {
  const galleryItems = [
    {
      id: "01",
      src: "https://images.pexels.com/photos/10054915/pexels-photo-10054915.jpeg?auto=compress&cs=tinysrgb&w=1200",
      caption: "Мистецтво ручної роботи",
      alt: "Процес приготування свіжої пасти шеф-кухарем",
    },
    {
      id: "02",
      src: "https://images.pexels.com/photos/6654106/pexels-photo-6654106.jpeg?auto=compress&cs=tinysrgb&w=1200",
      caption: "Традиції італійського дому",
      alt: "Деталі сервірування столу в італійському стилі",
    },
    {
      id: "03",
      src: "https://images.pexels.com/photos/7129428/pexels-photo-7129428.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1000",
      caption: "Свіжість локальних продуктів",
      alt: "Свіжі томати та трави для соусу",
    },
    {
      id: "04",
      src: "https://images.pexels.com/photos/10406184/pexels-photo-10406184.jpeg?auto=compress&cs=tinysrgb&w=1200",
      caption: "Атмосфера затишного вечора",
      alt: "Інтер'єр ресторану з м'яким освітленням",
    },
  ];

  return (
    <section id="gallery" className="relative overflow-hidden bg-background">
      {/* Header Container */}
      <div className="mx-auto max-w-[92rem] px-4 pt-[var(--space-act)] lg:px-10">
        <span className="rp-actno mb-5 block text-sm uppercase tracking-[0.3em] text-muted">
          Атмосфера
        </span>
        <Reveal>
          <h2 className="max-w-[16ch] font-display text-[clamp(2.4rem,5vw,4.5rem)] font-bold leading-[0.9] tracking-[-0.03em]">
            Життя всередині Pasta Famiglia
          </h2>
        </Reveal>
      </div>

      {/* Horizontal Pan Mechanic */}
      <HorizontalPan heightVh={220}>
        {galleryItems.map((item) => (
          <figure 
            key={item.id} 
            className="rp-pan-item relative w-[80vw] shrink-0 overflow-hidden md:w-[45vw] lg:w-[35vw]"
          >
            <div className="overflow-hidden bg-surface">
              <img
                src={item.src}
                alt={item.alt}
                className="rp-graded aspect-[4/5] w-full object-cover transition-transform duration-1000 ease-[var(--ease-out-cubic)] hover:scale-[1.04]"
                loading="lazy"
              />
            </div>
            <figcaption className="mt-4 flex items-baseline justify-between border-t border-foreground/10 pt-3 text-sm text-muted">
              <span className="uppercase tracking-wider">{item.caption}</span>
              <span className="font-display text-lg text-foreground/40">{item.id}</span>
            </figcaption>
          </figure>
        ))}
      </HorizontalPan>
    </section>
  );
}