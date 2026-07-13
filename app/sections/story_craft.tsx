"use client";

import { Reveal, TiltCard } from "@/components/mechanics";

/**
 * SECTION: story_craft
 * ROLE: ACT III: The Soul. The heritage and raw materials.
 * LAYOUT: Photo bleeding to the edge with the text plate OVERLAPPING.
 */
export function SectionStoryCraft() {
  return (
    <section id="story_craft" className="relative bg-surface py-24 lg:py-0">
      <div className="mx-auto grid max-w-[92rem] items-stretch lg:grid-cols-2">
        {/* photo bleeds to the section edge; type block overlaps it on lg */}
        <div className="relative min-h-[44vh] lg:min-h-[92vh] overflow-hidden">
          <TiltCard className="h-full w-full">
            <img 
              src="https://images.pexels.com/photos/9220866/pexels-photo-9220866.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
              alt="Ручне замішування тіста для справжньої італійської пасти" 
              className="rp-graded absolute inset-0 h-full w-full object-cover [clip-path:ellipse(80%_100%_at_50%_0%)] lg:[clip-path:none]" 
              loading="lazy"
            />
          </TiltCard>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface/30 pointer-events-none" />
        </div>

        <div className="relative flex flex-col justify-center px-4 py-16 lg:-ml-24 lg:px-0 lg:py-28">
          <div className="bg-surface p-8 lg:p-14 lg:shadow-[0_40px_80px_-40px_rgba(0,0,0,0.35)]">
            <span className="rp-actno mb-5 block text-sm uppercase tracking-[0.3em] text-muted">Душа</span>
            
            <Reveal>
              <h2 className="font-display font-bold leading-[0.92] text-[clamp(2.4rem,5vw,4.5rem)]">
                Мистецтво живого тіста
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-muted lg:text-lg">
                Справжня паста — це не просто інгредієнти, це ритм рук майстра. У Pasta Famiglia ми дотримуємося стародавніх італійських технік: від вибору найкращого борошна твердих сортів до дбайливого замішування, що зберігає характер кожної стрічки пасти.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {/* STAT_CELL_1: Rating */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  4.9
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">Рейтинг</p>
              </div>

              {/* STAT_CELL_2: Reviews */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  127
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">Відгуків</p>
              </div>

              {/* STAT_CELL_3: House Number (Fact: вул. Антоновича, 44) */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  44
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">Локація</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}