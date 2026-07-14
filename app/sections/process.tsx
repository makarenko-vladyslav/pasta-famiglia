"use client";
import { Reveal, TiltCard } from "@/components/mechanics";

export function SectionProcess() {
  const steps = [
    {
      no: "01",
      title: "Відбір борошна",
      desc: "Ми використовуємо виключно італійське борошно сорту Semola di grano duro. Це основа справжньої текстури al dente та насиченого смаку.",
      meta: "ІНГРЕДІЄНТИ",
    },
    {
      no: "02",
      title: "Секрет тіста",
      desc: "На кожний кілограм борошна ми додаємо рівно 40 жовтків фермерських яєць. Жодної краплі води — тільки золото та еластичність.",
      meta: "РЕЦЕПТУРА",
    },
    {
      no: "03",
      title: "Час спокою",
      desc: "Після замішування тісто «відпочиває» протягом двох годин у прохолодному місці. Це дозволяє клейковині стабілізуватися для ідеальної форми.",
      meta: "ВИТРИМКА",
    },
    {
      no: "04",
      title: "Бронзова форма",
      desc: "Ми нарізаємо пасту через справжні бронзові матриці. Вони роблять поверхню пористою, щоб соус тримався на кожному шматочку.",
      meta: "ТЕКСТУРА",
    },
  ];

  return (
    <section id="process" className="relative overflow-hidden bg-surface py-[var(--space-act)]">
      <span className="rp-watermark pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] select-none">
        CRAFT
      </span>
      
      <div className="mx-auto relative z-10 max-w-[88rem] px-4 lg:px-10">
        <span className="rp-actno mb-5 block">МИСТЕЦТВО</span>
        
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <Reveal>
              <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)] max-w-[16ch]">
                Секрети нашої мануфактури
              </h2>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div className="mt-10 hidden lg:block">
                <TiltCard>
                  <div 
                    className="overflow-hidden aspect-[4/5] bg-background/10" 
                    style={{ borderRadius: "var(--radius-surface)" }}
                  >
                    <img
                      src="https://images.pexels.com/photos/19300595/pexels-photo-19300595.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
                      alt="Процес виготовлення пасти вручну"
                      className="h-full w-full object-cover transition-transform duration-1000 hover:scale-[1.04]"
                      loading="lazy"
                    />
                  </div>
                </TiltCard>
              </div>
            </Reveal>
          </div>

          <div className="divide-y divide-foreground/10 lg:mt-0">
            {steps.map((step, idx) => (
              <Reveal key={step.no} delay={idx * 0.1}>
                <div className="grid gap-4 py-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,7fr)_minmax(0,3.5fr)] lg:items-baseline">
                  <span className="font-display text-[clamp(2.6rem,5vw,4.5rem)] font-extrabold leading-none text-accent">
                    {step.no}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-semibold">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-base leading-relaxed text-muted">
                      {step.desc}
                    </p>
                  </div>
                  <span className="text-sm uppercase tracking-[0.2em] text-muted lg:text-right">
                    {step.meta}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mobile Media Frame */}
        <Reveal className="mt-8 lg:hidden">
          <div 
            className="overflow-hidden aspect-video" 
            style={{ borderRadius: "var(--radius-surface)" }}
          >
            <img
              src="https://images.pexels.com/photos/19300595/pexels-photo-19300595.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
              alt="Ручна робота"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}