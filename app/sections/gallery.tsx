"use client";
import { Reveal, HorizontalPan } from "@/components/mechanics";

/**
 * ACT IV The Proof: Signature Moments
 * Horizontal sideways scrolling editorial strip showcasing the atmosphere.
 * Using HorizontalPan for the desktop experience and native swipe on mobile.
 */
export function SectionGallery() {
  // Pool of assets provided in the spec and photos list
  const photos = [
    "https://images.pexels.com/photos/30607331/pexels-photo-30607331.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    "https://images.pexels.com/photos/3851041/pexels-photo-3851041.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    "https://images.pexels.com/photos/30607331/pexels-photo-30607331.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    "https://images.pexels.com/photos/3851041/pexels-photo-3851041.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    "https://images.pexels.com/photos/30607331/pexels-photo-30607331.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    "https://images.pexels.com/photos/3851041/pexels-photo-3851041.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    "https://images.pexels.com/photos/30607331/pexels-photo-30607331.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    "https://images.pexels.com/photos/3851041/pexels-photo-3851041.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  ];

  const items = [
    { caption: "Атмосфера вечора", index: "01" },
    { caption: "Паста ручної роботи", index: "02" },
    { caption: "Затишний інтер'єр", index: "03" },
    { caption: "Фірмова подача", index: "04" },
    { caption: "Деталі закладу", index: "05" },
    { caption: "Наші інгредієнти", index: "06" },
    { caption: "Винна карта", index: "07" },
    { caption: "Сімейні моменти", index: "08" },
  ];

  return (
    <section id="gallery" className="relative overflow-hidden bg-surface">
      <div className="mx-auto max-w-[92rem] px-4 pt-[var(--space-act)] lg:px-10">
        <span className="rp-actno mb-5 inline-block text-sm uppercase tracking-[0.3em] text-muted">
          Галерея
        </span>
        <Reveal>
          <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)] max-w-[16ch]">
            Атмосфера Pasta Famiglia
          </h2>
        </Reveal>
      </div>

      <HorizontalPan heightVh={220}>
        {items.map((item, i) => (
          <figure key={i} className="rp-pan-item relative shrink-0 overflow-hidden">
            <img
              src={photos[i]}
              alt={item.caption}
              className="rp-graded aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
            <figcaption className="mt-3 flex items-baseline justify-between text-sm text-muted">
              <span className="uppercase tracking-widest">{item.caption}</span>
              <span className="font-display text-base">{item.index}</span>
            </figcaption>
          </figure>
        ))}
      </HorizontalPan>
    </section>
  );
}