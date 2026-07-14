"use client";
import { Reveal, CountUp } from "@/components/mechanics";

export function SectionStory() {
  return (
    <section id="story" className="relative bg-surface pt-0 pb-16 lg:py-0 overflow-hidden">
      {/* Decorative Watermark for LG */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block overflow-hidden">
        <span className="rp-watermark opacity-[0.03] text-[20vw] select-none">
          FAMIGLIA
        </span>
      </div>

      <div className="mx-auto grid max-w-[92rem] items-stretch lg:grid-cols-2">
        {/* photo bleeds to the section edge; type block overlaps it on lg */}
        <div className="relative min-h-[44vh] bg-surface lg:min-h-[92vh] overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/33593001/pexels-photo-33593001.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
            alt="Інтер'єр ресторану Pasta Famiglia" 
            className="rp-graded absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface/30" />
        </div>

        <div className="relative flex flex-col justify-center px-4 py-16 lg:-ml-24 lg:px-0 lg:py-28">
          <div className="relative z-10 bg-surface p-8 lg:p-14 lg:shadow-[0_40px_80px_-40px_rgba(0,0,0,0.35)]">
            <span className="rp-actno mb-5">Історія</span>
            
            <Reveal>
              <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)] leading-tight">
                Душа та коріння
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-muted lg:text-lg">
                Ми віримо, що справжня італійська кухня починається з поваги до інгредієнтів та сімейних рецептів. У Pasta Famiglia ми поєднуємо традиції минулого з енергією сучасного Києва, створюючи простір для щирих розмов та незабутніх смаків.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {/* STAT CELL 1: Rating */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={4.9} decimals={1} locale="uk" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">Рейтинг</p>
              </div>

              {/* STAT CELL 2: Reviews */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={127} locale="uk" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">Відгуків</p>
              </div>
              
              {/* Cell 3 remains empty as per FACTS limitation */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}