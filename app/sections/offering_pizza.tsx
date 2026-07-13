"use client";
import { Reveal } from "@/components/mechanics";

/**
 * ACT II: The Offer (Wood-fired Pizza)
 * Asymmetric editorial list featuring wood-fired pizza selection.
 */
export function SectionOfferingPizza() {
  const items = [
    {
      name: "Маргарита",
      desc: "Томати Сан-Марцано, моцарела фьор-ді-лате, свіжий базилік та оливкова олія Extra Virgin.",
      price: "245 ₴",
      photo: "https://images.pexels.com/photos/36859903/pexels-photo-36859903.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
    },
    {
      name: "Дьявола",
      desc: "Пікантна салямі вентричина, перчик чилі, моцарела та томатний соус.",
      price: "310 ₴",
      photo: "https://images.pexels.com/photos/36859903/pexels-photo-36859903.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
    },
    {
      name: "Чотири сири",
      desc: "Поєднання горгонзоли, таледжіо, пармезану та моцарели на вершковій основі.",
      price: "340 ₴",
      photo: "https://images.pexels.com/photos/36859903/pexels-photo-36859903.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
    },
    {
      name: "Прошуто Фунгі",
      desc: "Шинка прошуто котто, печериці, моцарела та фірмовий томатний соус.",
      price: "325 ₴",
      photo: "https://images.pexels.com/photos/36859903/pexels-photo-36859903.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
    },
    {
      name: "Бурата та Песто",
      desc: "Ціла вершкова бурата, кедрові горішки, соус песто та в’ялені томати.",
      price: "380 ₴",
      photo: "https://images.pexels.com/photos/36859903/pexels-photo-36859903.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
    },
    {
      name: "Кватро Стаджоні",
      desc: "Шинка, артишоки, гриби, оливки та ферментований томатний соус.",
      price: "335 ₴",
      photo: "https://images.pexels.com/photos/36859903/pexels-photo-36859903.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
    }
  ];

  return (
    <section id="offering_pizza" className="relative overflow-hidden bg-surface py-[var(--space-act)]">
      <span aria-hidden className="rp-watermark top-10 text-foreground">ПІЦА</span>
      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          {/* sticky act intro */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h2 className="font-display font-bold leading-[0.9] text-[clamp(2.6rem,6vw,5.5rem)]">
                Піца на дровах
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
                Ми готуємо піцу за класичними канонами: ферментоване тісто, соковиті томати Сан-Марцано та ніжна моцарела, обпалені живим вогнем у нашій італійській печі.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 overflow-hidden" style={{ borderRadius: "var(--radius-surface)" }}>
                <img 
                  src="https://images.pexels.com/photos/8916081/pexels-photo-8916081.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
                  alt="Дров'яна піч Pasta Famiglia" 
                  loading="lazy" 
                  className="rp-graded rp-grain aspect-[4/3] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
                />
              </div>
            </Reveal>
          </div>

          {/* editorial list */}
          <div className="divide-y divide-foreground/10">
            {items.map((item, index) => (
              <Reveal key={index}>
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