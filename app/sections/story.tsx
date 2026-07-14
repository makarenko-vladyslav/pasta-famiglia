"use client";
import { Reveal, CountUp } from "@/components/mechanics";

export function SectionStory() {
  return (
    <section id="story" className="relative bg-surface pt-0 pb-16 lg:py-0">
      <div className="mx-auto grid max-w-[92rem] items-stretch lg:grid-cols-2">
        {/* photo bleeds to the section edge; type block overlaps it on lg */}
        <div className="relative min-h-[44vh] bg-surface lg:min-h-[92vh]">
          <img 
            src="https://images.pexels.com/photos/8921574/pexels-photo-8921574.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
            alt="Процес приготування автентичної пасти" 
            className="rp-graded absolute inset-0 h-full w-full object-cover" 
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface/30" />
        </div>
        
        <div className="relative flex flex-col justify-center px-4 py-16 lg:-ml-24 lg:px-0 lg:py-28">
          <div className="bg-surface p-8 lg:p-14 lg:shadow-[0_40px_80px_-40px_rgba(0,0,0,0.35)]">
            <span className="rp-actno mb-5">Історія</span>
            
            <Reveal>
              <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)]">
                Мистецтво та душа італійської вечері
              </h2>
            </Reveal>
            
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-muted lg:text-lg">
                У Pasta Famiglia ми перетворили приготування їжі на мову любові. Кожна страва — це повага до традицій, що передавалися з покоління в покоління, поєднана з найкращими локальними інгредієнтами Києва. Для нас важливо не просто нагодувати, а створити простір, де час сповільнюється, а смак справжньої пасти стає центром вашої історії.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
              {/* Stat Cell 1: Rating */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={4.9} decimals={1} locale="uk" />
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">Рейтинг</p>
              </div>

              {/* Stat Cell 2: Review Count */}
              <div>
                <span className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold text-accent">
                  <CountUp to={127} locale="uk" />
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