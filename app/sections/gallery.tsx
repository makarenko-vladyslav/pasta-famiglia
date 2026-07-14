"use client";
import { Reveal, HorizontalPan } from "@/components/mechanics";

/**
 * ACT III: The Soul. Visual atmosphere.
 * A full-bleed horizontal scrolling strip showcasing the restaurant's aesthetic.
 */
export function SectionGallery() {
  const photos = [
    {
      src: "https://images.pexels.com/photos/30406651/pexels-photo-30406651.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      caption: "Процес приготування",
      index: "01",
    },
    {
      src: "https://images.pexels.com/photos/30406651/pexels-photo-30406651.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1201&w=801",
      caption: "Традиційні рецепти",
      index: "02",
    },
    {
      src: "https://images.pexels.com/photos/30406651/pexels-photo-30406651.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1202&w=802",
      caption: "Атмосфера Pasta Famiglia",
      index: "03",
    },
    {
      src: "https://images.pexels.com/photos/30406651/pexels-photo-30406651.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1203&w=803",
      caption: "Деталі інтер'єру",
      index: "04",
    },
    {
      src: "https://images.pexels.com/photos/30406651/pexels-photo-30406651.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1204&w=804",
      caption: "Смак Італії у Києві",
      index: "05",
    },
    {
      src: "https://images.pexels.com/photos/30406651/pexels-photo-30406651.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1205&w=805",
      caption: "Свіжі інгредієнти",
      index: "06",
    },
    {
      src: "https://images.pexels.com/photos/30406651/pexels-photo-30406651.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1206&w=806",
      caption: "Затишний вечір",
      index: "07",
    },
    {
      src: "https://images.pexels.com/photos/30406651/pexels-photo-30406651.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1207&w=807",
      caption: "Серце закладу",
      index: "08",
    },
  ];

  return (
    <section id="gallery" className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-[92rem] px-4 pt-[var(--space-act)] lg:px-10">
        <span className="rp-actno mb-5 text-sm uppercase tracking-[0.3em]">
          Атмосфера
        </span>
        <Reveal>
          <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)] max-w-[16ch] mb-12">
            Естетика італійського смаку
          </h2>
        </Reveal>
      </div>

      <HorizontalPan heightVh={220}>
        <div className="flex gap-6 px-4 lg:gap-10 lg:px-10">
          {photos.map((item, i) => (
            <figure
              key={i}
              className="rp-pan-item relative w-[75vw] shrink-0 overflow-hidden md:w-[45vw] lg:w-[35vw]"
            >
              <div className="overflow-hidden">
                <img
                  src={item.src}
                  alt={item.caption}
                  className="rp-graded aspect-[4/5] w-full object-cover transition-transform duration-1000 hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-3 flex items-baseline justify-between text-sm text-muted">
                <span className="font-body">{item.caption}</span>
                <span className="font-display">{item.index}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </HorizontalPan>
    </section>
  );
}