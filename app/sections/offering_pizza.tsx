"use client";
import { Reveal } from "@/components/mechanics";

/**
 * SectionOfferingPizza - ACT II: The Offer.
 * Wood-fired pizza selection layout following the editorial list skeleton.
 * 
 * DESIGN LAW:
 * - H2: Concrete facts only, no virtue adjectives.
 * - Structure: Sticky act intro (left) + Editorial list (right).
 * - Colors: bg-background, text-foreground, text-muted, text-accent.
 */
export function SectionOfferingPizza() {
  const PIZZA_DATA = [
    {
      id: "margarita",
      name: "Маргарита",
      desc: "Томати Сан Марцано, моцарела фьор-ді-латте, базилік та оливкова олія першого віджиму.",
      price: "195 ₴",
      photo: "https://images.pexels.com/photos/6248853/pexels-photo-6248853.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
    },
    {
      id: "diavola",
      name: "Діавола",
      desc: "Гостра салямі вентричіна, томатна основа, моцарела та свіжий перець чилі.",
      price: "245 ₴",
      photo: "https://images.pexels.com/photos/6248853/pexels-photo-6248853.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
    },
    {
      id: "four-cheese",
      name: "Чотири сири",
      desc: "Вершкова основа, моцарела, горгонзола дольче, пармезан та швейцарський ементаль.",
      price: "285 ₴",
      photo: "https://images.pexels.com/photos/6248853/pexels-photo-6248853.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
    },
    {
      id: "prosciutto",
      name: "Прошуто Котто",
      desc: "Італійська шинка, печериці, томатний соус, моцарела та листя свіжого шпинату.",
      price: "265 ₴",
      photo: "https://images.pexels.com/photos/6248853/pexels-photo-6248853.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
    }
  ];

  return (
    <section id="offering_pizza" className="relative overflow-hidden bg-background py-[var(--space-act)]">
      {/* Giant watermark behind content - visible lg+ */}
      <span aria-hidden className="rp-watermark top-10 text-foreground pointer-events-none select-none">
        PIZZA
      </span>

      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          
          {/* Sticky Act Intro: Sells with facts and eyes */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h2 className="font-display font-bold text-[clamp(2.6rem,6vw,5.5rem)]">
                Піца з дров’яної печі
              </h2>
            </Reveal>
            
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
                Готуємо за правилами неаполітанської традиції: тісто визріває 48 годин, 
                а випікання триває 90 секунд при температурі 400°C на живому вогні.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 overflow-hidden" style={{ borderRadius: "var(--radius-surface)" }}>
                <img 
                  src="https://images.pexels.com/photos/6248853/pexels-photo-6248853.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
                  alt="Процес приготування піци у вогні" 
                  loading="lazy" 
                  className="rp-graded aspect-[4/3] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
                />
              </div>
            </Reveal>
          </div>

          {/* Editorial List: Display names + Prices, Hairline dividers */}
          <div className="divide-y divide-foreground/10 border-t border-foreground/10 lg:border-t-0">
            {PIZZA_DATA.map((item, idx) => (
              <Reveal key={item.id} delay={0.05 * idx}>
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