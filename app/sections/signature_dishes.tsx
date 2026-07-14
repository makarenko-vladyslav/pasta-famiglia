"use client";
import { Reveal, HorizontalPan } from "@/components/mechanics";

/**
 * SECTION: signature_dishes
 * ROLE: ACT II: The Offer. Showcasing the 'Fresh Pasta' USP.
 * LAYOUT: Horizontal scrolling editorial strip of signature dishes.
 */
export function SectionSignatureDishes() {
  const dishes = [
    {
      name: "Карбонара з гуанчале",
      photo: "https://images.pexels.com/photos/5908198/pexels-photo-5908198.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    },
    {
      name: "Тальятеле з білими грибами",
      photo: "https://images.pexels.com/photos/5082875/pexels-photo-5082875.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    },
    {
      name: "Равіолі з рікотою та шпинатом",
      photo: "https://images.pexels.com/photos/8311823/pexels-photo-8311823.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    },
    {
      name: "Папарделле з рагу з качки",
      photo: "https://images.pexels.com/photos/5908198/pexels-photo-5908198.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    },
    {
      name: "Спагеті з морепродуктами",
      photo: "https://images.pexels.com/photos/5082875/pexels-photo-5082875.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    },
    {
      name: "Фузілі під соусом песто",
      photo: "https://images.pexels.com/photos/8311823/pexels-photo-8311823.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    },
    {
      name: "Лазанья за домашнім рецептом",
      photo: "https://images.pexels.com/photos/5908198/pexels-photo-5908198.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    },
    {
      name: "Фетучіні з чорним трюфелем",
      photo: "https://images.pexels.com/photos/5082875/pexels-photo-5082875.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    },
    {
      name: "Тортеліні з ніжною телятиною",
      photo: "https://images.pexels.com/photos/8311823/pexels-photo-8311823.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    },
  ];

  return (
    <section id="signature_dishes" className="relative overflow-hidden bg-surface">
      {/* Header Slot */}
      <div className="mx-auto max-w-[92rem] px-4 pt-[var(--space-act)] lg:px-10">
        <span className="rp-actno mb-5 block text-sm uppercase tracking-[0.3em] text-muted">
          Авторські страви
        </span>
        <Reveal>
          <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)] max-w-[16ch]">
            Фірмова паста ручної роботи
          </h2>
        </Reveal>
      </div>

      {/* Scrolling Strip */}
      <HorizontalPan heightVh={220}>
        <div className="flex gap-6 px-4 lg:px-10">
          {dishes.map((dish, idx) => (
            <figure 
              key={idx} 
              className="rp-pan-item relative w-[75vw] shrink-0 overflow-hidden md:w-[45vw] lg:w-[32vw]"
            >
              <div className="overflow-hidden bg-surface" style={{ borderRadius: "var(--radius-surface)" }}>
                <img
                  src={dish.photo}
                  alt={dish.name}
                  className="rp-graded aspect-[4/5] w-full object-cover transition-transform duration-1000 ease-[var(--ease-out-cubic)] hover:scale-[1.04]"
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-3 flex items-baseline justify-between text-sm text-muted">
                <span className="max-w-[80%]">{dish.name}</span>
                <span className="font-display text-base">0{idx + 1}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </HorizontalPan>
    </section>
  );
}