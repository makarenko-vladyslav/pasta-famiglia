"use client";

import { Reveal, HorizontalPan } from "@/components/mechanics";

/**
 * ACT III: The Soul. Atmosphere and lifestyle.
 * A sideways-scrolling editorial strip featuring graded photos of Pasta Famiglia.
 */
export function SectionGalleryPan() {
  return (
    <section id="gallery_pan" className="relative overflow-hidden bg-surface">
      <div className="mx-auto max-w-[92rem] px-4 pt-[var(--space-act)] lg:px-10">
        <span className="text-sm uppercase tracking-[0.3em] text-muted mb-5 block">
          АТМОСФЕРА
        </span>
        <Reveal>
          <h2 className="font-display font-bold leading-[0.9] text-[clamp(2.4rem,5vw,4.5rem)] max-w-[16ch]">
            Емоції, що залишаються в серці назавжди
          </h2>
        </Reveal>
      </div>

      <HorizontalPan heightVh={220}>
        {/* Item 01: Interior */}
        <figure className="rp-pan-item relative shrink-0 overflow-hidden w-[70vw] lg:w-[35vw]">
          <img
            src="https://images.pexels.com/photos/32255665/pexels-photo-32255665.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
            alt="Інтер'єр ресторану Pasta Famiglia"
            className="rp-graded aspect-[4/5] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]"
            loading="lazy"
          />
          <figcaption className="mt-3 flex items-baseline justify-between text-sm text-muted">
            <span>Затишок італійського дому</span>
            <span className="font-display text-lg">01</span>
          </figcaption>
        </figure>

        {/* Item 02: Family Dining */}
        <figure className="rp-pan-item relative shrink-0 overflow-hidden w-[70vw] lg:w-[35vw]">
          <img
            src="https://images.pexels.com/photos/7618544/pexels-photo-7618544.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
            alt="Сімейна вечеря за великим столом"
            className="rp-graded aspect-[4/5] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]"
            loading="lazy"
          />
          <figcaption className="mt-3 flex items-baseline justify-between text-sm text-muted">
            <span>Щасливі моменти разом</span>
            <span className="font-display text-lg">02</span>
          </figcaption>
        </figure>

        {/* Item 03: Chef Closeup */}
        <figure className="rp-pan-item relative shrink-0 overflow-hidden w-[70vw] lg:w-[35vw]">
          <img
            src="https://images.pexels.com/photos/4252137/pexels-photo-4252137.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
            alt="Шеф-кухар готує страву"
            className="rp-graded aspect-[4/5] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]"
            loading="lazy"
          />
          <figcaption className="mt-3 flex items-baseline justify-between text-sm text-muted">
            <span>Майстерність у кожному русі</span>
            <span className="font-display text-lg">03</span>
          </figcaption>
        </figure>

        {/* Item 04: Fresh Pasta */}
        <figure className="rp-pan-item relative shrink-0 overflow-hidden w-[70vw] lg:w-[35vw]">
          <img
            src="https://images.pexels.com/photos/6287515/pexels-photo-6287515.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
            alt="Свіжа паста власного виробництва"
            className="rp-graded aspect-[4/5] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]"
            loading="lazy"
          />
          <figcaption className="mt-3 flex items-baseline justify-between text-sm text-muted">
            <span>Традиції ручної роботи</span>
            <span className="font-display text-lg">04</span>
          </figcaption>
        </figure>
      </HorizontalPan>
    </section>
  );
}