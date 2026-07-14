"use client";
import { Reveal, HorizontalPan } from "@/components/mechanics";

export function SectionGallery() {
  const photoUrl = "https://images.pexels.com/photos/3661200/pexels-photo-3661200.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800";

  return (
    <section id="gallery" className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-[92rem] px-4 pt-[var(--space-act)] lg:px-10">
        <span className="rp-actno mb-5 text-sm uppercase tracking-[0.3em] text-muted">Галерея</span>
        <Reveal>
          <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)] max-w-[16ch]">
            Мистецтво жити зі смаком
          </h2>
        </Reveal>
      </div>
      
      <HorizontalPan heightVh={220}>
        {/* Item 01 */}
        <figure className="rp-pan-item relative shrink-0 overflow-hidden w-[75vw] lg:w-[40vw]">
          <div className="overflow-hidden">
            <img 
              src={photoUrl} 
              alt="Атмосфера ресторану" 
              className="rp-graded aspect-[4/5] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
              loading="lazy" 
            />
          </div>
          <figcaption className="mt-3 flex items-baseline justify-between text-sm text-muted">
            <span className="uppercase tracking-widest">Життя закладу</span>
            <span className="font-display">01</span>
          </figcaption>
        </figure>

        {/* Item 02 */}
        <figure className="rp-pan-item relative shrink-0 overflow-hidden w-[75vw] lg:w-[40vw]">
          <div className="overflow-hidden">
            <img 
              src={photoUrl} 
              alt="Фірмова піца Pasta Famiglia" 
              className="rp-graded aspect-[4/5] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
              loading="lazy" 
            />
          </div>
          <figcaption className="mt-3 flex items-baseline justify-between text-sm text-muted">
            <span className="uppercase tracking-widest">Справжня італія</span>
            <span className="font-display">02</span>
          </figcaption>
        </figure>

        {/* Item 03 */}
        <figure className="rp-pan-item relative shrink-0 overflow-hidden w-[75vw] lg:w-[40vw]">
          <div className="overflow-hidden">
            <img 
              src={photoUrl} 
              alt="Процес приготування" 
              className="rp-graded aspect-[4/5] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
              loading="lazy" 
            />
          </div>
          <figcaption className="mt-3 flex items-baseline justify-between text-sm text-muted">
            <span className="uppercase tracking-widest">Ритм кухні</span>
            <span className="font-display">03</span>
          </figcaption>
        </figure>

        {/* Item 04 */}
        <figure className="rp-pan-item relative shrink-0 overflow-hidden w-[75vw] lg:w-[40vw]">
          <div className="overflow-hidden">
            <img 
              src={photoUrl} 
              alt="Деталі інтер'єру" 
              className="rp-graded aspect-[4/5] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
              loading="lazy" 
            />
          </div>
          <figcaption className="mt-3 flex items-baseline justify-between text-sm text-muted">
            <span className="uppercase tracking-widest">Вечірній затишок</span>
            <span className="font-display">04</span>
          </figcaption>
        </figure>
      </HorizontalPan>
    </section>
  );
}