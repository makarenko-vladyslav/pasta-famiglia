"use client";
import { Reveal, HorizontalPan } from "@/components/mechanics";

export function SectionGallery() {
  return (
    <section id="gallery" className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-[92rem] px-4 pt-[var(--space-act)] lg:px-10">
        <span className="rp-actno mb-5 block text-sm uppercase tracking-[0.3em] text-muted">
          Атмосфера
        </span>
        <Reveal>
          <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)] max-w-[16ch]">
            Душа Pasta Famiglia
          </h2>
        </Reveal>
      </div>

      <HorizontalPan heightVh={220}>
        <div className="flex gap-4 px-4 lg:gap-10 lg:px-10">
          {/* PAN ITEM 1 */}
          <figure className="rp-pan-item relative w-[85vw] shrink-0 overflow-hidden lg:w-[35vw]">
            <img 
              src="https://images.pexels.com/photos/36244833/pexels-photo-36244833.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
              alt="Інтер'єр Pasta Famiglia" 
              className="rp-graded aspect-[4/5] w-full object-cover" 
              loading="lazy" 
            />
            <figcaption className="mt-3 flex items-baseline justify-between text-sm text-muted">
              <span>Вечірнє освітлення</span>
              <span className="font-display">01</span>
            </figcaption>
          </figure>

          {/* PAN ITEM 2 */}
          <figure className="rp-pan-item relative w-[85vw] shrink-0 overflow-hidden lg:w-[35vw]">
            <img 
              src="https://images.pexels.com/photos/6248853/pexels-photo-6248853.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
              alt="Деталі сервірування" 
              className="rp-graded aspect-[4/5] w-full object-cover" 
              loading="lazy" 
            />
            <figcaption className="mt-3 flex items-baseline justify-between text-sm text-muted">
              <span>Естетика деталей</span>
              <span className="font-display">02</span>
            </figcaption>
          </figure>

          {/* PAN ITEM 3 */}
          <figure className="rp-pan-item relative w-[85vw] shrink-0 overflow-hidden lg:w-[35vw]">
            <img 
              src="https://images.pexels.com/photos/18908596/pexels-photo-18908596.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
              alt="Затишний куточок ресторану" 
              className="rp-graded aspect-[4/5] w-full object-cover" 
              loading="lazy" 
            />
            <figcaption className="mt-3 flex items-baseline justify-between text-sm text-muted">
              <span>Теплий затишок</span>
              <span className="font-display">03</span>
            </figcaption>
          </figure>

          {/* PAN ITEM 4 */}
          <figure className="rp-pan-item relative w-[85vw] shrink-0 overflow-hidden lg:w-[35vw]">
            <img 
              src="https://images.pexels.com/photos/36244833/pexels-photo-36244833.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800&q=40" 
              alt="Фрагмент залу" 
              className="rp-graded aspect-[4/5] w-full object-cover grayscale brightness-75" 
              loading="lazy" 
            />
            <figcaption className="mt-3 flex items-baseline justify-between text-sm text-muted">
              <span>Простір для моментів</span>
              <span className="font-display">04</span>
            </figcaption>
          </figure>
        </div>
      </HorizontalPan>
    </section>
  );
}