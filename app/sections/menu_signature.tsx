"use client";
import { Reveal } from "@/components/mechanics";

export function SectionMenuSignature() {
  const menuItems = [
    {
      name: "Тальятеле з білими грибами",
      price: "340 ₴",
      description: "Домашня паста, вершковий соус, лісові білими гриби, трюфельна олія та пармезан.",
      photo: "https://images.pexels.com/photos/7870294/pexels-photo-7870294.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
    },
    {
      name: "Карбонара за римським рецептом",
      price: "295 ₴",
      description: "Гуанчале, жовтки фермерських яєць, витриманий сир Пекоріно Романо та чорний перець.",
      photo: "https://images.pexels.com/photos/7870294/pexels-photo-7870294.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
    },
    {
      name: "Папарделе з рагу з качки",
      price: "380 ₴",
      description: "Широка паста, томлене качине м'ясо у червоному вині зі свіжим розмарином.",
      photo: "https://images.pexels.com/photos/7870294/pexels-photo-7870294.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
    },
    {
      name: "Спагеті з морепродуктами",
      price: "450 ₴",
      description: "Креветки, мідії, кальмари, соус на основі білого вина, часнику та томатів чері.",
      photo: "https://images.pexels.com/photos/7870294/pexels-photo-7870294.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
    },
    {
      name: "Равіолі з рикотою та шпинатом",
      price: "270 ₴",
      description: "Тонке тісто, ніжна рикота, молодий шпинат, соус із шавлії та вершкового масла.",
      photo: "https://images.pexels.com/photos/7870294/pexels-photo-7870294.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
    },
    {
      name: "Лазанья Болоньєзе",
      price: "310 ₴",
      description: "Класичні шари пасти, насичений м'ясний соус Болоньєзе, бешамель та пармезан.",
      photo: "https://images.pexels.com/photos/7870294/pexels-photo-7870294.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
    }
  ];

  return (
    <section id="menu_signature" className="relative overflow-hidden bg-surface py-[var(--space-act)]">
      <span aria-hidden className="rp-watermark top-10 text-foreground opacity-5">ПАСТА</span>
      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          {/* sticky act intro */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h2 className="font-display font-bold text-[clamp(2.6rem,6vw,5.5rem)]">
                Авторська Паста
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
                Кожна стрічка нашої пасти створюється вручну щоранку. Ми використовуємо лише італійське борошно твердих сортів та свіжі жовтки для ідеальної текстури al dente.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 overflow-hidden" style={{ borderRadius: "var(--radius-surface)" }}>
                <img 
                  src="https://images.pexels.com/photos/7870294/pexels-photo-7870294.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
                  alt="Процес приготування свіжої пасти Pasta Famiglia" 
                  loading="lazy" 
                  className="rp-graded aspect-[4/3] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
                />
              </div>
            </Reveal>
          </div>

          {/* editorial list */}
          <div className="divide-y divide-foreground/10">
            {menuItems.map((item, index) => (
              <Reveal key={index} delay={index * 0.05}>
                <div className="group flex items-center justify-between gap-5 py-5 transition-colors duration-300 hover:bg-surface/30">
                  <div className="h-16 w-16 shrink-0 overflow-hidden lg:h-20 lg:w-20" style={{ borderRadius: "var(--radius-control)" }}>
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
                      {item.description}
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