"use client";
import { Reveal } from "@/components/mechanics";

export function SectionMenuPasta() {
  const pastaItems = [
    {
      name: "Карбонара Класична",
      description: "Традиційний рецепт: гуанчале, жовтки фермерських яєць, пармезан та свіжозмелений чорний перець.",
      price: "285 ₴",
      photo: "https://images.pexels.com/photos/6287450/pexels-photo-6287450.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    },
    {
      name: "Тальятеле з трюфелем",
      description: "Домашня паста у вершковому соусі з додаванням пасти з чорного трюфеля та свіжих печериць.",
      price: "420 ₴",
      photo: "https://images.pexels.com/photos/6287450/pexels-photo-6287450.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    },
    {
      name: "Папарделле з рагу",
      description: "Широка паста з ніжною телятиною, що тушкувалася понад 6 годин у томатному соусі з травами.",
      price: "310 ₴",
      photo: "https://images.pexels.com/photos/6287450/pexels-photo-6287450.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    },
    {
      name: "Лазанья Болоньєзе",
      description: "Багатошарова паста з м'ясним рагу, соусом бешамель та скоринкою із запеченої моцарели.",
      price: "295 ₴",
      photo: "https://images.pexels.com/photos/6287450/pexels-photo-6287450.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    },
    {
      name: "Тальоліні з креветками",
      description: "Тонка паста з тигровими креветками, помідорами чері та соусом на основі білого вина.",
      price: "365 ₴",
      photo: "https://images.pexels.com/photos/6287450/pexels-photo-6287450.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    },
  ];

  return (
    <section id="menu_pasta" className="relative overflow-hidden bg-background py-[var(--space-act)]">
      <span aria-hidden className="rp-watermark top-10 text-foreground pointer-events-none opacity-[0.03] lg:opacity-[0.05]">
        PASTA
      </span>
      
      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          {/* sticky act intro */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h2 className="font-display font-bold italic leading-[0.9] text-[clamp(2.6rem,6vw,5.5rem)]">
                Домашня Паста
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
                Ми готуємо пасту власноруч щоранку, використовуючи італійське борошно Semola та свіжі фермерські яйця. Смак, що передається поколіннями.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 overflow-hidden" style={{ borderRadius: "var(--radius-surface)" }}>
                <img 
                  src="https://images.pexels.com/photos/6287450/pexels-photo-6287450.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
                  alt="Процес приготування свіжої пасти" 
                  loading="lazy" 
                  className="rp-graded aspect-[4/3] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
                />
              </div>
            </Reveal>
          </div>

          {/* editorial list */}
          <div className="divide-y divide-foreground/10">
            {pastaItems.map((item, idx) => (
              <Reveal key={idx} delay={0.1 * idx}>
                <div className="group flex items-center justify-between gap-5 py-6 lg:py-8">
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