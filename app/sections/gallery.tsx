"use client";
import { Reveal, HorizontalPan } from "@/components/mechanics";

/**
 * ACT III: The Soul.
 * A horizontal immersion into the aesthetic of Pasta Famiglia.
 * Translates the sensory experience through a scrolling editorial strip.
 */
export function SectionGallery() {
  const images = [
    { url: "https://images.pexels.com/photos/8108055/pexels-photo-8108055.jpeg", caption: "Процес приготування" },
    { url: "https://images.pexels.com/photos/7436113/pexels-photo-7436113.jpeg", caption: "Інтер’єр залу" },
    { url: "https://images.pexels.com/photos/35380430/pexels-photo-35380430.png", caption: "Свіжа паста" },
    { url: "https://images.pexels.com/photos/10802332/pexels-photo-10802332.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", caption: "Винна карта" },
    { url: "https://images.pexels.com/photos/8108055/pexels-photo-8108055.jpeg", caption: "Атмосфера вечора" },
    { url: "https://images.pexels.com/photos/7436113/pexels-photo-7436113.jpeg", caption: "Деталі декору" },
    { url: "https://images.pexels.com/photos/35380430/pexels-photo-35380430.png", caption: "Авторська подача" },
    { url: "https://images.pexels.com/photos/10802332/pexels-photo-10802332.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", caption: "Ранкова кава" },
    { url: "https://images.pexels.com/photos/8108055/pexels-photo-8108055.jpeg", caption: "Родинна вечеря" },
    { url: "https://images.pexels.com/photos/7436113/pexels-photo-7436113.jpeg", caption: "Шеф-кухар за роботою" },
  ];

  return (
    <section id="gallery" className="relative overflow-hidden bg-background">
      {/* Header section with defined padding to maintain site rhythm */}
      <div className="mx-auto max-w-[92rem] px-4 pt-[var(--space-act)] lg:px-10">
        <span className="rp-actno mb-5">Галерея</span>
        <Reveal>
          <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)] max-w-[16ch]">
            Атмосфера Pasta Famiglia
          </h2>
        </Reveal>
      </div>

      {/* The Horizontal Pan component manages the scroll-driven translation */}
      <HorizontalPan heightVh={220}>
        {images.map((img, index) => (
          <figure 
            key={index} 
            className="rp-pan-item relative shrink-0 overflow-hidden"
            style={{ width: "clamp(280px, 35vw, 500px)" }}
          >
            <div className="overflow-hidden">
              <img 
                src={img.url} 
                alt={img.caption} 
                className="rp-graded aspect-[4/5] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
                loading="lazy" 
              />
            </div>
            <figcaption className="mt-3 flex items-baseline justify-between text-sm text-muted">
              <span>{img.caption}</span>
              <span className="font-display">{(index + 1).toString().padStart(2, '0')}</span>
            </figcaption>
          </figure>
        ))}
      </HorizontalPan>
      
      {/* Subtle bottom padding to balance the vertical space before the next act */}
      <div className="pb-[var(--space-act)]" />
    </section>
  );
}