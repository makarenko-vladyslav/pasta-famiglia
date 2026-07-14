"use client";
import { Reveal, HorizontalPan } from "@/components/mechanics";

/**
 * SECTION: Signature Dishes (ACT II)
 * LAYOUT: HorizontalPan (Sideways-scrolling editorial strip)
 * ROLE: Showcases the premium menu offerings of Pasta Famiglia
 */
export function SectionSignatureDishes() {
  const items = [
    {
      id: "01",
      title: "Тальятеле з білими грибами",
      photo: "https://images.pexels.com/photos/5953526/pexels-photo-5953526.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    },
    {
      id: "02",
      title: "Класична Лазанья Болоньєзе",
      photo: "https://images.pexels.com/photos/5953526/pexels-photo-5953526.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    },
    {
      id: "03",
      title: "Равіолі з ніжним сиром Рікота",
      photo: "https://images.pexels.com/photos/5953526/pexels-photo-5953526.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    },
    {
      id: "04",
      title: "Паста Карбонара за римським рецептом",
      photo: "https://images.pexels.com/photos/5953526/pexels-photo-5953526.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    },
  ];

  return (
    <section id="signature_dishes" className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-[92rem] px-4 pt-[var(--space-act)] lg:px-10">
        <span className="rp-actno mb-5 text-sm uppercase tracking-[0.3em] text-muted block">
          Авторські страви
        </span>
        <Reveal delay={0.1}>
          <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)] max-w-[16ch]">
            Мистецтво італійського смаку в деталях
          </h2>
        </Reveal>
      </div>

      <HorizontalPan heightVh={220}>
        <div className="flex gap-6 lg:gap-10 pr-10">
          {items.map((item) => (
            <figure 
              key={item.id} 
              className="rp-pan-item relative shrink-0 overflow-hidden w-[75vw] md:w-[45vw] lg:w-[32vw]"
            >
              <div className="overflow-hidden" style={{ borderRadius: "var(--radius-surface)" }}>
                <img 
                  src={item.photo} 
                  alt={item.title} 
                  className="rp-graded aspect-[4/5] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
                  loading="lazy" 
                />
              </div>
              <figcaption className="mt-4 flex items-baseline justify-between text-sm text-muted">
                <span className="font-body text-base lg:text-lg text-foreground">{item.title}</span>
                <span className="font-display text-xl lg:text-2xl ml-4 opacity-40">{item.id}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </HorizontalPan>
    </section>
  );
}