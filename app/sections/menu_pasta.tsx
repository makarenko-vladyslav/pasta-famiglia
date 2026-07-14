"use client";
import { Reveal } from "@/components/mechanics";

export function SectionMenuPasta() {
  const pastaItems = [
    {
      name: "Карбонара",
      desc: "Автентичний рецепт: гуанчале, жовтки, сир пекоріно романо та чорний перець.",
      price: "320 ₴",
      photo: "https://images.pexels.com/photos/37322866/pexels-photo-37322866.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400"
    },
    {
      name: "Папарделле з грибами",
      desc: "Широка паста у вершковому соусі з лісовими грибами, часником та свіжим чебрецем.",
      price: "380 ₴",
      photo: "https://images.pexels.com/photos/29021745/pexels-photo-29021745.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400"
    },
    {
      name: "Лазанья Болоньєзе",
      desc: "Класичні шари пасти, м'ясне рагу, соус бешамель та пармезан. Запечена до скоринки.",
      price: "410 ₴",
      photo: "https://images.pexels.com/photos/29021745/pexels-photo-29021745.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400"
    },
    {
      name: "Тальятелле з креветками",
      desc: "Тигрові креветки, томати черрі, біле вино та домашній соус песто.",
      price: "450 ₴",
      photo: "https://images.pexels.com/photos/37322866/pexels-photo-37322866.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400"
    }
  ];

  return (
    <section id="menu_pasta" className="relative overflow-hidden bg-surface py-[var(--space-act)]">
      <span aria-hidden className="rp-watermark top-10 text-foreground pointer-events-none select-none opacity-[0.03] lg:opacity-[0.05]">
        ПАСТА
      </span>
      
      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          {/* sticky act intro */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h2 className="font-display font-bold text-[clamp(2.6rem,6vw,5.5rem)]">
                Домашня паста
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
                Кожна стрічка пасти створюється вручну з італійського борошна Semola та свіжих фермерських яєць за рецептами нашої родини.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 overflow-hidden" style={{ borderRadius: "var(--radius-surface)" }}>
                <img 
                  src="https://images.pexels.com/photos/29021745/pexels-photo-29021745.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
                  alt="Процес приготування свіжої пасти" 
                  loading="lazy" 
                  className="rp-graded aspect-[4/3] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
                />
              </div>
            </Reveal>
          </div>

          {/* editorial list */}
          <div className="divide-y divide-foreground/10 border-t border-foreground/10 lg:border-t-0">
            {pastaItems.map((item, i) => (
              <Reveal key={i} delay={0.05 * i}>
                <div className="group flex items-center justify-between gap-5 py-5 lg:py-8">
                  <div className="h-16 w-16 shrink-0 overflow-hidden lg:h-24 lg:w-24" style={{ borderRadius: "var(--radius-control)" }}>
                    <img 
                      src={item.photo} 
                      alt={item.name} 
                      loading="lazy" 
                      className="rp-graded h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.06]" 
                    />
                  </div>
                  
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-[clamp(1.25rem,2.2vw,1.9rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                      {item.name}
                    </h3>
                    <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                      {item.desc}
                    </p>
                  </div>
                  
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