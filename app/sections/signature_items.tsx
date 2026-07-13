"use client";

import { Reveal, HorizontalPan } from "@/components/mechanics";

/**
 * ACT II: Signature Dishes Spotlight
 * A horizontally scrolling editorial strip showcasing the restaurant's top items.
 */
export function SectionSignatureItems() {
  return (
    <section id="signature_items" className="relative overflow-hidden bg-surface">
      <div className="mx-auto max-w-[92rem] px-4 pt-[var(--space-act)] lg:px-10">
        <span className="rp-actno mb-5 block text-sm uppercase tracking-[0.3em] text-muted">
          Спеціалітети
        </span>
        <Reveal>
          <h2 className="font-display font-bold leading-[0.9] text-[clamp(2.4rem,5vw,4.5rem)] max-w-[16ch] mb-12 lg:mb-20">
            Шедеври нашої домашньої кухні
          </h2>
        </Reveal>
      </div>

      <HorizontalPan heightVh={220}>
        <div className="flex gap-4 lg:gap-10 px-4 lg:px-10">
          {/* ITEM 1 */}
          <figure className="rp-pan-item relative shrink-0 overflow-hidden w-[80vw] lg:w-[35vw]">
            <div className="overflow-hidden bg-surface">
              <img 
                src="https://images.pexels.com/photos/7110136/pexels-photo-7110136.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
                alt="Папарделле з чорним трюфелем" 
                className="rp-graded aspect-[4/5] w-full object-cover transition-transform duration-1000 ease-[var(--ease-out-cubic)] hover:scale-[1.04]" 
                loading="lazy" 
              />
            </div>
            <figcaption className="mt-3 flex items-baseline justify-between text-sm text-muted">
              <div className="flex flex-col">
                <span className="font-display text-xl lg:text-2xl text-foreground leading-tight">Папарделле з трюфелем</span>
                <span className="text-sm font-mono mt-1 opacity-70">380 ГРН</span>
              </div>
              <span className="font-display text-3xl lg:text-5xl opacity-20">01</span>
            </figcaption>
          </figure>

          {/* ITEM 2 */}
          <figure className="rp-pan-item relative shrink-0 overflow-hidden w-[80vw] lg:w-[35vw]">
            <div className="overflow-hidden bg-surface">
              <img 
                src="https://images.pexels.com/photos/14537702/pexels-photo-14537702.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
                alt="Класична карбонара за римським рецептом" 
                className="rp-graded aspect-[4/5] w-full object-cover transition-transform duration-1000 ease-[var(--ease-out-cubic)] hover:scale-[1.04]" 
                loading="lazy" 
              />
            </div>
            <figcaption className="mt-3 flex items-baseline justify-between text-sm text-muted">
              <div className="flex flex-col">
                <span className="font-display text-xl lg:text-2xl text-foreground leading-tight">Класична Карбонара</span>
                <span className="text-sm font-mono mt-1 opacity-70">295 ГРН</span>
              </div>
              <span className="font-display text-3xl lg:text-5xl opacity-20">02</span>
            </figcaption>
          </figure>

          {/* ITEM 3 */}
          <figure className="rp-pan-item relative shrink-0 overflow-hidden w-[80vw] lg:w-[35vw]">
            <div className="overflow-hidden bg-surface">
              <img 
                src="https://images.pexels.com/photos/4252776/pexels-photo-4252776.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
                alt="Фірмова Лазанья аль Форно" 
                className="rp-graded aspect-[4/5] w-full object-cover transition-transform duration-1000 ease-[var(--ease-out-cubic)] hover:scale-[1.04]" 
                loading="lazy" 
              />
            </div>
            <figcaption className="mt-3 flex items-baseline justify-between text-sm text-muted">
              <div className="flex flex-col">
                <span className="font-display text-xl lg:text-2xl text-foreground leading-tight">Лазанья аль Форно</span>
                <span className="text-sm font-mono mt-1 opacity-70">340 ГРН</span>
              </div>
              <span className="font-display text-3xl lg:text-5xl opacity-20">03</span>
            </figcaption>
          </figure>
        </div>
      </HorizontalPan>
    </section>
  );
}