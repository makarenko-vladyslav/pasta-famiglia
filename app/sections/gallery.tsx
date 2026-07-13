"use client";

import { Reveal, HorizontalPan } from "@/components/mechanics";

export function SectionGallery() {
  return (
    <section id="gallery" className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-[92rem] px-4 pt-[var(--space-act)] lg:px-10">
        <span className="rp-actno mb-5 block text-sm font-body uppercase tracking-[0.3em] text-muted">
          Душа
        </span>
        <Reveal>
          <h2 className="font-display font-bold leading-[0.9] text-[clamp(2.4rem,5vw,4.5rem)] max-w-[16ch]">
            Життя нашої кухні
          </h2>
        </Reveal>
      </div>

      <HorizontalPan heightVh={220}>
        <div className="flex gap-6 pl-4 lg:gap-12 lg:pl-10">
          {/* ITEM 01 */}
          <figure className="rp-pan-item relative shrink-0 overflow-hidden w-[75vw] lg:w-[35vw]">
            <div className="overflow-hidden">
              <img
                src="https://images.pexels.com/photos/13185302/pexels-photo-13185302.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
                alt="Золотисте борошно Semola"
                className="rp-graded aspect-[4/5] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]"
                loading="lazy"
              />
            </div>
            <figcaption className="mt-4 flex items-baseline justify-between text-sm text-muted">
              <span className="font-body">Золотисте борошно Semola</span>
              <span className="font-display text-lg">01</span>
            </figcaption>
          </figure>

          {/* ITEM 02 */}
          <figure className="rp-pan-item relative shrink-0 overflow-hidden w-[75vw] lg:w-[35vw]">
            <div className="overflow-hidden">
              <img
                src="https://images.pexels.com/photos/111134/pexels-photo-111134.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
                alt="Піца у печі на дровах"
                className="rp-graded aspect-[4/5] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]"
                loading="lazy"
              />
            </div>
            <figcaption className="mt-4 flex items-baseline justify-between text-sm text-muted">
              <span className="font-body">Піца у печі на дровах</span>
              <span className="font-display text-lg">02</span>
            </figcaption>
          </figure>

          {/* ITEM 03 */}
          <figure className="rp-pan-item relative shrink-0 overflow-hidden w-[75vw] lg:w-[35vw]">
            <div className="overflow-hidden">
              <img
                src="https://images.pexels.com/photos/5953526/pexels-photo-5953526.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
                alt="Процес ручної розкатки"
                className="rp-graded aspect-[4/5] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]"
                loading="lazy"
              />
            </div>
            <figcaption className="mt-4 flex items-baseline justify-between text-sm text-muted">
              <span className="font-body">Процес ручної розкатки</span>
              <span className="font-display text-lg">03</span>
            </figcaption>
          </figure>

          {/* ITEM 04 */}
          <figure className="rp-pan-item relative shrink-0 overflow-hidden w-[75vw] lg:w-[35vw] pr-4 lg:pr-10">
            <div className="overflow-hidden">
              <img
                src="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
                alt="Кава на зернах Lavazza"
                className="rp-graded aspect-[4/5] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]"
                loading="lazy"
              />
            </div>
            <figcaption className="mt-4 flex items-baseline justify-between text-sm text-muted">
              <span className="font-body">Кава на зернах Lavazza</span>
              <span className="font-display text-lg">04</span>
            </figcaption>
          </figure>
        </div>
      </HorizontalPan>
    </section>
  );
}