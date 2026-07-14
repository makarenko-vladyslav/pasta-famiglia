"use client";
import { Reveal, CountUp } from "@/components/mechanics";

export function SectionStoryCraft() {
  return (
    <section id="story_craft" className="relative bg-surface py-[var(--space-act)] lg:py-0">
      <div className="mx-auto grid max-w-[92rem] items-stretch lg:grid-cols-2">
        {/* photo bleeds to the section edge; type block overlaps it on lg */}
        <div className="relative min-h-[44vh] bg-surface lg:min-h-[92vh]">
          <img 
            src="https://images.pexels.com/photos/19065716/pexels-photo-19065716.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
            alt="Процес приготування свіжої пасти вручну" 
            className="rp-graded absolute inset-0 h-full w-full object-cover" 
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface/30" />
        </div>
        
        <div className="relative flex flex-col justify-center px-4 py-16 lg:-ml-24 lg:px-0 lg:py-28">
          <div className="bg-surface p-8 lg:p-14 lg:shadow-[0_40px_80px_-40px_rgba(0,0,0,0.35)]">
            <span className="rp-actno mb-5 block text-sm uppercase tracking-[0.3em] text-muted">Душа</span>
            
            <Reveal>
              <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)] leading-tight">
                Секрет у кожному русі
              </h2>
            </Reveal>
            
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-muted lg:text-lg max-w-[45ch]">
                На кухні Pasta Famiglia час сповільнюється. Ми відмовилися від промислових методів на користь ручної праці, де кожна стрічка фетучіні та кожен кошик равіолі створюються з особливою увагою. Це дозволяє нам контролювати текстуру тіста та зберігати його пористість, щоб воно ідеально поєднувалося з нашими фірмовими соусами.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {/* STAT CELL: RATING */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={4.9} suffix="" locale="uk-UA" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">Рейтинг</p>
              </div>

              {/* STAT CELL: REVIEWS */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={127} suffix="" locale="uk-UA" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">Відгуків</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}