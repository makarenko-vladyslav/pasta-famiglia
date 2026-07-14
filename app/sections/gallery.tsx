"use client";
import { Reveal, HorizontalPan } from "@/components/mechanics";

/**
 * ACT III The Soul — Atmosphere
 * Layout: Horizontal scrolling editorial strip
 */
export function SectionGallery() {
  const photos = [
    {
      url: "https://images.pexels.com/photos/6223167/pexels-photo-6223167.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      caption: "Затишок кожного вечора",
    },
    {
      url: "https://images.pexels.com/photos/2433978/pexels-photo-2433978.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      caption: "Мистецтво деталі",
    },
    {
      url: "https://images.pexels.com/photos/18386859/pexels-photo-18386859.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      caption: "Ритм нашої кухні",
    },
    {
      url: "https://images.pexels.com/photos/34896773/pexels-photo-34896773.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      caption: "Світло та простір",
    },
    {
      url: "https://images.pexels.com/photos/6287262/pexels-photo-6287262.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      caption: "Сервірування з любов'ю",
    },
    {
      url: "https://images.pexels.com/photos/6223167/pexels-photo-6223167.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      caption: "Атмосфера дому",
    },
    {
      url: "https://images.pexels.com/photos/2433978/pexels-photo-2433978.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      caption: "Естетика смаку",
    },
    {
      url: "https://images.pexels.com/photos/18386859/pexels-photo-18386859.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      caption: "Pasta Famiglia",
    },
  ];

  return (
    <section id="gallery" className="relative overflow-hidden bg-surface">
      <div className="mx-auto max-w-[92rem] px-4 pt-[var(--space-act)] lg:px-10">
        <span className="rp-actno mb-8 block font-display text-[18px] italic leading-none text-muted">
          Атмосфера
        </span>
        <Reveal>
          <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)] max-w-[16ch]">
            Душа нашого дому
          </h2>
        </Reveal>
      </div>

      <HorizontalPan heightVh={220}>
        {photos.map((photo, index) => (
          <figure
            key={`${index}-${photo.caption}`}
            className="rp-pan-item relative w-[75vw] shrink-0 overflow-hidden lg:w-[35vw]"
          >
            <div className="overflow-hidden bg-surface" style={{ borderRadius: "var(--radius-surface)" }}>
              <img
                src={photo.url}
                alt={photo.caption}
                className="rp-graded aspect-[4/5] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]"
                loading="lazy"
              />
            </div>
            <figcaption className="mt-4 flex items-baseline justify-between text-sm uppercase tracking-widest text-muted lg:text-base">
              <span>{photo.caption}</span>
              <span className="font-display text-lg not-italic">
                {(index + 1).toString().padStart(2, "0")}
              </span>
            </figcaption>
          </figure>
        ))}
      </HorizontalPan>
    </section>
  );
}