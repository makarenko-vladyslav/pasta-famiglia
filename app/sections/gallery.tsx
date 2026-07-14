"use client";
import { Reveal, HorizontalPan } from "@/components/mechanics";

/**
 * SECTION: GALLERY (ACT III)
 * Visual immersion for Pasta Famiglia.
 * Uses HorizontalPan for a sideways-scrolling editorial strip.
 */
export function SectionGallery() {
  const PHOTO_URL = "https://images.pexels.com/photos/8113351/pexels-photo-8113351.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200";

  const galleryItems = [
    { caption: "Вечірня атмосфера", index: "01" },
    { caption: "Авторська подача", index: "02" },
    { caption: "Домашня паста", index: "03" },
    { caption: "Свіжі інгредієнти", index: "04" },
    { caption: "Затишний інтер’єр", index: "05" },
    { caption: "Традиції родини", index: "06" },
    { caption: "Винна карта", index: "07" },
    { caption: "Ранкова кава", index: "08" },
    { caption: "Деталі декору", index: "09" },
    { caption: "Смак Італії", index: "10" },
  ];

  return (
    <section id="gallery" className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-[92rem] px-4 pt-[var(--space-act)] lg:px-10">
        <span className="rp-actno mb-5 block text-sm uppercase tracking-[0.3em] text-muted">Галерея</span>
        <Reveal>
          <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)] max-w-[16ch]">
            Мистецтво італійської гостинності
          </h2>
        </Reveal>
      </div>

      <HorizontalPan heightVh={220}>
        <div className="flex gap-6 px-4 lg:gap-12 lg:px-10">
          {galleryItems.map((item, i) => (
            <figure 
              key={i} 
              className="rp-pan-item relative shrink-0 overflow-hidden w-[75vw] md:w-[400px] lg:w-[500px]"
            >
              <div className="overflow-hidden">
                <img 
                  src={PHOTO_URL} 
                  alt={`Pasta Famiglia atmosphere - ${item.caption}`} 
                  className="rp-graded aspect-[4/5] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
                  loading="lazy" 
                />
              </div>
              <figcaption className="mt-3 flex items-baseline justify-between text-sm text-muted">
                <span className="uppercase tracking-wider">{item.caption}</span>
                <span className="font-display text-lg">{item.index}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </HorizontalPan>
    </section>
  );
}