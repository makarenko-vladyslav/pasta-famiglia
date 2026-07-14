"use client";
import { Reveal, HorizontalPan } from "@/components/mechanics";

export function SectionGalleryAtmosphere() {
  return (
    <section id="gallery_atmosphere" className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-[92rem] px-4 pt-[var(--space-act)] lg:px-10">
        <span className="rp-actno mb-5 text-sm uppercase tracking-[0.3em] text-muted">
          Атмосфера
        </span>
        <Reveal>
          <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)] max-w-[16ch]">
            Естетика італійського моменту
          </h2>
        </Reveal>
      </div>

      <HorizontalPan heightVh={220}>
        <div className="flex gap-6 lg:gap-10 px-4 lg:px-10">
          {/* Photo 1: Primary provided */}
          <figure className="rp-pan-item relative w-[75vw] md:w-[45vw] lg:w-[35vw] shrink-0 overflow-hidden">
            <div className="overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/6248853/pexels-photo-6248853.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=800" 
                alt="Атмосфера Pasta Famiglia" 
                className="rp-graded aspect-[4/5] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
                loading="lazy" 
              />
            </div>
            <figcaption className="mt-3 flex items-baseline justify-between text-sm text-muted">
              <span className="uppercase tracking-widest">Теплий вечір</span>
              <span className="font-display text-lg">01</span>
            </figcaption>
          </figure>

          {/* Photo 2: Asset 30120702 */}
          <figure className="rp-pan-item relative w-[75vw] md:w-[45vw] lg:w-[35vw] shrink-0 overflow-hidden">
            <div className="overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/30120702/pexels-photo-30120702.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=800" 
                alt="Деталі інтер'єру" 
                className="rp-graded aspect-[4/5] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
                loading="lazy" 
              />
            </div>
            <figcaption className="mt-3 flex items-baseline justify-between text-sm text-muted">
              <span className="uppercase tracking-widest">Краса в деталях</span>
              <span className="font-display text-lg">02</span>
            </figcaption>
          </figure>

          {/* Photo 3: Asset 31396234 */}
          <figure className="rp-pan-item relative w-[75vw] md:w-[45vw] lg:w-[35vw] shrink-0 overflow-hidden">
            <div className="overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/31396234/pexels-photo-31396234.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=800" 
                alt="Кулінарний процес" 
                className="rp-graded aspect-[4/5] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
                loading="lazy" 
              />
            </div>
            <figcaption className="mt-3 flex items-baseline justify-between text-sm text-muted">
              <span className="uppercase tracking-widest">Живі емоції</span>
              <span className="font-display text-lg">03</span>
            </figcaption>
          </figure>

          {/* Photo 4: Asset 19046494 */}
          <figure className="rp-pan-item relative w-[75vw] md:w-[45vw] lg:w-[35vw] shrink-0 overflow-hidden">
            <div className="overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/19046494/pexels-photo-19046494.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=800" 
                alt="Гостинність ресторану" 
                className="rp-graded aspect-[4/5] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
                loading="lazy" 
              />
            </div>
            <figcaption className="mt-3 flex items-baseline justify-between text-sm text-muted">
              <span className="uppercase tracking-widest">Душа закладу</span>
              <span className="font-display text-lg">04</span>
            </figcaption>
          </figure>
        </div>
      </HorizontalPan>
    </section>
  );
}