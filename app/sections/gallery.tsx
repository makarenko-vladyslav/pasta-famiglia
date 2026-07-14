"use client";
import { Reveal, HorizontalPan } from "@/components/mechanics";

/**
 * ACT IV: The Proof. Visual abundance.
 * A sideways-scrolling editorial strip showcasing the aesthetic and culinary soul of Pasta Famiglia.
 */
export function SectionGallery() {
  const photos = [
    {
      src: "https://images.pexels.com/photos/3184191/pexels-photo-3184191.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=960",
      alt: "Свіжа домашня паста",
      caption: "Автентична паста",
    },
    {
      src: "https://images.pexels.com/photos/9621641/pexels-photo-9621641.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=960",
      alt: "Келихи вина на столі",
      caption: "Атмосфера вечора",
    },
    {
      src: "https://images.pexels.com/photos/1435895/pexels-photo-1435895.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=960",
      alt: "Процес приготування страви",
      caption: "Мистецтво смаку",
    },
    {
      src: "https://images.pexels.com/photos/1273765/pexels-photo-1273765.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=960",
      alt: "Піца з печі",
      caption: "Дров'яна піч",
    },
    {
      src: "https://images.pexels.com/photos/2092916/pexels-photo-2092916.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=960",
      alt: "Шеф-кухар Pasta Famiglia",
      caption: "Шеф за роботою",
    },
    {
      src: "https://images.pexels.com/photos/5412440/pexels-photo-5412440.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=960",
      alt: "Інтер'єр ресторану",
      caption: "Деталі інтер'єру",
    },
    {
      src: "https://images.pexels.com/photos/5638732/pexels-photo-5638732.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=960",
      alt: "Італійський десерт",
      caption: "Солодкий фінал",
    },
    {
      src: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=960",
      alt: "Гості за вечерею",
      caption: "Наша родина",
    },
  ];

  return (
    <section id="gallery" className="relative overflow-hidden bg-background">
      {/* Header Container */}
      <div className="mx-auto max-w-[92rem] px-4 pt-[var(--space-act)] lg:px-10">
        <span className="rp-actno mb-5 block text-sm font-medium tracking-[0.3em] text-muted uppercase">
          Галерея
        </span>
        <Reveal>
          <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)] max-w-[16ch]">
            Смак у кожній миті
          </h2>
        </Reveal>
      </div>

      {/* Horizontal Scroll Content */}
      <HorizontalPan heightVh={220}>
        <div className="flex h-full items-center gap-6 px-4 py-12 lg:gap-12 lg:px-10 lg:py-24">
          {photos.map((photo, index) => (
            <figure
              key={index}
              className="rp-pan-item relative w-[75vw] shrink-0 overflow-hidden md:w-[45vw] lg:w-[32vw]"
            >
              <div className="overflow-hidden bg-surface" style={{ borderRadius: "var(--radius-surface)" }}>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="rp-graded aspect-[4/5] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]"
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-4 flex items-baseline justify-between text-sm text-muted">
                <span className="uppercase tracking-wider">{photo.caption}</span>
                <span className="font-display text-lg lg:text-xl">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </HorizontalPan>

      {/* Spacing alignment for mobile flow */}
      <div className="h-20 lg:hidden" />
    </section>
  );
}