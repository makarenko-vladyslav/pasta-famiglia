"use client";

import { Reveal, HorizontalPan } from "@/components/mechanics";

/**
 * ACT III: The Soul.
 * A cinematic horizontal scrolling gallery capturing the lifestyle and atmosphere
 * of Pasta Famiglia in Kyiv.
 */
export function SectionGallery() {
  return (
    <section id="gallery" className="relative overflow-hidden bg-surface">
      {/* Vertical decorative act number as requested in spec, positioned relative to the section */}
      <div className="absolute top-0 right-10 hidden lg:block select-none pointer-events-none">
        <span 
          className="font-display text-[120px] leading-none opacity-20"
          style={{ 
            writingMode: 'vertical-rl', 
            WebkitTextStroke: '1px var(--color-foreground)', 
            color: 'transparent' 
          }}
        >
          03
        </span>
      </div>

      <div className="mx-auto max-w-[92rem] px-4 pt-[var(--space-act)] lg:px-10">
        <span className="rp-actno mb-5 block text-sm uppercase tracking-[0.3em] text-muted">
          Атмосфера
        </span>
        <Reveal>
          <h2 className="font-display font-bold leading-[0.9] text-[clamp(2.4rem,5vw,4.5rem)] max-w-[16ch]">
            Мистецтво жити зі смаком
          </h2>
        </Reveal>
      </div>

      <HorizontalPan heightVh={220}>
        <div className="flex gap-6 px-4 lg:gap-12 lg:px-10">
          {/* PAN ITEM 01 */}
          <figure className="rp-pan-item relative w-[75vw] shrink-0 overflow-hidden lg:w-[40vw]">
            <img 
              src="https://images.pexels.com/photos/8895216/pexels-photo-8895216.jpeg" 
              alt="Інтер'єр ресторану у вечірньому світлі" 
              className="rp-graded aspect-[4/5] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
              loading="lazy" 
            />
            <figcaption className="mt-3 flex items-baseline justify-between text-sm text-muted">
              <span>Вечірній настрій</span>
              <span className="font-display">01</span>
            </figcaption>
          </figure>

          {/* PAN ITEM 02 */}
          <figure className="rp-pan-item relative w-[75vw] shrink-0 overflow-hidden lg:w-[40vw]">
            <img 
              src="https://images.pexels.com/photos/6937488/pexels-photo-6937488.jpeg" 
              alt="Деталі сервірування столу" 
              className="rp-graded aspect-[4/5] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
              loading="lazy" 
            />
            <figcaption className="mt-3 flex items-baseline justify-between text-sm text-muted">
              <span>Ритм кухні</span>
              <span className="font-display">02</span>
            </figcaption>
          </figure>

          {/* PAN ITEM 03 */}
          <figure className="rp-pan-item relative w-[75vw] shrink-0 overflow-hidden lg:w-[40vw]">
            <img 
              src="https://images.pexels.com/photos/5082875/pexels-photo-5082875.jpeg" 
              alt="Гості насолоджуються вечерею" 
              className="rp-graded aspect-[4/5] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
              loading="lazy" 
            />
            <figcaption className="mt-3 flex items-baseline justify-between text-sm text-muted">
              <span>Кожна деталь</span>
              <span className="font-display">03</span>
            </figcaption>
          </figure>

          {/* PAN ITEM 04 */}
          <figure className="rp-pan-item relative w-[75vw] shrink-0 overflow-hidden lg:w-[40vw]">
            <img 
              src="https://images.pexels.com/photos/5903452/pexels-photo-5903452.jpeg" 
              alt="Свіжа паста та вино на столі" 
              className="rp-graded aspect-[4/5] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
              loading="lazy" 
            />
            <figcaption className="mt-3 flex items-baseline justify-between text-sm text-muted">
              <span>Життя за столом</span>
              <span className="font-display">04</span>
            </figcaption>
          </figure>
        </div>
      </HorizontalPan>
      
      {/* Bottom spacer to align with the page rhythm */}
      <div className="pb-[var(--space-act)]" />
    </section>
  );
}