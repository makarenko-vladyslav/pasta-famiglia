"use client";
import { Reveal } from "@/components/mechanics";

/**
 * SectionMenuPasta
 * ACT II: Signature Items. Editorial list of the core offering.
 * Features a sticky intro and an ink-on-paper style item list.
 */
export function SectionMenuPasta() {
  const pastaItems = [
    {
      name: "Тальятеле з білими грибами",
      description: "Ароматні лісові гриби, вершковий соус, трюфельна олія та витриманий пармезан.",
      price: "320 ₴",
      photo: "https://images.pexels.com/photos/20467529/pexels-photo-20467529.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800"
    },
    {
      name: "Класична Карбонара",
      description: "Автентичний рецепт: в’ялена свиняча щока гуанчале, жовтки та сир пекоріно романо.",
      price: "285 ₴",
      photo: "https://images.pexels.com/photos/20467529/pexels-photo-20467529.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800"
    },
    {
      name: "Равіолі з рікоттою",
      description: "Ніжний сир, молодий шпинат та соус на основі шалфею і фермерського масла.",
      price: "295 ₴",
      photo: "https://images.pexels.com/photos/20467529/pexels-photo-20467529.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800"
    },
    {
      name: "Паппарделле з рагу",
      description: "Широка паста з насиченим м'ясним рагу, що томилося 8 годин у червоному вині.",
      price: "340 ₴",
      photo: "https://images.pexels.com/photos/20467529/pexels-photo-20467529.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800"
    },
    {
      name: "Спагеті Фрутті ді Маре",
      description: "Тигрові креветки, мідії та кальмари у легкому соусі з білого вина та томатів чері.",
      price: "460 ₴",
      photo: "https://images.pexels.com/photos/20467529/pexels-photo-20467529.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800"
    }
  ];

  return (
    <section id="menu_pasta" className="relative overflow-hidden bg-surface py-[var(--space-act)]">
      {/* Decorative background watermark - hidden on mobile */}
      <span 
        aria-hidden 
        className="rp-watermark pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 select-none text-foreground/5 opacity-10 lg:block hidden"
      >
        PASTA
      </span>

      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          
          {/* Sticky act intro */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h2 className="font-display font-bold text-[clamp(2.6rem,6vw,5.5rem)]">
                Домашня паста
              </h2>
            </Reveal>
            
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
                Ми готуємо нашу пасту вручну кожного ранку, використовуючи лише італійське борошно твердих сортів (Semola) та фермерські яйця для досягнення ідеальної текстури al dente.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 overflow-hidden" style={{ borderRadius: "var(--radius-surface)" }}>
                <img 
                  src="https://images.pexels.com/photos/20467529/pexels-photo-20467529.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
                  alt="Процес приготування свіжої пасти" 
                  loading="lazy" 
                  className="rp-graded aspect-[4/3] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
                />
              </div>
            </Reveal>
          </div>

          {/* Editorial list: items with dividers */}
          <div className="divide-y divide-foreground/10 border-t border-foreground/10 lg:border-t-0">
            {pastaItems.map((item, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="group flex items-center justify-between gap-5 py-6 lg:py-8">
                  {/* Item thumbnail */}
                  <div 
                    className="h-16 w-16 shrink-0 overflow-hidden lg:h-24 lg:w-24" 
                    style={{ borderRadius: "var(--radius-control)" }}
                  >
                    <img 
                      src={item.photo} 
                      alt={item.name} 
                      loading="lazy" 
                      className="rp-graded h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.1]" 
                    />
                  </div>

                  {/* Text content */}
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-[clamp(1.25rem,2.2vw,1.9rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                      {item.name}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>

                  {/* Price column */}
                  <span className="shrink-0 pl-2 font-display text-lg font-semibold text-accent">
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