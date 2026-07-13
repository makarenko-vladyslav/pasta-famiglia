"use client";
import { Reveal, HorizontalPan } from "@/components/mechanics";

export function SectionMarqueeSignatures() {
  return (
    <section id="marquee_signatures" className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-[92rem] px-4 pt-[var(--space-act)] lg:px-10">
        <span className="rp-actno mb-5">Спеціалітети</span>
        <Reveal>
          <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)] max-w-[16ch]">
            Pasta Fresca та Pizza di Legna у Києві
          </h2>
        </Reveal>
      </div>
      
      <HorizontalPan heightVh={220}>
        <div className="flex gap-6 lg:gap-10 px-4 lg:px-10">
          <figure className="rp-pan-item relative shrink-0 overflow-hidden w-[75vw] lg:w-[35vw]">
            <div className="overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/10048340/pexels-photo-10048340.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
                alt="Борошно твердих сортів" 
                className="rp-graded aspect-[4/5] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
                loading="lazy" 
              />
            </div>
            <figcaption className="mt-3 flex items-baseline justify-between text-sm text-muted">
              <span>Борошно Semola</span>
              <span className="font-display">01</span>
            </figcaption>
          </figure>

          <figure className="rp-pan-item relative shrink-0 overflow-hidden w-[75vw] lg:w-[35vw]">
            <div className="overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/10048340/pexels-photo-10048340.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
                alt="Температура печі" 
                className="rp-graded aspect-[4/5] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
                loading="lazy" 
              />
            </div>
            <figcaption className="mt-3 flex items-baseline justify-between text-sm text-muted">
              <span>Температура 450°C</span>
              <span className="font-display">02</span>
            </figcaption>
          </figure>

          <figure className="rp-pan-item relative shrink-0 overflow-hidden w-[75vw] lg:w-[35vw]">
            <div className="overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/10048340/pexels-photo-10048340.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
                alt="Витримка тіста" 
                className="rp-graded aspect-[4/5] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
                loading="lazy" 
              />
            </div>
            <figcaption className="mt-3 flex items-baseline justify-between text-sm text-muted">
              <span>Витримка 48 годин</span>
              <span className="font-display">03</span>
            </figcaption>
          </figure>

          <figure className="rp-pan-item relative shrink-0 overflow-hidden w-[75vw] lg:w-[35vw]">
            <div className="overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/10048340/pexels-photo-10048340.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
                alt="Локальні інгредієнти" 
                className="rp-graded aspect-[4/5] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
                loading="lazy" 
              />
            </div>
            <figcaption className="mt-3 flex items-baseline justify-between text-sm text-muted">
              <span>Оливкова олія</span>
              <span className="font-display">04</span>
            </figcaption>
          </figure>
        </div>
      </HorizontalPan>
    </section>
  );
}