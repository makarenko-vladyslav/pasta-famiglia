"use client";
import { Reveal, CountUp } from "@/components/mechanics";

/**
 * SectionStory - ACT III: The Soul — The Semola Story
 * A signature 7/5 grid composition where the content plate overlaps the bleed photo.
 * Uses exact tokens and vetted skeletal structure.
 */
export function SectionStory() {
  return (
    <section id="story" className="relative overflow-hidden bg-background py-24 lg:py-0">
      <div className="mx-auto grid max-w-[92rem] items-stretch lg:grid-cols-2">
        
        {/* Visual Anchor: Large photo bleeding to the edge */}
        <div className="relative min-h-[44vh] bg-surface lg:min-h-[92vh]">
          <img 
            src="https://images.pexels.com/photos/36707034/pexels-photo-36707034.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
            alt="Текстура борошна семола для італійської пасти" 
            className="rp-graded absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface/30" />
        </div>

        {/* Content Plate: Overlaps the photo on large screens */}
        <div className="relative flex flex-col justify-center px-4 py-16 lg:-ml-24 lg:px-0 lg:py-28">
          <div className="relative z-10 bg-surface p-8 lg:p-14 lg:shadow-[0_40px_80px_-40px_rgba(0,0,0,0.35)]">
            
            {/* Watermark garnish - visible on large screens */}
            <div className="rp-watermark pointer-events-none absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] lg:block">
              PASTA
            </div>

            <span className="rp-actno mb-5 block text-sm uppercase tracking-[0.3em] text-muted">
              ІСТОРІЯ
            </span>
            
            <Reveal>
              <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)] leading-tight">
                Душа та семола Pasta Famiglia
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 max-w-[45ch] font-body text-base leading-relaxed text-muted lg:text-lg">
                Ми створюємо пасту за автентичними рецептами, де кожен грам борошна має значення. 
                Наша історія починається з відбірної семоли та любові до італійських традицій, 
                які ми привезли у саме серце Києва, щоб ви відчули справжній смак дому.
              </p>
            </Reveal>

            {/* Facts derived directly from BUSINESS FACTS */}
            <div className="mt-10 grid grid-cols-2 gap-8 border-t border-foreground/10 pt-10 lg:grid-cols-3">
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent leading-none">
                  <CountUp to={4.9} decimals={1} locale="uk" />
                </span>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted">Рейтинг</p>
              </div>
              
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent leading-none">
                  <CountUp to={127} suffix="+" locale="uk" />
                </span>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted">Відгуків</p>
              </div>

              {/* Only 2 real numeric facts available in the spec, third cell omitted to maintain integrity */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}