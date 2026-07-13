"use client";
import { Reveal, CountUp } from "@/components/mechanics";

export function SectionMarqueeValues() {
  return (
    <section id="marquee_values" className="relative bg-background py-24 lg:py-0">
      <div className="mx-auto grid max-w-[92rem] items-stretch lg:grid-cols-2">
        {/* photo bleeds to the section edge; type block overlaps it on lg */}
        <div className="relative min-h-[44vh] bg-surface lg:min-h-[92vh]">
          <img 
            src="https://images.pexels.com/photos/28865179/pexels-photo-28865179.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
            alt="Процес приготування свіжої італійської пасти" 
            className="rp-graded absolute inset-0 h-full w-full object-cover" 
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface/30" />
        </div>
        
        <div className="relative flex flex-col justify-center px-4 py-16 lg:-ml-24 lg:px-0 lg:py-28">
          <div 
            className="bg-surface p-8 lg:p-14 lg:shadow-[0_40px_80px_-40px_rgba(0,0,0,0.35)]"
            style={{ borderRadius: "var(--radius-surface)" }}
          >
            <span className="rp-actno mb-5 block text-sm uppercase tracking-[0.3em] text-muted">
              Цінності
            </span>
            
            <Reveal>
              <h2 className="font-display font-bold leading-tight text-[clamp(2.4rem,5vw,4.5rem)]">
                Свіжа паста щодня та дров’яна піч
              </h2>
            </Reveal>
            
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-muted lg:text-lg">
                Ми використовуємо виключно борошно Caputo та готуємо за автентичними рецептами. Без прихованих зборів, з гарантією якості та швидкою подачею ваших улюблених страв у самому серці Києва.
              </p>
            </Reveal>
            
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-foreground/10 pt-10">
              {/* STAT 1: Rating */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={4.9} locale="uk" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">Рейтинг Google</p>
              </div>

              {/* STAT 2: Reviews */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={127} locale="uk" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">Відгуків гостей</p>
              </div>

              {/* STAT 3: Guarantee Time */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={20} suffix="хв" locale="uk" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">Час очікування</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}