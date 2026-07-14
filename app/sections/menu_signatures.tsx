"use client";
import { Reveal } from "@/components/mechanics";

/**
 * SECTION: ACT II - Menu Signatures
 * Editorial list of handcrafted selection with sticky visual context.
 * Features ink-on-paper style typography and premium image reveals.
 */
export function SectionMenuSignatures() {
  const menuItems = [
    {
      name: "Карбонара з гуанчале",
      desc: "Традиційна римська рецептура з жовтками, витриманим пекоріно та хрустким гуанчале.",
      price: "280 ₴",
      photo: "https://images.pexels.com/photos/36430040/pexels-photo-36430040.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
    },
    {
      name: "Піца Маргарита D.O.P.",
      desc: "Томати San Marzano, моцарела di Bufala, свіжий базилік та оливкова олія першого віджиму.",
      price: "245 ₴",
      photo: "https://images.pexels.com/photos/36430040/pexels-photo-36430040.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
    },
    {
      name: "Тальятеле з грибами",
      desc: "Домашня паста у вершковому соусі з білими грибами та трюфельною олією.",
      price: "310 ₴",
      photo: "https://images.pexels.com/photos/36430040/pexels-photo-36430040.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
    },
    {
      name: "Піца Чотири Сири",
      desc: "Поєднання горгонзоли, таледжіо, пармезану та моцарели на тонкому хрусткому тісті.",
      price: "295 ₴",
      photo: "https://images.pexels.com/photos/36430040/pexels-photo-36430040.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
    },
    {
      name: "Равіолі з рикотою",
      desc: "Ніжна начинка у тонкому тісті власного виробництва, подається з шавлієвим маслом.",
      price: "260 ₴",
      photo: "https://images.pexels.com/photos/36430040/pexels-photo-36430040.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
    }
  ];

  return (
    <section id="menu_signatures" className="relative overflow-hidden bg-background py-[var(--space-act)]">
      {/* Decorative watermark */}
      <span aria-hidden className="rp-watermark top-10 text-foreground opacity-5 lg:opacity-10 select-none">
        МЕНЮ
      </span>

      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          {/* Sticky Intro Sidebar */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h2 className="font-display font-bold text-[clamp(2.6rem,6vw,5.5rem)]">
                Фірмові страви
              </h2>
            </Reveal>
            
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
                Кожна страва — це поєднання італійських традицій та відбірних локальних продуктів. Створюємо смак, що залишається у пам’яті.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 relative overflow-hidden" style={{ borderRadius: "var(--radius-surface)" }}>
                <img 
                  src="https://images.pexels.com/photos/36430040/pexels-photo-36430040.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
                  alt="Фірмова подача Pasta Famiglia" 
                  loading="lazy" 
                  className="rp-graded aspect-[4/3] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
                />
                {/* Specific Spec Intent: Mono Label */}
                <div className="absolute top-4 right-4 bg-background/90 px-3 py-1.5 backdrop-blur-sm" style={{ borderRadius: "var(--radius-control)" }}>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-foreground">
                    Certified Fresh
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Editorial List */}
          <div className="divide-y divide-foreground/10">
            {menuItems.map((item, idx) => (
              <Reveal key={idx}>
                <div className="group flex items-center justify-between gap-5 py-5 lg:py-8">
                  {/* Thumbnail */}
                  <div className="h-16 w-16 shrink-0 overflow-hidden lg:h-24 lg:w-24" style={{ borderRadius: "var(--radius-control)" }}>
                    <img 
                      src={item.photo} 
                      alt={item.name} 
                      loading="lazy" 
                      className="rp-graded h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.06]" 
                    />
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-[clamp(1.25rem,2.2vw,1.9rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                      {item.name}
                    </h3>
                    <p className="mt-1 max-w-md text-sm leading-relaxed text-muted line-clamp-2 md:line-clamp-none">
                      {item.desc}
                    </p>
                  </div>

                  {/* Price */}
                  <span className="shrink-0 pl-2 font-display text-lg lg:text-xl font-semibold text-accent">
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