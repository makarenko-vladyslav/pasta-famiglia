"use client";

import { Reveal } from "@/components/mechanics";

export function SectionStory() {
  return (
    <section id="story" className="relative bg-surface py-24 lg:py-0">
      <div className="mx-auto grid max-w-[92rem] items-stretch lg:grid-cols-2">
        {/* photo bleeds to the section edge; type block overlaps it on lg */}
        <div className="relative min-h-[44vh] lg:min-h-[92vh]">
          <img 
            src="https://images.pexels.com/photos/10054915/pexels-photo-10054915.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
            alt="Процес виготовлення пасти ручної роботи в Pasta Famiglia" 
            className="rp-graded absolute inset-0 h-full w-full object-cover" 
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface/30" />
        </div>
        
        <div className="relative flex flex-col justify-center px-4 py-16 lg:-ml-24 lg:px-0 lg:py-28">
          <div className="bg-surface p-8 lg:p-14 lg:shadow-[0_40px_80px_-40px_rgba(0,0,0,0.35)]">
            <span className="rp-actno mb-5 block text-sm uppercase tracking-[0.3em] text-muted">Наші витоки</span>
            
            <Reveal>
              <h2 className="font-display font-bold leading-[0.92] tracking-[-0.03em] text-[clamp(2.4rem,5vw,4.5rem)]">
                Душа та спадщина італійського смаку
              </h2>
            </Reveal>
            
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-muted lg:text-lg">
                Ми віримо, що найкраща паста — це та, що зроблена вручну з любов’ю та повагою до італійських традицій. 
                Кожен равіолі та кожна стрічка тальятеле в Pasta Famiglia створюються щоранку з найкращого 
                італійського борошна сорту «00», щоб ви могли відчути справжній смак домашнього затишку 
                в самому серці Києва.
              </p>
            </Reveal>
            
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-foreground/10 pt-10">
              {/* Stat 1: Rating */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  4.9
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">Рейтинг</p>
              </div>
              
              {/* Stat 2: Reviews */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  127
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">Відгуків</p>
              </div>
              
              {/* Stat 3: Craftmanship */}
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}