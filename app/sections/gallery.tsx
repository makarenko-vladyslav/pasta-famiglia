"use client";
import { Reveal, HorizontalPan } from "@/components/mechanics";

export function SectionGallery() {
  return (
    <section id="gallery" className="relative overflow-hidden bg-surface">
      <div className="mx-auto max-w-[92rem] px-4 pt-[var(--space-act)] lg:px-10">
        <span className="rp-actno mb-5 block text-sm uppercase tracking-[0.3em] text-muted">
          Атмосфера
        </span>
        <Reveal>
          <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)] max-w-[16ch]">
            Душа нашої кухні в деталях
          </h2>
        </Reveal>
      </div>

      <HorizontalPan heightVh={220}>
        {/* Item 01 */}
        <figure className="rp-pan-item relative shrink-0 overflow-hidden w-[75vw] md:w-[45vw] lg:w-[35vw] ml-4 lg:ml-10">
          <div className="overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/19065716/pexels-photo-19065716.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=900" 
              alt="Інтер'єр Pasta Famiglia — затишок та автентичність" 
              className="rp-graded aspect-[4/5] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
              loading="lazy" 
            />
          </div>
          <figcaption className="mt-3 flex items-baseline justify-between text-sm text-muted">
            <span className="uppercase tracking-widest text-[10px]">Естетика залу</span>
            <span className="font-display text-lg">01</span>
          </figcaption>
        </figure>

        {/* Item 02 */}
        <figure className="rp-pan-item relative shrink-0 overflow-hidden w-[85vw] md:w-[60vw] lg:w-[50vw] ml-8 lg:ml-20">
          <div className="overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/31769301/pexels-photo-31769301.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1600" 
              alt="Деталі сервірування та світло" 
              className="rp-graded aspect-[16/10] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
              loading="lazy" 
            />
          </div>
          <figcaption className="mt-3 flex items-baseline justify-between text-sm text-muted">
            <span className="uppercase tracking-widest text-[10px]">Магія вечора</span>
            <span className="font-display text-lg">02</span>
          </figcaption>
        </figure>

        {/* Item 03 */}
        <figure className="rp-pan-item relative shrink-0 overflow-hidden w-[70vw] md:w-[40vw] lg:w-[30vw] ml-8 lg:ml-20 mr-4 lg:mr-10">
          <div className="overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/30076295/pexels-photo-30076295.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
              alt="Фірмова паста Pasta Famiglia" 
              className="rp-graded aspect-[3/4] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
              loading="lazy" 
            />
          </div>
          <figcaption className="mt-3 flex items-baseline justify-between text-sm text-muted">
            <span className="uppercase tracking-widest text-[10px]">Головний акцент</span>
            <span className="font-display text-lg">03</span>
          </figcaption>
        </figure>
      </HorizontalPan>

      {/* Decorative Padding to meet next act rhythm if needed */}
      <div className="pb-[var(--space-act)]" />
    </section>
  );
}