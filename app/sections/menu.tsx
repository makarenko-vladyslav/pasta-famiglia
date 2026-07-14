"use client";
import { Reveal } from "@/components/mechanics";

export function SectionMenu() {
  const menuItems = [
    {
      name: "Карбонара за римським рецептом",
      description: "Класична паста з гуанчале, жовтками та пармезаном без додавання вершків.",
      price: "285 ₴",
      photo: "https://images.pexels.com/photos/5947516/pexels-photo-5947516.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
    },
    {
      name: "Піца Маргарита D.O.P.",
      description: "Томати Сан-Марцано, моцарела буфало та свіжий базилік на хрусткому тісті.",
      price: "310 ₴",
      photo: "https://images.pexels.com/photos/5947516/pexels-photo-5947516.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
    },
    {
      name: "Ризото з морепродуктами",
      description: "Рис арборіо з додаванням креветок, кальмарів та мідій у білому вині.",
      price: "420 ₴",
      photo: "https://images.pexels.com/photos/5947516/pexels-photo-5947516.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
    },
    {
      name: "Лазанья Болоньєзе",
      description: "Домашня багатошарова паста з насиченим м’ясним рагу та соусом бешамель.",
      price: "325 ₴",
      photo: "https://images.pexels.com/photos/5947516/pexels-photo-5947516.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
    },
    {
      name: "Салат Капрезе",
      description: "Стиглі томати, моцарела буфало та соус песто власного приготування.",
      price: "240 ₴",
      photo: "https://images.pexels.com/photos/5947516/pexels-photo-5947516.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
    },
    {
      name: "Тальятеле з білими грибами",
      description: "Яєчна паста з ароматними лісовими грибами та вершковим соусом.",
      price: "350 ₴",
      photo: "https://images.pexels.com/photos/5947516/pexels-photo-5947516.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
    },
    {
      name: "Піца Кватро Формаджі",
      description: "Поєднання моцарели, горгонзоли, таледжіо та витриманого пармезану.",
      price: "380 ₴",
      photo: "https://images.pexels.com/photos/5947516/pexels-photo-5947516.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
    },
    {
      name: "Тірамісу Класико",
      description: "Традиційний десерт на основі маскарпоне з кавою та печивом савоярді.",
      price: "195 ₴",
      photo: "https://images.pexels.com/photos/5947516/pexels-photo-5947516.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
    }
  ];

  return (
    <section id="menu" className="relative overflow-hidden bg-background py-[var(--space-act)]">
      <span aria-hidden className="rp-watermark top-10 text-foreground">МЕНЮ</span>
      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          {/* sticky act intro */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h2 className="font-display font-bold text-[clamp(2.6rem,6vw,5.5rem)]">
                Авторські страви
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
                Відкрийте для себе мистецтво італійської кухні. Кожна страва — це поєднання сімейних рецептів та відбірної майстерності наших шеф-кухарів у серці Києва.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 overflow-hidden" style={{ borderRadius: "var(--radius-surface)" }}>
                <img 
                  src="https://images.pexels.com/photos/5947516/pexels-photo-5947516.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
                  alt="Фірмова страва ресторану Pasta Famiglia" 
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
                <div className="group flex items-center justify-between gap-5 py-5">
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