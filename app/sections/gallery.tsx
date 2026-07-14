"use client";
import { Reveal, HorizontalPan } from "@/components/mechanics";

/**
 * ACT III: The Soul. Atmosphere & visual depth.
 * A sideways-scrolling editorial strip showcasing the visual essence of Pasta Famiglia.
 */
export function SectionGallery() {
  const photos = [
    "https://images.pexels.com/photos/8646690/pexels-photo-8646690.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    "https://images.pexels.com/photos/8646690/pexels-photo-8646690.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    "https://images.pexels.com/photos/8646690/pexels-photo-8646690.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    "https://images.pexels.com/photos/8646690/pexels-photo-8646690.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    "https://images.pexels.com/photos/8646690/pexels-photo-8646690.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    "https://images.pexels.com/photos/8646690/pexels-photo-8646690.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    "https://images.pexels.com/photos/8646690/pexels-photo-8646690.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    "https://images.pexels.com/photos/8646690/pexels-photo-8646690.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    "https://images.pexels.com/photos/8646690/pexels-photo-8646690.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    "https://images.pexels.com/photos/8646690/pexels-photo-8646690.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    "https://images.pexels.com/photos/8646690/pexels-photo-8646690.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    "https://images.pexels.com/photos/8646690/pexels-photo-8646690.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  ];

  const captions = [
    "Свіжа паста",
    "Затишок",
    "Київ",
    "Моменти",
    "Традиції",
    "Смак",
    "Італія поруч",
    "Сім'я",
    "Деталі",
    "Естетика",
    "Вечір",
    "Паста Фамілія",
  ];

  return (
    <section id="gallery" className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-[92rem] px-4 pt-[var(--space-act)] lg:px-10">
        <span className="rp-actno mb-5 block text-sm uppercase tracking-[0.3em] text-muted">
          Галерея
        </span>
        <Reveal>
          <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)] max-w-[16ch]">
            Естетика та душа нашої кухні
          </h2>
        </Reveal>
      </div>

      <HorizontalPan heightVh={220}>
        <div className="flex gap-6 px-4 lg:gap-12 lg:px-10">
          {photos.map((src, idx) => (
            <figure 
              key={idx} 
              className="rp-pan-item relative shrink-0 overflow-hidden w-[85vw] md:w-[45vw] lg:w-[32vw]"
            >
              <div className="overflow-hidden">
                <img
                  src={src}
                  alt={`Атмосфера Pasta Famiglia ${idx + 1}`}
                  className="rp-graded aspect-[4/5] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]"
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-3 flex items-baseline justify-between text-sm text-muted">
                <span className="uppercase tracking-wider">{captions[idx]}</span>
                <span className="font-display">{(idx + 1).toString().padStart(2, "0")}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </HorizontalPan>

      {/* Decorative hairline at the bottom boundary */}
      <div className="mx-auto max-w-[92rem] px-4 lg:px-10">
        <div className="h-px w-full bg-foreground/10" />
      </div>
    </section>
  );
}