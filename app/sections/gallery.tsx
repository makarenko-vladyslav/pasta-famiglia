"use client";
import { Reveal, HorizontalPan } from "@/components/mechanics";

/**
 * SectionGallery - ACT IV: The Proof — Atmosphere
 * Sideways-scrolling editorial strip showcasing the restaurant's visual identity.
 * Strictly adheres to the HorizontalPan container spec.
 */
export function SectionGallery() {
  return (
    <section 
      id="gallery" 
      className="relative overflow-hidden bg-background py-[var(--space-act)]"
    >
      <div className="mx-auto max-w-[92rem] px-4 pt-[var(--space-act)] lg:px-10">
        <span className="rp-actno mb-5 block text-sm uppercase tracking-[0.3em] text-muted">
          Галерея
        </span>
        <Reveal>
          <h2 className="font-display font-bold leading-[0.9] text-[clamp(2.4rem,5vw,4.5rem)] max-w-[16ch]">
            Атмосфера нашого дому
          </h2>
        </Reveal>
      </div>

      <HorizontalPan heightVh={220}>
        {/* Item 01: The Craft */}
        <figure className="rp-pan-item relative shrink-0 overflow-hidden w-[75vw] lg:w-[35vw]">
          <img 
            src="https://images.pexels.com/photos/7262983/pexels-photo-7262983.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=900" 
            alt="Мистецтво приготування пасти" 
            className="rp-graded aspect-[4/5] w-full object-cover" 
            loading="lazy" 
          />
          <figcaption className="mt-3 flex items-baseline justify-between text-sm text-muted">
            <span>Традиційна рецептура</span>
            <span className="font-display">01</span>
          </figcaption>
        </figure>

        {/* Item 02: The Space */}
        <figure className="rp-pan-item relative shrink-0 overflow-hidden w-[75vw] lg:w-[35vw]">
          <img 
            src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=900" 
            alt="Інтер'єр ресторану" 
            className="rp-graded aspect-[4/5] w-full object-cover" 
            loading="lazy" 
          />
          <figcaption className="mt-3 flex items-baseline justify-between text-sm text-muted">
            <span>Затишок кожного куточка</span>
            <span className="font-display">02</span>
          </figcaption>
        </figure>

        {/* Item 03: The Vibe */}
        <figure className="rp-pan-item relative shrink-0 overflow-hidden w-[75vw] lg:w-[35vw]">
          <img 
            src="https://images.pexels.com/photos/2092906/pexels-photo-2092906.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=900" 
            alt="Деталі сервірування" 
            className="rp-graded aspect-[4/5] w-full object-cover" 
            loading="lazy" 
          />
          <figcaption className="mt-3 flex items-baseline justify-between text-sm text-muted">
            <span>Вечірня естетика</span>
            <span className="font-display">03</span>
          </figcaption>
        </figure>

        {/* Item 04: The Detail */}
        <figure className="rp-pan-item relative shrink-0 overflow-hidden w-[75vw] lg:w-[35vw]">
          <img 
            src="https://images.pexels.com/photos/1435895/pexels-photo-1435895.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=900" 
            alt="Свіжа паста" 
            className="rp-graded aspect-[4/5] w-full object-cover" 
            loading="lazy" 
          />
          <figcaption className="mt-3 flex items-baseline justify-between text-sm text-muted">
            <span>Мистецтво смаку</span>
            <span className="font-display">04</span>
          </figcaption>
        </figure>
      </HorizontalPan>
    </section>
  );
}