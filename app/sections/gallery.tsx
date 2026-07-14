"use client";

import { Reveal, HorizontalPan } from "@/components/mechanics";

/**
 * ACT III: Immersion - HorizontalPan Gallery
 * A sideways-scrolling editorial strip showcasing the atmosphere of Pasta Famiglia.
 */
export function SectionGallery() {
  // Using the provided photo pool (1 image repeated for density as per spec)
  const photos = [
    { id: "01", url: "https://images.pexels.com/photos/8916527/pexels-photo-8916527.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800", caption: "Процес створення" },
    { id: "02", url: "https://images.pexels.com/photos/8916527/pexels-photo-8916527.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800", caption: "Італійське борошно" },
    { id: "03", url: "https://images.pexels.com/photos/8916527/pexels-photo-8916527.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800", caption: "Золота текстура" },
    { id: "04", url: "https://images.pexels.com/photos/8916527/pexels-photo-8916527.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800", caption: "Домашній затишок" },
    { id: "05", url: "https://images.pexels.com/photos/8916527/pexels-photo-8916527.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800", caption: "Ранкова свіжість" },
    { id: "06", url: "https://images.pexels.com/photos/8916527/pexels-photo-8916527.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800", caption: "Серце кухні" },
    { id: "07", url: "https://images.pexels.com/photos/8916527/pexels-photo-8916527.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800", caption: "Смак традицій" },
    { id: "08", url: "https://images.pexels.com/photos/8916527/pexels-photo-8916527.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800", caption: "Магія моменту" },
    { id: "09", url: "https://images.pexels.com/photos/8916527/pexels-photo-8916527.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800", caption: "Естетика пасти" },
    { id: "10", url: "https://images.pexels.com/photos/8916527/pexels-photo-8916527.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800", caption: "Деталі Pasta Famiglia" },
  ];

  return (
    <section id="gallery" className="relative overflow-hidden bg-background py-[var(--space-act)]">
      <div className="mx-auto max-w-[92rem] px-4 pt-[var(--space-act)] lg:px-10">
        <span className="rp-actno mb-5 block text-sm uppercase tracking-[0.3em] text-muted">Галерея</span>
        <Reveal>
          <h2 className="font-display font-bold leading-[0.9] text-[clamp(2.4rem,5vw,4.5rem)] max-w-[16ch]">
            Атмосфера італійської естетики
          </h2>
        </Reveal>
      </div>

      <HorizontalPan heightVh={220}>
        <div className="flex gap-4 px-4 md:gap-8 lg:px-10">
          {photos.map((photo, index) => (
            <figure 
              key={`${photo.id}-${index}`} 
              className="rp-pan-item relative shrink-0 overflow-hidden w-[80vw] md:w-[45vw] lg:w-[35vw]"
            >
              <div className="overflow-hidden bg-surface" style={{ borderRadius: "var(--radius-surface)" }}>
                <img 
                  src={photo.url} 
                  alt={photo.caption} 
                  className="rp-graded aspect-[4/5] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
                  loading="lazy" 
                />
              </div>
              <figcaption className="mt-4 flex items-baseline justify-between text-sm text-muted">
                <span className="font-body">{photo.caption}</span>
                <span className="font-display text-lg opacity-40">{photo.id}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </HorizontalPan>
    </section>
  );
}