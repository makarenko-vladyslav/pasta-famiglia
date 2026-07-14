"use client";
import { Reveal, HorizontalPan } from "@/components/mechanics";

/**
 * SECTION: Gallery (ACT IV)
 * ROLE: Visual Atmosphere & Proof
 * STACK: Next.js + Tailwind 4 + Reveal + HorizontalPan
 */
export function SectionGallery() {
  return (
    <section id="gallery" className="relative overflow-hidden bg-background py-[var(--space-act)]">
      <div className="mx-auto max-w-[92rem] px-4 pt-[var(--space-act)] lg:px-10">
        <span className="rp-actno mb-5 text-sm uppercase tracking-[0.3em] text-muted block">Атмосфера</span>
        <Reveal>
          <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)] max-w-[16ch]">
            Естетика італійської гостинності
          </h2>
        </Reveal>
      </div>

      <HorizontalPan heightVh={220}>
        {/* PAN ITEM 01 */}
        <figure className="rp-pan-item relative shrink-0 overflow-hidden w-[80vw] lg:w-[35vw]">
          <div className="overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/27487530/pexels-photo-27487530.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=960" 
              alt="Інтер'єр ресторану Pasta Famiglia" 
              className="rp-graded aspect-[4/5] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
              loading="lazy" 
            />
          </div>
          <figcaption className="mt-3 flex items-baseline justify-between text-sm text-muted">
            <span className="uppercase tracking-wider">Затишок та світло</span>
            <span className="font-display text-lg">01</span>
          </figcaption>
        </figure>

        {/* PAN ITEM 02 */}
        <figure className="rp-pan-item relative shrink-0 overflow-hidden w-[80vw] lg:w-[35vw]">
          <div className="overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/11566309/pexels-photo-11566309.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=960" 
              alt="Деталі сервірування" 
              className="rp-graded aspect-[4/5] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
              loading="lazy" 
            />
          </div>
          <figcaption className="mt-3 flex items-baseline justify-between text-sm text-muted">
            <span className="uppercase tracking-wider">Культура подачі</span>
            <span className="font-display text-lg">02</span>
          </figcaption>
        </figure>

        {/* PAN ITEM 03 */}
        <figure className="rp-pan-item relative shrink-0 overflow-hidden w-[80vw] lg:w-[35vw]">
          <div className="overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/6248866/pexels-photo-6248866.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=960" 
              alt="Майстерність шеф-кухаря" 
              className="rp-graded aspect-[4/5] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
              loading="lazy" 
            />
          </div>
          <figcaption className="mt-3 flex items-baseline justify-between text-sm text-muted">
            <span className="uppercase tracking-wider">Смак у деталях</span>
            <span className="font-display text-lg">03</span>
          </figcaption>
        </figure>
      </HorizontalPan>
    </section>
  );
}