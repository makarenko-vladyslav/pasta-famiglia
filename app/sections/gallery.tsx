"use client";
import { Reveal, HorizontalPan } from "@/components/mechanics";

/**
 * ACT III: The Soul.
 * A visual-first editorial strip showcasing the atmosphere and culinary details.
 */
export function SectionGallery() {
  const images = [
    {
      url: "https://images.pexels.com/photos/9678254/pexels-photo-9678254.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      caption: "Естетика подачі",
    },
    {
      url: "https://images.pexels.com/photos/4134537/pexels-photo-4134537.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      caption: "Традиційна паста",
    },
    {
      url: "https://images.pexels.com/photos/3662821/pexels-photo-3662821.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      caption: "Вечірня атмосфера",
    },
    {
      url: "https://images.pexels.com/photos/30938291/pexels-photo-30938291.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      caption: "Деталі закладу",
    },
    {
      url: "https://images.pexels.com/photos/7110136/pexels-photo-7110136.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      caption: "Робота шеф-кухаря",
    },
    {
      url: "https://images.pexels.com/photos/30729159/pexels-photo-30729159.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      caption: "Затишний інтер’єр",
    },
    {
      url: "https://images.pexels.com/photos/9678254/pexels-photo-9678254.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      caption: "Вишукані вина",
    },
    {
      url: "https://images.pexels.com/photos/4134537/pexels-photo-4134537.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      caption: "Смак Італії",
    },
    {
      url: "https://images.pexels.com/photos/3662821/pexels-photo-3662821.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      caption: "Сімейний стіл",
    },
    {
      url: "https://images.pexels.com/photos/30938291/pexels-photo-30938291.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      caption: "Свіжі інгредієнти",
    },
  ];

  return (
    <section id="gallery" className="relative overflow-hidden bg-background py-[var(--space-act)]">
      <div className="mx-auto max-w-[92rem] px-4 pt-[var(--space-act)] lg:px-10">
        <span className="rp-actno mb-5">Галерея</span>
        <Reveal>
          <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)] max-w-[16ch]">
            Душа нашого закладу
          </h2>
        </Reveal>
      </div>

      <HorizontalPan heightVh={220}>
        <div className="flex gap-4 px-4 lg:gap-8 lg:px-10">
          {images.map((img, idx) => (
            <figure 
              key={idx} 
              className="rp-pan-item relative w-[75vw] shrink-0 overflow-hidden md:w-[40vw] lg:w-[30vw]"
            >
              <div className="overflow-hidden bg-surface" style={{ borderRadius: "var(--radius-surface)" }}>
                <img
                  src={img.url}
                  alt={img.caption}
                  className="rp-graded aspect-[4/5] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]"
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-3 flex items-baseline justify-between text-sm text-muted">
                <span className="uppercase tracking-widest">{img.caption}</span>
                <span className="font-display">{(idx + 1).toString().padStart(2, "0")}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </HorizontalPan>
    </section>
  );
}