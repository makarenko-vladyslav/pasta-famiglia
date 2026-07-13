"use client";
import { Reveal } from "@/components/mechanics";

/**
 * SECTION: ACT II — Offering Pasta
 * A premium editorial list of handmade pasta items.
 * Features a sticky left-column intro and a detailed list with hover states.
 */
export function SectionOfferingPasta() {
  const pastaItems = [
    {
      name: "Карбонара",
      desc: "Свіжа паста, гуанчале, жовток, пекоріно романо та чорний перець",
      price: "285 ₴",
      photo: "https://images.pexels.com/photos/5953496/pexels-photo-5953496.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
    },
    {
      name: "Тальятеле з білими грибами",
      desc: "Лісові білі гриби, вершковий соус, трюфельна олія та пармезан",
      price: "315 ₴",
      photo: "https://images.pexels.com/photos/5953496/pexels-photo-5953496.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
    },
    {
      name: "Папарделе з рваною телятиною",
      desc: "Повільно тушкована яловичина, томати San Marzano та розмарин",
      price: "345 ₴",
      photo: "https://images.pexels.com/photos/5953496/pexels-photo-5953496.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
    },
    {
      name: "Равіолі з рікотою та шпинатом",
      desc: "Фермерська рікота, шпинат, шавлія та вершкове масло",
      price: "275 ₴",
      photo: "https://images.pexels.com/photos/5953496/pexels-photo-5953496.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
    },
    {
      name: "Лазанья Болоньєзе",
      desc: "Шари свіжого тіста, рагу з телятини, бешамель та скоринка з сиру",
      price: "310 ₴",
      photo: "https://images.pexels.com/photos/5953496/pexels-photo-5953496.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
    }
  ];

  return (
    <section id="offering_pasta" className="relative overflow-hidden bg-background py-[var(--space-act)]">
      <span aria-hidden className="rp-watermark top-10 text-foreground opacity-[0.03] lg:opacity-[0.05]">
        ПАСТА
      </span>
      
      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          {/* sticky act intro — the empty half is DELIBERATE */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h2 className="font-display font-bold leading-[0.9] text-[clamp(2.6rem,6vw,5.5rem)]">
                Свіжа Паста
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
                Кожна порція створюється вручну в нашій майстерні щоранку. Ми використовуємо лише борошно твердих сортів та фермерські яйця для ідеальної текстури.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 overflow-hidden" style={{ borderRadius: "var(--radius-surface)" }}>
                <img 
                  src="https://images.pexels.com/photos/5953496/pexels-photo-5953496.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
                  alt="Процес приготування свіжої пасти" 
                  loading="lazy" 
                  className="rp-graded aspect-[4/3] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
                />
              </div>
            </Reveal>
          </div>

          {/* editorial list: display names + prices, hairline dividers */}
          <div className="divide-y divide-foreground/10 border-t border-foreground/10 lg:border-t-0">
            {pastaItems.map((item, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="group flex items-center justify-between gap-5 py-6 transition-colors duration-300 hover:bg-surface/30 lg:px-4">
                  <div className="h-16 w-16 shrink-0 overflow-hidden lg:h-20 lg:w-20" style={{ borderRadius: "var(--radius-control)" }}>
                    <img 
                      src={item.photo} 
                      alt={item.name} 
                      loading="lazy" 
                      className="rp-graded h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.1]" 
                    />
                  </div>
                  
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-[clamp(1.25rem,2.2vw,1.9rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                      {item.name}
                    </h3>
                    <p className="mt-1 max-w-md text-sm leading-relaxed text-muted lg:text-base">
                      {item.desc}
                    </p>
                  </div>

                  <span className="shrink-0 pl-2 font-display text-lg font-semibold text-accent lg:text-xl">
                    {item.price}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}