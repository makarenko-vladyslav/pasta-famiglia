"use client";

import { Reveal, HorizontalPan } from "@/components/mechanics";

/**
 * ACT III: The Soul (Atmosphere).
 * Sideways-scrolling editorial strip showcasing the visual identity of Pasta Famiglia.
 * Translates the visual mood into a physical scroll experience.
 */
export function SectionGallery() {
  return (
    <section id="gallery" className="relative overflow-hidden bg-surface">
      <div className="mx-auto max-w-[92rem] px-4 pt-[var(--space-act)] lg:px-10">
        <span className="rp-actno mb-5 text-muted uppercase tracking-widest text-[10px] font-mono block">
          ACT III: АТМОСФЕРА
        </span>
        <Reveal>
          <h2 className="font-display font-bold leading-[0.9] tracking-[-0.03em] text-[clamp(2.4rem,5vw,4.5rem)] max-w-[16ch]">
            Естетика, що надихає на справжню насолоду
          </h2>
        </Reveal>
      </div>

      <HorizontalPan heightVh={220}>
        {/* ITEM 01: Interior */}
        <figure className="rp-pan-item relative shrink-0 overflow-hidden w-[75vw] md:w-[45vw] lg:w-[35vw]">
          <div className="overflow-hidden bg-surface">
            <img 
              src="https://images.pexels.com/photos/6937451/pexels-photo-6937451.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=900" 
              alt="Інтер'єр ресторану Pasta Famiglia" 
              className="rp-graded aspect-[4/5] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
              loading="lazy" 
            />
          </div>
          <figcaption className="mt-3 flex items-baseline justify-between text-[10px] font-mono text-muted uppercase tracking-widest">
            <span>Вулиця Антоновича, 44</span>
            <span className="font-display text-sm">01</span>
          </figcaption>
        </figure>

        {/* ITEM 02: Dish */}
        <figure className="rp-pan-item relative shrink-0 overflow-hidden w-[75vw] md:w-[45vw] lg:w-[35vw]">
          <div className="overflow-hidden bg-surface">
            <img 
              src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Фірмова паста ручної роботи" 
              className="rp-graded aspect-[4/5] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
              loading="lazy" 
            />
          </div>
          <figcaption className="mt-3 flex items-baseline justify-between text-[10px] font-mono text-muted uppercase tracking-widest">
            <span>Традиційна подача</span>
            <span className="font-display text-sm">02</span>
          </figcaption>
        </figure>

        {/* ITEM 03: Portrait / Craft */}
        <figure className="rp-pan-item relative shrink-0 overflow-hidden w-[75vw] md:w-[45vw] lg:w-[35vw]">
          <div className="overflow-hidden bg-surface">
            <img 
              src="https://images.pexels.com/photos/2102934/pexels-photo-2102934.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Процес приготування" 
              className="rp-graded aspect-[4/5] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
              loading="lazy" 
            />
          </div>
          <figcaption className="mt-3 flex items-baseline justify-between text-[10px] font-mono text-muted uppercase tracking-widest">
            <span>Мистецтво деталей</span>
            <span className="font-display text-sm">03</span>
          </figcaption>
        </figure>

        {/* ITEM 04: Texture */}
        <figure className="rp-pan-item relative shrink-0 overflow-hidden w-[75vw] md:w-[45vw] lg:w-[35vw]">
          <div className="overflow-hidden bg-surface">
            <img 
              src="https://images.pexels.com/photos/1435895/pexels-photo-1435895.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Італійські інгредієнти" 
              className="rp-graded aspect-[4/5] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
              loading="lazy" 
            />
          </div>
          <figcaption className="mt-3 flex items-baseline justify-between text-[10px] font-mono text-muted uppercase tracking-widest">
            <span>Відбірні продукти</span>
            <span className="font-display text-sm">04</span>
          </figcaption>
        </figure>
      </HorizontalPan>
    </section>
  );
}