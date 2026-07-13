"use client";
import { Reveal, CountUp } from "@/components/mechanics";

/**
 * ACT III: The Soul (Part 1) — Story Workshop
 * A signature split-layout act where the media bleeds to the edge 
 * and the editorial content overlaps via a negative margin.
 */
export function SectionStoryWorkshop() {
  return (
    <section 
      id="story_workshop" 
      className="relative overflow-hidden bg-surface py-24 lg:py-0"
    >
      {/* Decorative watermark - hidden on mobile as per spec/logic */}
      <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
        <span className="rp-watermark absolute -bottom-12 -right-12 font-display text-[25vw] leading-none text-foreground/5 select-none">
          20 MIN
        </span>
      </div>

      <div className="mx-auto grid max-w-[92rem] items-stretch lg:grid-cols-2">
        {/* Photo bleeds to the section edge; type block overlaps it on lg */}
        <div className="relative min-h-[44vh] bg-surface lg:min-h-[92vh]">
          <img 
            src="https://images.pexels.com/photos/8646690/pexels-photo-8646690.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
            alt="Мистецтво приготування свіжої пасти Pasta Famiglia" 
            className="rp-graded absolute inset-0 h-full w-full object-cover" 
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface/30" />
        </div>

        <div className="relative flex flex-col justify-center px-4 py-16 lg:-ml-24 lg:px-0 lg:py-28">
          <div 
            className="relative z-20 bg-surface p-8 lg:p-14 lg:shadow-[0_40px_80px_-40px_rgba(0,0,0,0.35)]"
            style={{ borderRadius: "var(--radius-surface)" }}
          >
            <span className="rp-actno mb-5 inline-block text-sm uppercase tracking-[0.3em] text-muted">
              Душа
            </span>
            
            <Reveal>
              <h2 className="font-display text-[clamp(2.4rem,5vw,4.5rem)] font-bold leading-tight">
                Мистецтво живої пасти
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-muted lg:text-lg">
                Кожна порція створюється безпосередньо перед подачею. Ми використовуємо лише борошно твердих сортів та фермерські яйця, щоб передати справжній смак сонячної Італії в самому серці Києва.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-foreground/10 pt-10">
              {/* STAT_CELLS */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={4.9} decimals={1} locale="uk" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">Рейтинг</p>
              </div>

              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={127} locale="uk" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">Відгуків</p>
              </div>

              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={20} suffix=" хв" locale="uk" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">Приготування</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}