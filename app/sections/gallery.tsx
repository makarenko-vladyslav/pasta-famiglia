"use client";
import { Reveal, HorizontalPan } from "@/components/mechanics";

/**
 * ACT III: The Soul - Visual Atmosphere
 * A sideways-scrolling editorial strip showcasing the restaurant's aesthetic.
 * Uses HorizontalPan for immersive desktop interaction and mobile-friendly scrolling.
 */
export function SectionGallery() {
  const photos = [
    { id: "01", caption: "Затишні вечори", url: "https://images.pexels.com/photos/12911272/pexels-photo-12911272.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" },
    { id: "02", caption: "Смак традицій", url: "https://images.pexels.com/photos/12911272/pexels-photo-12911272.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" },
    { id: "03", caption: "Наша кухня", url: "https://images.pexels.com/photos/12911272/pexels-photo-12911272.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" },
    { id: "04", caption: "Деталі інтер'єру", url: "https://images.pexels.com/photos/12911272/pexels-photo-12911272.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" },
    { id: "05", caption: "Ранкова кава", url: "https://images.pexels.com/photos/12911272/pexels-photo-12911272.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" },
    { id: "06", caption: "Процес приготування", url: "https://images.pexels.com/photos/12911272/pexels-photo-12911272.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" },
    { id: "07", caption: "Атмосфера Риму", url: "https://images.pexels.com/photos/12911272/pexels-photo-12911272.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" },
    { id: "08", caption: "Свіжі інгредієнти", url: "https://images.pexels.com/photos/12911272/pexels-photo-12911272.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" },
    { id: "09", caption: "Сімейні зустрічі", url: "https://images.pexels.com/photos/12911272/pexels-photo-12911272.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" },
    { id: "10", caption: "Естетика подачі", url: "https://images.pexels.com/photos/12911272/pexels-photo-12911272.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" },
  ];

  return (
    <section id="gallery" className="relative overflow-hidden bg-surface py-[var(--space-act)]">
      {/* Label: rp-watermark text-foreground/5 */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
        <span className="rp-watermark select-none text-[25vw] font-display uppercase leading-none text-foreground/5">
          Pasta
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-[92rem] px-4 pt-[var(--space-act)] lg:px-10">
        <span className="rp-actno mb-5 inline-block text-sm font-medium uppercase tracking-[0.3em] text-muted">
          Атмосфера
        </span>
        {/* h2: hidden in spec styling intents - rendered as sr-only to maintain SEO and skeleton structure */}
        <Reveal>
          <h2 className="sr-only font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)] max-w-[16ch]">
            Естетика нашого закладу
          </h2>
        </Reveal>
      </div>

      <div className="mt-12 lg:mt-20">
        <HorizontalPan heightVh={220}>
          <div className="flex gap-6 px-4 lg:gap-12 lg:px-10">
            {photos.map((photo, idx) => (
              <figure 
                key={idx} 
                className="rp-pan-item relative w-[75vw] shrink-0 overflow-hidden md:w-[450px]"
              >
                <div className="overflow-hidden" style={{ borderRadius: "var(--radius-surface)" }}>
                  <img 
                    src={photo.url} 
                    alt={photo.caption} 
                    className="rp-graded aspect-[4/5] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
                    loading="lazy" 
                  />
                </div>
                <figcaption className="mt-4 flex items-baseline justify-between text-sm text-muted">
                  <span className="uppercase tracking-wider">{photo.caption}</span>
                  <span className="font-display text-lg opacity-40">{photo.id}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </HorizontalPan>
      </div>
    </section>
  );
}