"use client";

import { Reveal, HorizontalPan } from "@/components/mechanics";

/**
 * SectionGallery - ACT III: The Soul
 * A sideways-scrolling editorial strip showcasing the interior and atmosphere.
 * Uses HorizontalPan for scroll-linked parallax movement.
 */
export function SectionGallery() {
  return (
    <section id="gallery" className="relative overflow-hidden bg-surface">
      <div className="mx-auto max-w-[92rem] px-4 pt-[var(--space-act)] lg:px-10">
        <span className="rp-actno mb-5">Атмосфера</span>
        <Reveal>
          <h2 className="font-display font-bold leading-[0.9] text-[clamp(2.4rem,5vw,4.5rem)] max-w-[16ch]">
            Життя всередині Pasta Famiglia
          </h2>
        </Reveal>
      </div>

      <HorizontalPan heightVh={220}>
        {/* PAN ITEM 01 */}
        <figure className="rp-pan-item relative shrink-0 overflow-hidden w-[75vw] lg:w-[45vw]">
          <img 
            src="https://images.pexels.com/photos/2998955/pexels-photo-2998955.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
            alt="Зал ресторану Pasta Famiglia у денний час" 
            className="rp-graded aspect-[4/5] w-full object-cover" 
            loading="lazy" 
          />
          <figcaption className="mt-3 flex items-baseline justify-between text-sm text-muted">
            <span>Настрій обіднього часу</span>
            <span className="font-display">01</span>
          </figcaption>
        </figure>

        {/* PAN ITEM 02 */}
        <figure className="rp-pan-item relative shrink-0 overflow-hidden w-[75vw] lg:w-[45vw]">
          <img 
            src="https://images.pexels.com/photos/4350219/pexels-photo-4350219.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
            alt="Кухар готує свіжу пасту на кухні" 
            className="rp-graded aspect-[4/5] w-full object-cover" 
            loading="lazy" 
          />
          <figcaption className="mt-3 flex items-baseline justify-between text-sm text-muted">
            <span>Приготування свіжої пасти</span>
            <span className="font-display">02</span>
          </figcaption>
        </figure>

        {/* PAN ITEM 03 */}
        <figure className="rp-pan-item relative shrink-0 overflow-hidden w-[75vw] lg:w-[45vw]">
          <img 
            src="https://images.pexels.com/photos/14295998/pexels-photo-14295998.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
            alt="Вечірнє сервірування столів та деталі інтер'єру" 
            className="rp-graded aspect-[4/5] w-full object-cover" 
            loading="lazy" 
          />
          <figcaption className="mt-3 flex items-baseline justify-between text-sm text-muted">
            <span>Вечірня атмосфера зали</span>
            <span className="font-display">03</span>
          </figcaption>
        </figure>
      </HorizontalPan>
    </section>
  );
}